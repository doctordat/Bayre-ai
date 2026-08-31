import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PageData = {
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  sections: { heading: string; text: string }[];
  cta: string;
  plannerDays?: string;
  bookingKey?: 'flights' | 'hotels' | 'experiences' | 'transfers' | 'esim' | 'other';
  bookingLabel?: string;
  decisionTitle?: string;
  decisionRows?: { label: string; detail: string; fit: string }[];
};

const pages: Record<string, PageData> = {
  hanoi: {
    title: 'Hanoi travel guide for first-time visitors',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Use Hanoi as your northern Vietnam base for street food, history, Old Quarter walks and easy access to Ha Long Bay.',
    image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Hanoi street scene in Vietnam',
    bullets: ['Stay near the Old Quarter for a first visit', 'Plan 2–3 nights before moving south', 'Pair Hanoi with an overnight Ha Long Bay cruise'],
    sections: [
      { heading: 'How many days do you need in Hanoi?', text: 'Two full days works for a focused first visit. Three nights gives you more room for coffee, food, museums and an easier first or last day around your flight.' },
      { heading: 'Where should first-time visitors stay?', text: 'The Old Quarter and the French Quarter are the simplest bases for walking, food and major sights. Pick quieter streets near Hoan Kiem Lake if you want easier nights.' },
      { heading: 'What should you book first?', text: 'Lock in your hotel once your dates are stable, then add a food tour or Ha Long Bay trip. Keep airport transfers flexible unless you land very late.' },
    ],
    cta: 'Build a trip with Hanoi',
    bookingKey: 'hotels', bookingLabel: 'Check Hanoi hotels',
  },
  'ho-chi-minh-city': {
    title: 'Ho Chi Minh City travel guide for first-time visitors',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Vietnam’s biggest city works well for food, nightlife, history and day trips to the Mekong Delta or Cu Chi.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Ho Chi Minh City skyline and streets',
    bullets: ['District 1 is the simplest first-time base', 'Plan 2–3 nights for the city itself', 'Use SGN for easy domestic connections'],
    sections: [
      { heading: 'Where should you stay in Ho Chi Minh City?', text: 'District 1 is easiest for a first trip because you can walk to many sights and have the widest choice of restaurants, bars and hotels.' },
      { heading: 'How long should you stay?', text: 'Two nights is enough for a fast city stop. Three nights is more comfortable if you want a Cu Chi or Mekong day trip without rushing.' },
      { heading: 'Best next stop', text: 'From Ho Chi Minh City, Phu Quoc is an easy beach finish while Da Nang is a convenient flight north for central Vietnam.' },
    ],
    cta: 'Build a trip with Ho Chi Minh City',
    bookingKey: 'hotels', bookingLabel: 'Check Ho Chi Minh City hotels',
  },
  'da-nang-hoi-an': {
    title: 'Da Nang & Hoi An travel guide',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Combine Da Nang’s airport and beaches with Hoi An’s heritage streets, food scene and slower pace.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Hoi An lantern streets in central Vietnam',
    bullets: ['Use Da Nang airport for central Vietnam', 'Split 3–5 nights between beach and heritage time', 'Add Marble Mountains or My Son as a day trip'],
    sections: [
      { heading: 'Da Nang or Hoi An: where should you sleep?', text: 'Choose Da Nang for beach hotels, nightlife and airport convenience. Choose Hoi An for atmosphere, old-town evenings and a slower rhythm.' },
      { heading: 'How many nights are enough?', text: 'Four nights is a strong first-time split. It gives you beach time, Hoi An evenings and room for one day trip without turning every day into transit.' },
      { heading: 'Best experiences to pre-book', text: 'Popular picks include food tours, My Son, cooking classes and Ba Na Hills. Book only the activities that shape your day; leave the rest flexible.' },
    ],
    cta: 'Build a central Vietnam route',
    bookingKey: 'experiences', bookingLabel: 'Check tours & activities',
  },
  'phu-quoc': {
    title: 'Phu Quoc travel guide for first-time visitors',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Phu Quoc is one of the easiest places to add a relaxed beach finish to a Vietnam itinerary.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Tropical beach in Phu Quoc Vietnam',
    bullets: ['Allow at least 3 nights if flying in', 'Choose your coast based on beach style and resort preference', 'Keep the island for the end of a multi-city trip'],
    sections: [
      { heading: 'How long should you stay in Phu Quoc?', text: 'Three nights is the practical minimum after flying in. Four or five nights works better if the island is your main rest stop.' },
      { heading: 'Who is Phu Quoc best for?', text: 'Couples, families and first-time visitors who want an easy beach finish usually get the most value from the island.' },
      { heading: 'What should you book first?', text: 'Book the hotel area first because it shapes the entire stay. Add transfers and island activities only after you know where you are sleeping.' },
    ],
    cta: 'Build a trip with Phu Quoc',
    bookingKey: 'hotels', bookingLabel: 'Check Phu Quoc hotels',
  },
  'vietnam-itinerary-7-days': {
    title: 'Vietnam itinerary: 7 days', eyebrow: 'ITINERARY',
    intro: 'One week is enough for a focused first trip if you avoid trying to cover the whole country.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85', imageAlt: 'Vietnam landscape',
    bullets: ['Choose 2–3 bases maximum', 'Fly one domestic sector if needed', 'Prioritize either north + central or south + beach'],
    sections: [
      { heading: 'Best first-time route', text: 'Hanoi, Da Nang and Hoi An is a balanced first-week route if you want food, history and coast without spending most of the trip in transit.' },
      { heading: 'Budget approach', text: 'Use the planner’s A/B/C budget tiers to decide where to spend: flights and hotels first, then activities and transfers.' },
    ], cta: 'Plan my 7-day Vietnam trip', plannerDays: '7', bookingKey: 'flights', bookingLabel: 'Check Vietnam flights'
  },
  'vietnam-itinerary-10-days': {
    title: 'Vietnam itinerary: 10 days', eyebrow: 'ITINERARY',
    intro: 'Ten days is a strong first-trip length for combining culture, food and one slower coastal stop.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1600&q=85', imageAlt: 'Central Vietnam travel scene',
    bullets: ['Use 3–4 bases', 'Give Hanoi or Ho Chi Minh City at least 2 nights', 'Keep one flexible day for weather or transport'],
    sections: [
      { heading: 'A balanced 10-day route', text: 'Hanoi, Ha Long Bay, Hoi An and Ho Chi Minh City gives first-time visitors a broad view of Vietnam while keeping the pace manageable.' },
      { heading: 'Where to spend more', text: 'A comfortable budget usually makes the biggest difference on hotels, domestic flights and one premium experience such as a cruise or food tour.' },
    ], cta: 'Plan my 10-day Vietnam trip', plannerDays: '10', bookingKey: 'flights', bookingLabel: 'Check Vietnam flights'
  },
  'vietnam-itinerary-14-days': {
    title: 'Vietnam itinerary: 14 days', eyebrow: 'ITINERARY',
    intro: 'Two weeks lets you combine north, central and south Vietnam without turning the trip into a race.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=85', imageAlt: 'Vietnam city travel',
    bullets: ['Use 4–5 bases', 'Include at least one 3–4 night slower stop', 'Consider ending with Phu Quoc or Hoi An'],
    sections: [
      { heading: 'The classic north-to-south shape', text: 'Start in Hanoi, add Ha Long Bay, slow down in central Vietnam, then finish with Ho Chi Minh City and an optional beach stop.' },
      { heading: 'How to avoid itinerary fatigue', text: 'Do not add a new city every day. Two weeks feels much better when at least one destination gets three or four nights.' },
    ], cta: 'Plan my 14-day Vietnam trip', plannerDays: '14', bookingKey: 'flights', bookingLabel: 'Check Vietnam flights'
  },
  'vietnam-travel-cost': {
    title: 'Vietnam travel cost: budget, mid-range and premium', eyebrow: 'TRAVEL COST GUIDE',
    intro: 'Use a simple A/B/C framework to estimate what a Vietnam trip may cost before you start booking.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1600&q=85', imageAlt: 'Vietnam travel planning',
    bullets: ['A: about US$45 per person per day', 'B: about US$85 per person per day', 'C: about US$170 per person per day'],
    sections: [
      { heading: 'Budget A — smart budget', text: 'Think simple hotels or hostels, local food, public transport and a small number of paid attractions.' },
      { heading: 'Budget B — comfortable', text: 'This tier gives most first-time visitors well-rated hotels, easier transfers, food tours and more flexibility.' },
      { heading: 'Budget C — premium', text: 'Use this range for boutique hotels, private transfers, premium cruises and higher-end dining. These are planning estimates, not live prices.' },
    ], cta: 'Build a trip by budget', bookingKey: 'hotels', bookingLabel: 'Check current hotel prices'
  },
  'vietnam-esim': {
    title: 'Vietnam eSIM guide for travelers', eyebrow: 'CONNECTIVITY GUIDE',
    intro: 'An eSIM can be the easiest way to get mobile data in Vietnam without finding a physical SIM after landing.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=85', imageAlt: 'Traveler using a phone in Vietnam',
    bullets: ['Check that your phone supports eSIM before buying', 'Install before departure when possible', 'Keep the QR code or activation details offline'],
    sections: [
      { heading: 'Who should use an eSIM?', text: 'It is especially convenient for short trips, late arrivals and travelers who want data working as soon as they land.' },
      { heading: 'What to check before buying', text: 'Compare data allowance, validity period, hotspot support and whether the plan activates on installation or first network connection.' },
    ], cta: 'Plan my Vietnam trip', bookingKey: 'esim', bookingLabel: 'Check Vietnam eSIM options'
  },
  'ha-long-bay-from-hanoi': {
    title: 'Ha Long Bay from Hanoi: how to plan the trip', eyebrow: 'DAY TRIP & CRUISE GUIDE',
    intro: 'Ha Long Bay is easy to add from Hanoi, but choosing between a day trip and an overnight cruise changes the pace of your itinerary.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85', imageAlt: 'Limestone landscape in northern Vietnam',
    bullets: ['Day trips are faster and cheaper', 'Overnight cruises give you a slower experience', 'Book around your Hanoi hotel dates to simplify transfers'],
    sections: [
      { heading: 'Day trip or overnight cruise?', text: 'Choose a day trip if your itinerary is short. Choose one night on the bay if you have 10–14 days and want the experience to feel less rushed.' },
      { heading: 'When to book', text: 'Book after your Hanoi hotel dates are fixed. Cruise pickup logistics are much easier when your accommodation is confirmed.' },
    ], cta: 'Build a Hanoi + Ha Long route', bookingKey: 'experiences', bookingLabel: 'Check Ha Long Bay tours'
  },
};


