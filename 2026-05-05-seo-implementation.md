# GitFoundry SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all crawlability blockers, add JSON-LD schema to every page, and keyword-optimize all content so GitFoundry ranks for UK small-business website searches and profession-specific long-tail queries.

**Architecture:** Pure HTML edits to a static site — no build tool, no framework. Every task is a direct file edit followed by validation in a browser or at validator.schema.org. Tasks are ordered by impact: blockers first, high-traffic commercial pages next, long-tail content pages last.

**Tech Stack:** Static HTML, JSON-LD (schema.org), `<meta>` tags. Validation via validator.schema.org and Google's Rich Results Test.

---

## File Map

| File | Changes |
|---|---|
| `sitemap.xml` | Add 3 missing journal entries |
| `journal/journal-001-small-beginnings.html` | Fix canonical, og:url, remove duplicate tags, add OG image + Twitter tags |
| `journal/journal-002-on-being-unfindable.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-003-the-tradesperson.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-004-the-solicitor.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-005-the-physiotherapist.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-006-the-photographer.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-007-the-tutor.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-008-the-accountant.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-009-the-personal-trainer.html` | Add canonical tag, Article schema, keyword title/meta |
| `journal/journal-010-the-counsellor.html` | Add canonical tag, Article schema, keyword title/meta |
| `index.html` | Upgrade schema to LocalBusiness with geo + email |
| `pricing.html` | Add FAQPage schema + visible FAQ section |
| `services.html` | Add WebPage + Service schemas + keyword intro paragraph |
| `sectors.html` | Add WebPage schema + profession keywords in item bodies |
| `about.html` | Add AboutPage + Person schema |
| `portfolio.html` | Add CollectionPage + BreadcrumbList schema |
| `brief.html` | Add ContactPage schema |
| `contact.html` | Add ContactPage schema |

---

## Task 1: Fix sitemap.xml — add 3 missing journal entries

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Open sitemap.xml and add the three missing `<url>` blocks**

Locate the closing `</urlset>` tag. Insert these three entries immediately before it:

```xml
  <url>
    <loc>https://gitfoundry.co.uk/journal/journal-008-the-accountant.html</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>never</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://gitfoundry.co.uk/journal/journal-009-the-personal-trainer.html</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>never</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://gitfoundry.co.uk/journal/journal-010-the-counsellor.html</loc>
    <lastmod>2026-05-04</lastmod>
    <changefreq>never</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>
```

- [ ] **Step 2: Verify the file is valid XML**

Open `sitemap.xml` in a browser (File → Open). If the browser renders it as a tree without errors, it is valid. If it shows a parse error, re-check for missing closing tags or mismatched quotes.

- [ ] **Step 3: Commit**

```bash
git add sitemap.xml
git commit -m "seo: add journal 008-010 to sitemap"
```

---

## Task 2: Fix journal-001 — canonical, og:url, duplicate tags, missing OG/Twitter

**Files:**
- Modify: `journal/journal-001-small-beginnings.html`

This file has four problems: wrong `og:url`, no `<link rel="canonical">`, duplicate `<link rel="stylesheet">` and `<script>` tags (lines 26–30 repeat lines 21–25), and missing `og:image` / `twitter:card` / `twitter:image`.

- [ ] **Step 1: Fix og:url and add canonical**

Find this line:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/001-small-beginnings.html">
```

Replace it with:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-001-small-beginnings.html">
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-001-small-beginnings.html">
```

- [ ] **Step 2: Add missing OG image and Twitter card tags**

After the `og:url` / canonical block you just edited, add:
```html
<meta property="og:image" content="https://gitfoundry.co.uk/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="All Big Things Have Small Beginnings — GitFoundry Journal">
<meta name="twitter:description" content="The first entry in the GitFoundry journal. Why this exists, what it is, and what comes next.">
<meta name="twitter:image" content="https://gitfoundry.co.uk/og-image.png">
```

- [ ] **Step 3: Remove duplicate stylesheet and script blocks**

The file loads `styles.css` and `site.js` twice. Find and delete the second occurrence of this block (the one that appears around lines 26–30):
```html
<link rel="stylesheet" href="../styles.css">
<script>try{document.documentElement.setAttribute('data-theme',localStorage.getItem('gf-theme')||'night')}catch(e){document.documentElement.setAttribute('data-theme','night')}</script>
<script defer src="../site.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.14.1/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
```

Keep the first occurrence (lines 21–25). Delete only the second.

- [ ] **Step 4: Verify in browser**

