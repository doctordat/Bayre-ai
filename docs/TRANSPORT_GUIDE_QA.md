# VietnamGo — Transport Guide QA

_Date: 2026-09-01_

## Shipped

- Added `/en/getting-around-vietnam` to the dynamic SEO guide route.
- Added a flight / train / bus-or-transfer decision module.
- Covered north–south route planning, airport transfers, luggage/pickup checks and solo/family considerations.
- Added planner preset: 10 days, Hanoi arrival, mixed interests, mid budget.
- Added transfer CTA through `/go/transfers`.
- Added URL to sitemap once.

## Search intent covered

- how tourists travel around Vietnam;
- flight vs train;
- train/bus/flight trade-offs;
- solo traveler convenience;
- airport and hotel transfers;
- what to check before paying for transport.

## Guardrails

- No live fare comparison.
- No fixed fare, schedule or travel-time guarantee.
- No claim that one mode is always cheapest or best.
- Current availability, pickup points, luggage rules and cancellation terms are delegated to the operator/booking partner.
- Existing itinerary pages remain canonical for day-by-day route plans.

## Verification

```text
npm run build: PASS
Generated routes: 35/35
/en/getting-around-vietnam: generated
git diff --check: PASS
```

## Follow-up

A future Hanoi–Da Nang flight-vs-train page should only be added after a dedicated SERP/content-gap check confirms it has enough distinct decision depth.
