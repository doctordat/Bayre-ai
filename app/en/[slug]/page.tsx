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
  const page = pages[slug];
  if (!page) notFound();
  const plannerHref = page.plannerDays ? `/en/planner?days=${page.plannerDays}&style=couple&budget=mid&interest=mix` : '/#planner';
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
        </div>
        <aside>
          <span className="kicker">FREE PLANNER</span>
          <h3>Turn this guide into your own route.</h3>
          <p>Choose trip length, budget, travel style and interests. VietnamGo will build a practical starting itinerary.</p>
          <a className="primary" href={plannerHref}>{page.cta}</a>
          {page.bookingKey && <a className="secondary" style={{ marginTop: 10, display: 'inline-flex' }} href={bookingHref} target="_blank" rel="sponsored nofollow noopener">{page.bookingLabel || 'Check booking options'} →</a>}
          <small style={{ display: 'block', marginTop: 14, color: '#718078', lineHeight: 1.5 }}>Some links are affiliate links. VietnamGo may earn a commission at no extra cost to you. Prices and availability come from the booking partner.</small>
        </aside>
      </section>

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