Open the file in a browser. Check that the page loads once, styles are applied, and no console errors appear.

- [ ] **Step 5: Commit**

```bash
git add journal/journal-001-small-beginnings.html
git commit -m "seo: fix journal-001 canonical, og:url, duplicate tags, add OG/Twitter"
```

---

## Task 3: Add canonical tags to journal articles 002–010

**Files:**
- Modify: `journal/journal-002-on-being-unfindable.html` through `journal/journal-010-the-counsellor.html`

None of these articles has a `<link rel="canonical">` tag. Each one has a correct `og:url` — use that URL as the canonical.

- [ ] **Step 1: Add canonical to journal-002**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-002-on-being-unfindable.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-002-on-being-unfindable.html">
```

- [ ] **Step 2: Add canonical to journal-003**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-003-the-tradesperson.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-003-the-tradesperson.html">
```

- [ ] **Step 3: Add canonical to journal-004**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-004-the-solicitor.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-004-the-solicitor.html">
```

- [ ] **Step 4: Add canonical to journal-005**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-005-the-physiotherapist.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-005-the-physiotherapist.html">
```

- [ ] **Step 5: Add canonical to journal-006**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-006-the-photographer.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-006-the-photographer.html">
```

- [ ] **Step 6: Add canonical to journal-007**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-007-the-tutor.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-007-the-tutor.html">
```

- [ ] **Step 7: Add canonical to journal-008**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-008-the-accountant.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-008-the-accountant.html">
```

- [ ] **Step 8: Add canonical to journal-009**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-009-the-personal-trainer.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-009-the-personal-trainer.html">
```

- [ ] **Step 9: Add canonical to journal-010**

Find:
```html
<meta property="og:url" content="https://gitfoundry.co.uk/journal/journal-010-the-counsellor.html">
```

Add immediately after:
```html
<link rel="canonical" href="https://gitfoundry.co.uk/journal/journal-010-the-counsellor.html">
```

- [ ] **Step 10: Commit**

```bash
git add journal/journal-002-on-being-unfindable.html \
        journal/journal-003-the-tradesperson.html \
        journal/journal-004-the-solicitor.html \
        journal/journal-005-the-physiotherapist.html \
        journal/journal-006-the-photographer.html \
        journal/journal-007-the-tutor.html \
        journal/journal-008-the-accountant.html \
        journal/journal-009-the-personal-trainer.html \
        journal/journal-010-the-counsellor.html
git commit -m "seo: add canonical tags to all journal articles 002-010"
```

---

## Task 4: Upgrade homepage LocalBusiness schema

**Files:**
- Modify: `index.html`

The homepage has a `ProfessionalService` JSON-LD block. Replace it with an upgraded `LocalBusiness` block that adds `email`, `geo`, and the founder as `founder`.

- [ ] **Step 1: Replace the schema block**

Find this entire block in `index.html` (near the bottom, before the Hero globe script):
```html
  <!-- ── SCHEMA: Organization ── -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "GitFoundry",
  "url": "https://gitfoundry.co.uk",
  "description": "Precision-built websites on GitHub Pages. One-time fee, permanent ownership, zero hosting costs. UK based web design studio.",
  "image": "https://gitfoundry.co.uk/og-image.png",
  "priceRange": "££",
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Stoke-on-Trent",
    "addressCountry": "GB"
  }
}
</script>
```

Replace with:
```html
  <!-- ── SCHEMA: LocalBusiness ── -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "GitFoundry",
  "url": "https://gitfoundry.co.uk",
  "description": "Affordable, precision-built websites hosted free on GitHub Pages. One-time payment, no monthly fees, full source code ownership. UK web design studio based in Stoke-on-Trent.",
  "image": "https://gitfoundry.co.uk/og-image.png",
  "email": "info@gitfoundry.co.uk",
  "priceRange": "££",
  "founder": {
    "@type": "Person",
    "name": "Azhar"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Stoke-on-Trent",
    "addressRegion": "Staffordshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.0027,
    "longitude": -2.1794
  }
}
</script>
```

- [ ] **Step 2: Validate schema**

