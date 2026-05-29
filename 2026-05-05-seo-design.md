# GitFoundry SEO — Full Audit & Improvement Plan

**Date:** 2026-05-05
**Scope:** gitfoundry.co.uk — all pages
**Approach:** Parallel critical fixes + content/schema per page (Option C)

---

## Goals

1. Rank for local UK searches: "affordable website UK", "website with no monthly fees", "web designer Stoke-on-Trent"
2. Rank journal articles for profession-specific long-tail searches: "website for a physiotherapist UK", "solicitor website design UK", etc.
3. Fix all crawlability blockers so Google correctly indexes every page
4. Add structured data (JSON-LD) to every page to qualify for rich results

---

## Target Audience

- Self-employed tradespeople, sole traders, micro-businesses across the UK
- Small businesses (up to ~10 employees), any sector
- People burned by Wix/Squarespace subscriptions looking for a one-time-payment alternative

---

## Phase 1: Critical Blockers (fix first, before anything else)

### 1.1 Broken canonical on journal-001

**File:** `journal/journal-001-small-beginnings.html`

- `og:url` says `/journal/001-small-beginnings.html` — wrong path, file does not exist at that URL
- No `<link rel="canonical">` tag present at all
- Also has duplicate `<link rel="stylesheet">` and `<script>` tags loaded twice

**Fix:**
- Add `<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-001-small-beginnings.html">`
- Correct `og:url` to match
- Remove duplicate stylesheet/script tags
- Add missing `og:image`, `twitter:card`, `twitter:image` tags (use `https://gitfoundry.co.uk/og-image.png` to match other pages)

### 1.2 Sitemap missing 3 journal entries

**File:** `sitemap.xml`

Missing entries:
- `journal/journal-008-the-accountant.html`
- `journal/journal-009-the-personal-trainer.html`
- `journal/journal-010-the-counsellor.html`

**Fix:** Add all three `<url>` blocks with `lastmod`, `changefreq: never`, `priority: 0.6`

---

## Phase 2: Schema Markup (page by page)

No page-level JSON-LD exists except the homepage. Every page gets structured data in the same pass as its content update.

| Page | Schema type(s) |
|---|---|
| `index.html` | Upgrade `ProfessionalService` → add `LocalBusiness`, `geo`, `email` (info@gitfoundry.co.uk), `openingHours` (Mon–Fri), no `sameAs` yet (no social profiles) |
| `services.html` | `WebPage` + `Service` per offering + `BreadcrumbList` |
| `pricing.html` | `WebPage` + `FAQPage` (5–6 Q&As) + `BreadcrumbList` |
| `sectors.html` | `WebPage` + `BreadcrumbList` |
| `portfolio.html` | `CollectionPage` + `BreadcrumbList` |
| `about.html` | `AboutPage` + `Person` or `Organization` + `BreadcrumbList` |
| `brief.html` / `contact.html` | `ContactPage` + `BreadcrumbList` |
| All 10 journal articles | `Article` (headline, datePublished, dateModified, author, publisher, image) + `BreadcrumbList` |

**Article schema fields required on each journal page:**
```json
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": {
    "@type": "Organization",
    "name": "GitFoundry",
    "url": "https://gitfoundry.co.uk"
  },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/..." }
}
```

---

## Phase 3: Content & Keyword Rewrites

Full rewrites are permitted. Each page gets one clear primary keyword target.

### Homepage (`index.html`)

**Primary target:** "affordable website UK" / "website with no monthly fees UK"

- Hero headline: lead with the value proposition people search for — no monthly fees, one-time payment, permanent ownership
- First 100 words must answer: what is this, who is it for, why is it different
- Naturally include: "affordable website", "no monthly fees", "one-time payment", "GitHub Pages", "UK small business"
- Avoid: "precision-built" as a lead — nobody searches for it (keep as brand voice, not the hook)

### Services page (`services.html`)

**Primary target:** "web design for small business UK" / "freelancer website design UK"

- Add short paragraph per service using natural search language
- Include: "small business website UK", "one page website", "portfolio website UK", "freelancer website"

### Pricing page (`pricing.html`)

**Primary target:** "how much does a website cost UK" / "website price UK"

- Add intro paragraph including "website price UK", "one-time website fee", "no monthly subscription website"
- Add FAQ section (visible on page, not just schema) with 5–6 questions:
  1. Why is there no monthly fee?
  2. Do I own the code?
  3. What happens if GitHub Pages goes down?
  4. Can I update the site myself?
  5. What's the difference between the three tiers?
  6. Do you work with clients outside the UK?

### Sectors page (`sectors.html`)

**Primary target:** profession-specific searches

- Each sector gets a short paragraph (2–3 sentences) with the profession keyword:
  - Tradesperson: "website for a self-employed tradesperson UK"
  - Solicitor: "solicitor website design UK"
  - Physiotherapist: "physiotherapy practice website UK"
  - Photographer: "photographer portfolio website UK"
  - Tutor: "private tutor website UK"
  - Accountant: "accountant website design UK"
  - Personal trainer: "personal trainer website UK"
  - Counsellor: "counsellor therapist website UK"

### About page (`about.html`)

**Primary target:** "web designer Stoke-on-Trent" / local SEO

- Explicitly mention Stoke-on-Trent and surrounding region in body copy
- "Serving clients across the UK from our studio in Stoke-on-Trent" style phrasing
- Add founder/studio background to build E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

### Journal articles — keyword mapping

Each article gets one primary keyword target inserted into `<title>`, `<h1>`, meta description, and naturally once or twice in body copy. The narrative voice stays intact.

| Article | Current title | Target keyword |
|---|---|---|
| 001 | All Big Things Have Small Beginnings | "independent web design studio UK" |
| 002 | On Being Unfindable | "why small businesses need a website UK" |
| 003 | The Tradesperson | "website for a self-employed tradesperson" |
| 004 | The Solicitor | "solicitor website design UK" |
| 005 | The Physiotherapist | "physiotherapy website UK" |
| 006 | The Photographer | "photographer portfolio website UK" |
| 007 | The Tutor | "private tutor website UK" |
| 008 | The Accountant | "accountant website design UK" |
| 009 | The Personal Trainer | "personal trainer website UK" |
| 010 | The Counsellor | "therapist counsellor website UK" |

Article titles can stay editorial — just ensure the `<title>` tag and `<h1>` include the target keyword naturally (e.g. "The Tradesperson — Why Every Self-Employed Tradesperson Needs a Proper Website").

---

## Phase 4: Ongoing

- **Google Analytics** — set up GA4 and link to Search Console for conversion tracking
- **llms.txt** — already referenced in robots.txt; ensure it exists and is complete
- **New journal entries** — add to sitemap immediately on publish
- **Search Console** — after all changes ship, request re-indexing of every modified URL via the URL Inspection tool

---

## Page Priority Order

1. `index.html` (homepage — highest traffic, most impact)
2. `sitemap.xml` + journal-001 canonical (blockers — fix immediately)
3. `pricing.html` (high commercial intent)
4. `services.html` (high commercial intent)
5. `sectors.html` (long-tail SEO asset)
6. Journal articles 003–010 (profession-specific long-tail)
7. `about.html` (local SEO)
8. `portfolio.html`
9. `brief.html` / `contact.html`
10. Journal articles 001–002 (lower commercial intent)

---

## Success Metrics

- All pages indexed in Google Search Console (no coverage errors)
- Journal articles appearing in search results for their target keyword within 60–90 days
- Homepage ranking in top 20 for "affordable website UK" within 90 days
- Rich results (FAQ accordions, article schema) visible in Google for pricing and journal pages
