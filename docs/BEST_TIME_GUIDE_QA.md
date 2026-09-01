# VietnamGo — Best Time Guide QA

_Date: 2026-09-01_

## Shipped

- Added `/en/best-time-to-visit-vietnam` to the dynamic SEO guide route.
- Structured the page around north, central and southern Vietnam rather than one universal best month.
- Added route/season decision rows: North first, Central first, South first.
- Added planner preset: 10 days, Hanoi arrival, mixed interests, mid budget.
- Added seasonal experiences CTA via `/go/experiences`.
- Added the URL to sitemap exactly once.

## Search intent covered

- best time to visit Vietnam;
- Vietnam weather by region;
- December/January/October-style month questions at a planning level;
- how weather affects beach, cruise, mountain and city routes;
- how to protect weather-dependent plans.

## Guardrails

- No universal “perfect month” claim.
- No exact forecast, temperature or rainfall promise.
- No fixed cruise, attraction or transport schedule claims.
- Page tells travelers to check current forecasts and operator conditions close to departure.
- Detailed 7/10/14-day route intent remains on existing itinerary pages.

## Verification

```text
npm run build: PASS
Generated routes: 34/34
/en/best-time-to-visit-vietnam: generated
git diff --check: PASS
```

## Follow-up

Before adding month-by-month factual tables, verify dated weather data from a primary meteorological source and record source URLs plus checked-on dates.
