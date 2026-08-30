import { affiliates, type AffiliateKey } from '../../../lib/affiliates';

type Params = Promise<Record<string, string | string[] | undefined>>;
type Stop = { city: string; nights: number; why: string; ideas: string[] };

const plans: Record<string, Stop[]> = {
  '7-mix': [{ city:'Hanoi',nights:2,why:'Old Quarter, street food and your easiest introduction to Vietnam.',ideas:['Old Quarter food walk','Hoan Kiem Lake','Temple of Literature']},{city:'Da Nang',nights:2,why:'A convenient central base with beaches and easy transport.',ideas:['My Khe Beach','Marble Mountains','Son Tra Peninsula']},{city:'Hoi An',nights:2,why:'Lantern evenings, heritage streets and a slower final stop.',ideas:['Ancient Town','Cooking class','An Bang Beach']}],
  '7-beach': [{city:'Da Nang',nights:2,why:'Easy airport access plus one of Vietnam’s most convenient city beaches.',ideas:['My Khe Beach','Son Tra Peninsula','Seafood evening']},{city:'Hoi An',nights:2,why:'Pair beach time with a compact heritage town.',ideas:['An Bang Beach','Ancient Town','Basket boat trip']},{city:'Phu Quoc',nights:2,why:'Finish with island time and a resort-style stay.',ideas:['Beach day','Island hopping','Sunset market']}],
  '10-mix': [{city:'Hanoi',nights:3,why:'Food, history and a strong first base in northern Vietnam.',ideas:['Old Quarter food walk','Hoan Kiem Lake','Temple of Literature']},{city:'Ha Long Bay',nights:1,why:'A classic overnight limestone-bay experience from Hanoi.',ideas:['Overnight cruise','Kayaking','Cave visit']},{city:'Hoi An',nights:3,why:'Culture, food and beach access without changing hotels every day.',ideas:['Ancient Town','Cooking class','An Bang Beach']},{city:'Ho Chi Minh City',nights:2,why:'Finish with southern food, nightlife and easy onward flights.',ideas:['District 1 walk','Food tour','Mekong or Cu Chi day trip']}],
  '10-beach': [{city:'Ho Chi Minh City',nights:2,why:'A quick urban landing before heading to the coast.',ideas:['District 1','Coffee crawl','Rooftop evening']},{city:'Hoi An',nights:3,why:'A balanced beach-and-culture stop in central Vietnam.',ideas:['An Bang Beach','Ancient Town','Cooking class']},{city:'Phu Quoc',nights:4,why:'Enough time to slow down, island-hop and enjoy the beach.',ideas:['Beach day','Island hopping','Night market']}],
  '14-mix': [{city:'Hanoi',nights:3,why:'Start with northern culture, history and street food.',ideas:['Old Quarter food walk','Hoan Kiem Lake','Temple of Literature']},{city:'Ha Long Bay',nights:1,why:'Break up the city stay with an overnight cruise.',ideas:['Cruise','Kayaking','Sunrise on deck']},{city:'Da Nang & Hoi An',nights:4,why:'Central Vietnam gives you beaches, heritage and excellent food.',ideas:['Hoi An Ancient Town','My Khe Beach','Marble Mountains']},{city:'Ho Chi Minh City',nights:2,why:'A fast-paced southern contrast with great onward connections.',ideas:['District 1','Food tour','Mekong day trip']},{city:'Phu Quoc',nights:3,why:'End the trip with a relaxed island finale.',ideas:['Beach day','Island hopping','Sunset market']}],
  '14-beach': [{city:'Hanoi',nights:2,why:'A short culture-first introduction before the beach route.',ideas:['Old Quarter','Food walk','Hoan Kiem Lake']},{city:'Hoi An',nights:4,why:'Slow travel with easy access to An Bang Beach.',ideas:['An Bang Beach','Ancient Town','Cooking class']},{city:'Nha Trang',nights:3,why:'A lively coastal stop with islands and water activities.',ideas:['Island day','Beach time','Seafood']},{city:'Phu Quoc',nights:4,why:'Finish with the most relaxed section of the trip.',ideas:['Beach day','Island hopping','Night market']}],
};

const photos: Record<string,string> = {
  Hanoi:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1200&q=82',
  'Ha Long Bay':'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=82',
  'Da Nang':'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=82',
  'Hoi An':'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=82',
  'Da Nang & Hoi An':'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=82',
  'Ho Chi Minh City':'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=82',
  'Phu Quoc':'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=82',
  'Nha Trang':'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=82',
};

const budgetDaily: Record<string, number> = { budget:45, mid:85, premium:170 };
const bookingItems: {key:AffiliateKey;icon:string;title:string;text:string}[] = [
  {key:'flights',icon:'✈',title:'Flights',text:'Check international and domestic flight options.'},{key:'hotels',icon:'⌂',title:'Hotels',text:'Find stays for every stop on your route.'},{key:'experiences',icon:'◇',title:'Things to do',text:'Cruises, food tours, tickets and day trips.'},{key:'transfers',icon:'↝',title:'Transfers',text:'Airport pickups and ground transport.'},{key:'esim',icon:'⌁',title:'eSIM & Wi-Fi',text:'Get connected before you land.'},{key:'other',icon:'═',title:'Trains & more',text:'Rail tickets and other travel services.'}
];
const val=(x:string|string[]|undefined,fallback='')=>Array.isArray(x)?x[0]||fallback:String(x||fallback);

