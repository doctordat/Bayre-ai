# BayRẻ AI — Production Runtime Audit

_Date: 2026-09-02_
_Production checked: `https://bayre-ai.vercel.app/`_

## Executive result

Production is serving the repository-root **static HTML** BayRẻ AI surface. The local checkout is on `feat/seo-foundation-batch` and also contains a separate Next.js app/VietnamGo surface. Do not assume local Next changes affect `bayre-ai.vercel.app`.

## Live checks

| Check | Result |
|---|---|
| Homepage `/` | HTTP 200; BayRẻ AI Vietnamese static homepage |
| All 8 route pages | HTTP 200 |
| `/robots.txt` | HTTP 200; allows crawl, disallows `/api/`, sitemap points to Vercel host |
| `/sitemap.xml` | HTTP 200; Vercel host URLs present |
| Google verification file | HTTP 200; verification content present |
| Representative route CTA | SGN→DAD route links to `/index.html?from=SGN&to=DAD` |
| Homepage query-prefill | Browser verified `from=TP. Hồ Chí Minh`, `to=Đà Nẵng` |
| Homepage partner links | Direct partner URLs observed; no `/go` redirect or visible `sub_id` in sampled links |

## SEO consistency findings

The 8 routes are not standardized equally in production. Based on fetched HTML:

- all checked route pages have title, description and canonical tags;
- only SGN→DAD exposed both `BreadcrumbList` and `FAQPage` in the sampled source;
- several other routes exposed FAQ schema but not breadcrumb schema;
- route hub `/routes/` did not expose the same route-page schema/CTA pattern;
- static route pages have valid HTTP responses and visible CTAs, but need a clean `main`-based SEO standardization pass.

## Repository / PR verification update

The initial local fetch refspec did not expose `origin/main`, and `gh` CLI is unavailable. A direct `git ls-remote` check then confirmed the authoritative refs:

- `origin/main`: `d281fac` (`Polish hero search and popular trip cards (#21)`)
- `origin/seo-polish-route-pages`: `24fc25f`
- PR #23 head: `24fc25f`

PR #23 is not safe to merge directly: its diff contains 219 files, including a large number of marker/status files, plus only a small number of meaningful route changes. A clean branch `fix/clean-route-seo` was created from `origin/main`. The four meaningful route HTML changes from PR #23 were ported, and the three routes that lacked `BreadcrumbList` were given matching JSON-LD while preserving their visible breadcrumbs. No merge or deployment was performed.

## Recommended next action

Static validation now confirms all eight route files have title, description, robots, canonical, Open Graph, BreadcrumbList, FAQPage and route CTA markers. Next: review the clean branch diff, open a small PR, and verify Vercel’s source commit before deployment.

Do not merge PR #23 blindly, do not change Vercel settings in this audit, and do not submit the temporary/incorrect surface to Search Console.
