# VietnamGo — Co-work Handoff, Launch Scope & Operating Plan

_Last updated: 2026-08-31_

## 0. Executive brief

VietnamGo is an English-first inbound Vietnam travel affiliate product. The commercial loop is:

**Google Search / social discovery → SEO landing page → VietnamGo trip planner / guide → booking CTA → tracked `/go/...` redirect → affiliate partner → booking → commission.**

The product is NOT a live fare-comparison engine. It is a trip-planning and travel-content layer that helps foreign visitors decide what to do, where to stay, how long to spend, and then sends booking-ready traffic to approved affiliate partners.

Primary business objective for launch:

> Make useful English Vietnam travel pages discoverable on Google, convert visitors into planner usage and booking clicks, and monetize through affiliate commissions from flights, hotels, activities, transfers, eSIM and train/multi-service partners.

North-star funnel:

1. Google impression
2. Organic click to VietnamGo
3. Visitor reads useful page / uses planner
4. Visitor clicks booking CTA
5. `/go/[category]` records click context
6. Visitor lands on affiliate partner
7. Partner attributes booking and commission

Do not optimize for vanity traffic alone. Optimize pages for **high-intent travel queries that naturally lead to bookings**.

---

## 1. Product scope

### 1.1 Target user

Primary user:
- International traveler planning a first or early trip to Vietnam
- English-speaking first launch audience
- Planning roughly 7–14 days
- Needs route guidance, cost expectations, destination decisions and booking options
- May book flights, hotels, tours, transfers and eSIM during the same session or after researching

Secondary audiences later:
- Chinese-speaking travelers
- German-speaking travelers
- Korean/Japanese travelers if search demand and affiliate economics justify expansion

### 1.2 Core value proposition

VietnamGo should answer four questions quickly:

1. **Where should I go in Vietnam?**
2. **How many days should I spend in each place?**
3. **How much should I roughly budget?**
4. **What should I book now?**

The site should be useful without forcing sign-up.

### 1.3 What the MVP includes

- English homepage
- Deterministic Vietnam trip planner
- 7 / 10 / 14-day route logic
- Budget tiers A / B / C
- Destination guides
- Itinerary guides
- Vietnam travel cost guide
- Vietnam eSIM guide
- Ha Long Bay from Hanoi guide
- Explore page using real destination photography
- Booking CTAs for six monetization categories
- Affiliate redirect and click logging
- Optional itinerary email delivery
- robots.txt and sitemap.xml
- SEO metadata and structured data foundation

### 1.4 Explicit non-goals for launch

Do NOT block launch on these:
- Live multi-airline fare search
- Live hotel price comparison inside VietnamGo
- User accounts
- Native mobile app
- AI chat concierge
- CRM-heavy marketing automation
- Full multilingual rollout
- Complex backend database

These may come later when organic traffic and affiliate click data justify them.

---

## 2. Repository, hosting and deployment

### 2.1 Current repository

Current GitHub repository at handoff time:

`doctordat/Bayre-ai`

Intended product name: **VietnamGo**.

Recommended repository rename: `VietnamGo` or `vietnamgo`.

Important: renaming the GitHub repository is an organizational cleanup only. GitHub generally redirects old repository URLs, but after renaming, verify Vercel Git integration still points to the renamed repository.

### 2.2 Stack

- Framework: Next.js
- Language: TypeScript
- Hosting: Vercel Hobby
- Source control: GitHub
- Email: Resend
- Current tracking: application/runtime logs; no persistent analytics DB yet

### 2.3 Vercel deployment caution

The Vercel Hobby account previously hit the limit of more than 100 deployments within 24 hours.

Operating rule going forward:

> **Batch changes. Do not deploy every visual or copy tweak.**

Use feature branches and one PR per coherent batch. Merge and deploy only when a batch is ready to QA.

### 2.4 Known deployment state at handoff

A visually improved homepage version was verified live from commit:

`d18d6869838335bc48217ff2fc0d1228cabe48f7`

A second homepage polish pass was merged later:

`d281facadc48732e548dff0364c46a74069a39da`

At the last verified production screenshot, `d18d686...` was production. Do not assume later commits are live without checking Vercel.

There is an open SEO foundation branch / PR:

- Branch: `feat/seo-foundation-batch`
- PR: `#22 Strengthen VietnamGo SEO foundation`

This branch contains SEO metadata / sitemap / robots improvements and this handoff document.

---

## 3. Code map — where things live

