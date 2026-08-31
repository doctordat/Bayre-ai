# VietnamGo — Affiliate QA Matrix

_Date: 2026-08-31 · Production preview QA performed without booking._

Observed: all tested routes returned an AccessTrade tracking URL. Netlify deployment was additionally tested with `/go/experiences?partner=klook&src=qa&page=netlify`, which returned the AccessTrade URL containing the encoded Klook destination. Vietnam Airlines resolved through its affiliate URL to `vietnamairlines.com`; Traveloka, Trip.com and Klook resolved to AccessTrade tracking URLs containing encoded partner destinations. No booking/payment was performed.

| Page/source | CTA | `/go` route | Partner | Expected destination | Status |
|---|---|---|---|---|---|
| Homepage | Flights | `/go/flights?partner=vietnam-airlines&src=homepage&page=home` | Vietnam Airlines | configured Vietnam Airlines short URL | SOURCE PASS / external BLOCKED |
| Homepage | Flights | `/go/flights?partner=traveloka&src=homepage&page=home` | Traveloka | configured Traveloka short URL | SOURCE PASS / external BLOCKED |
| Homepage | Hotels | `/go/hotels?...` | Trip.com / Traveloka | configured hotel partner URLs | SOURCE PASS / external BLOCKED |
| Itinerary pages | Check Vietnam flights | `/go/flights?src=seo&page={slug}` | default Vietnam Airlines | configured flight URL | SOURCE PASS / external BLOCKED |
| Hanoi / HCMC / Phu Quoc | Check hotels | `/go/hotels?src=seo&page={slug}` | default Trip.com | configured hotel URL | SOURCE PASS / external BLOCKED |
| Da Nang & Hoi An | Check tours & activities | `/go/experiences?src=seo&page=da-nang-hoi-an` | default Klook | configured activities URL | SOURCE PASS / external BLOCKED |
| Ha Long Bay | Check Ha Long Bay tours | `/go/experiences?src=seo&page=ha-long-bay-from-hanoi` | default Klook | configured activities URL | SOURCE PASS / external BLOCKED |
| eSIM guide | Check Vietnam eSIM options | `/go/esim?src=seo&page=vietnam-esim` | Klook | configured eSIM URL | SOURCE PASS / external BLOCKED |
| Planner | Partner cards | `/go/{key}?partner={id}&src=planner&page={days}-day-route` | all configured partners | matching `lib/affiliates.ts` href | SOURCE PASS / external BLOCKED |
| Any invalid key | fallback | `/go/not-a-key` | none | `/#book` | SOURCE PASS |

## What to verify on production

Open each route with a fresh browser session, confirm the server log includes `tripId`, `key`, `partner`, `source`, `page`, and timestamp, then confirm the final browser destination is the configured affiliate partner. Do not record or log email addresses. Current source code does not persist events beyond runtime logs.