Go to https://validator.schema.org/ → paste the JSON-LD block → confirm no errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "seo: upgrade homepage schema to LocalBusiness with geo and email"
```

---

## Task 5: Add FAQPage schema + visible FAQ section to pricing.html

**Files:**
- Modify: `pricing.html`

- [ ] **Step 1: Add the visible FAQ section**

Find the closing `</main>` tag in `pricing.html`. Insert the following FAQ section immediately before the CTA section (look for the section with `id="cta-p-heading"`):

```html
    <section class="section" aria-labelledby="faq-heading" id="faq">
      <span class="section-label">Questions</span>
      <h2 class="section-title" id="faq-heading">Frequently asked</h2>

      <div class="item-row a-reveal" x-intersect:enter.once="$el.classList.add('shown')">
        <div class="item-row-label">No monthly fee?</div>
        <div class="item-row-body">
          <strong>Why is there no monthly fee?</strong>
          Your site is hosted on GitHub Pages — a free, permanent service run by Microsoft. There is no platform charging you rent. You pay once for the design and build; after that, hosting costs nothing. Your site stays live for as long as GitHub Pages exists, which is to say: indefinitely.
        </div>
      </div>

      <div class="item-row a-reveal" x-intersect:enter.once="$el.classList.add('shown')">
        <div class="item-row-label">Ownership</div>
        <div class="item-row-body">
          <strong>Do I own the code?</strong>
          Yes — completely. When the project is delivered, the full source code is transferred to your own GitHub account. You can hand it to any developer in the world to modify. There is no lock-in, no proprietary format, no ongoing dependency on GitFoundry.
        </div>
      </div>

      <div class="item-row a-reveal" x-intersect:enter.once="$el.classList.add('shown')">
        <div class="item-row-label">Updates</div>
        <div class="item-row-body">
          <strong>Can I update the site myself after launch?</strong>
          Yes. The code is plain HTML, CSS, and a little JavaScript — no framework to learn. If you are comfortable editing a document, you can edit your site. Alternatively, small updates can be quoted separately.
        </div>
      </div>

      <div class="item-row a-reveal" x-intersect:enter.once="$el.classList.add('shown')">
        <div class="item-row-label">Reliability</div>
        <div class="item-row-body">
          <strong>What happens if GitHub Pages goes down?</strong>
          GitHub Pages has a 99.9% uptime record. Because your code lives in a standard Git repository, you can move it to any other static host (Netlify, Cloudflare Pages, your own server) in under an hour if you ever need to. You are never dependent on a single provider.
        </div>
      </div>

      <div class="item-row a-reveal" x-intersect:enter.once="$el.classList.add('shown')">
        <div class="item-row-label">Choosing a tier</div>
        <div class="item-row-body">
          <strong>What is the difference between the three tiers?</strong>
          The Foundry tier (£149) is a focused single-purpose site — ideal for a landing page, a portfolio, or a professional profile. The Precision tier (£399) adds multiple pages, a contact form, and a journal. The Bespoke tier (£749+) is a fully custom build with design system, animations, and no constraints.
        </div>
      </div>

      <div class="item-row a-reveal" x-intersect:enter.once="$el.classList.add('shown')">
        <div class="item-row-label">Location</div>
        <div class="item-row-body">
          <strong>Do you work with clients outside the UK?</strong>
          Yes. All communication and delivery happens online, so location is no barrier. The majority of clients are UK-based, but the work is done entirely remotely regardless of where you are.
        </div>
      </div>

    </section>
```

- [ ] **Step 2: Add FAQPage + WebPage JSON-LD schema**

Find the closing `</body>` tag in `pricing.html`. Add this block immediately before it:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is there no monthly fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your site is hosted on GitHub Pages — a free, permanent service run by Microsoft. There is no platform charging you rent. You pay once for the design and build; after that, hosting costs nothing."
      }
    },
    {
      "@type": "Question",
      "name": "Do I own the code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — completely. When the project is delivered, the full source code is transferred to your own GitHub account. You can hand it to any developer in the world to modify. There is no lock-in, no proprietary format, no ongoing dependency on GitFoundry."
      }
    },
    {
      "@type": "Question",
      "name": "Can I update the site myself after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The code is plain HTML, CSS, and a little JavaScript — no framework to learn. If you are comfortable editing a document, you can edit your site."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if GitHub Pages goes down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GitHub Pages has a 99.9% uptime record. Because your code lives in a standard Git repository, you can move it to any other static host (Netlify, Cloudflare Pages, your own server) in under an hour if you ever need to."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between the three tiers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Foundry tier (£149) is a focused single-purpose site. The Precision tier (£399) adds multiple pages, a contact form, and a journal. The Bespoke tier (£749+) is a fully custom build with no constraints."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with clients outside the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All communication and delivery happens online, so location is no barrier. The majority of clients are UK-based, but the work is done entirely remotely regardless of where you are."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pricing — GitFoundry",
  "url": "https://gitfoundry.co.uk/pricing.html",
  "description": "Affordable website pricing from £149. One-time payment, no monthly fees, full source code ownership. UK web design for small businesses.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://gitfoundry.co.uk/pricing.html" }
    ]
  }
}
</script>
```