### 3.1 Global app layout and metadata

`app/layout.tsx`

Responsibilities:
- Global metadata
- Metadata base URL
- Site title template
- Open Graph / Twitter metadata
- Root `WebSite` JSON-LD
- Global CSS imports
- Floating itinerary-email widget

SEO note: if a custom domain is added, set `NEXT_PUBLIC_SITE_URL` in Vercel and make sure canonical URLs resolve to the final production domain.

### 3.2 Homepage

`app/page.tsx`

Responsibilities:
- Main VietnamGo homepage
- Hero
- Search / planner entry surface
- Process explanation
- Destination / itinerary discovery
- Booking conversion surfaces

Homepage visual CSS is currently spread across several files:

- `app/home.css`
- `app/home-conversion.css`
- `app/home-v2.css`
- `app/planner-polish.css`

Important technical debt:

`home-v2.css` is imported after earlier CSS and overlaps many selectors. Before a large new visual refactor, consolidate overlapping homepage CSS rather than adding another override layer.

### 3.3 Planner

`app/en/planner/`

The planner is a deterministic rules engine, not a paid travel API.

Inputs include:
- arrival/departure dates
- travelers
- trip length: 7 / 10 / 14 days
- budget tier
- travel style
- interest

Planner output includes route cards, budget estimates and booking CTAs.

Do not present planner budget numbers as live prices.

Current planning ranges:
- A / budget: approximately US$45 per person/day
- B / comfortable: approximately US$85 per person/day
- C / premium: approximately US$170 per person/day

These are planning estimates only.

### 3.4 SEO landing pages

Dynamic guide pages:

`app/en/[slug]/page.tsx`

This file currently contains page data and rendering for slugs including:

- `/en/hanoi`
- `/en/da-nang-hoi-an`
- `/en/ho-chi-minh-city`
- `/en/phu-quoc`
- `/en/vietnam-itinerary-7-days`
- `/en/vietnam-itinerary-10-days`
- `/en/vietnam-itinerary-14-days`
- `/en/vietnam-travel-cost`
- `/en/vietnam-esim`
- `/en/ha-long-bay-from-hanoi`

It also owns per-page metadata, canonical URLs, article structured data and booking CTA mapping.

Guide hub:

`app/en/guides/page.tsx`

Explore hub:

`app/en/explore/page.tsx`

English home alias:

`app/en/page.tsx`

### 3.5 Affiliate configuration

`lib/affiliates.ts`

This is the canonical mapping for partner labels and destination URLs.

Current partners:

#### Flights
- Vietnam Airlines
- Traveloka

#### Hotels
- Trip.com
- Traveloka

#### Tours / activities
- Klook
- Trip.com

#### Transfers
- Klook

#### eSIM
- Klook

#### Trains / other
- Trip.com

Do not replace affiliate URLs with normal public partner links unless explicitly updating the affiliate program.

### 3.6 Affiliate redirect + tracking

`app/go/[key]/route.ts`

Responsibilities:
- Validate affiliate category
- Select requested partner or default partner
- Read first-party `vg_trip` session cookie when available
- Log affiliate click context
- Redirect to partner affiliate URL

Tracked fields include category, partner, source, page, trip/session id and planner context where available.

SEO rule:

`/go/` must not be indexed. It is a utility redirect route, not search content.

### 3.7 Planner-session tracking

`middleware.ts`

Responsibilities include first-party trip/session correlation for planner visits.

Privacy principle:
- no names
- no email logging
- no IP logging by application logic

### 3.8 Itinerary email capture

Relevant files:

- `app/EmailTripWidget.tsx`
- `app/email-trip.css`
- `app/api/email-itinerary/route.ts`
- `docs/email-delivery.md`

Provider: Resend.

Required secret:
- `RESEND_API_KEY`

Do not put the API key in GitHub.

Test mode can send using the Resend onboarding sender. For production branding, verify a custom sending domain and set `ITINERARY_EMAIL_FROM`.

Current use should remain transactional itinerary delivery. Do not silently convert the email field into newsletter marketing without explicit consent.

### 3.9 Search crawling files

`app/sitemap.ts`

`app/robots.ts`

Sitemap should contain only canonical pages we want Google to index.

Robots should allow content and block utility routes such as:
- `/go/`
- `/api/`

---

## 4. Affiliate inventory — commercial handoff

These are the currently configured affiliate destinations.

### Flights

Vietnam Airlines:
`https://shorten.asia/MhzpQnZq`

