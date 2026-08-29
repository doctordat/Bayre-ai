const budgets = [
  { code: 'A', label: 'Smart budget', price: '≈ US$45/day', value: 'budget', text: 'Simple stays, local food, public transport and a few paid highlights.' },
  { code: 'B', label: 'Comfortable', price: '≈ US$85/day', value: 'mid', text: 'Well-rated hotels, easy transfers, food tours and room for upgrades.' },
  { code: 'C', label: 'Premium', price: '≈ US$170/day', value: 'premium', text: 'Boutique stays, private transfers, premium cruises and higher-end dining.' },
];

const places = [
  { name: 'Hanoi', href: '/en/hanoi', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1200&q=82', note: 'VietnamGo editorial note: a strong first stop for food, history and a compact old-city experience.' },
  { name: 'Hoi An', href: '/en/da-nang-hoi-an', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=82', note: 'VietnamGo editorial note: one of the easiest places to slow down for 2–3 nights with culture, food and beach access.' },
  { name: 'Ho Chi Minh City', href: '/en/ho-chi-minh-city', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=82', note: 'VietnamGo editorial note: best for big-city energy, nightlife, coffee and easy onward connections.' },
  { name: 'Phu Quoc', href: '/en/phu-quoc', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=82', note: 'VietnamGo editorial note: strongest as a relaxed beach finish when you can give it at least three nights.' },
];

export default function ExplorePage() {
  return (
    <main className="shell" style={{ padding: '32px 0 90px' }}>
      <a className="brand" href="/">VietnamGo<span>.</span></a>
      <section style={{ padding: '72px 0 42px', maxWidth: 900 }}>
        <span className="kicker">REAL PHOTOS · REAL PLANNING</span>
        <h1 style={{ fontSize: 'clamp(48px,7vw,78px)', lineHeight: .98, letterSpacing: '-.055em', margin: '18px 0' }}>Plan Vietnam by place, pace and budget.</h1>
        <p style={{ fontSize: 19, lineHeight: 1.65, color: '#647168' }}>Choose a cost tier, see real destination photography, read short VietnamGo editorial notes, then open a route with the same budget setting applied.</p>
      </section>

      <section id="budget" style={{ padding: '30px 0 70px' }}>
        <span className="kicker">BUDGET A / B / C</span><h2 style={{ fontSize: 44, letterSpacing: '-.04em' }}>Pick your spending style.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {budgets.map((b) => <a key={b.code} href={`/en/planner?days=10&style=couple&interest=mix&budget=${b.value}`} style={{ background: 'white', border: '1px solid #dfe6e1', borderRadius: 20, padding: 24 }}><span style={{ display: 'inline-grid', placeItems: 'center', width: 42, height: 42, borderRadius: 999, background: '#dcefe4', fontWeight: 900 }}>{b.code}</span><h3 style={{ fontSize: 26, marginBottom: 6 }}>{b.label}</h3><b style={{ fontSize: 22 }}>{b.price}</b><p style={{ color: '#66736b', lineHeight: 1.55 }}>{b.text}</p><strong>Plan this budget →</strong></a>)}
        </div>
        <p style={{ fontSize: 12, color: '#77837b', marginTop: 14 }}>Planning estimates only; live prices come from booking partners.</p>
      </section>

      <section style={{ padding: '35px 0' }}>
        <span className="kicker">DESTINATION REVIEWS</span><h2 style={{ fontSize: 44, letterSpacing: '-.04em' }}>See the place before you add it.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18, marginTop: 28 }}>
          {places.map((p) => <a key={p.name} href={p.href} style={{ overflow: 'hidden', borderRadius: 22, background: 'white', border: '1px solid #dfe6e1' }}><img src={p.image} alt={p.name} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} /><div style={{ padding: 20 }}><h3 style={{ fontSize: 26, margin: '0 0 10px' }}>{p.name}</h3><p style={{ color: '#66736b', lineHeight: 1.55 }}>{p.note}</p><strong>Open travel guide ↗</strong></div></a>)}
        </div>
      </section>

      <section style={{ marginTop: 70, padding: 34, borderRadius: 24, background: '#eaf4ee' }}>
        <span className="kicker">NEXT STEP</span><h2 style={{ fontSize: 40, marginBottom: 10 }}>Turn the idea into a route.</h2><p style={{ color: '#647168', maxWidth: 680, lineHeight: 1.6 }}>The planner will use your days, travel style, interest and A/B/C budget to generate a route and rough trip-cost estimate.</p><a className="primary" href="/#planner">Build my Vietnam trip →</a>
      </section>
    </main>
  );
}