const decisionGuides: Record<string, Pick<PageData, 'decisionTitle' | 'decisionRows'>> = {
  hanoi: { decisionTitle: 'Choose your Hanoi base', decisionRows: [{ label: 'Old Quarter', detail: 'Most walkable, busy and food-focused', fit: 'First visit and short stays' }, { label: 'French Quarter', detail: 'Quieter streets and wider hotel rooms', fit: 'Couples and slower evenings' }, { label: 'West Lake', detail: 'More residential, farther from core sights', fit: 'Longer stays and repeat visitors' }] },
  'ho-chi-minh-city': { decisionTitle: 'Choose your HCMC base', decisionRows: [{ label: 'District 1', detail: 'Central sights, restaurants and nightlife', fit: 'First visit' }, { label: 'District 3', detail: 'Calmer streets with local food nearby', fit: 'Sleep quality and neighborhood feel' }, { label: 'District 2', detail: 'Modern cafes and longer-stay comfort', fit: 'Families and digital nomads' }] },
  'da-nang-hoi-an': { decisionTitle: 'Da Nang or Hoi An?', decisionRows: [{ label: 'Da Nang', detail: 'Beach, airport and modern hotel convenience', fit: 'Short stays and beach priority' }, { label: 'Hoi An', detail: 'Heritage streets, food and evening atmosphere', fit: 'Culture and slower pace' }, { label: 'Split both', detail: 'Practical arrival plus atmospheric nights', fit: 'Four or more nights' }] },
  'phu-quoc': { decisionTitle: 'Pick the right Phu Quoc stay', decisionRows: [{ label: 'West coast', detail: 'Sunsets, resorts and easier dining', fit: 'First island visit' }, { label: 'North', detail: 'Quieter resorts and larger attractions nearby', fit: 'Families and resort time' }, { label: 'South', detail: 'Beaches and island excursions', fit: 'Activity-led beach trips' }] },
  'vietnam-itinerary-7-days': { decisionTitle: 'A realistic 7-day pace', decisionRows: [{ label: 'North + central', detail: 'Hanoi with Da Nang/Hoi An', fit: 'Food, history and coast' }, { label: 'South + beach', detail: 'HCMC with a beach finish', fit: 'Shorter transfers and downtime' }, { label: 'North only', detail: 'Hanoi, Ninh Binh and Ha Long', fit: 'Less flying and deeper local pace' }] },
  'vietnam-itinerary-10-days': { decisionTitle: 'A balanced 10-day route', decisionRows: [{ label: 'Hanoi · 3 nights', detail: 'Arrive, eat, walk and recover', fit: 'Northern culture' }, { label: 'Ha Long · 1 night', detail: 'Cruise without taking over the trip', fit: 'Signature landscape' }, { label: 'Hoi An · 3 + HCMC · 2', detail: 'Central slowdown then southern energy', fit: 'Classic first trip' }] },
  'vietnam-itinerary-14-days': { decisionTitle: 'Use two weeks well', decisionRows: [{ label: 'North · 4 nights', detail: 'Hanoi plus Ha Long or Ninh Binh', fit: 'Culture and scenery' }, { label: 'Central · 4 nights', detail: 'Da Nang and Hoi An with breathing room', fit: 'Food, heritage and beach' }, { label: 'South/island · 5 nights', detail: 'HCMC plus optional Phu Quoc', fit: 'City energy and rest' }] },
  'vietnam-travel-cost': { decisionTitle: 'What changes your budget?', decisionRows: [{ label: 'A · ≈ US$45/day', detail: 'Simple stays, local food and public transit', fit: 'Independent budget travelers' }, { label: 'B · ≈ US$85/day', detail: 'Comfortable hotels, easier transfers and tours', fit: 'Most first-time visitors' }, { label: 'C · ≈ US$170/day', detail: 'Boutique stays, premium cruises and private transport', fit: 'Comfort and convenience' }] },
  'vietnam-esim': { decisionTitle: 'Check an eSIM before buying', decisionRows: [{ label: 'Compatibility', detail: 'Phone must be unlocked and eSIM-capable', fit: 'Check before departure' }, { label: 'Validity', detail: 'Match data days to the actual itinerary', fit: 'Avoid paying for unused days' }, { label: 'Activation', detail: 'Keep QR/support details offline', fit: 'Late arrivals and airport pickup' }] },
  'ha-long-bay-from-hanoi': { decisionTitle: 'Day trip or overnight?', decisionRows: [{ label: 'Day trip', detail: 'Faster, simpler and uses no hotel night', fit: '7-day itineraries' }, { label: 'One night', detail: 'More time on the bay and less rushing', fit: '10–14 day itineraries' }, { label: 'Skip it', detail: 'Use the time for Ninh Binh or deeper Hanoi', fit: 'Travelers sensitive to long transfers' }] },
};

