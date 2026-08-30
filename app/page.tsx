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

const plannerSteps = [
  { n: '01', title: 'Plan the route first', text: 'Choose dates, pace, interests and budget before you start opening ten booking tabs.' },
  { n: '02', title: 'See a realistic estimate', text: 'Get a planning budget for stays, food, transport and activities without pretending it is a live quote.' },
  { n: '03', title: 'Book with connected partners', text: 'When the route makes sense, check current prices with airlines and travel partners.' },
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">VietnamGo<span>.</span></Link>
        <nav aria-label="Main navigation"><a href="#planner">Trip planner</a><Link href="/en/guides">Guides</Link><Link href="/en/explore">Explore</Link><a href="#book">Book</a></nav>
        <a className="navAction" href="#planner">Plan my trip <span aria-hidden="true">↗</span></a>
      </header>

      <section className="travelHero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">VIETNAM TRIP PLANNING FOR FIRST-TIME VISITORS</div>
            <h1>Go further.<br /><em>Plan lighter.</em></h1>
            <p className="lead">Tell us where you are flying from, your dates and travel style. VietnamGo builds a sensible Vietnam route, estimates the budget, then helps you book the pieces.</p>
            <div className="heroActions"><a className="primary warm" href="#planner">Build my Vietnam trip <span>→</span></a><Link className="textLink" href="/en/guides">Read Vietnam travel guides <span>↗</span></Link></div>
            <div className="heroProof"><span>✓ No sign-up</span><span>✓ Free route planner</span><span>✓ Real destination photos</span><span>✓ Live prices stay with booking partners</span></div>
          </div>
          <div className="heroVisual" style={{ backgroundImage: "linear-gradient(rgba(15,46,37,.08),rgba(15,46,37,.22)),url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1500&q=85')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Real Vietnam travel photography">
            <div className="floatingStamp"><span>START HERE</span><b>VN</b><small>8°–23° N</small></div>
            <div className="heroCaption"><span>Real places. Sensible budgets.</span><b>One trip plan.</b></div>
          </div>
        </div>
      </section>

      <section id="planner" className="plannerWrap">
        <div className="shell">
          <div className="plannerBadge">PLAN → COMPARE → BOOK</div>
          <div className="sectionHead plannerHead"><div><span className="kicker">FREE VIETNAM TRIP SEARCH</span><h2>Start with the trip you actually want to take.</h2></div><p>Enter the basics. We use them to shape the itinerary and estimate — not to pretend we have live airline inventory.</p></div>
          <form className="travelSearch" action="/en/planner">
            <div className="searchPrimary">
              <label className="searchField wide"><span>From</span><input name="origin" type="text" placeholder="e.g. London, Sydney, Berlin" required /></label>
              <label className="searchField wide"><span>Arrive in Vietnam</span><select name="arrival" defaultValue="Hanoi"><option>Hanoi</option><option>Da Nang</option><option>Ho Chi Minh City</option><option>Phu Quoc</option><option value="Vietnam">Not sure yet</option></select></label>
              <label className="searchField"><span>Depart</span><input name="depart" type="date" /></label>
              <label className="searchField"><span>Return</span><input name="return" type="date" /></label>
              <label className="searchField"><span>Travelers</span><select name="travelers" defaultValue="2"><option value="1">1 traveler</option><option value="2">2 travelers</option><option value="3">3 travelers</option><option value="4">4 travelers</option><option value="5">5 travelers</option><option value="6">6 travelers</option></select></label>
            </div>
            <div className="searchSecondary">
              <label><span>Trip length</span><select name="days" defaultValue="10"><option value="7">7 days</option><option value="10">10 days</option><option value="14">14 days</option></select></label>
              <label><span>Budget</span><select name="budget" defaultValue="mid"><option value="budget">A · Smart budget</option><option value="mid">B · Comfortable</option><option value="premium">C · Premium</option></select></label>
              <label><span>Travel style</span><select name="style" defaultValue="couple"><option value="solo">Solo</option><option value="couple">Couple</option><option value="friends">Friends</option><option value="family">Family</option></select></label>
              <label><span>What matters most?</span><select name="interest" defaultValue="mix"><option value="mix">A bit of everything</option><option value="food">Food & culture</option><option value="beach">Beaches & downtime</option><option value="nature">Nature & adventure</option></select></label>
              <button className="primary plannerButton searchButton" type="submit"><span>Build my trip</span><span aria-hidden="true">→</span></button>
            </div>
          </form>
          <div className="searchTrust"><span>Planning estimate only</span><span>•</span><span>No account required</span><span>•</span><span>Current booking prices come from partners</span></div>
        </div>
      </section>

      <section className="processBand">
        <div className="shell processGrid">
          {plannerSteps.map((step) => <article key={step.n}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
        </div>
      </section>

      <section className="valueSection">
        <div className="shell valueGrid">
          <div className="valueIntro"><span className="kicker light">VIETNAMGO EDITORIAL METHOD</span><h2>Answer the travel questions before the checkout questions.</h2><p>We design the route around pace, geography and realistic spending first. Booking links come after the plan makes sense.</p><Link className="valueLink" href="/en/guides">Browse the travel guides →</Link></div>
          <div className="valueList">
            <article><span>01</span><div><h3>Where should I land?</h3><p>Start from Hanoi, Da Nang, Ho Chi Minh City or Phu Quoc depending on the route you want — not just the cheapest-looking flight.</p></div></article>
            <article><span>02</span><div><h3>How much should I budget?</h3><p>Use A/B/C spending bands to compare a smart-budget, comfortable or premium version of the same trip.</p></div></article>
            <article><span>03</span><div><h3>What should I book first?</h3><p>Lock the route, then flights and hotels, then add experiences, transfers, eSIM and trains where they actually help.</p></div></article>
          </div>
        </div>
      </section>

      <section id="itineraries" className="itineraryBand">
        <div className="shell">
          <div className="sectionHead"><div><span className="kicker">POPULAR TRIP IDEAS</span><h2>Start from a route that already makes geographic sense.</h2></div><p>Choose a proven outline, then personalize it around your dates, pace and spending style.</p></div>
          <div className="itineraryGrid">
            {itineraries.map((trip, index) => <Link className={`itineraryCard ${trip.tone}`} href={trip.href} key={trip.days}><div className="itineraryTop"><small>0{index + 1} · VIETNAM ITINERARY</small><span>↗</span></div><b>{trip.days}</b><h3>{trip.title}</h3><p>{trip.description}</p><em>{trip.route}</em></Link>)}
          </div>
        </div>
      </section>

      <section className="shell section">
        <div className="sectionHead"><div><span className="kicker">BUDGET A / B / C</span><h2>Design the trip around what you want to spend.</h2></div><p>These are planning estimates for Vietnam, not live booking prices. Pick a tier to preload the planner.</p></div>
        <div className="itineraryGrid">
          {budgetTiers.map((tier) => <Link className="itineraryCard budgetCard" href={`/en/planner?days=10&style=couple&interest=mix&budget=${tier.value}`} key={tier.code}><div className="itineraryTop"><small>BUDGET {tier.code}</small><span>↗</span></div><b>{tier.code}</b><h3>{tier.label}</h3><p>{tier.text}</p><em>{tier.estimate}</em></Link>)}
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

      <section id="book" className="bookingSection">
        <div className="shell">
          <div className="bookingHeader"><div><span className="kicker">WHEN YOU&apos;RE READY</span><h2>Turn the route<br />into a real trip.</h2></div><p>Check current availability with connected partners after you know your route and budget. VietnamGo does not invent or cache live prices.</p></div>
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
      <footer className="siteFooter"><div className="shell footer"><b>VietnamGo<span>.</span></b><span>Independent Vietnam travel planning for curious first-time visitors.</span><div><a href="#planner">Planner</a><Link href="/en/guides">Guides</Link><Link href="/en/explore">Explore</Link><a href="#book">Affiliate disclosure</a></div></div></footer>
      <a className="mobilePlanCta" href="#planner"><span>Plan my Vietnam trip</span><b>→</b></a>
    </main>
  );
}
