# VietnamGo — First-Time Guide QA

_Date: 2026-09-01_

## Shipped

- Added `/en/vietnam-first-time-guide` to the dynamic SEO guide route.
- Added first-time traveler content focused on route shape, booking order, safety/visa/weather caveats and common mistakes.
- Added a dedicated decision module for 7 / 10 / 14-day first-trip pacing.
- Added planner preset: 10 days, Hanoi arrival, mix interest, mid budget.
- Added `/en/vietnam-first-time-guide` to sitemap.
- Removed duplicate attraction URLs from sitemap.

## Intent coverage

The page targets qualitative western-traveler search signals from `docs/WESTERN_SEARCH_INTENT_RESEARCH.md`:

- what to know before visiting Vietnam for the first time;
- how many days to spend;
- north-to-south vs reverse route choice;
- what to book before arrival;
- visa/passport/weather facts that should be checked, not memorized;
- first-timer mistakes.

## Guardrails

- Does not claim VietnamGo books or processes payments.
- Does not publish fixed visa rules as universal facts.
- Does not promise live prices or cheapest guarantees.
- Sends booking intent through `/go/flights` with safe “Check Vietnam flights” wording.
- Keeps detailed cost and itinerary intent on existing canonical URLs.

## Verification

```text
npm run build: PASS
Generated routes: 33/33
/en/vietnam-first-time-guide: generated
/en/attractions duplicate sitemap entries: removed
git diff --check: PASS
```

## Follow-up

Next P0 content asset should be `/en/best-time-to-visit-vietnam`, using regional weather framing and checked-source caveats.
