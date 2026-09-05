import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vietnam Travel Guides, Costs & Itineraries | VietnamGo',
  description: 'Practical Vietnam travel guides for first-time visitors: itineraries, costs, destinations, eSIM, Ha Long Bay and booking tips.',
  alternates: { canonical: '/en/guides' },
};

const guides = [
  { href: '/en/vietnam-itinerary-10-days', title: 'Vietnam itinerary: 10 days', tag: 'ITINERARY', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=82', text: 'A balanced first-trip route with culture, coast and manageable travel days.' },
  { href: '/en/vietnam-travel-cost', title: 'Vietnam travel cost', tag: 'BUDGET', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1000&q=82', text: 'Compare smart-budget, comfortable and premium planning ranges before you book.' },
  { href: '/en/hanoi', title: 'Hanoi travel guide', tag: 'DESTINATION', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1000&q=82', text: 'Where to stay, how long to spend and what to book first in Hanoi.' },
  { href: '/en/da-nang-hoi-an', title: 'Da Nang & Hoi An', tag: 'DESTINATION', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=82', text: 'Beach time, Hoi An evenings, airport access and the easiest central Vietnam split.' },
  { href: '/en/ha-long-bay-from-hanoi', title: 'Ha Long Bay from Hanoi', tag: 'EXPERIENCE', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=82', text: 'Day trip or overnight cruise, with simple booking and timing advice.' },
  { href: '/en/vietnam-esim', title: 'Vietnam eSIM guide', tag: 'TRAVEL ESSENTIAL', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=82', text: 'What to check before buying mobile data for your Vietnam trip.' },
];

export default function GuidesPage() {
  return (
    <main className="shell" style={{ padding: '32px 0 90px' }}>
      <a className="brand" href="/">VietnamGo<span>.</span></a>
      <section style={{ padding: '70px 0 34px', maxWidth: 850 }}>
        <span className="kicker">VIETNAM TRAVEL GUIDES</span>
        <h1 style={{ fontSize: 'clamp(48px,7vw,78px)', lineHeight: .98, letterSpacing: '-.055em', margin: '18px 0' }}>Plan less. Know what matters.</h1>
        <p style={{ fontSize: 19, lineHeight: 1.7, color: '#647168' }}>Real travel photography, practical first-timer advice and direct links into the VietnamGo planner and connected booking partners.</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
        {guides.map((guide) => (
          <a href={guide.href} key={guide.href} style={{ display: 'block', overflow: 'hidden', borderRadius: 22, background: '#fff', border: '1px solid #dfe6e1' }}>
            <img src={guide.image} alt={guide.title} style={{ width: '100%', height: 230, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 22 }}>
              <span className="kicker">{guide.tag}</span>
              <h2 style={{ fontSize: 28, letterSpacing: '-.035em', margin: '10px 0' }}>{guide.title}</h2>
              <p style={{ color: '#66736b', lineHeight: 1.6 }}>{guide.text}</p>
              <strong>Read guide →</strong>
            </div>
          </a>
        ))}
      </section>

      <section style={{ marginTop: 60, padding: 32, borderRadius: 24, background: '#eaf4ee' }}>
        <span className="kicker">BUILD YOUR ROUTE</span>
        <h2 style={{ fontSize: 40, marginBottom: 10 }}>Turn the research into a trip.</h2>
        <p style={{ color: '#647168', lineHeight: 1.65, maxWidth: 720 }}>Choose days, travel style, interests and budget A/B/C. VietnamGo will generate a practical starter itinerary, then show connected booking partners.</p>
        <a className="secondary" href="/en/attractions">Browse attractions by city →</a><a className="primary" href="/#planner">Plan my Vietnam trip →</a>
      </section>
    </main>
  );
}
