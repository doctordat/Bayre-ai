# VietnamGo — Ho Chi Minh City Attraction Cluster QA

_Date: 2026-09-01_

## Shipped

Added five HCMC attraction-level guides:

- `/en/attractions/war-remnants-museum`
- `/en/attractions/cu-chi-tunnels`
- `/en/attractions/ben-thanh-market`
- `/en/attractions/district-1-walking-route`
- `/en/attractions/mekong-delta-from-ho-chi-minh-city`

Also updated `/en/attractions` with a dedicated Ho Chi Minh City cluster and added all five URLs to the sitemap.

## Intent coverage

The cluster covers history, a half-day historical excursion, market/food/shopping, a flexible city walk and a full-day regional experience. Each entry answers:

- why visit and who it suits;
- how much time to allow;
- whether ticket/access conditions need checking;
- how to fit it into a HCMC route;
- practical FAQ and nearby links.

## Guardrails

- No fixed ticket prices or opening hours.
- No claim that VietnamGo operates tours.
- Cu Chi and Mekong Delta content tells travelers to compare current operator inclusions, pickup, timing and cancellation terms.
- Museum and attraction access is delegated to official current visitor information.
- Affiliate intent remains separate from editorial guidance.

## Verification

```text
npm run build: PASS
Generated routes: 40/40
5 HCMC attraction sitemap entries: each appears once
git diff --check: PASS
```

## Follow-up

The next attraction expansion can target Ha Long Bay or Phu Quoc after a dedicated SERP/source check. Avoid adding pages just to increase route count.
