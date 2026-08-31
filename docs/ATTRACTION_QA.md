# Attraction QA

_Date: 2026-08-31 · Commit: 5dd94b1_

## Scope shipped

Five additional attraction pages are now implemented in the shared route:

- `/en/attractions/hanoi-old-quarter`
- `/en/attractions/son-tra-peninsula`
- `/en/attractions/ba-na-hills`
- `/en/attractions/hoi-an-ancient-town`
- `/en/attractions/dragon-bridge-da-nang`

Together with the first five, the build now contains 10 attraction routes and the sitemap includes all 10.

## Quality rules applied

- Old Quarter is neighborhood/food/walking intent, distinct from Hoan Kiem lake.
- Hoi An Ancient Town is heritage-visit intent, distinct from the regional Da Nang & Hoi An stay guide.
- Son Tra focuses on nature, viewpoint, weather and road-safety decisions.
- Dragon Bridge focuses on evening timing and public viewing.
- Ba Na Hills avoids fixed prices, opening times and skip-the-line claims; it tells travelers to check current official ticket/operating information.
- Every page has time guidance, best-for guidance, ticket status, visit advice, FAQ, related links and planner CTA.

## Verification

- `npm run build`: PASS, 31/31 generated routes.
- Type checking: PASS.
- `git diff --check`: PASS.
- Source route generation confirms all 10 attraction slugs.
- Rendered attraction QA should be repeated on the next Netlify deploy; no attraction ticket purchase was performed.
