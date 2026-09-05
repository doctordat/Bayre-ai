# Attraction Hub QA

_Date: 2026-08-31 · Commit: c1f6c23_

## Shipped

- New SEO hub: `/en/attractions`.
- Hanoi cluster: Hoan Kiem Lake, Old Quarter, Ho Chi Minh Mausoleum, Temple of Literature.
- Da Nang/Hoi An cluster: My Khe, Marble Mountains, Son Tra, Ba Na Hills, Hoi An Ancient Town, Dragon Bridge.
- Each card has intent label, time/ticket context and crawlable guide link.
- Hub links to the planner and was added to sitemap.
- Guides hub now links to the attraction hub.

## Verification

- Build: PASS, 32/32 routes.
- Sitemap includes `/en/attractions` and all 10 attraction routes.
- Source link graph has hub → 10 attraction pages and each attraction has nearby/city links.
- No ticket prices or opening-hour claims were added without current official verification.

## Remaining

Netlify needs to publish commit `c1f6c23` before production browser QA. Full 404 crawl and mobile screenshot should be run after deployment.
