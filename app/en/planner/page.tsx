type Params = Promise<Record<string, string | string[] | undefined>>;

const routes: Record<string, string[]> = {
  '7-mix': ['Hanoi · 2 nights', 'Da Nang · 2 nights', 'Hoi An · 2 nights'],
  '7-beach': ['Da Nang · 2 nights', 'Hoi An · 2 nights', 'Phu Quoc · 2 nights'],
  '10-mix': ['Hanoi · 3 nights', 'Ha Long Bay · 1 night', 'Hoi An · 3 nights', 'Ho Chi Minh City · 2 nights'],
  '10-beach': ['Ho Chi Minh City · 2 nights', 'Hoi An · 3 nights', 'Phu Quoc · 4 nights'],
  '14-mix': ['Hanoi · 3 nights', 'Ha Long Bay · 1 night', 'Da Nang & Hoi An · 4 nights', 'Ho Chi Minh City · 2 nights', 'Phu Quoc · 3 nights'],
  '14-beach': ['Hanoi · 2 nights', 'Hoi An · 4 nights', 'Nha Trang · 3 nights', 'Phu Quoc · 4 nights'],
};

export default async function PlannerResult({ searchParams }: { searchParams: Params }) {
  const p = await searchParams;
  const days = String(p.days || '10');
  const interest = String(p.interest || 'mix');
  const route = routes[`${days}-${interest}`] || routes[`${days}-mix`] || routes['10-mix'];

  return (
    <main className="resultPage shell">
      <a className="brand" href="/">VietnamGo<span>.</span></a>
      <div className="resultHero">
        <span className="kicker">YOUR STARTER ROUTE</span>
        <h1>{days} days in Vietnam</h1>
        <p>A practical first draft based on your trip length and interests. Next we will personalize dates, origin airport and live booking options.</p>
      </div>
      <div className="timeline">
        {route.map((stop, i) => <div className="stop" key={stop}><div className="num">{i + 1}</div><div><b>{stop}</b><p>{i === 0 ? 'Arrive, settle in and explore at an easy pace.' : 'Continue your route with simple transport and booking recommendations.'}</p></div></div>)}
      </div>
      <section className="nextBox">
        <h2>Ready to price this trip?</h2>
        <p>Flight, hotel and activity comparisons will appear here as affiliate partners are connected. Prices will always be labeled as live, estimated or illustrative.</p>
        <div className="heroActions"><a className="primary" href="/">Edit trip</a><a className="secondary" href="/#book">See booking categories</a></div>
      </section>
    </main>
  );
}
