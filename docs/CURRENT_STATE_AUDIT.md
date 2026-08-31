# VietnamGo — Current State Audit

_Date: 2026-08-31 · Branch: `feat/seo-foundation-batch` · commit: `ac9c05d193528b70c58fd72b72bdb11aba9e4f41`_

## Executive status

The branch is a functioning Next.js App Router MVP skeleton with a deterministic planner, dynamic English guide pages, first-party `vg_trip` correlation, affiliate redirect routes, email itinerary delivery, robots and sitemap generation. It is **not launch-ready** yet: the repository is public-source auditable, but production hostname, deployment state, Search Console and live affiliate destinations have not been verified in this cycle.

## Working now

- Next.js 15 + React 19 TypeScript app.
- Homepage planner entry and discovery sections (`app/page.tsx`).
- English alias (`app/en/page.tsx`), guides hub and explore hub.
- Deterministic planner with 7/10/14-day route output, budget/style/interest inputs and booking cards.
- Dynamic SEO pages for Hanoi, HCMC, Da Nang/Hoi An, Phu Quoc, 7/10/14-day itineraries, travel cost, eSIM and Ha Long Bay.
- Affiliate source of truth in `lib/affiliates.ts` and `/go/[key]` partner selection/redirect.
- `vg_trip` first-party httpOnly cookie and runtime click/result logging without email/IP application fields.
- Transactional itinerary email route with Resend integration and no newsletter claim.
- Root metadata, Open Graph basics, Article/WebSite JSON-LD, robots disallowing `/go/` and `/api/`, and sitemap entries for current canonical pages.

## Incomplete / weak

- First batch has 10 dynamic pages, but most are short guide records rather than full decision-support landing pages: no route tables/maps, FAQ blocks, reviewed dates, or 2–5 contextual related links.
- `vietnam-travel-cost-2-weeks`, `where-to-stay-in-hanoi`, `where-to-stay-in-ho-chi-minh-city`, `where-to-stay-in-hoi-an`, `da-nang-vs-hoi-an`, `where-to-stay-in-phu-quoc`, `hanoi-to-da-nang`, and `best-time-to-visit-vietnam` are not separate implemented intents; some are partially covered by existing pages.
- Article → planner context is implemented only for itinerary pages; destination/non-itinerary pages fall back to `/#planner`.
- No explicit analytics event layer for page view, planner open, planner completion, or category click beyond console logs.
- No persistent analytics store or dashboard.
- No evidence in repository of production QA, mobile screenshots, Vercel production commit verification, partner attribution verification, or Search Console setup.

## Technical debt

- Homepage CSS is split across `home.css`, `home-conversion.css`, `home-v2.css`, `planner-polish.css`; the handoff notes overlapping override layers.
- `app/en/[slug]/page.tsx` combines content data, metadata, schema and rendering in one file, making expansion and content QA difficult.
- Navigation uses a mixture of `next/link` and raw anchors.
- `app/en/page.tsx` is a one-line re-export/alias; its metadata behavior should be checked in a real build.
- `console.info` is used as the only measurement sink.
- The branch still uses the Vercel preview hostname as the default base URL.

## SEO problems

- `NEXT_PUBLIC_SITE_URL` defaults to `https://bayre-ai-1kcx-bice.vercel.app`; canonical, sitemap, robots host and JSON-LD therefore point to a temporary hostname until production env is set.
- Root `WebSite` JSON-LD contains a `SearchAction` whose target is `/en/guides`, but there is no site-search endpoint or search UI. This is misleading structured data and should be removed.
- Article JSON-LD uses relative `mainEntityOfPage: /en/...` instead of an absolute URL.
- Article publisher has no logo and pages have no datePublished/dateModified editorial fields.
- Sitemap includes only 13 URLs and does not include all current/required target intents; it must not be expanded with thin placeholders.
- No visible breadcrumb component/schema.
- No explicit page-level `robots` metadata for planner utility pages; planner is matched by neither sitemap nor noindex metadata.
- No `hreflang` equivalents exist beyond English/x-default; this is acceptable until translations exist but should not imply translated pages.

## Conversion problems

- Destination pages offer a generic “turn this guide into your route” CTA but do not preserve destination context in the planner.
- Article booking CTA is one category only; it is not always the most contextually useful next action.
- Dynamic pages are too terse to support high-confidence decisions before a booking click.
- Homepage and planner booking links are clear, but there is no event-based CTR measurement by landing page/category.

## Affiliate problems

- Partner URLs are centralized and current in `lib/affiliates.ts`, but shortened destinations have not been verified in this environment.
- Redirect route selects a partner and logs context, but invalid keys silently redirect to `/#book`; this is safe but not observable as an error metric.
- Planner links do not pass all planner context (`days`, budget, style, interest) through `/go/`; the route supports those fields but callers mostly omit them.
- No automated QA matrix/test exists for every category/partner combination.

## Tracking problems

- Current logging is console/runtime-only; logs are not a durable funnel dataset.
- Middleware logs `[planner-result]` for every `/en/planner` request, including non-completed visits, so event semantics are ambiguous.
- No explicit page-view, planner-open, planner-completed, affiliate-category-clicked event taxonomy.
- `vg_trip` is useful for correlation but there is no documented retention or log redaction policy beyond not collecting email/IP.

## Launch blockers

1. Final HTTPS production hostname and `NEXT_PUBLIC_SITE_URL` are not verified.
2. Production deployment commit/Vercel integration is not verified.
3. Affiliate shortened URLs and attribution chain are not manually PASS-tested.
4. Search Console property verification and sitemap submission are owner/browser actions not evidenced here.
5. Required 10-page batch needs content expansion and cannibalization review before calling it index-ready.
6. Build/lint status must be run in the cloned branch.

## Priority matrix

| Priority | Issue | Owner/action | Status |
|---|---|---|---|
| P0 | Remove fake SearchAction and make schema URLs absolute | Code | Open |
| P0 | Set final production base URL before launch | Owner/Vercel | Blocked on domain |
| P0 | Test every `/go` partner route and final destination | QA/owner | Open |
| P0 | Verify robots/sitemap/canonical on production | QA/owner | Open |
| P1 | Add page-level noindex to planner and explicit utility policy | Code | Open |
| P1 | Add article internal-link map and contextual planner presets | Code/content | Open |
| P1 | Expand first 10 commercial pages beyond thin records | Content/code | Open |
| P1 | Define analytics events and durable sink decision | Code/product | Open |
| P2 | Consolidate homepage CSS | Refactor | Deferred |
| P2 | Add breadcrumbs, FAQ schema and editorial dates | Content/SEO | Deferred |
| P2 | Add translations only after English signal | Product | Deferred |
