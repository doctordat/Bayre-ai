# VietnamGo — Planner Integration QA

_Date: 2026-08-31 · Commit: fc42059_

| Source intent | Preset sent to planner | Expected result |
|---|---|---|
| `/en/vietnam-itinerary-7-days` | `days=7`, Hanoi, mix, mid | 7-day north/central starter route |
| `/en/vietnam-itinerary-10-days` | `days=10`, Hanoi, mix, mid | 10-day classic route |
| `/en/vietnam-itinerary-14-days` | `days=14`, Hanoi, mix, mid | 14-day north/central/south route |
| `/en/hanoi` | `days=7`, Hanoi, food, mid | Hanoi-led food/culture route |
| `/en/ho-chi-minh-city` | `days=7`, HCMC, food, mid | Southern food/city starter route |
| `/en/da-nang-hoi-an` | `days=10`, Da Nang, beach, mid | Central beach/culture route |
| `/en/phu-quoc` | `days=14`, Phu Quoc, beach, mid | Beach-led route with island finish |
| `/en/vietnam-travel-cost` | `days=10`, Hanoi, mix, mid | Cost estimate route, budget remains editable |
| `/en/vietnam-esim` | `days=10`, Hanoi, mix, mid | General route; connectivity CTA remains contextual |
| `/en/ha-long-bay-from-hanoi` | `days=10`, Hanoi, nature, mid | Ha Long-compatible nature route |

## Implementation

The dynamic guide page builds `/en/planner` URLs from a typed `plannerPresets` map. Users can edit all fields after arriving. The planner engine remains deterministic and uses existing valid query values.

## Verification

- Build/type check passed and all 10 presets map to valid planner dimensions.
- Local browser QA: clicking the 10-day itinerary CTA produced `/en/planner?days=10&arrival=Hanoi&style=couple&budget=mid&interest=mix`; result showed Hanoi first stop, 10 days, B · Comfortable and the expected classic route.
- Invalid query QA: `/en/planner?days=999&interest=bad&budget=invalid&arrival=Unknown` rendered a route and no error, safely falling back to the planner defaults.
- Affiliate links remained present on the planner result.

Production rendered QA should be repeated after Netlify’s next deploy; Search Console/domain work remains separate.
