# VietnamGo — Western Traveler Search-Intent Research

_Date: 2026-08-31 · Google SERP/PAA sampled with US, UK and Australia locales_

## Method, evidence level and limitations

Queries were sampled in English using Google locale parameters (`gl=us`, `gl=gb`, `gl=au`). This is **qualitative SERP evidence only**: PAA, AI Overview and visible result phrasing indicate recurring question shapes, but they do **not** prove search volume, trend direction, ranking difficulty or commercial opportunity. The current pass does not yet include Keyword Planner/Google Trends volume, Search Console impressions, German-language evidence, or a full review of 2–3 trusted organic results per cluster.

Treat the matrix below as a hypothesis/prioritization input, not a market-size conclusion. Before publishing visa, entry, health, weather, transport or ticket facts, read official/primary sources, record the source URL and add a `checked on` date. PAA snippets are never a factual source.

## Query-intent matrix

| Market/query family | Questions visible in SERP/PAA | Decision need | Existing VietnamGo coverage | Gap/action | Priority | Freshness risk |
|---|---|---|---|---|---|---|
| US — first time Vietnam | What should I know? Biggest mistakes? Must-sees? Is it safe? Best time? Visa? | Pre-trip confidence | Homepage, itineraries, attractions | Build first-time pillar, not separate thin FAQ pages | P0 | Medium |
| US — 10-day itinerary | Good 10-day route? Is 10 days enough? Transit? Couple/solo/family? Beaches vs history? | Route and pace | `/en/vietnam-itinerary-10-days`, planner | Expand as canonical; do not create duplicate | P0 existing | Low |
| UK — where to stay | Which area? Hotel cost? Book in advance? Airport transfer? Safe for first timers? | Neighborhood/hotel decision | Hanoi/HCMC/Da Nang-Hoi An/Phu Quoc guides | Expand city pages into explicit stay matrices | P0 existing | Medium |
| US — best time | Best month? Weather-wise? Region differences? December/January? October? | Match route to weather | No dedicated page | New `/en/best-time-to-visit-vietnam` with regional decision table | P0 | High |
| UK — two-week cost | Total cost? Spending money? Is $1,000/$2,000 enough? Pounds? | Budget assumptions | `/en/vietnam-travel-cost` | Expand canonical with 14-day examples; avoid many currency pages | P0 existing | Medium |
| AU — transport | Flight or train? Can tourists travel by train? Solo travel? Grab/agent? Budget transport? | Mode trade-off | Planner route only | New transport pillar + Hanoi–Da Nang decision page | P1 | Medium |
| AU/US — eSIM | How to use eSIM? Which coverage? Activation/documents? | Connectivity purchase | `/en/vietnam-esim` | Expand canonical using official/provider evidence | P1 existing | High |
| US — visa/entry | Requirements? Passport validity? Immigration questions? Transit visa? | Entry compliance | No trusted guide | Publish only after official immigration/embassy research | P1 gated | Very high |
| Cross-market — safety/mistakes | Street food? Motorbike? scams? language? money/payment? | Risk reduction | Fragmented | First-time pillar sections, then standalone only if depth warrants | P1 | High |

## Observed search themes

1. **First trip confidence:** mistakes, safety, weather, visa, must-sees and cultural expectations.
2. **Route personalization:** duration, couple/solo/family, history vs beach vs hiking, domestic transit.
3. **Stay decisions:** neighborhood, noise, walkability, airport access, budget and booking timing.
4. **Cost reality:** spending money, trip-total assumptions, what is excluded, high-impact upgrades.
5. **Transport trade-offs:** train vs flight vs bus, solo convenience, Grab/local ground transport.
6. **Travel essentials:** eSIM activation, passport/visa rules, money, health and packing.

## Cannibalization rules

- Keep 7/10/14-day intent on existing itinerary URLs; expand them instead of creating “first-time 10 days” duplicates.
- Keep hotel-area queries within city guides until one city has enough unique depth for a dedicated stay page.
- Keep 2-week cost questions within `/en/vietnam-travel-cost` unless a separate page can offer a materially different calculator/assumption model.
- Attraction questions belong under `/en/attractions/...`; city guides stay focused on bases, nights and route fit.
- Never create one URL per PAA question.

## Priority roadmap

### P0

1. `/en/vietnam-first-time-guide` — first-time pillar: route length, arrival city, regional weather, basic safety/money/transport checklist, links to official visa source, planner CTA.
2. `/en/best-time-to-visit-vietnam` — regional weather decision aid, route implications, month/region matrix with checked-on dates.
3. Expand `/en/vietnam-travel-cost` — 7/10/14-day scenarios, assumptions/exclusions and high-impact booking decisions.
4. Expand city destination pages with explicit “where to stay” decision matrices.

### P1

- `/en/getting-around-vietnam` transport pillar.
- `/en/hanoi-to-da-nang-flight-vs-train`.
- Expand eSIM with activation/coverage/provider evidence.
- Visa/entry guide only after official-source research.

### P2

- Audience variants (solo, family, couple) only after Search Console shows demand.
- Currency-specific cost content should remain conversions/notes, not duplicate pages.

## Research gate before implementation

Before coding the three candidates below, add an organic-source table for each cluster with title, URL, publisher type (official/editorial/forum/commercial), content angle and access date. Add Google Trends, Keyword Planner or Search Console evidence when available; otherwise preserve the qualitative label. Germany requires a separate German-language SERP pass.

## Next three content candidates (not volume-validated)

1. **Vietnam First-Time Guide** — cross-cluster pillar and internal-link source; keep it distinct from itinerary pages.
2. **Best Time to Visit Vietnam** — regional weather decision need; avoid claiming one universal best month.
3. **Vietnam Travel Cost deep expansion** — expand the existing URL with assumptions/exclusions and 7/10/14-day scenarios.