Traveloka:
`https://shorten.asia/zxKud1Xm`

### Hotels

Trip.com:
`https://shorten.asia/A7u3mnWY`

Traveloka:
`https://shorten.asia/zxKud1Xm`

### Activities / tours

Klook:
`https://shorten.asia/Tk7VKSKv`

Trip.com:
`https://shorten.asia/A7u3mnWY`

### Transfers

Klook:
`https://shorten.asia/Tk7VKSKv`

### eSIM

Klook:
`https://shorten.asia/Tk7VKSKv`

### Trains / multi-service

Trip.com:
`https://shorten.asia/A7u3mnWY`

Important commercial rule:

Never imply VietnamGo compares all airlines/hotels live unless it actually does. CTA language should say things such as:
- Check current prices
- Check flights
- View hotels
- See tours & activities
- Check booking options

Avoid wording such as:
- Cheapest flight guaranteed
- We compare every airline
- Live lowest price

unless a real comparison feed/API has been implemented.

---

## 5. SEO strategy

### 5.1 SEO goal

Rank English pages for travel-planning queries where the next natural action is a booking decision.

The site should not try to win broad keywords like `Vietnam` first. Start with long-tail, high-intent clusters.

### 5.2 Priority search-intent clusters

#### Cluster A — itinerary

Highest priority:
- Vietnam itinerary 7 days
- Vietnam itinerary 10 days
- Vietnam itinerary 2 weeks
- Vietnam itinerary 14 days
- Vietnam itinerary first time
- Vietnam north to south itinerary
- Vietnam itinerary for couples
- Vietnam itinerary with beach

Monetization path:
Itinerary → domestic flight / hotel / tours / transfers / eSIM.

#### Cluster B — destination + stay intent

- where to stay in Hanoi first time
- best area to stay in Hanoi
- where to stay in Ho Chi Minh City first time
- best area to stay in Ho Chi Minh City
- Da Nang or Hoi An where to stay
- best area to stay in Hoi An
- Phu Quoc hotels for couples
- where to stay in Phu Quoc

Monetization path:
Destination guide → hotels → tours → transfers.

#### Cluster C — routes / transport

- Hanoi to Da Nang flight
- Hanoi to Ho Chi Minh City flight
- Ho Chi Minh City to Phu Quoc flight
- Da Nang to Ho Chi Minh City flight
- Hanoi to Ha Long Bay
- Hanoi to Hoi An

Monetization path:
Route guide → flights / transfers / trains.

#### Cluster D — activities

- Ha Long Bay cruise from Hanoi
- Ha Long Bay day trip vs overnight
- best tours in Hoi An
- Hoi An cooking class
- Mekong Delta day trip from Ho Chi Minh City
- Cu Chi tunnels tour

Monetization path:
Guide → Klook / Trip.com activities.

#### Cluster E — trip cost

- Vietnam travel cost 2 weeks
- Vietnam travel cost 10 days
- how much money for Vietnam
- Vietnam budget per day
- Vietnam trip cost for couples

Monetization path:
Cost guide → planner → hotel / flight / activity CTA.

#### Cluster F — travel essentials

- Vietnam eSIM
- best eSIM for Vietnam travel
- airport transfer Hanoi
- airport transfer Ho Chi Minh City

Monetization path:
eSIM / transfer affiliate CTA.

### 5.3 Content quality requirements

Every SEO page should answer the query completely enough that a traveler can make a decision.

Minimum structure for a commercial guide:

1. Clear H1 matching search intent naturally
2. 2–4 sentence direct answer near the top
3. Practical quick facts
4. Main decision section
5. Recommended route / area / timing
6. Cost or duration guidance where relevant
7. Common mistake / warning
8. Internal links to related guides
9. Planner CTA
10. Contextual affiliate CTA
11. Affiliate disclosure where appropriate
12. Updated / reviewed date when editorial workflow exists

Avoid thin pages whose only purpose is sending users to affiliate links.

### 5.4 Internal linking model

Create topic clusters:

`/en/guides`
→ itinerary pages
→ destination pages
→ route/activity/essential pages
→ planner
→ booking CTA

Each guide should link to 2–5 closely related guides.

Examples:

Vietnam 10-day itinerary should link to:
- Hanoi guide
- Ha Long Bay from Hanoi
- Da Nang & Hoi An
- Ho Chi Minh City
- Vietnam travel cost

