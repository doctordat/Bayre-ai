# VietnamGo — Technical SEO Audit

_Date: 2026-08-31 · Branch `feat/seo-foundation-batch`_

| Problem | Severity | File | Fix | Status |
|---|---|---|---|---|
| Temporary Vercel hostname is the fallback base URL | P0 | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | Set `NEXT_PUBLIC_SITE_URL` to final HTTPS production origin in Vercel; redeploy once | BLOCKED: owner/domain |
| Fake `SearchAction` points to guides without search implementation | P0 | `app/layout.tsx` | Remove `potentialAction` until real site search exists | OPEN |
| Article `mainEntityOfPage` is relative | P0 | `app/en/[slug]/page.tsx` | Build absolute URL from the same base URL used by metadata | OPEN |
| `/go/*` and `/api/*` are disallowed in robots | P0 | `app/robots.ts` | Keep disallow; verify production response | PASS in source / production unverified |
| Sitemap contains only current canonical pages | P0 | `app/sitemap.ts` | Keep canonical-only; expand only when pages are genuinely published | PASS in source / coverage incomplete |
| Canonical is path-based and depends on `metadataBase` | P0 | `app/layout.tsx`, dynamic page metadata | Correct architecture; final host still depends on env | BLOCKED on env |
| Planner has no explicit noindex metadata | P1 | `app/en/planner/page.tsx` | Add `robots: { index: false, follow: true }`; keep it out of sitemap | OPEN |
| `/en` alias and `/` homepage need a deliberate canonical policy | P1 | `app/page.tsx`, `app/en/page.tsx`, `app/layout.tsx` | Canonicalize public English homepage to `/en`; make root redirect or noindex if product policy requires | OPEN: validate desired public entry |
| Article schema lacks absolute publisher/main entity URL and editorial dates | P1 | `app/en/[slug]/page.tsx` | Add absolute mainEntityOfPage; add dates only when editorial source exists | OPEN |
| No visible breadcrumbs or BreadcrumbList schema | P1 | `app/en/[slug]/page.tsx` | Add after content hierarchy/URL map is finalized | DEFERRED |
| No site search UI exists | P1 | `app/layout.tsx` | Do not advertise SearchAction; revisit with real search | OPEN |
| Dynamic pages have one H1 in source | P1 | `app/en/[slug]/page.tsx` | Preserve; run rendered QA for every slug | PASS in source |
| Image URLs are remote Unsplash URLs | P1 | dynamic page data, explore | Use `next/image` with configured remote pattern or retain plain `<img>` with performance review | OPEN |
| No generated `lastModified` editorial source | P2 | `app/sitemap.ts` | Replace runtime `new Date()` with meaningful content dates when workflow exists | DEFERRED |
| No hreflang translations exist | P2 | metadata | Keep only English/x-default until real translations exist | PASS by policy |

## Source observations

- `app/layout.tsx` sets `metadataBase` from `NEXT_PUBLIC_SITE_URL` with a preview-host fallback.
- `app/robots.ts` allows `/` and disallows `/go/`, `/api/`.
- `app/sitemap.ts` emits 13 canonical English URLs and does not include utility routes.
- `app/en/[slug]/page.tsx` has static params for 10 content slugs and path canonical metadata.
- No `SearchAction`-backed search route or query UI was found.

## Verification still required

Production checks must be performed on the final domain: HTTPS, 200 responses, canonical host, `/robots.txt`, `/sitemap.xml`, no accidental noindex, mobile rendering, and Core Web Vitals. Search Console indexing must not be reported until URL Inspection/Page indexing supplies evidence.