- [ ] **Step 3: Validate FAQPage schema**

Go to https://search.google.com/test/rich-results → enter the URL (after deploying) or paste the schema → confirm the FAQ rich result is detected.

- [ ] **Step 4: Commit**

```bash
git add pricing.html
git commit -m "seo: add FAQ section and FAQPage+WebPage schema to pricing"
```

---

## Task 6: Add WebPage + Service schema to services.html

**Files:**
- Modify: `services.html`

- [ ] **Step 1: Add WebPage + Service JSON-LD before `</body>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Services — GitFoundry",
  "url": "https://gitfoundry.co.uk/services.html",
  "description": "Web design services for UK small businesses and self-employed professionals. One-time payment, no monthly fees.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gitfoundry.co.uk/services.html" }
    ]
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "@type": "LocalBusiness", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "serviceType": "Web Design",
  "name": "Affordable Website Design for UK Small Businesses",
  "description": "Custom-built static websites hosted free on GitHub Pages. One-time payment, no monthly fees, full source code ownership. Serving sole traders, tradespeople, freelancers, and small businesses across the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "149",
    "highPrice": "749",
    "offerCount": "3"
  }
}
</script>
```

- [ ] **Step 2: Add a keyword intro paragraph after the page `<h1>`**

Find the `<h1 class="page-header-title">` in `services.html` and the `<p class="page-header-desc">` that follows it. Replace the `page-header-desc` paragraph with:

```html
<p class="page-header-desc">Affordable web design for UK small businesses, sole traders, and self-employed professionals — from a one-page site to a full multi-page presence. One flat fee, no monthly subscription, no platform lock-in. Delivered in as few as three working days, yours to keep forever.</p>
```

- [ ] **Step 3: Validate schema at validator.schema.org**

Paste both JSON-LD blocks → confirm no errors.

- [ ] **Step 4: Commit**

```bash
git add services.html
git commit -m "seo: add WebPage+Service schema and keyword intro to services"
```

---

## Task 7: Add schema and profession keywords to sectors.html

**Files:**
- Modify: `sectors.html`

- [ ] **Step 1: Update the page-header-desc to include profession keywords**

Find:
```html
<p class="page-header-desc">Precision-built websites on GitHub Pages. One-time fee — full source code handover. Made in the UK for local businesses, professionals, researchers, charities, and creatives who deserve a site as precise as their work.</p>
```

Replace with:
```html
<p class="page-header-desc">Websites built for the self-employed and small business owner across the UK — plumbers, electricians, solicitors, physiotherapists, accountants, photographers, tutors, personal trainers, counsellors, and anyone whose work deserves to be found. One flat fee. No monthly bill. Yours forever.</p>
```

- [ ] **Step 2: Enrich the "Local business" item body with profession keywords**

Find:
```html
          The backbone of UK high streets — independent shops, studios, tradespeople, and professional services. A polished permanent web presence that reflects the quality of your work, without a monthly bill quietly eating into your margin.
          <span style="display:block;margin-top:0.75rem;color:var(--text-muted);font-size:0.8125rem">Common projects: local shop sites, trade business pages, professional service sites, event pages.</span>
```

Replace with:
```html
          The backbone of UK high streets — plumbers, electricians, builders, heating engineers, and independent shops who need a professional web presence without a monthly subscription quietly eating into their margin.
          <span style="display:block;margin-top:0.75rem;color:var(--text-muted);font-size:0.8125rem">Common projects: tradesperson websites, local shop sites, trade business pages, professional service sites.</span>
```

- [ ] **Step 3: Enrich the "Professionals" item body with profession keywords**

Find:
```html
          Your expertise is established — your site should match. Something elegant, considered, and permanent that reflects your standards. No subscription-branded template footers, no monthly fee.
          <span style="display:block;margin-top:0.75rem;color:var(--text-muted);font-size:0.8125rem">Common projects: consultant sites, advisory profiles, freelance portfolios, service pages.</span>
```

Replace with:
```html
          Solicitors, physiotherapists, accountants, photographers, private tutors, personal trainers, and counsellors — professionals whose expertise is established and whose online presence should match. Elegant, permanent, and entirely yours.
          <span style="display:block;margin-top:0.75rem;color:var(--text-muted);font-size:0.8125rem">Common projects: solicitor websites, physiotherapy practice sites, accountant pages, photographer portfolios, tutor sites, personal trainer pages.</span>
```