Hanoi guide should link to:
- Ha Long Bay from Hanoi
- 7/10/14-day itineraries
- Hanoi hotel booking CTA

### 5.5 Canonicals and language architecture

English URLs use `/en/...`.

Future languages should use separate URL paths, for example:
- `/zh/...`
- `/de/...`

Use `hreflang` only when translated equivalents actually exist.

Do not auto-redirect Googlebot or users solely by guessed language/region.

### 5.6 Affiliate-link SEO policy

For any direct affiliate anchors rendered in HTML, use appropriate sponsored-link treatment (`rel="sponsored"`; `nofollow` may also be used).

VietnamGo currently routes many affiliate clicks through `/go/...`; keep `/go/` out of the index and avoid treating redirect URLs as content pages.

---

## 6. First 30 SEO pages to build

### Tier 1 — launch money pages

1. Vietnam itinerary 10 days
2. Vietnam itinerary 14 days / 2 weeks
3. Vietnam itinerary 7 days
4. Vietnam travel cost 2 weeks
5. Vietnam travel cost 10 days
6. Where to stay in Hanoi first time
7. Where to stay in Ho Chi Minh City first time
8. Da Nang or Hoi An: where to stay
9. Where to stay in Phu Quoc
10. Ha Long Bay cruise from Hanoi

### Tier 2 — transport + booking intent

11. Hanoi to Da Nang: flight vs train
12. Hanoi to Ho Chi Minh City: flight vs train
13. Ho Chi Minh City to Phu Quoc
14. Da Nang to Ho Chi Minh City
15. Hanoi airport to Old Quarter
16. Ho Chi Minh City airport to District 1
17. Da Nang airport to Hoi An
18. Vietnam domestic flights guide

### Tier 3 — activities + essentials

19. Ha Long Bay day trip vs overnight cruise
20. Best Hoi An tours for first-time visitors
21. Hoi An cooking classes: how to choose
22. Mekong Delta day trip from Ho Chi Minh City
23. Cu Chi tunnels from Ho Chi Minh City
24. Vietnam eSIM guide
25. Vietnam airport transfers guide

### Tier 4 — audience-specific itinerary pages

26. Vietnam itinerary for couples
27. Vietnam itinerary with Phu Quoc
28. Vietnam itinerary with Hoi An beach time
29. Vietnam itinerary for families
30. Vietnam first-time travel planner

Do not publish all 30 as shallow templated pages. Publish in batches where each page has genuine query-specific substance.

---

## 7. Google Search launch

### 7.1 Required before Search Console submission

Verify production:
- HTTPS works
- final canonical domain is decided
- homepage returns 200
- `/en` returns 200
- key SEO pages return 200
- no accidental `noindex`
- `/robots.txt` loads
- `/sitemap.xml` loads
- sitemap URLs use final production hostname
- canonical tags use final hostname
- desktop and mobile layout usable
- navigation links are crawlable

### 7.2 Search Console setup

Create / verify a Google Search Console property for the final domain.

Preferred when using a custom domain:
- Domain property via DNS verification

Then:
1. Open Search Console → Sitemaps
2. Submit `sitemap.xml`
3. Confirm Google can fetch it
4. Inspect homepage with URL Inspection
5. Test live URL
6. Request indexing
7. Repeat manually for a small number of highest-priority pages

For many pages, rely on the sitemap instead of manually requesting every URL.

Google states that sitemap submission is the preferred way to request crawling of many new/updated pages, while URL Inspection can request indexing for individual URLs. Indexing is not guaranteed and can take time.

### 7.3 What to monitor weekly

Search Console → Performance:
- impressions
- clicks
- CTR
- average position
- query
- page
- country
- device

Search Console → Page indexing:
- indexed
- crawled, currently not indexed
- discovered, currently not indexed
- duplicate / Google chose different canonical
- blocked by robots
- 404

Search Console → URL Inspection:
Use for important pages that do not index or where canonical selection looks wrong.

---

## 8. Launch QA — affiliate funnel

Before public promotion, manually test every money path on production.

### 8.1 Flights

Test:
- homepage booking CTA
- itinerary guide CTA
- planner CTA

Expected redirect partner choices:
- Vietnam Airlines
- Traveloka

Confirm the final browser destination contains the affiliate tracking chain and lands on the expected partner.

### 8.2 Hotels

Test guide CTAs from:
- Hanoi
- HCMC
- Phu Quoc

Expected:
- Trip.com
- Traveloka

