# BayRẻ AI SEO audit — 2026-08-30

## Implemented
- robots.txt allows public crawling and references sitemap.xml.
- sitemap.xml includes homepage, route hub, and all 8 priority route pages.
- Route pages use self-referencing canonical URLs.
- Priority route pages have unique titles and descriptions.
- SEO polish adds `index,follow,max-image-preview:large`, Open Graph metadata, visible breadcrumbs, BreadcrumbList JSON-LD, visible FAQs, matching FAQPage JSON-LD, and clear non-realtime pricing disclaimers to the four newer route pages.
- Internal links connect route pages to BayRẻ search and related routes.

## Next measurement phase
Use Google Search Console after Google has had time to crawl. Watch indexing coverage, impressions, search queries, CTR, and pages receiving impressions. Expand useful route/destination content based on actual query data rather than generating thin pages at scale.

## Guardrails
Do not claim realtime prices when data is historical/recent. Do not add FAQ structured data unless the same FAQ is visible on the page. Keep Google verification file in the repository.
