# BayRẻ AI — Production Tracking QA

_Date: 2026-09-02_

## Verified

- `js/tracking.js` is served on production with HTTP 200.
- Tracking script is referenced by homepage, route pages and guides.
- Production homepage query prefill remains functional for `?from=SGN&to=DAD`.
- Local browser test previously confirmed dataLayer pushes for:
  - `search_submit`;
  - `affiliate_outbound_click`.
- Production browser initialized `window.bayreTrackEvent` successfully.

## Event contract

| Event | Current payload | Status |
|---|---|---|
| `search_submit` | origin, destination, departure_date, passengers, budget_max, trip_type | Instrumented; external analytics ingestion not configured |
| `route_cta_click` | origin, destination, page_path | Instrumented by delegated click handler |
| `affiliate_outbound_click` | link_url, link_text, page_path | Instrumented by delegated click handler |

## Limitation

A fresh production click-event capture could not be completed because the browser attachment became intermittently unavailable during the interaction step. Therefore this document does not claim production realtime event ingestion, GA4/GTM receipt, `sub_id` attribution or affiliate conversion proof.

The current implementation is a first-party `dataLayer` event bus. It is ready for GA4/GTM wiring after an owner-approved Measurement ID/container is available.

## Safety

- No email, name or other form PII is pushed by this tracking script.
- No affiliate token or secret is embedded.
- Partner navigation is not blocked or rewritten.
- No booking or payment was performed.