### 8.3 Activities

Test:
- Ha Long Bay
- Hoi An

Expected:
- Klook
- Trip.com

### 8.4 Transfers

Expected:
- Klook

### 8.5 eSIM

Expected:
- Klook

### 8.6 Trains / other

Expected:
- Trip.com

### 8.7 Tracking QA

For each click verify application logs capture:
- `tripId`
- affiliate key/category
- partner
- source
- page
- timestamp

No email address should appear in affiliate-click logs.

---

## 9. Analytics and conversion measurement

Current logging is sufficient for MVP debugging but not sufficient for serious growth analysis.

### Phase 1 — launch

Keep current `/go/` click logging.

Track at least:
- page visit
- planner result
- affiliate click
- affiliate category
- partner
- source page
- trip/session ID

### Phase 2 — once traffic exists

Add persistent analytics.

Preferred lightweight options:
- GA4 for acquisition / page-level SEO behavior
- Vercel Web Analytics for simple traffic visibility
- Supabase/Postgres event table for first-party conversion events if detailed funnel analysis is needed

Suggested internal event table later:

`events`
- id
- trip_id
- event_name
- page
- source
- affiliate_key
- partner
- days
- budget
- style
- interest
- created_at

Do not store unnecessary personal data.

### Core conversion KPIs

- Organic sessions
- SEO landing-page CTR from Google
- Planner-start rate
- Planner-result rate
- Affiliate click-through rate (affiliate clicks / sessions)
- Affiliate click-through rate by landing page
- Affiliate click-through rate by category
- EPC / commission when partner reporting is available

The business metric is not simply pageviews. It is **organic visitor → commercial click → attributed booking**.

---

## 10. Content production workflow for Co-work

For every new SEO page:

### Step A — choose query

Select one main keyword and 3–8 related questions.

Do not target two unrelated intents with one page.

### Step B — search intent check

Review what Google currently rewards:
- itinerary
- list
- comparison
- destination guide
- transactional page

Build the page in the same intent category, but make it more useful and more decision-oriented.

### Step C — outline

Define:
- primary answer
- traveler decision
- recommended action
- relevant partner category

### Step D — write original useful content

Use concrete travel advice, route logic, time estimates and realistic planning ranges.

Do not manufacture hotel ratings, review counts, fares or live availability.

### Step E — add internal links

Link into the topic cluster.

### Step F — commercial CTA

Place affiliate CTA only where it follows naturally from the content.

Example:

After explaining where to stay in Hanoi:
`Check current Hanoi hotel options →`

Not:
`BOOK NOW!!!`

### Step G — metadata

Each page needs:
- unique title
- unique meta description
- canonical
- Open Graph title / description / image where practical

### Step H — schema

Use schema only when page content supports it.

Current generic guide pages use Article JSON-LD. Avoid fake ratings, fake reviews or unsupported rich-result markup.

### Step I — QA

Check:
- H1 exactly once
- heading hierarchy
- mobile
- links
- images and alt text
- no broken CTA
- no unsupported pricing claim

### Step J — batch deploy

Group several finished pages into one PR/deployment.

---

## 11. Launch phases

### Phase 0 — stabilization (immediate)

Goal: make existing site safe to send visitors.

Tasks:
- verify latest production commit
- decide final production domain
- verify affiliate redirects
- verify email itinerary flow
- clean overlapping homepage CSS if needed
- merge SEO foundation after review

Exit criteria:
- all core pages load
- all affiliate categories redirect correctly
- no obvious mobile blockers
- sitemap / robots valid

### Phase 1 — Google indexing

Goal: get canonical English pages discovered.

Tasks:
- configure final domain in metadata/sitemap via `NEXT_PUBLIC_SITE_URL`
- verify Search Console
- submit sitemap
- request indexing for homepage + top 5 money pages
- monitor index coverage

Exit criteria:
- homepage indexed
- first money pages indexed or clearly in crawl/index pipeline

### Phase 2 — content moat

Goal: build 20–30 high-intent English pages.

Tasks:
- 5–8 pages per content batch
- strong internal links
- every page maps to one monetization category

Exit criteria:
- impressions growing week over week
- multiple pages receiving non-branded queries

### Phase 3 — conversion optimization

Goal: increase affiliate CTR from existing traffic.

Tasks:
- measure clicks by page/category
- improve CTA copy and placement
- improve planner handoff
- add comparison/decision components that do not fake live data

