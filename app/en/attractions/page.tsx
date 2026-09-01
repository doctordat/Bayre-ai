import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Vietnam Attractions & Things to Do', description: 'Plan Vietnam attractions by city, time and ticket needs: Hanoi, Da Nang, Hoi An and Ho Chi Minh City visitor guides for first-time travelers.', alternates: { canonical: '/en/attractions' } };

const groups = [
  { city: 'Hanoi', intro: 'Compact city landmarks, history and walkable neighborhoods.', items: [
    ['Hoan Kiem Lake', '/en/attractions/hoan-kiem-lake', 'Free landmark · 45–90 min', 'A simple first walk around Hanoi’s central lake.'],
    ['Hanoi Old Quarter', '/en/attractions/hanoi-old-quarter', 'Neighborhood · half day', 'Food, walking, shopping and the best first-time base.'],
    ['Ho Chi Minh Mausoleum', '/en/attractions/ho-chi-minh-mausoleum', 'Access rules · 1–2 hours', 'A history visit where official access guidance matters.'],
    ['Temple of Literature', '/en/attractions/temple-of-literature-hanoi', 'Ticketed culture · 60–90 min', 'A calm architecture and history stop near central Hanoi.'],
  ] },
  { city: 'Da Nang & Hoi An', intro: 'Beach, viewpoints, heritage and structured day trips.', items: [
    ['My Khe Beach', '/en/attractions/my-khe-beach', 'Public beach · 1–3 hours', 'The easiest flexible downtime on the central coast.'],
    ['Marble Mountains', '/en/attractions/marble-mountains-da-nang', 'Ticketed nature · 2–3 hours', 'Caves, pagodas and viewpoints with stairs to plan for.'],
    ['Son Tra Peninsula', '/en/attractions/son-tra-peninsula', 'Nature route · 3–5 hours', 'Viewpoints and coastal roads shaped by weather and access.'],
    ['Ba Na Hills', '/en/attractions/ba-na-hills', 'Full-day ticketed trip', 'A planned mountain day; verify current official ticket information.'],
    ['Hoi An Ancient Town', '/en/attractions/hoi-an-ancient-town', 'Heritage visit · 2–4 hours', 'Morning details and evening atmosphere in the old town.'],
    ['Dragon Bridge', '/en/attractions/dragon-bridge-da-nang', 'Free landmark · 30–90 min', 'An easy riverfront evening stop; verify event timing.'],
  ] },
  { city: 'Ho Chi Minh City', intro: 'History, markets, city walks and regional day trips from the south.', items: [
    ['War Remnants Museum', '/en/attractions/war-remnants-museum', 'History museum · 1.5–3 hours', 'A significant history visit that deserves time and reflection.'],
    ['Cu Chi Tunnels', '/en/attractions/cu-chi-tunnels', 'History day trip · half day+', 'A structured excursion where transport and site conditions matter.'],
    ['Ben Thanh Market', '/en/attractions/ben-thanh-market', 'Market · 45–90 min', 'A central food and shopping stop with flexible browsing time.'],
    ['District 1 walking route', '/en/attractions/district-1-walking-route', 'Free city walk · 2–4 hours', 'Connect central sights, cafes and streets at your own pace.'],
    ['Mekong Delta from Ho Chi Minh City', '/en/attractions/mekong-delta-from-ho-chi-minh-city', 'Regional day trip · full day', 'Compare road time, boat time and tour inclusions before booking.'],
  ] },
  { city: 'Phu Quoc', intro: 'Beach areas, boat days, markets and southern island experiences.', items: [
    ['Phu Quoc beaches and areas', '/en/attractions/phu-quoc-beaches-and-areas', 'Area guide · half day', 'Choose your base by beach style, dining and transfer needs.'],
    ['Phu Quoc island-hopping', '/en/attractions/phu-quoc-island-hopping', 'Boat day trip · full day', 'Compare sea conditions, route and operator inclusions.'],
    ['Phu Quoc Night Market', '/en/attractions/phu-quoc-night-market', 'Evening market · 60–120 min', 'Flexible food and browsing stop near the island’s central area.'],
    ['Hon Thom cable car', '/en/attractions/hon-thom-cable-car', 'Ticketed experience · half day+', 'A structured southern-island day where operating conditions matter.'],
  ] },
];

export default function AttractionsPage() { return <main className="attractionsHub shell"><a className="brand" href="/">VietnamGo<span>.</span></a><header><span className="kicker">ATTRACTIONS BY CITY</span><h1>Know what is worth adding to your Vietnam route.</h1><p>Use practical visitor guides to decide what to see, how long to allow, whether tickets matter and where each attraction fits in your itinerary.</p></header>{groups.map(group => <section key={group.city}><div className="hubHeading"><span className="kicker">{group.city.toUpperCase()}</span><h2>{group.city}</h2><p>{group.intro}</p></div><div className="attractionCards">{group.items.map(([name,href,meta,desc]) => <a className="attractionCard" href={href} key={href}><span className="kicker">{meta}</span><h3>{name}</h3><p>{desc}</p><strong>Read visitor guide →</strong></a>)}</div></section>)}<section className="hubCta"><span className="kicker">NEXT STEP</span><h2>Turn attractions into a route.</h2><p>Choose your days, arrival city, pace and budget in the free VietnamGo planner.</p><a className="primary" href="/#planner">Build my Vietnam trip →</a></section></main>; }
