# VietnamGo — Ha Long Bay Attraction Cluster QA

_Date: 2026-09-01_

## Shipped

Added four Ha Long attraction/decision guides:

- `/en/attractions/ha-long-bay-cruise`
- `/en/attractions/ha-long-day-trip-from-hanoi`
- `/en/attractions/ha-long-overnight-cruise`
- `/en/attractions/cat-ba-island-alternative`

Updated `/en/attractions` with a Ha Long Bay cluster and added all four URLs to the sitemap.

## Intent coverage

The cluster separates cruise experience, short-itinerary day trip, overnight decision and Cat Ba alternative. Pages link back to the existing `/en/ha-long-bay-from-hanoi` route guide rather than creating a duplicate itinerary URL.

Each entry includes traveler fit, time commitment, ticket/booking caveat, practical logistics, FAQ and nearby links.

## Guardrails

- No fixed cruise prices, schedules, routes or port guarantees.
- No universal “best cruise” claim.
- No claim that VietnamGo operates or verifies cruises.
- Weather cancellation, cabin, meal, transfer and inclusion details remain with the current operator/booking source.
- Cat Ba is framed as an alternative destination decision, not a guaranteed replacement for every cruise route.

## Verification

```text
npm run build: PASS
Generated routes: 48/48
4 Ha Long sitemap entries: each appears once
git diff --check: PASS
```

## Follow-up

Do not add individual cave/cave-viewpoint pages without a dedicated evidence and access check. The current cluster is sufficient for the main cruise decision intents.
