export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const token = process.env.TRAVELPAYOUTS_TOKEN;
  if (!token) return res.status(500).json({ success: false, error: 'Missing server API token' });

  const { origin, destination, departure_at } = req.query;
  const iata = /^[A-Z]{3}$/;
  if (!iata.test(String(origin || '')) || !iata.test(String(destination || ''))) {
    return res.status(400).json({ success: false, error: 'Invalid IATA code' });
  }
  if (!/^\d{4}-\d{2}(-\d{2})?$/.test(String(departure_at || ''))) {
    return res.status(400).json({ success: false, error: 'Invalid departure date' });
  }

  const url = new URL('https://api.travelpayouts.com/aviasales/v3/prices_for_dates');
  url.searchParams.set('origin', origin);
  url.searchParams.set('destination', destination);
  url.searchParams.set('departure_at', departure_at);
  url.searchParams.set('one_way', 'true');
  url.searchParams.set('direct', 'false');
  url.searchParams.set('sorting', 'price');
  url.searchParams.set('currency', 'vnd');
  url.searchParams.set('limit', '20');
  url.searchParams.set('page', '1');

  try {
    const r = await fetch(url, {
      headers: {
        'X-Access-Token': token,
        'Accept': 'application/json'
      }
    });
    const payload = await r.json();
    if (!r.ok || !payload?.success) {
      return res.status(r.status || 502).json({ success: false, error: payload?.error || 'Upstream API error' });
    }

    const data = Array.isArray(payload.data) ? payload.data.map(x => ({
      origin: x.origin,
      destination: x.destination,
      origin_airport: x.origin_airport || x.origin,
      destination_airport: x.destination_airport || x.destination,
      price: x.price,
      airline: x.airline,
      flight_number: x.flight_number,
      departure_at: x.departure_at,
      return_at: x.return_at || null,
      transfers: x.transfers ?? x.number_of_changes ?? null,
      duration: x.duration ?? null,
      found_at: x.found_at || null,
      link: x.link || null
    })) : [];

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
    return res.status(200).json({
      success: true,
      source: 'Aviasales Data API',
      realtime: false,
      note: 'Recent cached fares, not realtime inventory.',
      data
    });
  } catch (err) {
    return res.status(502).json({ success: false, error: 'Failed to reach Aviasales Data API' });
  }
}
