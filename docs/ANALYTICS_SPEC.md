# VietnamGo — Analytics Spec

_MVP privacy-conscious event contract; current implementation is runtime logging, not persistent analytics._

| Event | Trigger | Parameters | Purpose | Privacy consideration |
|---|---|---|---|---|
| `page_view` | Content page render, if analytics sink is added | `page`, `source`, `tripId?` | SEO landing baseline | No email, name, IP, or full query payload |
| `planner_opened` | User enters planner from article/home | `sourcePage`, `presetDays?`, `tripId` | Measure content → planner | First-party random trip ID only |
| `planner_completed` | Result route is rendered after valid planner input | `page`, `days`, `budget`, `style`, `interest`, `tripId` | Measure planner completion | Do not log dates if not needed; no personal data |
| `affiliate_category_clicked` | Booking category CTA clicked | `key`, `source`, `page`, `tripId` | Category CTR | Partner key only; no email |
| `affiliate_partner_clicked` | `/go/[key]` validates and redirects | `key`, `partner`, `source`, `page`, `days?`, `budget?`, `style?`, `interest?`, `tripId` | Attribution/debugging | Existing server log; redact/refuse personal fields |
| `email_itinerary_sent` | Resend accepts transactional email | `days`, `tripId?`, `status` | Product utility metric | Never log email address; retain provider message ID only if needed |

## Current status

`middleware.ts` emits a `[planner-result]` log on `/en/planner`; `app/go/[key]/route.ts` emits `[affiliate-click]`. A persistent event sink is intentionally out of MVP scope. The `vg_trip` cookie is httpOnly, same-site and random; do not use it to infer identity.