const plannerPresets: Record<string, { days: string; arrival: string; interest: string; budget: string }> = {
  hanoi: { days: '7', arrival: 'Hanoi', interest: 'food', budget: 'mid' },
  'ho-chi-minh-city': { days: '7', arrival: 'Ho Chi Minh City', interest: 'food', budget: 'mid' },
  'da-nang-hoi-an': { days: '10', arrival: 'Da Nang', interest: 'beach', budget: 'mid' },
  'phu-quoc': { days: '14', arrival: 'Phu Quoc', interest: 'beach', budget: 'mid' },
  'vietnam-itinerary-7-days': { days: '7', arrival: 'Hanoi', interest: 'mix', budget: 'mid' },
  'vietnam-itinerary-10-days': { days: '10', arrival: 'Hanoi', interest: 'mix', budget: 'mid' },
  'vietnam-itinerary-14-days': { days: '14', arrival: 'Hanoi', interest: 'mix', budget: 'mid' },
  'vietnam-travel-cost': { days: '10', arrival: 'Hanoi', interest: 'mix', budget: 'mid' },
  'vietnam-esim': { days: '10', arrival: 'Hanoi', interest: 'mix', budget: 'mid' },
  'ha-long-bay-from-hanoi': { days: '10', arrival: 'Hanoi', interest: 'nature', budget: 'mid' },
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: `${page.title} | VietnamGo`,
    description: page.intro,
    alternates: { canonical: `/en/${slug}` },
    openGraph: { title: page.title, description: page.intro, type: 'article', images: [{ url: page.image, alt: page.imageAlt }] },
  };
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = { ...pages[slug], ...decisionGuides[slug] };
  if (!page) notFound();
  const isItinerary = page.eyebrow === 'ITINERARY';
  const planningNote = isItinerary
    ? 'Protect real time in each base: arrival days are slower, domestic flights use half a day, and one flexible day makes weather and delays easier to absorb.'
    : 'Make the main decision first, then book only the pieces that support it. VietnamGo gives planning guidance; live prices and availability remain with booking partners.';
  const faq = [
    { question: `What is the practical first step for ${page.title.toLowerCase()}?`, answer: page.intro + ' Start with the number of nights and your preferred pace before comparing booking options.' },
    { question: 'How should I use this guide with the planner?', answer: 'Use the recommendations here as a starting preset, then adjust trip length, budget, style and interests in the free VietnamGo planner.' },
  ];
  const preset = plannerPresets[slug];
  const plannerHref = preset ? `/en/planner?${new URLSearchParams({ days: preset.days, arrival: preset.arrival, style: 'couple', budget: preset.budget, interest: preset.interest }).toString()}` : '/#planner';
  const bookingHref = page.bookingKey ? `/go/${page.bookingKey}?src=seo&page=${slug}` : '/#book';

  const articleJsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: page.title, description: page.intro, image: [page.image],
    author: { '@type': 'Organization', name: 'VietnamGo' },
    publisher: { '@type': 'Organization', name: 'VietnamGo' },
    inLanguage: 'en', mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bayre-ai-1kcx-bice.vercel.app'}/en/${slug}`,
  };

  return (
    <main className="seoPage shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <a className="brand" href="/">VietnamGo<span>.</span></a>
      <section className="seoHero">
        <span className="kicker">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <img src={page.image} alt={page.imageAlt} style={{ width: '100%', height: 'clamp(280px,48vw,560px)', objectFit: 'cover', borderRadius: 24, marginTop: 28 }} />
      </section>

      <section className="seoGrid">
        <div>
          <h2>Quick plan</h2>
          <ul>{page.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          {page.sections.map((section) => <section key={section.heading} style={{ marginTop: 34 }}><h2>{section.heading}</h2><p style={{ lineHeight: 1.75, color: '#59675f' }}>{section.text}</p></section>)}
          {page.decisionRows && <section className="decisionGuide" style={{ marginTop: 42 }}><h2>{page.decisionTitle}</h2><div role="table" aria-label={page.decisionTitle}>{page.decisionRows.map((row) => <div key={row.label} role="row" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: 12, padding: '14px 0', borderTop: '1px solid #dfe6e1' }}><strong role="cell">{row.label}</strong><span role="cell" style={{ color: '#59675f' }}>{row.detail}</span><span role="cell" style={{ color: '#1e8c57', fontWeight: 700 }}>{row.fit}</span></div>)}</div></section>}
          <section style={{ marginTop: 34 }}><h2>Planning note</h2><p style={{ lineHeight: 1.75, color: '#59675f' }}>{planningNote}</p></section>
        </div>
        <aside>
          <span className="kicker">FREE PLANNER</span>
          <h3>Turn this guide into your own route.</h3>
          <p>This guide preloads a useful starting point in the planner. You can change trip length, arrival city, budget, travel style and interests before building your route.</p>
          <a className="primary" href={plannerHref}>{page.cta}</a>
          {page.bookingKey && <a className="secondary" style={{ marginTop: 10, display: 'inline-flex' }} href={bookingHref} target="_blank" rel="sponsored nofollow noopener">{page.bookingLabel || 'Check booking options'} →</a>}
          <small style={{ display: 'block', marginTop: 14, color: '#718078', lineHeight: 1.5 }}>Some links are affiliate links. VietnamGo may earn a commission at no extra cost to you. Prices and availability come from the booking partner.</small>
        </aside>
      </section>

      <section className="seoFaq"><h2>Frequently asked questions</h2>{faq.map((item) => <article key={item.question}><h3>{item.question}</h3><p style={{ lineHeight: 1.7, color: '#59675f' }}>{item.answer}</p></article>)}</section>

      <section className="seoRelated" aria-labelledby="related-guides">
        <h2 id="related-guides">Related Vietnam planning guides</h2>
        <div className="heroActions">
          <a className="secondary" href="/en/vietnam-itinerary-10-days">10-day itinerary</a>
          <a className="secondary" href="/en/vietnam-travel-cost">Vietnam travel cost</a>
          <a className="secondary" href="/en/hanoi">Hanoi guide</a>
          <a className="secondary" href="/en/da-nang-hoi-an">Da Nang & Hoi An</a>
          <a className="secondary" href="/en/planner">Build my trip</a>
        </div>
      </section>

      <section className="seoBooking">
        <h2>Book after the route makes sense.</h2>
        <p>Check current availability with connected partners. VietnamGo does not invent or cache live prices.</p>
        <a className="secondary" href="/#book">See flights, hotels, tours, transfers and eSIM</a>
      </section>
    </main>
  );
}