- [ ] **Step 4: Add WebPage schema before `</body>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Who We Build For — GitFoundry",
  "url": "https://gitfoundry.co.uk/sectors.html",
  "description": "Affordable websites for UK tradespeople, solicitors, physiotherapists, accountants, photographers, tutors, personal trainers, and counsellors. One-time payment, no monthly fees.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Who We Build For", "item": "https://gitfoundry.co.uk/sectors.html" }
    ]
  }
}
</script>
```

- [ ] **Step 5: Commit**

```bash
git add sectors.html
git commit -m "seo: add profession keywords and WebPage schema to sectors"
```

---

## Task 8: Add AboutPage + Person schema to about.html

**Files:**
- Modify: `about.html`

The about page already mentions "A developer in Stoke-on-Trent" in the `<h1>` — local SEO copy is good. This task adds only the schema.

- [ ] **Step 1: Add AboutPage + Person JSON-LD before `</body>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About — GitFoundry",
  "url": "https://gitfoundry.co.uk/about.html",
  "description": "GitFoundry is a web design studio based in Stoke-on-Trent, UK. Founded by Azhar, building affordable websites for local businesses and independent professionals with no monthly fees.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://gitfoundry.co.uk/about.html" }
    ]
  },
  "about": {
    "@type": "Person",
    "name": "Azhar",
    "jobTitle": "Web Designer & Developer",
    "worksFor": { "@type": "Organization", "name": "GitFoundry" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Stoke-on-Trent",
      "addressRegion": "Staffordshire",
      "addressCountry": "GB"
    },
    "email": "info@gitfoundry.co.uk",
    "url": "https://gitfoundry.co.uk/about.html"
  }
}
</script>
```

- [ ] **Step 2: Validate at validator.schema.org**

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "seo: add AboutPage and Person schema to about"
```

---

## Task 9: Add schema to portfolio.html, brief.html, and contact.html

**Files:**
- Modify: `portfolio.html`, `brief.html`, `contact.html`

- [ ] **Step 1: Add CollectionPage schema to portfolio.html before `</body>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio — GitFoundry",
  "url": "https://gitfoundry.co.uk/portfolio.html",
  "description": "Examples of websites built by GitFoundry for UK small businesses and independent professionals. Static sites hosted on GitHub Pages.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://gitfoundry.co.uk/portfolio.html" }
    ]
  }
}
</script>
```

- [ ] **Step 2: Add ContactPage schema to brief.html before `</body>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Get a Quote — GitFoundry",
  "url": "https://gitfoundry.co.uk/brief.html",
  "description": "Start your website project with GitFoundry. Fill in a short brief and receive a fixed quote within 48 hours. UK web design, one-time payment.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Get a Quote", "item": "https://gitfoundry.co.uk/brief.html" }
    ]
  }
}
</script>
```

- [ ] **Step 3: Check if contact.html exists and add ContactPage schema**

Open `contact.html`. If it exists and has a `</body>` tag, add before it:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact — GitFoundry",
  "url": "https://gitfoundry.co.uk/contact.html",
  "description": "Contact GitFoundry. Email info@gitfoundry.co.uk. UK web design studio based in Stoke-on-Trent.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://gitfoundry.co.uk/contact.html" }
    ]
  }
}
</script>
```

- [ ] **Step 4: Commit**

```bash
git add portfolio.html brief.html contact.html
git commit -m "seo: add CollectionPage and ContactPage schemas to portfolio, brief, contact"
```

---

## Task 10: Add Article + BreadcrumbList schema to all 10 journal articles

**Files:**
- Modify: all 10 `journal/journal-00*.html` files

Each article needs one `Article` JSON-LD block. The `datePublished` value comes from the visible date text in each article's `.post-meta` div — convert it from "04 MAY 2026" to "2026-05-04".

- [ ] **Step 1: Add schema to journal-001**

Add immediately before `</body>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "All Big Things Have Small Beginnings",
  "description": "The first entry in the GitFoundry journal. Why this exists, what it is, and what comes next.",
  "datePublished": "2026-04-27",
  "dateModified": "2026-04-27",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": {
    "@type": "Organization",
    "name": "GitFoundry",
    "url": "https://gitfoundry.co.uk"
  },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gitfoundry.co.uk/journal/journal-001-small-beginnings.html"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "All Big Things Have Small Beginnings", "item": "https://gitfoundry.co.uk/journal/journal-001-small-beginnings.html" }
    ]
  }
}
</script>
```

