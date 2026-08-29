import { getAffiliatesByCategory, type AffiliateCategory } from '../../../lib/affiliates';

type Params = Promise<Record<string, string | string[] | undefined>>;
type Stop = { city: string; nights: number; why: string; ideas: string[] };

const plans: Record<string, Stop[]> = {
  '7-mix': [
    { city: 'Hanoi', nights: 2, why: 'Old Quarter, street food and your easiest introduction to Vietnam.', ideas: ['Old Quarter food walk', 'Hoan Kiem Lake', 'Temple of Literature'] },
    { city: 'Da Nang', nights: 2, why: 'A convenient central base with beaches and easy transport.', ideas: ['My Khe Beach', 'Marble Mountains', 'Son Tra Peninsula'] },
    { city: 'Hoi An', nights: 2, why: 'Lantern evenings, heritage streets and a slower final stop.', ideas: ['Ancient Town', 'Cooking class', 'An Bang Beach'] },
  ],
  '7-beach': [
    { city: 'Da Nang', nights: 2, why: 'Easy airport access plus one of Vietnam’s most convenient city beaches.', ideas: ['My Khe Beach', 'Son Tra Peninsula', 'Seafood evening'] },
    { city: 'Hoi An', nights: 2, why: 'Pair beach time with a compact heritage town.', ideas: ['An Bang Beach', 'Ancient Town', 'Basket boat trip'] },
    { city: 'Phu Quoc', nights: 2, why: 'Finish with island time and a resort-style stay.', ideas: ['Beach day', 'Island hopping', 'Sunset market'] },
  ],
  '10-mix': [
    { city: 'Hanoi', nights: 3, why: 'Food, history and a strong first base in northern Vietnam.', ideas: ['Old Quarter food walk', 'Hoan Kiem Lake', 'Temple of Literature'] },
    { city: 'Ha Long Bay', nights: 1, why: 'A classic overnight limestone-bay experience from Hanoi.', ideas: ['Overnight cruise', 'Kayaking', 'Cave visit'] },
    { city: 'Hoi An', nights: 3, why: 'Culture, food and beach access without changing hotels every day.', ideas: ['Ancient Town', 'Cooking class', 'An Bang Beach'] },
    { city: 'Ho Chi Minh City', nights: 2, why: 'Finish with southern food, nightlife and easy onward flights.', ideas: ['District 1 walk', 'Food tour', 'Mekong or Cu Chi day trip'] },
  ],
  '10-beach': [
    { city: 'Ho Chi Minh City', nights: 2, why: 'A quick urban landing before heading to the coast.', ideas: ['District 1', 'Coffee crawl', 'Rooftop evening'] },
    { city: 'Hoi An', nights: 3, why: 'A balanced beach-and-culture stop in central Vietnam.', ideas: ['An Bang Beach', 'Ancient Town', 'Cooking class'] },
    { city: 'Phu Quoc', nights: 4, why: 'Enough time to slow down, island-hop and enjoy the beach.', ideas: ['Beach day', 'Island hopping', 'Night market'] },
  ],
  '14-mix': [
    { city: 'Hanoi', nights: 3, why: 'Start with northern culture, history and street food.', ideas: ['Old Quarter food walk', 'Hoan Kiem Lake', 'Temple of Literature'] },
    { city: 'Ha Long Bay', nights: 1, why: 'Break up the city stay with an overnight cruise.', ideas: ['Cruise', 'Kayaking', 'Sunrise on deck'] },
    { city: 'Da Nang & Hoi An', nights: 4, why: 'Central Vietnam gives you beaches, heritage and excellent food.', ideas: ['Hoi An Ancient Town', 'My Khe Beach', 'Marble Mountains'] },
    { city: 'Ho Chi Minh City', nights: 2, why: 'A fast-paced southern contrast with great onward connections.', ideas: ['District 1', 'Food tour', 'Mekong day trip'] },
    { city: 'Phu Quoc', nights: 3, why: 'End the trip with a relaxed island finale.', ideas: ['Beach day', 'Island hopping', 'Sunset market'] },
  ],
  '14-beach': [
    { city: 'Hanoi', nights: 2, why: 'A short culture-first introduction before the beach route.', ideas: ['Old Quarter', 'Food walk', 'Hoan Kiem Lake'] },
    { city: 'Hoi An', nights: 4, why: 'Slow travel with easy access to An Bang Beach.', ideas: ['An Bang Beach', 'Ancient Town', 'Cooking class'] },
    { city: 'Nha Trang', nights: 3, why: 'A lively coastal stop with islands and water activities.', ideas: ['Island day', 'Beach time', 'Seafood'] },
    { city: 'Phu Quoc', nights: 4, why: 'Finish with the most relaxed section of the trip.', ideas: ['Beach day', 'Island hopping', 'Night market'] },
  ],
};

