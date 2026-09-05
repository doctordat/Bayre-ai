# VietnamGo — Search Console Setup

## Status: BLOCKED / NOT VERIFIED

The Netlify subdomain is public and technically crawlable, but it is a temporary hosting URL. Do **not** verify/submit/index this temporary hostname as the long-term SEO property. Choose and attach the official VietnamGo custom domain first, then set `NEXT_PUBLIC_SITE_URL` in Netlify and redeploy. Do not claim the property is verified, the sitemap submitted, or URLs indexed.

## Owner checklist

- [ ] Decide final HTTPS hostname.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel and deploy one consolidated batch.
- [ ] Verify homepage, `/en`, key guides, `/robots.txt`, `/sitemap.xml` on final host.
- [ ] Add a Domain property in Google Search Console via DNS verification.
- [ ] Submit `sitemap.xml` under Sitemaps and confirm fetch succeeds.
- [ ] Inspect homepage and request indexing once.
- [ ] Inspect the first five commercial pages and request indexing individually.
- [ ] Weekly: monitor Page indexing (indexed, crawled-not-indexed, canonical, robots, 404).
- [ ] Weekly: monitor Performance queries/pages/countries/devices for impressions, clicks, CTR and position.

## Evidence required before PASS

Record the final hostname, sitemap submission date/status, inspected URLs, and screenshots or exported status from Search Console. Sitemap submission/requesting indexing is not proof that Google indexed a URL.