Exit criteria:
- measurable affiliate CTR baseline
- best-converting page types identified

### Phase 4 — localization

Only after English pages show demand.

Priority:
1. Chinese
2. German
3. Korean/Japanese if justified

Translate proven pages, not the whole site blindly.

---

## 12. Recommended first two weeks after launch

### Days 1–2

- production QA
- affiliate CTA QA
- custom domain / canonical decision
- Search Console verification
- sitemap submission

### Days 3–5

Publish/refine highest-intent pages:
- Vietnam itinerary 10 days
- Vietnam itinerary 14 days
- Vietnam travel cost 2 weeks
- where to stay in Hanoi
- where to stay in HCMC

### Days 6–8

Add:
- Da Nang vs Hoi An
- Phu Quoc where to stay
- Ha Long Bay cruise from Hanoi
- Vietnam eSIM
- Hanoi to Da Nang

### Days 9–14

- inspect index coverage
- fix pages Google cannot crawl/index
- improve internal links
- publish second batch
- review first Search Console query data
- do not overreact to ranking positions in the first few days

---

## 13. Definition of launch-ready

VietnamGo is launch-ready when all are true:

- [ ] Final production domain is confirmed
- [ ] `NEXT_PUBLIC_SITE_URL` matches final domain
- [ ] Homepage + `/en` work
- [ ] Top SEO pages work
- [ ] `/robots.txt` works
- [ ] `/sitemap.xml` works
- [ ] Canonicals use final domain
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] Affiliate links tested on production
- [ ] Vietnam Airlines redirect works
- [ ] Traveloka redirect works
- [ ] Trip.com redirect works
- [ ] Klook redirect works
- [ ] Planner works on desktop
- [ ] Planner works on mobile
- [ ] Itinerary email works
- [ ] No secrets committed to repo
- [ ] Affiliate / pricing language is accurate
- [ ] Affiliate disclosure is visible where appropriate
- [ ] No major console/runtime errors on money pages

---

## 14. Definition of SEO success

Do not define success as “site is indexed.”

### Month 1

Success signals:
- Google discovers most canonical pages
- first non-branded impressions appear
- some long-tail queries reach top 30–50
- affiliate click tracking works

### Months 2–3

Success signals:
- growing impressions across itinerary / destination clusters
- pages move into top 20 for some long-tail terms
- organic users click hotel/flight/activity partners
- Search Console reveals new content opportunities

### Longer-term business proof

The model is proven when:

> Search Console organic traffic produces measurable affiliate clicks and partner reporting shows attributed bookings/commission.

At that point, scale the content clusters and languages that generate money rather than expanding features blindly.

---

## 15. Critical rules for future Co-work sessions

1. **Do not fake live prices.**
2. **Do not call VietnamGo a full comparison engine until a real data source exists.**
3. **Do not replace affiliate URLs with ordinary URLs.**
4. **Do not deploy after every small commit. Batch work because Vercel Hobby quota has been hit before.**
5. **Do not claim a commit is production without verifying Vercel.**
6. **Do not add thin SEO pages just to increase URL count.**
7. **Do not let `/go/` or `/api/` become indexable content.**
8. **Do not commit secrets such as `RESEND_API_KEY`.**
9. **Keep English URLs under `/en/`; use separate URL trees for future languages.**
10. **Every SEO page should map to a real traveler decision and a logical monetization action.**
11. **Use Search Console data to decide what to expand after launch.**
12. **Traffic → helpful decision → affiliate click → booking commission is the product loop. Protect that loop above feature creep.**

---

## 16. Immediate next actions for Co-work

Execute in this exact order:

1. Read this file completely.
2. Inspect current `main` and open PR #22.
3. Verify which commit is actually Production on Vercel.
4. Confirm final public hostname/domain.
5. Set `NEXT_PUBLIC_SITE_URL` to that hostname.
6. QA all `/go/` affiliate categories on production.
7. Review and merge SEO foundation PR when safe.
8. Deploy one consolidated production build.
9. Verify `/robots.txt` and `/sitemap.xml` publicly.
10. Connect/verify Google Search Console.
11. Submit sitemap.
12. Request indexing for homepage and top five commercial SEO pages.
13. Build the first 10-page high-intent SEO batch listed above.
14. Add persistent analytics only after the launch funnel is stable.
15. Review Search Console weekly and prioritize content based on impressions, CTR, ranking movement and affiliate click potential.

This file is the operating handoff for the current VietnamGo MVP.