export default async function PlannerResult({searchParams}:{searchParams:Params}){
 const p=await searchParams;
 const days=val(p.days,'10'),interest=val(p.interest,'mix'),style=val(p.style,'couple'),budget=val(p.budget,'mid');
 const origin=val(p.origin,'Your city'),arrival=val(p.arrival,'Vietnam'),depart=val(p.depart),returnDate=val(p.return),guestParam=Number(val(p.travelers,'0'));
 const route=plans[`${days}-${interest}`]||plans[`${days}-mix`]||plans['10-mix'];
 const travelers=guestParam>0?guestParam:style==='solo'?1:style==='family'?4:2;
 const estimate=Number(days)*(budgetDaily[budget]||85)*travelers;
 const tier=budget==='budget'?'A · Smart budget':budget==='premium'?'C · Premium':'B · Comfortable';
 const breakdown=[['Stays',.38],['Food & coffee',.20],['Transport',.18],['Things to do',.14],['Flex buffer',.10]].map(([label,share])=>({label:String(label),amount:Math.round(estimate*Number(share))}));
 let dayCursor=1;
 return <main className="resultPage shell">
  <div className="resultNav"><a className="brand" href="/">VietnamGo<span>.</span></a><a className="secondary miniButton" href="/#planner">Edit search</a></div>

  <section className="tripProductHero">
    <div className="tripHeroCopy"><span className="kicker">YOUR VIETNAM TRIP</span><h1>{origin} <span>→</span> {arrival}</h1><p>{days} days · {travelers} traveler{travelers>1?'s':''} · {tier}{depart?` · ${depart}`:''}{returnDate?` → ${returnDate}`:''}</p><div className="tripTrust"><span>✓ Free itinerary</span><span>✓ Real Vietnam photography</span><span>✓ Live booking prices stay with partners</span></div></div>
    <div className="tripHeroImage" style={{backgroundImage:`linear-gradient(180deg,rgba(8,35,27,.05),rgba(8,35,27,.42)),url('${photos[route[0].city] || photos.Hanoi}')`}}><div><small>FIRST STOP</small><b>{route[0].city}</b><span>{route[0].nights} nights</span></div></div>
  </section>

  <section className="tripStats">
    <article><small>PLANNING ESTIMATE</small><b>≈ US${estimate.toLocaleString()}</b><span>In-country estimate for {travelers}; international flights excluded.</span></article>
    <article><small>TRIP PACE</small><b>{Number(days)/route.length>=3?'Relaxed':'Balanced'}</b><span>{route.length} main stops with fewer hotel changes.</span></article>
    <article><small>TRAVEL MOOD</small><b>{interest==='beach'?'Beach time':interest==='food'?'Food & culture':interest==='nature'?'Nature':'Best of Vietnam'}</b><span>A starting route you can adjust before booking.</span></article>
  </section>

  <section className="routeSection visualRoute"><div className="routeHeading"><span className="kicker">YOUR ROUTE</span><h2>A day-by-day framework.</h2><p>Use this as the backbone of the trip. The exact hotels, flights and activities are booked separately with the partners below.</p></div>
    <div className="routeCards">{route.map((stop,i)=>{const start=dayCursor;const end=Math.min(Number(days),dayCursor+stop.nights);dayCursor+=stop.nights;return <article className="routeCard" key={stop.city}>
      <div className="routePhoto"><img src={photos[stop.city] || photos.Hanoi} alt={`${stop.city}, Vietnam`} /><span>STOP {String(i+1).padStart(2,'0')}</span></div>
      <div className="routeCardBody"><div className="routeMeta"><span>DAY {start}{end>start?`–${end}`:''}</span><span>{stop.nights} NIGHT{stop.nights>1?'S':''}</span></div><h3>{stop.city}</h3><p>{stop.why}</p><div className="ideaChips">{stop.ideas.map(idea=><span key={idea}>{idea}</span>)}</div></div>
    </article>})}</div>
  </section>

  <section className="budgetSection"><div className="budgetIntro"><span className="kicker">BUDGET SNAPSHOT</span><h2>Where the estimate may go.</h2><p>This is a planning split, not a quote. Actual prices change with dates, room type, route and availability.</p></div><div className="budgetPanel"><div className="budgetTotal"><small>ESTIMATED TRIP SPEND</small><b>US${estimate.toLocaleString()}</b><span>{tier} · {travelers} traveler{travelers>1?'s':''}</span></div><div className="budgetRows">{breakdown.map(item=><div key={item.label}><span>{item.label}</span><b>≈ US${item.amount.toLocaleString()}</b></div>)}</div></div></section>

  <section className="bookingFunnel"><span className="kicker light">BOOK YOUR TRIP</span><h2>Turn the itinerary into real reservations.</h2><p className="bookingIntro">VietnamGo helps structure the trip. Click a partner to see their current prices and availability.</p><div className="actionGrid">{bookingItems.map((item,index)=><article key={item.key}><span className="actionIcon">{item.icon}</span><small>BOOKING {index+1}</small><h3>{item.title}</h3><p>{item.text}</p><div className="partnerLinks">{affiliates[item.key].partners.map(partner=><a key={partner.id} className="affiliateCta" href={`/go/${item.key}?partner=${partner.id}&src=planner&page=${days}-day-route`} target="_blank" rel="nofollow sponsored noopener">Check {partner.label} →</a>)}</div></article>)}</div><div className="disclosure">Some links are affiliate links. VietnamGo may earn a commission at no extra cost to you. Prices and availability are supplied by the booking partner.</div></section>

  <section className="nextBox"><div><span className="kicker">WANT ANOTHER VERSION?</span><h2>Tune the route in seconds.</h2><p>Change arrival city, dates, travelers, budget or travel style and build another free itinerary.</p></div><div className="heroActions"><a className="primary" href="/#planner">Edit trip</a><a className="secondary" href="/en/guides">Read travel guides</a></div></section>
 </main>;
}
