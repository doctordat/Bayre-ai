import Link from 'next/link';
import { affiliates, type AffiliateKey } from '../lib/affiliates';

const destinations = [
  { name: 'Hanoi', note: 'Old-world charm', description: 'Street-food mornings, lake walks and a thousand years of stories.', href: '/en/hanoi', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1200&q=82', number: '01' },
  { name: 'Da Nang & Hoi An', note: 'Coast meets culture', description: 'Beach days, lantern nights and the easiest central Vietnam pairing.', href: '/en/da-nang-hoi-an', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=82', number: '02' },
  { name: 'Ho Chi Minh City', note: 'Big-city energy', description: 'Coffee, rooftop nights and a gateway to the Mekong Delta.', href: '/en/ho-chi-minh-city', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=82', number: '03' },
  { name: 'Phu Quoc', note: 'Island reset', description: 'Warm water, sunset beaches and an easy final stop.', href: '/en/phu-quoc', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=82', number: '04' },
];

const itineraries = [
  { days: '7 days', title: 'North & central highlights', route: 'Hanoi → Da Nang → Hoi An', description: 'A focused first look at food, history and the coast.', href: '/en/vietnam-itinerary-7-days', tone: 'jade' },
  { days: '10 days', title: 'The first-timer classic', route: 'Hanoi → Ha Long → Hoi An → Saigon', description: 'Our most balanced route for a first Vietnam trip.', href: '/en/vietnam-itinerary-10-days', tone: 'sun' },
  { days: '14 days', title: 'Vietnam, without the rush', route: 'North → Central → South → Island', description: 'See the country change while leaving room to slow down.', href: '/en/vietnam-itinerary-14-days', tone: 'blue' },
];

const budgetTiers = [
  { code: 'A', label: 'Smart budget', estimate: '≈ US$45/day', value: 'budget', text: 'Local food, simple stays and public transport.' },
  { code: 'B', label: 'Comfortable', estimate: '≈ US$85/day', value: 'mid', text: 'Well-rated hotels, easy transfers and more activities.' },
  { code: 'C', label: 'Premium', estimate: '≈ US$170/day', value: 'premium', text: 'Boutique stays, private transfers and premium experiences.' },
];

const bookingProducts: { key: AffiliateKey; icon: string; title: string; description: string }[] = [
  { key: 'flights', icon: '✈', title: 'Flights', description: 'Airlines and route comparison.' },
  { key: 'hotels', icon: '⌂', title: 'Hotels', description: 'Stays for every stop on the route.' },
  { key: 'experiences', icon: '◇', title: 'Experiences', description: 'Tours, cruises, tickets and day trips.' },
  { key: 'transfers', icon: '↝', title: 'Transfers', description: 'Airport pickups and ground transport.' },
  { key: 'esim', icon: '⌁', title: 'eSIM & Wi-Fi', description: 'Stay connected from arrival.' },
  { key: 'other', icon: '═', title: 'Trains & more', description: 'Rail tickets and multi-service booking.' },
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">VietnamGo<span>.</span></Link>
        <nav aria-label="Main navigation"><a href="#planner">Trip planner</a><Link href="/en/explore">Explore</Link><a href="#itineraries">Itineraries</a><a href="#book">Book</a></nav>
        <a className="navAction" href="#planner">Plan my trip <span aria-hidden="true">↗</span></a>
      </header>

      <section className="travelHero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">YOUR VIETNAM, MADE SIMPLE</div>
            <h1>Go further.<br /><em>Plan lighter.</em></h1>
            <p className="lead">See real destinations, choose a realistic A/B/C budget, build a route and then book the pieces that make it work.</p>
            <div className="heroActions"><a className="primary warm" href="#planner">Build my Vietnam trip <span>→</span></a><Link className="textLink" href="/en/explore">Real photos & budget guide <span>↗</span></Link></div>
            <div className="heroProof"><span>✓ No sign-up</span><span>✓ Free to use</span><span>✓ Planning estimates, not fake live prices</span></div>
          </div>
          <div className="heroVisual" style={{ backgroundImage: "linear-gradient(rgba(15,46,37,.08),rgba(15,46,37,.22)),url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1500&q=85')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Real Vietnam travel photography">
            <div className="floatingStamp"><span>START HERE</span><b>VN</b><small>8°–23° N</small></div>
            <div className="heroCaption"><span>Real places. Sensible budgets.</span><b>One trip plan.</b></div>
          </div>
        </div>
      </section>

      <section id="planner" className="plannerWrap">
        <div className="shell">
          <div className="sectionHead plannerHead"><div><span className="kicker">FREE TRIP PLANNER</span><h2>Tell us your travel rhythm.</h2></div><p>Choose who is going, how long you have, your A/B/C spending style and your travel mood.</p></div>
          <form className="planner" action="/en/planner">
            <label><span>01 · Who&apos;s going?</span><select name="style" defaultValue="couple"><option value="solo">Solo traveler</option><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option></select></label>
            <label><span>02 · How long?</span><select name="days" defaultValue="10"><option value="7">7 days</option><option value="10">10 days</option><option value="14">14 days</option><option value="21">21 days</option></select></label>
            <label><span>03 · Your budget</span><select name="budget" defaultValue="mid"><option value="budget">A · Smart budget</option><option value="mid">B · Comfortable</option><option value="premium">C · Premium</option></select></label>
            <label><span>04 · Your travel mood</span><select name="interest" defaultValue="mix"><option value="mix">A bit of everything</option><option value="food">Food & culture</option><option value="beach">Beaches & downtime</option><option value="nature">Nature & adventure</option></select></label>
            <button className="primary plannerButton" type="submit">Create my route <span aria-hidden="true">→</span></button>
          </form>
          <p className="plannerNote">No account needed. Your route opens instantly.</p>
        </div>
      </section>

      <section className="shell section">
        <div className="sectionHead"><div><span className="kicker">BUDGET A / B / C</span><h2>Design the trip around what you want to spend.</h2></div><p>These are planning estimates for Vietnam, not live booking prices. Pick a tier to preload the planner.</p></div>
        <div className="itineraryGrid">
          {budgetTiers.map((tier) => <Link className="itineraryCard" href={`/en/planner?days=10&style=couple&interest=mix&budget=${tier.value}`} key={tier.code}><div className="itineraryTop"><small>BUDGET {tier.code}</small><span>↗</span></div><b>{tier.code}</b><h3>{tier.label}</h3><p>{tier.text}</p><em>{tier.estimate}</em></Link>)}
        </div>
      </section>

      <section id="destinations" className="shell section destinationSection">
        <div className="sectionHead"><div><span className="kicker">REAL DESTINATION PHOTOS</span><h2>See the place before you add it.</h2></div><p>Short VietnamGo editorial notes help you decide where each destination fits in the route.</p></div>
        <div className="destinationGrid">
          {destinations.map((destination) => (
            <Link className="destinationCard" href={destination.href} key={destination.name}>
              <span className="destinationNumber">{destination.number}</span>
              <img src={destination.image} alt={destination.name} className="destinationArt" style={{ objectFit: 'cover', width: '100%' }} />
              <div className="destinationCopy"><small>{destination.note}</small><h3>{destination.name}</h3><p>{destination.description}</p><span className="cardArrow">Read review & guide ↗</span></div>
            </Link>
          ))}
        </div>
        <div className="heroActions"><Link className="secondary" href="/en/explore">Open all real photos + budget guide →</Link></div>
      </section>

      <section id="itineraries" className="itineraryBand">
        <div className="shell">
          <div className="sectionHead"><div><span className="kicker">POPULAR STARTING POINTS</span><h2>Good trips have a rhythm.</h2></div><p>Use a proven outline, then personalize the pace around what matters to you.</p></div>
          <div className="itineraryGrid">
            {itineraries.map((trip, index) => <Link className={`itineraryCard ${trip.tone}`} href={trip.href} key={trip.days}><div className="itineraryTop"><small>0{index + 1} · VIETNAM ITINERARY</small><span>↗</span></div><b>{trip.days}</b><h3>{trip.title}</h3><p>{trip.description}</p><em>{trip.route}</em></Link>)}
          </div>
        </div>
      </section>

      <section id="book" className="bookingSection">
        <div className="shell">
          <div className="bookingHeader"><div><span className="kicker">WHEN YOU&apos;RE READY</span><h2>Turn the route<br />into a real trip.</h2></div><p>Check current availability with connected partners after you know your route and budget.</p></div>
          <div className="bookingCategories">
            {bookingProducts.map((product) => (
              <article className="bookingCategory active" key={product.key}>
                <span className="bookingIcon">{product.icon}</span><small>PARTNERS CONNECTED</small><h3>{product.title}</h3><p>{product.description}</p>
                <div className="partnerLinks">{affiliates[product.key].partners.map((partner) => <a href={`/go/${product.key}?partner=${partner.id}&src=homepage&page=home`} target="_blank" rel="sponsored nofollow noopener" key={partner.id}>{partner.label} <span>→</span></a>)}</div>
              </article>
            ))}
          </div>
          <div className="affiliateDisclosure">Some booking links are affiliate links. VietnamGo may earn a commission at no extra cost to you.</div>
        </div>
      </section>

      <section className="finalCta shell"><span className="ctaCompass" aria-hidden="true">✦</span><div><span className="kicker">YOUR TRIP STARTS HERE</span><h2>Vietnam is a big idea.<br />Let&apos;s make it a plan.</h2></div><a className="primary warm" href="#planner">Build my free route <span>→</span></a></section>
      <footer className="siteFooter"><div className="shell footer"><b>VietnamGo<span>.</span></b><span>Independent Vietnam travel planning for curious first-time visitors.</span><div><a href="#planner">Planner</a><Link href="/en/explore">Explore</Link><a href="#book">Affiliate disclosure</a></div></div></footer>
    </main>
  );
}
