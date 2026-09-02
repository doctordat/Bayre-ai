# BayRẻ AI — Deployment Baseline

_Date: 2026-09-02_
_Production: `https://bayre-ai.vercel.app/`

## Release

- Production branch: `main`
- Production source commit verified in Vercel: `d533d2c` (`Merge cheap flight guide into production`)
- Vercel status: Ready
- `origin/main`: `d533d2c`

## Live checks

- Homepage: HTTP 200
- Existing representative route: HTTP 200
- `/guides/hanh-ly-doi-hoan-ve.html`: HTTP 200
- `/guides/cach-san-ve-may-bay-gia-re.html`: HTTP 200
- `/sitemap.xml`: HTTP 200 and includes the new guide URLs
- `/robots.txt`: HTTP 200 and points to the Vercel sitemap
- Google Search Console verification file: HTTP 200

## Measurement interpretation

This release creates a crawlable content baseline, not an immediate ranking guarantee. Search Console impressions, clicks, CTR and position should be compared after Google has had time to crawl and process the pages. Do not repeatedly request indexing.

Affiliate outbound attribution was not proven in this QA. Direct partner links were observed on the static homepage; conversion tracking should be treated as a separate implementation/verification task.

## Not done

- No booking or payment transaction.
- No PR #23 merge.
- No custom domain change.
- No claim of realtime or cheapest pricing.
