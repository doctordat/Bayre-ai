# VietnamGo — Phu Quoc Attraction Cluster QA

_Date: 2026-09-01_

## Shipped

Added four Phu Quoc attraction-level guides:

- `/en/attractions/phu-quoc-beaches-and-areas`
- `/en/attractions/phu-quoc-island-hopping`
- `/en/attractions/phu-quoc-night-market`
- `/en/attractions/hon-thom-cable-car`

Updated `/en/attractions` with a Phu Quoc cluster and added all four URLs to the sitemap.

## Intent coverage

The cluster covers the main island decisions: where to base a stay, whether a boat day fits, what to expect from the night market and how to plan a structured southern-island cable-car day.

Each entry includes fit, time, ticket/access caveat, practical visit guidance, FAQ and nearby links.

## Guardrails

- No fixed cable-car schedules or prices.
- No guaranteed swimming/sea conditions.
- Boat tours are described as operator-dependent, not operated by VietnamGo.
- Market content does not promise fixed opening patterns.
- Current weather, sea conditions, access, inclusions and cancellation terms remain with official/booking sources.

## Verification

```text
npm run build: PASS
Generated routes: 44/44
4 Phu Quoc sitemap entries: each appears once
git diff --check: PASS
```

## Follow-up

Keep the next attraction batch evidence-led; possible candidates are Ha Long Bay or additional HCMC pages only if distinct search intent is confirmed.