- [ ] **Step 2: Add schema to journal-002**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "On Being Unfindable",
  "description": "A small essay on what it costs, in 2026, to be excellent at one's work and quietly invisible online.",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-002-on-being-unfindable.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "On Being Unfindable", "item": "https://gitfoundry.co.uk/journal/journal-002-on-being-unfindable.html" }
    ]
  }
}
</script>
```

- [ ] **Step 3: Add schema to journal-003**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Tradesperson Who Could Not Be Booked",
  "description": "For the plumbers, electricians and builders who are quietly booked out for months — and yet invisible to the stranger with a burst pipe and a telephone.",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-003-the-tradesperson.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Tradesperson Who Could Not Be Booked", "item": "https://gitfoundry.co.uk/journal/journal-003-the-tradesperson.html" }
    ]
  }
}
</script>
```

- [ ] **Step 4: Add schema to journal-004**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Solicitor Who Trusted Only Word of Mouth",
  "description": "On why legal professionals — solicitors, conveyancers, family lawyers — are among the hardest professionals to find online.",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-004-the-solicitor.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Solicitor Who Trusted Only Word of Mouth", "item": "https://gitfoundry.co.uk/journal/journal-004-the-solicitor.html" }
    ]
  }
}
</script>
```

- [ ] **Step 5: Add schema to journal-005**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Physiotherapist Without a Digital Waiting Room",
  "description": "On physiotherapists, osteopaths and sports therapists who quietly transform their patients' lives — and who cannot be found by the person in pain who needs them this week.",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-005-the-physiotherapist.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Physiotherapist Without a Digital Waiting Room", "item": "https://gitfoundry.co.uk/journal/journal-005-the-physiotherapist.html" }
    ]
  }
}
</script>
```

- [ ] **Step 6: Add schema to journal-006**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Photographer Who Hid in Plain Sight",
  "description": "On wedding photographers, portrait artists and commercial photographers who produce extraordinary images — and keep them locked inside platforms that own them.",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-006-the-photographer.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Photographer Who Hid in Plain Sight", "item": "https://gitfoundry.co.uk/journal/journal-006-the-photographer.html" }
    ]
  }
}
</script>
```

- [ ] **Step 7: Add schema to journal-007**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Tutor Who Changed a Life and Was Never Found Again",
  "description": "On private tutors, music teachers and education professionals who unlock potential in their students — and who remain findable only by families already lucky enough to know them.",
  "datePublished": "2026-05-04",
  "dateModified": "2026-05-04",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-007-the-tutor.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Tutor Who Changed a Life and Was Never Found Again", "item": "https://gitfoundry.co.uk/journal/journal-007-the-tutor.html" }
    ]
  }
}
</script>
```

- [ ] **Step 8: Add schema to journal-008**

First, open `journal-008-the-accountant.html` and read the date from the `.post-meta` div. Convert it to ISO format (e.g. "08 MAY 2026" → "2026-05-08"). Use that date for both `datePublished` and `dateModified`.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Accountant Who Saved the Business and Left No Trail",
  "description": "On bookkeepers, small-business accountants and tax advisers who quietly rescue their clients from financial crisis — and who cannot be found by the sole trader who needs that rescue next.",
  "datePublished": "REPLACE_WITH_DATE_FROM_POST_META",
  "dateModified": "REPLACE_WITH_DATE_FROM_POST_META",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-008-the-accountant.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Accountant Who Saved the Business and Left No Trail", "item": "https://gitfoundry.co.uk/journal/journal-008-the-accountant.html" }
    ]
  }
}
</script>
```

- [ ] **Step 9: Add schema to journal-009**

Open `journal-009-the-personal-trainer.html`, read the date from `.post-meta`, convert to ISO format.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Personal Trainer Nobody Could Actually Find",
  "description": "On personal trainers and fitness coaches who build lasting change in their clients — and who rely on an algorithm-owned platform rather than a page of their own.",
  "datePublished": "REPLACE_WITH_DATE_FROM_POST_META",
  "dateModified": "REPLACE_WITH_DATE_FROM_POST_META",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-009-the-personal-trainer.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Personal Trainer Nobody Could Actually Find", "item": "https://gitfoundry.co.uk/journal/journal-009-the-personal-trainer.html" }
    ]
  }
}
</script>
```

- [ ] **Step 10: Add schema to journal-010**

