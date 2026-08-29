import Link from 'next/link';

const destinations = [
  ['Hanoi', 'Street food, Old Quarter, Ha Long gateway', '/en/hanoi'],
  ['Da Nang & Hoi An', 'Beaches, lantern nights, central Vietnam', '/en/da-nang-hoi-an'],
  ['Ho Chi Minh City', 'Food, nightlife, Mekong access', '/en/ho-chi-minh-city'],
  ['Phu Quoc', 'Island beaches and resort stays', '/en/phu-quoc'],
];

const itineraries = [
  ['7 days', 'Focused first trip', '/en/vietnam-itinerary-7-days'],
  ['10 days', 'Best all-round starter', '/en/vietnam-itinerary-10-days'],
  ['14 days', 'North to south without rushing', '/en/vietnam-itinerary-14-days'],
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">VietnamGo<span>.</span></Link>
        <nav>
          <a href="#planner">Trip Planner</a>
          <a href="#destinations">Destinations</a>
          <a href="#itineraries">Itineraries</a>
          <a href="#book">Book</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">VIETNAM, PLANNED SMARTER</div>
        <h1>Your whole Vietnam trip,<br />planned in one place.</h1>
        <p className="lead">Build a personalized route, estimate your budget, then compare flights, stays and experiences when you are ready to book.</p>
        <div className="heroActions">
          <a className="primary" href="#planner">Plan my trip</a>
          <a className="secondary" href="#destinations">Explore Vietnam</a>
        </div>
        <div className="trust">Free planner · No sign-up · Built for first-time Vietnam travelers</div>
      </section>

      <section id="planner" className="plannerWrap">
        <div className="shell">
          <div className="sectionHead">
            <div><span className="kicker">FREE TRIP PLANNER</span><h2>Start with the trip you want.</h2></div>
            <p>Our first version uses a lightweight rules engine, so planning stays free while we validate what travelers actually need.</p>
          </div>
          <form className="planner" action="/en/planner">
            <label>Travel style<select name="style" defaultValue="couple"><option value="solo">Solo</option><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option></select></label>
            <label>Trip length<select name="days" defaultValue="10"><option>7</option><option>10</option><option>14</option><option>21</option></select></label>
            <label>Budget<select name="budget" defaultValue="mid"><option value="budget">Budget</option><option value="mid">Comfortable</option><option value="premium">Premium</option></select></label>
            <label>What do you love?<select name="interest" defaultValue="mix"><option value="mix">A bit of everything</option><option value="food">Food & culture</option><option value="beach">Beaches</option><option value="nature">Nature & adventure</option></select></label>
            <button className="primary plannerButton" type="submit">Build my Vietnam route →</button>
          </form>
        </div>
      </section>

      <section id="destinations" className="shell section">
        <div className="sectionHead"><div><span className="kicker">WHERE TO GO</span><h2>Vietnam essentials.</h2></div><p>Start with the places most first-time travelers combine into one route.</p></div>
        <div className="cards">
          {destinations.map(([name, desc, href]) => <article className="card" key={name}><div className="placeholder">{name.slice(0,1)}</div><h3>{name}</h3><p>{desc}</p><Link href={href}>Explore {name} →</Link></article>)}
        </div>
      </section>

      <section id="itineraries" className="itineraryBand">
        <div className="shell">
          <div className="sectionHead"><div><span className="kicker">STARTER ITINERARIES</span><h2>Pick a trip length, then personalize it.</h2></div><p>These pages are built around common high-intent planning questions from first-time Vietnam travelers.</p></div>
          <div className="itineraryGrid">{itineraries.map(([days, desc, href]) => <Link className="itineraryCard" href={href} key={days}><small>VIETNAM ITINERARY</small><b>{days}</b><span>{desc}</span><em>Open guide →</em></Link>)}</div>
        </div>
      </section>

      <section id="book" className="bookBand">
        <div className="shell bookGrid">
          <div><span className="kicker light">BOOK SMARTER</span><h2>One itinerary. Every booking decision.</h2><p>We will connect each stop to useful flight, hotel, activity and transfer options — with affiliate links clearly disclosed.</p></div>
          <div className="bookingCards"><div>✈️ <b>Flights</b><span>Compare routes to Vietnam</span></div><div>🏨 <b>Hotels</b><span>Find the right area to stay</span></div><div>🎟️ <b>Experiences</b><span>Tours, tickets & transfers</span></div></div>
        </div>
      </section>

      <footer className="shell footer"><b>VietnamGo.</b><span>Independent Vietnam travel planning. Affiliate partnerships may support the site at no extra cost to travelers.</span></footer>
    </main>
  );
}
