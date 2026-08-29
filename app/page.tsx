import Link from 'next/link';

const destinations = [
  { name: 'Hanoi', note: 'Old-world charm', description: 'Street-food mornings, lake walks and a thousand years of stories.', href: '/en/hanoi', className: 'hanoi', number: '01' },
  { name: 'Da Nang & Hoi An', note: 'Coast meets culture', description: 'Beach days, lantern nights and the easiest central Vietnam pairing.', href: '/en/da-nang-hoi-an', className: 'hoian', number: '02' },
  { name: 'Ho Chi Minh City', note: 'Big-city energy', description: 'Coffee, rooftop nights and a gateway to the Mekong Delta.', href: '/en/ho-chi-minh-city', className: 'saigon', number: '03' },
  { name: 'Phu Quoc', note: 'Island reset', description: 'Warm water, sunset beaches and an easy final stop.', href: '/en/phu-quoc', className: 'phuquoc', number: '04' },
];

const itineraries = [
  { days: '7 days', title: 'North & central highlights', route: 'Hanoi → Da Nang → Hoi An', description: 'A focused first look at food, history and the coast.', href: '/en/vietnam-itinerary-7-days', tone: 'jade' },
  { days: '10 days', title: 'The first-timer classic', route: 'Hanoi → Ha Long → Hoi An → Saigon', description: 'Our most balanced route for a first Vietnam trip.', href: '/en/vietnam-itinerary-10-days', tone: 'sun' },
  { days: '14 days', title: 'Vietnam, without the rush', route: 'North → Central → South → Island', description: 'See the country change while leaving room to slow down.', href: '/en/vietnam-itinerary-14-days', tone: 'blue' },
];