Open `journal-010-the-counsellor.html`, read the date from `.post-meta`, convert to ISO format.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Counsellor Nobody Knew How to Find",
  "description": "On therapists and counsellors who hold their clients' most difficult things with skill and care — and who remain invisible to the person searching at their lowest point.",
  "datePublished": "REPLACE_WITH_DATE_FROM_POST_META",
  "dateModified": "REPLACE_WITH_DATE_FROM_POST_META",
  "author": { "@type": "Person", "name": "Azhar" },
  "publisher": { "@type": "Organization", "name": "GitFoundry", "url": "https://gitfoundry.co.uk" },
  "image": "https://gitfoundry.co.uk/og-image.png",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gitfoundry.co.uk/journal/journal-010-the-counsellor.html" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gitfoundry.co.uk/" },
      { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://gitfoundry.co.uk/journal/" },
      { "@type": "ListItem", "position": 3, "name": "The Counsellor Nobody Knew How to Find", "item": "https://gitfoundry.co.uk/journal/journal-010-the-counsellor.html" }
    ]
  }
}
</script>
```

- [ ] **Step 11: Validate one article schema at validator.schema.org as a spot check**

- [ ] **Step 12: Commit**

```bash
git add journal/
git commit -m "seo: add Article and BreadcrumbList schema to all 10 journal articles"
```

---

## Task 11: Keyword-optimize title, h1, and meta description for all 10 journal articles

**Files:**
- Modify: all 10 `journal/journal-00*.html` files

The editorial titles stay in the `<h1>`. The `<title>` tag gets a subtitle appended that includes the target keyword. The meta description is rewritten to include the keyword naturally.

- [ ] **Step 1: Update journal-001 title and meta**

Replace:
```html
<title>All Big Things Have Small Beginnings &mdash; GitFoundry Journal</title>
<meta name="description" content="The first entry in the GitFoundry journal. Why this exists, what it is, and what comes next.">
```

With:
```html
<title>All Big Things Have Small Beginnings — GitFoundry, Independent UK Web Design Studio</title>
<meta name="description" content="The first entry in the GitFoundry journal — why an independent UK web design studio with no monthly fees exists, and who it's for.">
```

- [ ] **Step 2: Update journal-002 title and meta**

Replace:
```html
<title>On Being Unfindable &mdash; GitFoundry Journal</title>
<meta name="description" content="A small essay on what it costs, in 2026, to be excellent at one's work and quietly invisible online — and a gentle argument for the modest website that asks for nothing back.">
```

With:
```html
<title>On Being Unfindable — Why Small Businesses in the UK Need a Website</title>
<meta name="description" content="What it costs to be excellent at your work and invisible online in 2026 — and why small businesses and sole traders in the UK need a proper website of their own.">
```

- [ ] **Step 3: Update journal-003 title and meta**

Replace:
```html
<title>The Tradesperson Who Could Not Be Booked &mdash; GitFoundry Journal</title>
<meta name="description" content="For the plumbers, electricians and builders who are quietly booked out for months — and yet invisible to the stranger with a burst pipe and a telephone.">
```

With:
```html
<title>The Tradesperson Who Could Not Be Booked — Website for a Self-Employed Tradesperson UK</title>
<meta name="description" content="Why every self-employed tradesperson — plumber, electrician, builder — needs a website of their own, not just a Facebook page. One-time fee, no monthly bill.">
```

- [ ] **Step 4: Update journal-004 title and meta**

Replace:
```html
<title>The Solicitor Who Trusted Only Word of Mouth &mdash; GitFoundry Journal</title>
<meta name="description" content="On why legal professionals — solicitors, conveyancers, family lawyers — are among the hardest professionals to find online, and what that costs their would-be clients.">
```

With:
```html
<title>The Solicitor Who Trusted Only Word of Mouth — Solicitor Website Design UK</title>
<meta name="description" content="Why solicitors, conveyancers, and family lawyers are among the hardest professionals to find online — and why a proper solicitor website design matters for clients who need them.">
```

- [ ] **Step 5: Update journal-005 title and meta**

Replace:
```html
<title>The Physiotherapist Without a Digital Waiting Room &mdash; GitFoundry Journal</title>
<meta name="description" content="On physiotherapists, osteopaths and sports therapists who quietly transform their patients' lives — and who cannot be found by the person in pain who needs them this week.">
```

With:
```html
<title>The Physiotherapist Without a Digital Waiting Room — Physiotherapy Website UK</title>
<meta name="description" content="Why physiotherapists, osteopaths and sports therapists need a professional physiotherapy website — so the patient in pain this week can actually find them.">
```

- [ ] **Step 6: Update journal-006 title and meta**

Replace:
```html
<title>The Photographer Who Hid in Plain Sight &mdash; GitFoundry Journal</title>
<meta name="description" content="On wedding photographers, portrait artists and commercial photographers who produce extraordinary images — and keep them locked inside platforms that own them, rather than on pages that belong to themselves.">
```

With:
```html
<title>The Photographer Who Hid in Plain Sight — Photographer Portfolio Website UK</title>
<meta name="description" content="Why wedding photographers and portrait artists need a photographer portfolio website they own — not an Instagram profile or a platform that can vanish overnight.">
```

- [ ] **Step 7: Update journal-007 title and meta**

Replace:
```html
<title>The Tutor Who Changed a Life and Was Never Found Again &mdash; GitFoundry Journal</title>
<meta name="description" content="On private tutors, music teachers and education professionals who unlock potential in their students — and who remain findable only by the families already lucky enough to know them.">
```

With:
```html
<title>The Tutor Who Changed a Life and Was Never Found Again — Private Tutor Website UK</title>
<meta name="description" content="Why private tutors and music teachers need a website of their own — so the family searching for a tutor this September can actually find them, not just those already lucky enough to know them.">
```

- [ ] **Step 8: Update journal-008 title and meta**

Replace:
```html
<title>The Accountant Who Saved the Business and Left No Trail &mdash; GitFoundry Journal</title>
<meta name="description" content="On bookkeepers, small-business accountants and tax advisers who quietly rescue their clients from financial crisis — and who cannot be found by the sole trader who needs that rescue next.">
```

With:
```html
<title>The Accountant Who Saved the Business and Left No Trail — Accountant Website Design UK</title>
<meta name="description" content="Why small-business accountants and bookkeepers need an accountant website design that lets the next sole trader in crisis actually find them online.">
```

- [ ] **Step 9: Update journal-009 title and meta**

Replace:
```html
<title>The Personal Trainer Nobody Could Actually Find &mdash; GitFoundry Journal</title>
<meta name="description" content="On personal trainers and fitness coaches who build lasting change in their clients — and who rely on an algorithm-owned platform rather than a page of their own.">
```

With:
```html
<title>The Personal Trainer Nobody Could Actually Find — Personal Trainer Website UK</title>
<meta name="description" content="Why personal trainers and fitness coaches need a personal trainer website they own — not a social media profile controlled by an algorithm that can suppress them overnight.">
```

- [ ] **Step 10: Update journal-010 title and meta**

Replace:
```html
<title>The Counsellor Nobody Knew How to Find &mdash; GitFoundry Journal</title>
<meta name="description" content="On therapists and counsellors who hold their clients' most difficult things with skill and care — and who remain invisible to the person searching at their lowest point.">
```

With:
```html
<title>The Counsellor Nobody Knew How to Find — Therapist and Counsellor Website UK</title>
<meta name="description" content="Why therapists and counsellors need a proper website — so the person searching for support at their lowest point can actually find someone who can help.">
```

- [ ] **Step 11: Commit**

```bash
git add journal/
git commit -m "seo: keyword-optimize title and meta description for all 10 journal articles"
```

---

## Task 12: Request re-indexing in Google Search Console

- [ ] **Step 1: Deploy all changes to the live site**

Push the repository to GitHub. Verify the live site at `https://gitfoundry.co.uk` reflects the changes.

- [ ] **Step 2: Submit the sitemap**

In Google Search Console → Sitemaps → enter `https://gitfoundry.co.uk/sitemap.xml` → Submit.

- [ ] **Step 3: Request re-indexing for the highest-priority URLs**

In Google Search Console → URL Inspection → enter each URL → click "Request Indexing":

1. `https://gitfoundry.co.uk/`
2. `https://gitfoundry.co.uk/pricing.html`
3. `https://gitfoundry.co.uk/services.html`
4. `https://gitfoundry.co.uk/journal/journal-001-small-beginnings.html`
5. `https://gitfoundry.co.uk/journal/journal-003-the-tradesperson.html`
6. `https://gitfoundry.co.uk/journal/journal-005-the-physiotherapist.html`

- [ ] **Step 4: Set a 30-day review reminder**

In 30 days, check Google Search Console → Performance → Queries, and filter by the target keywords from the spec (`affordable website UK`, `physiotherapy website UK`, etc.) to measure ranking movement.