const budgetDaily: Record<string, number> = { budget: 45, mid: 85, premium: 170 };
const bookingItems: { category: AffiliateCategory; icon: string; title: string; text: string }[] = [
  { category: 'flights', icon: '✈️', title: 'Flights to Vietnam', text: 'Compare international and regional flight options.' },
  { category: 'hotels', icon: '🏨', title: 'Hotels by stop', text: 'Compare stays for each city on your route.' },
  { category: 'experiences', icon: '🎟️', title: 'Tours & activities', text: 'Book cruises, food tours, tickets and day trips.' },
  { category: 'transfers', icon: '🚐', title: 'Transfers', text: 'Arrange airport transfers and local transport.' },
  { category: 'esim', icon: '📶', title: 'Vietnam eSIM & Wi-Fi', text: 'Get connected before or after you land.' },
  { category: 'trains', icon: '🚆', title: 'Train tickets', text: 'Compare rail options for longer domestic journeys.' },
];

export default async function PlannerResult({ searchParams }: { searchParams: Params }) {
  const p = await searchParams;
  const days = String(p.days || '10');
  const interest = String(p.interest || 'mix');
  const style = String(p.style || 'couple');
  const budget = String(p.budget || 'mid');
  const route = plans[`${days}-${interest}`] || plans[`${days}-mix`] || plans['10-mix'];
  const travelers = style === 'solo' ? 1 : style === 'family' ? 4 : 2;
  const estimate = Number(days) * (budgetDaily[budget] || 85) * travelers;

  return (
    <main className="resultPage shell">
      <a className="brand" href="/">VietnamGo<span>.</span></a>
      <div className="resultHero">
        <span className="kicker">YOUR VIETNAM STARTER ROUTE</span>
        <h1>{days} days. {route.length} stops. One easy plan.</h1>
        <p>A practical first draft for a {style} trip. Use it to decide where to spend your time, then compare the bookings that make the route work.</p>
        <div className="estimateRow"><div><small>Planning estimate</small><b>≈ US${estimate.toLocaleString()}</b><span>for {travelers} traveler{travelers > 1 ? 's' : ''}, excluding international flights</span></div><div><small>Route pace</small><b>{Number(days) / route.length >= 3 ? 'Relaxed' : 'Balanced'}</b><span>Designed to avoid changing hotels every night</span></div></div>
      </div>

      <section className="routeSection">
        <div className="routeHeading"><span className="kicker">DAY-BY-DAY FRAMEWORK</span><h2>Your route</h2></div>
        <div className="timeline">
          {route.map((stop, i) => <article className="stop" key={stop.city}><div className="num">{i + 1}</div><div className="stopBody"><div className="stopTitle"><div><b>{stop.city}</b><span>{stop.nights} night{stop.nights > 1 ? 's' : ''}</span></div><span className="routeTag">Stop {i + 1}</span></div><p>{stop.why}</p><div className="ideaChips">{stop.ideas.map(idea => <span key={idea}>{idea}</span>)}</div></div></article>)}
        </div>
      </section>

      <section className="bookingFunnel">
        <span className="kicker light">TURN THE PLAN INTO A TRIP</span>
        <h2>Compare your booking options.</h2>
        <p className="bookingIntro">Choose a partner below to check current availability and prices. VietnamGo does not invent or cache live prices.</p>
        <div className="actionGrid">
          {bookingItems.map((item, index) => {
            const partners = getAffiliatesByCategory(item.category);
            return <article key={item.category}><span className="actionIcon">{item.icon}</span><small>STEP {index + 1}</small><h3>{item.title}</h3><p>{item.text}</p><div className="partnerLinks">{partners.map(([key, partner]) => <a key={key} className="affiliateCta" href={`/go/${key}?src=planner&page=${days}-day-route`} target="_blank" rel="nofollow sponsored noopener">Check on {partner.label} →</a>)}</div></article>;
          })}
        </div>
        <div className="disclosure">Some booking links are affiliate links. If you book through them, VietnamGo may earn a commission at no extra cost to you. Prices and availability are provided by the booking partner.</div>
      </section>

      <section className="nextBox"><div><span className="kicker">NOT QUITE RIGHT?</span><h2>Tune the route in seconds.</h2><p>Change trip length, travel style, budget or interests and generate another free starting point.</p></div><div className="heroActions"><a className="primary" href="/#planner">Edit my trip</a><a className="secondary" href="/#destinations">Explore destinations</a></div></section>
    </main>
  );
}