const valueProps = [
  ['01', 'Built for first trips', 'Clear choices and realistic pacing, without the travel-planning rabbit hole.'],
  ['02', 'Independent advice', 'Useful recommendations first. Affiliate relationships are always disclosed.'],
  ['03', 'One route, fewer tabs', 'Plan the journey, then find the bookings that make each stop work.'],
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">VietnamGo<span>.</span></Link>
        <nav aria-label="Main navigation"><a href="#planner">Trip planner</a><a href="#destinations">Destinations</a><a href="#itineraries">Itineraries</a><a href="#book">Book</a></nav>
        <a className="navAction" href="#planner">Plan my trip <span aria-hidden="true">↗</span></a>
      </header>

      <section className="travelHero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">YOUR VIETNAM, MADE SIMPLE</div>
            <h1>Go further.<br /><em>Plan lighter.</em></h1>
            <p className="lead">A free, practical trip planner for curious travelers — from your first route idea to the bookings that bring it to life.</p>
            <div className="heroActions"><a className="primary warm" href="#planner">Build my Vietnam trip <span>→</span></a><a className="textLink" href="#destinations">Explore destinations <span>↓</span></a></div>
            <div className="heroProof"><span>✓ No sign-up</span><span>✓ Free to use</span><span>✓ Made for first-time visitors</span></div>
          </div>
          <div className="heroVisual" aria-label="A visual journey through Vietnam">
            <div className="sunDisc" /><div className="mountain mountainBack" /><div className="mountain mountainFront" />
            <div className="routeLine"><span className="routeDot start" /><span className="routeDot end" /></div>
            <div className="floatingStamp"><span>START HERE</span><b>VN</b><small>8°–23° N</small></div>
            <div className="heroCaption"><span>From street-food alleys</span><b>to island sunsets.</b></div>
          </div>
        </div>
      </section>

      <section id="planner" className="plannerWrap">
        <div className="shell">
          <div className="sectionHead plannerHead"><div><span className="kicker">FREE TRIP PLANNER</span><h2>Tell us your travel rhythm.</h2></div><p>Four quick choices. One sensible starter route you can tune, save and use to plan the rest of your trip.</p></div>
          <form className="planner" action="/en/planner">
            <label><span>01 · Who&apos;s going?</span><select name="style" defaultValue="couple"><option value="solo">Solo traveler</option><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option></select></label>
            <label><span>02 · How long?</span><select name="days" defaultValue="10"><option value="7">7 days</option><option value="10">10 days</option><option value="14">14 days</option><option value="21">21 days</option></select></label>
            <label><span>03 · Your budget</span><select name="budget" defaultValue="mid"><option value="budget">Budget</option><option value="mid">Comfortable</option><option value="premium">Premium</option></select></label>
            <label><span>04 · Your travel mood</span><select name="interest" defaultValue="mix"><option value="mix">A bit of everything</option><option value="food">Food & culture</option><option value="beach">Beaches & downtime</option><option value="nature">Nature & adventure</option></select></label>
            <button className="primary plannerButton" type="submit">Create my route <span aria-hidden="true">→</span></button>
          </form>
          <p className="plannerNote">No account needed. Your route opens instantly.</p>
        </div>
      </section>

      <section id="destinations" className="shell section destinationSection">
        <div className="sectionHead"><div><span className="kicker">PLACES WORTH THE DETOUR</span><h2>Four ways into Vietnam.</h2></div><p>Pick the feeling you want first. We&apos;ll help with the route after.</p></div>
        <div className="destinationGrid">
          {destinations.map((destination) => (
            <Link className={`destinationCard ${destination.className}`} href={destination.href} key={destination.name}>
              <span className="destinationNumber">{destination.number}</span><div className="destinationArt" aria-hidden="true"><span className="artSun" /><span className="artLand" /></div>
              <div className="destinationCopy"><small>{destination.note}</small><h3>{destination.name}</h3><p>{destination.description}</p><span className="cardArrow">Explore guide ↗</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="itineraries" className="itineraryBand">
        <div className="shell">
          <div className="sectionHead"><div><span className="kicker">POPULAR STARTING POINTS</span><h2>Good trips have a rhythm.</h2></div><p>Use a proven outline, then personalize the pace around what matters to you.</p></div>
          <div className="itineraryGrid">
            {itineraries.map((trip, index) => <Link className={`itineraryCard ${trip.tone}`} href={trip.href} key={trip.days}><div className="itineraryTop"><small>0{index + 1} · VIETNAM ITINERARY</small><span>↗</span></div><b>{trip.days}</b><h3>{trip.title}</h3><p>{trip.description}</p><em>{trip.route}</em></Link>)}
          </div>
        </div>
      </section>

      <section className="valueSection">
        <div className="shell valueGrid">
          <div className="valueIntro"><span className="kicker light">WHY VIETNAMGO</span><h2>Less spreadsheet.<br />More Vietnam.</h2><p>Travel planning should create excitement, not decision fatigue.</p></div>
          <div className="valueList">{valueProps.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </div>
      </section>

      <section id="book" className="bookingSection">
        <div className="shell">
          <div className="bookingHeader"><div><span className="kicker">WHEN YOU&apos;RE READY</span><h2>Turn the route<br />into a real trip.</h2></div><p>Check the essential bookings in the order that makes sense. Partners that are not connected yet stay clearly marked as coming soon.</p></div>
          <div className="bookingCategories">
            <a className="bookingCategory active" href="/go/flights?src=homepage&page=home" target="_blank" rel="sponsored nofollow noopener"><span className="bookingIcon">✈</span><small>BOOK NOW</small><h3>Flights</h3><p>Compare routes and check current fares.</p><b>Search flights →</b></a>
            <article className="bookingCategory"><span className="bookingIcon">⌂</span><small>COMING SOON</small><h3>Hotels</h3><p>Find the right area to stay at every stop.</p><span className="soonPill">Partner pending</span></article>
            <article className="bookingCategory"><span className="bookingIcon">◇</span><small>COMING SOON</small><h3>Experiences</h3><p>Food tours, cruises, tickets and day trips.</p><span className="soonPill">Partner pending</span></article>
            <article className="bookingCategory"><span className="bookingIcon">↝</span><small>COMING SOON</small><h3>Transfers & eSIM</h3><p>Connect the practical pieces of your route.</p><span className="soonPill">Partner pending</span></article>
          </div>
          <div className="affiliateDisclosure">Some booking links are affiliate links. VietnamGo may earn a commission at no extra cost to you.</div>
        </div>
      </section>

      <section className="finalCta shell"><span className="ctaCompass" aria-hidden="true">✦</span><div><span className="kicker">YOUR TRIP STARTS HERE</span><h2>Vietnam is a big idea.<br />Let&apos;s make it a plan.</h2></div><a className="primary warm" href="#planner">Build my free route <span>→</span></a></section>

      <footer className="siteFooter"><div className="shell footer"><b>VietnamGo<span>.</span></b><span>Independent Vietnam travel planning for curious first-time visitors.</span><div><a href="#planner">Planner</a><a href="#destinations">Guides</a><a href="#book">Affiliate disclosure</a></div></div></footer>
    </main>
  );
}
