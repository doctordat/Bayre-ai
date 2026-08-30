import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (value: unknown) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] || char));

function siteBase() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return 'https://bayre-ai-1kcx-bice.vercel.app';
}

export async function POST(request: NextRequest) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const email = String(body?.email || '').trim().toLowerCase();
  const trip = body?.trip || {};
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const route = Array.isArray(trip.route) ? trip.route.slice(0, 8) : [];
  if (!route.length || !trip.days || !trip.arrival) {
    return NextResponse.json({ error: 'Trip details are incomplete.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ITINERARY_EMAIL_FROM || 'VietnamGo <onboarding@resend.dev>';
  if (!apiKey) {
    console.info('[email-itinerary-not-configured]', JSON.stringify({ arrival: String(trip.arrival), days: String(trip.days), travelers: Number(trip.travelers || 0), at: new Date().toISOString() }));
    return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 });
  }

  const base = siteBase();
  const plannerParams = new URLSearchParams({
    origin: String(trip.origin || ''),
    arrival: String(trip.arrival || 'Vietnam'),
    days: String(trip.days || '10'),
    travelers: String(trip.travelers || 2),
    budget: String(trip.budget || 'mid'),
    interest: String(trip.interest || 'mix'),
  });
  if (trip.depart) plannerParams.set('depart', String(trip.depart));
  if (trip.returnDate) plannerParams.set('return', String(trip.returnDate));
  const shareUrl = `${base}/en/planner?${plannerParams.toString()}`;

  const routeHtml = route.map((stop: any, index: number) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e7ece8;vertical-align:top;color:#77837b;font-size:12px;font-weight:700;">${String(index + 1).padStart(2, '0')}</td>
      <td style="padding:14px 0;border-bottom:1px solid #e7ece8;">
        <div style="font-size:18px;font-weight:800;color:#173f32;">${esc(stop.city)}</div>
        <div style="font-size:13px;color:#66736b;margin-top:3px;">${esc(stop.nights)} night${Number(stop.nights) === 1 ? '' : 's'}${Array.isArray(stop.ideas) && stop.ideas.length ? ` · ${stop.ideas.slice(0, 3).map(esc).join(' · ')}` : ''}</div>
      </td>
    </tr>`).join('');

  const html = `<!doctype html><html><body style="margin:0;background:#f6f8f5;font-family:Arial,sans-serif;color:#17211b;"><div style="max-width:680px;margin:0 auto;padding:36px 18px;"><div style="background:#fff;border-radius:24px;padding:34px;border:1px solid #e0e7e2;"><div style="font-size:22px;font-weight:900;color:#173f32;">VietnamGo<span style="color:#ee7b4d;">.</span></div><p style="font-size:12px;letter-spacing:.12em;font-weight:800;color:#1e8c57;margin-top:32px;">YOUR OPTIMIZED VIETNAM ITINERARY</p><h1 style="font-size:38px;line-height:1.05;margin:10px 0 14px;color:#173f32;">${esc(trip.origin || 'Your city')} → ${esc(trip.arrival)}</h1><p style="font-size:16px;line-height:1.6;color:#5f6e66;">${esc(trip.days)} days · ${esc(trip.travelers)} traveler${Number(trip.travelers) === 1 ? '' : 's'} · ${esc(trip.tier || trip.budget)} · planning estimate ≈ US$${Number(trip.estimate || 0).toLocaleString('en-US')}</p><table width="100%" cellspacing="0" cellpadding="0" style="margin-top:22px;">${routeHtml}</table><div style="margin-top:26px;background:#edf4ef;border-radius:16px;padding:18px;"><div style="font-size:12px;font-weight:800;color:#66736b;">PLANNING NOTE</div><p style="margin:8px 0 0;line-height:1.55;color:#53645b;font-size:14px;">This estimate is for trip planning only. Live flight, hotel and activity prices come from booking partners when you check availability.</p></div><a href="${esc(shareUrl)}" style="display:inline-block;margin-top:26px;background:#173f32;color:#fff;text-decoration:none;padding:14px 22px;border-radius:999px;font-weight:800;">Open my trip on VietnamGo →</a><p style="margin-top:30px;font-size:11px;line-height:1.5;color:#87928b;">You requested this single itinerary email. VietnamGo will not add you to a newsletter from this request.</p></div></div></body></html>`;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [email], subject: `Your ${trip.days}-day Vietnam itinerary — VietnamGo`, html }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text().catch(() => '');
    console.error('[email-itinerary-failed]', JSON.stringify({ status: resendResponse.status, detail: detail.slice(0, 300), at: new Date().toISOString() }));
    return NextResponse.json({ error: 'Email delivery failed. Please try again later.' }, { status: 502 });
  }

  console.info('[email-itinerary-sent]', JSON.stringify({ arrival: String(trip.arrival), days: String(trip.days), travelers: Number(trip.travelers || 0), at: new Date().toISOString() }));
  return NextResponse.json({ ok: true });
}
