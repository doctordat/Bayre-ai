# VietnamGo — Launch Execution Checklist

Use this checklist after reading `docs/CO_WORK_HANDOFF.md`.

## A. Repository / deployment
- [ ] Rename GitHub repo from `Bayre-ai` to `VietnamGo` manually in GitHub Settings if desired.
- [ ] Verify Vercel Git integration still points to the renamed repo.
- [ ] Confirm which commit is actually Production.
- [ ] Avoid per-commit deploy spam; deploy consolidated batches only.

## B. Final public domain
- [ ] Decide final public hostname/domain.
- [ ] Set Vercel env `NEXT_PUBLIC_SITE_URL` to final HTTPS origin.
- [ ] Redeploy once after canonical-host changes.
- [ ] Confirm canonical tags, sitemap URLs and robots sitemap use final host.

## C. Production functional QA
- [ ] Homepage desktop
- [ ] Homepage mobile
- [ ] Planner desktop
- [ ] Planner mobile
- [ ] 7-day route
- [ ] 10-day route
- [ ] 14-day route
- [ ] Budget A/B/C
- [ ] Email itinerary delivery

## D. Affiliate QA
- [ ] Flights → Vietnam Airlines
- [ ] Flights → Traveloka
- [ ] Hotels → Trip.com
- [ ] Hotels → Traveloka
- [ ] Activities → Klook
- [ ] Activities → Trip.com
- [ ] Transfers → Klook
- [ ] eSIM → Klook
- [ ] Trains/other → Trip.com
- [ ] `/go/` route logs click context
- [ ] Affiliate links remain the configured tracking URLs

## E. SEO crawl QA
- [ ] `/robots.txt` returns 200
- [ ] `/sitemap.xml` returns 200
- [ ] `/go/` is disallowed
- [ ] `/api/` is disallowed
- [ ] Key content pages return 200
- [ ] No accidental noindex
- [ ] One H1 per primary guide page
- [ ] Unique titles and descriptions
- [ ] Internal links exist between related guides

## F. Google Search Console
- [ ] Verify property for final domain
- [ ] Submit sitemap
- [ ] Inspect homepage
- [ ] Request homepage indexing
- [ ] Inspect top five commercial SEO pages
- [ ] Request indexing for those pages
- [ ] Monitor Page indexing weekly
- [ ] Monitor Performance → Queries / Pages / Countries weekly

## G. First content batch
- [ ] Vietnam itinerary 10 days
- [ ] Vietnam itinerary 14 days / 2 weeks
- [ ] Vietnam travel cost 2 weeks
- [ ] Where to stay in Hanoi first time
- [ ] Where to stay in Ho Chi Minh City first time
- [ ] Da Nang or Hoi An: where to stay
- [ ] Where to stay in Phu Quoc
- [ ] Ha Long Bay cruise from Hanoi
- [ ] Vietnam eSIM
- [ ] Hanoi to Da Nang: flight vs train

## H. Launch definition
Launch public acquisition only after Sections B–F have no critical blocker.

Business loop to preserve:

**Google → useful VietnamGo page → planner/guide → affiliate CTA → `/go/` tracking → partner → booking → commission.**
