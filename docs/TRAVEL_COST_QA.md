# VietnamGo — Travel Cost Content QA

_Date: 2026-09-01_

## Shipped

Expanded the canonical page:

```text
/en/vietnam-travel-cost
```

The page now covers:

- daily planning bands A/B/C;
- realistic 7-day, 10-day and 14-day budget shapes;
- included on-the-ground categories;
- exclusions such as international flights, entry costs, insurance, shopping and unexpected expenses;
- what changes the total;
- how to decide whether a budget is enough;
- planner CTA and current hotel-price CTA.

## Guardrails

- Daily bands remain directional planning estimates, not live prices.
- No “cheapest guaranteed” or price-comparison claim.
- No currency-specific duplicate pages.
- Existing itinerary pages remain canonical for route length and day-by-day planning.
- Booking availability and prices are attributed to the booking partner.

## Verification

```text
npm run build: PASS
Generated routes: 34/34
/en/vietnam-travel-cost: generated
git diff --check: PASS
```

## Follow-up

Refresh the planning bands only when supported by dated first-party/partner data or Search Console/user evidence. Do not convert personal trip reports into universal prices.
