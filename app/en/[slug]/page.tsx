import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PageData = {
  title: string;
  eyebrow: string;
  intro: string;
  bullets: string[];
  cta: string;
  plannerDays?: string;
};

const pages: Record<string, PageData> = {
  hanoi: {
    title: 'Hanoi travel guide for first-time visitors',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Use Hanoi as your northern Vietnam base for street food, history, Old Quarter walks and easy access to Ha Long Bay.',
    bullets: ['Stay near the Old Quarter for a first visit', 'Plan 2–3 nights before moving south', 'Pair Hanoi with an overnight Ha Long Bay cruise'],
    cta: 'Build a trip with Hanoi',
  },
  'ho-chi-minh-city': {
    title: 'Ho Chi Minh City travel guide for first-time visitors',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Vietnam’s biggest city works well for food, nightlife, history and day trips to the Mekong Delta or Cu Chi.',
    bullets: ['District 1 is the simplest first-time base', 'Plan 2–3 nights for the city itself', 'Use SGN for easy domestic connections'],
    cta: 'Build a trip with Ho Chi Minh City',
  },
  'da-nang-hoi-an': {
    title: 'Da Nang & Hoi An travel guide',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Combine Da Nang’s airport and beaches with Hoi An’s heritage streets, food scene and slower pace.',
    bullets: ['Use Da Nang airport for central Vietnam', 'Split 3–5 nights between beach and heritage time', 'Add Marble Mountains or My Son as a day trip'],
    cta: 'Build a central Vietnam route',
  },
  'phu-quoc': {
    title: 'Phu Quoc travel guide for first-time visitors',
    eyebrow: 'DESTINATION GUIDE',
    intro: 'Phu Quoc is one of the easiest places to add a relaxed beach finish to a Vietnam itinerary.',
    bullets: ['Allow at least 3 nights if flying in', 'Choose your coast based on beach style and resort preference', 'Keep the island for the end of a multi-city trip'],
    cta: 'Build a trip with Phu Quoc',
  },
  'vietnam-itinerary-7-days': {
    title: 'Vietnam itinerary: 7 days',
    eyebrow: 'ITINERARY',
    intro: 'One week is enough for a focused first trip if you avoid trying to cover the whole country.',
    bullets: ['Choose 2–3 bases maximum', 'Fly one domestic sector if needed', 'Prioritize either north + central or south + beach'],
    cta: 'Plan my 7-day Vietnam trip',
    plannerDays: '7',
  },
  'vietnam-itinerary-10-days': {
    title: 'Vietnam itinerary: 10 days',
    eyebrow: 'ITINERARY',
    intro: 'Ten days is a strong first-trip length for combining culture, food and one slower coastal stop.',
    bullets: ['Use 3–4 bases', 'Give Hanoi or Ho Chi Minh City at least 2 nights', 'Keep one flexible day for weather or transport'],
    cta: 'Plan my 10-day Vietnam trip',
    plannerDays: '10',
  },
  'vietnam-itinerary-14-days': {
    title: 'Vietnam itinerary: 14 days',
    eyebrow: 'ITINERARY',
    intro: 'Two weeks lets you combine north, central and south Vietnam without turning the trip into a race.',
    bullets: ['Use 4–5 bases', 'Include at least one 3–4 night slower stop', 'Consider ending with Phu Quoc or Hoi An'],
    cta: 'Plan my 14-day Vietnam trip',
    plannerDays: '14',
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: `${page.title} | VietnamGo`,
    description: page.intro,
    alternates: { canonical: `/en/${slug}` },
  };
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const plannerHref = page.plannerDays ? `/?days=${page.plannerDays}#planner` : '/#planner';

  return (
    <main className="seoPage shell">
      <a className="brand" href="/">VietnamGo<span>.</span></a>
      <section className="seoHero">
        <span className="kicker">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="seoGrid">
        <div>
          <h2>Plan it simply</h2>
          <ul>{page.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <aside>
          <span className="kicker">FREE PLANNER</span>
          <h3>Turn this guide into your own route.</h3>
          <p>Choose trip length, budget, travel style and interests. VietnamGo will build a practical starting itinerary.</p>
          <a className="primary" href={plannerHref}>{page.cta}</a>
        </aside>
      </section>
      <section className="seoBooking">
        <h2>Next: compare the bookings that make the route work.</h2>
        <p>Flights, hotels, tours and transfers will connect here once affiliate partners are added. No fake live prices.</p>
        <a className="secondary" href="/#book">See booking categories</a>
      </section>
    </main>
  );
}
