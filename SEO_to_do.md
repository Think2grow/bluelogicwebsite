# Blue Logic Water — SEO Master Tracker
**Last updated:** 2026-06-05 (Session 10 — CODE WORK COMPLETE)  
**Goal:** Page-1 Google rankings across Utah's Wasatch Front for high-intent water treatment searches  
**Primary conversion:** Booked free in-home water test appointments  

---

## STATUS KEY
- ✅ Complete
- 🔄 In progress
- ⬜ Not started
- ⚠️ Needs user input / off-site action

---

## CRITICAL ANALYTICS ACTIONS

| Task | Status | Notes |
|---|---|---|
| Link Google Search Console to GA4 | ✅ | Linked 2026-06-05 |
| Submit sitemap in GSC | ✅ | Submitted 2026-06-05 — `https://www.bluelogicwater.com/sitemap-index.xml` |
| Add GBP installation photos | ✅ | Added 2026-06-05 |
| Set up GBP review request automation in GHL | ⚠️ | Text 24hr post-install with GBP review link |
| Claim Angi, BBB, Houzz, WQA directory listings | ⚠️ | NAP must match site exactly |
| Seed GBP Q&A with 5 common questions | ⚠️ | Pre-seed from common-questions page |
| Post weekly on GBP (offers, education, reviews) | ⚠️ | Ongoing — offers, before/after, educational |

---

## TRACK 1 — TECHNICAL & STRUCTURAL ✅ COMPLETE

| Task | Status | File(s) |
|---|---|---|
| Canonical tag + www normalization | ✅ | `src/layouts/Layout.astro` |
| LeadConnector widget moved to body end (LCP fix) | ✅ | `src/layouts/Layout.astro` |
| OG image fixed (was broken reference) | ✅ | `src/utils/schema.ts` |
| `robots.txt` created | ✅ | `public/robots.txt` |
| `llms.txt` created | ✅ | `public/llms.txt` |
| Schema utilities — getServiceSchema, getAggregateRatingSchema, getArticleSchema, full areaServed | ✅ | `src/utils/schema.ts` |
| Product schema price updated to $5,995–$19,999 | ✅ | `src/utils/schema.ts` |
| All `/#contact` CTAs → `/free-water-test/` site-wide | ✅ | All pages + Header + Footer |
| Hero CTA updated to "Schedule Free Water Test" | ✅ | `src/components/ParallaxHero.astro` + React |
| Footer rebuilt (4 columns, all new pages, copyright 2026) | ✅ | `src/components/Footer.astro` |
| Header nav updated to expose service pages | ✅ | `src/components/Header.astro` |
| Homepage Services hub section added | ✅ | `src/pages/index.astro` |
| Reviews component (10 real GBP reviews, Topher removed) | ✅ | `src/components/Reviews.astro` |
| AggregateRating schema on pages with reviews | ✅ | index, free-water-test, RO, softener, filtration |
| Article/BlogPosting schema on all blog posts | ✅ | `src/pages/blog/[...slug].astro` |
| GBP Maps link updated | ✅ | `src/pages/index.astro` |

---

## SERVICE PAGES ✅ COMPLETE

| Page | URL | Status |
|---|---|---|
| Free Water Test (primary CTA destination) | `/free-water-test/` | ✅ |
| Whole-Home Reverse Osmosis Utah | `/whole-home-reverse-osmosis-utah/` | ✅ |
| Whole-Home Water Filtration | `/whole-home-water-filtration/` | ✅ |
| Water Softener Utah | `/water-softener-utah/` | ✅ |

---

## COMPARISON PAGES ✅ COMPLETE

| Page | URL | Status | Primary Keyword |
|---|---|---|---|
| Softener vs Filtration vs RO | `/water-softener-vs-whole-home-filtration/` | ✅ | water softener vs whole home filtration |
| vs Culligan | `/blue-logic-vs-culligan-utah/` | ✅ rewritten | Culligan alternative Utah |
| vs Kinetico | `/blue-logic-vs-kinetico-utah/` | ✅ rewritten | Kinetico alternative Utah |
| vs AJ Softeners | `/blue-logic-vs-aj-softeners-utah/` | ✅ | AJ Softeners alternative Utah |
| vs Element Water | `/blue-logic-vs-element-water-utah/` | ✅ | Element Water alternative Utah |
| vs NuWater | `/blue-logic-vs-nuwater-utah/` | ✅ | NuWater Technologies alternative Utah |
| vs Alta Water | `/blue-logic-vs-alta-water-utah/` | ✅ | Alta Water alternative Utah |

---

## EDUCATIONAL PAGES ✅ COMPLETE

| Page | URL | Status |
|---|---|---|
| Utah Hard Water Guide | `/utah-hard-water/` | ✅ |
| Utah Water Quality Guide | `/utah-water-quality/` | ✅ |
| How to Choose a Water Treatment System | `/how-to-choose-water-treatment-system/` | ✅ |
| How to Read a Water Test | `/how-to-read-a-water-test/` | ✅ |

---

## EXISTING PAGES — ALL UPGRADED ✅

| Page | URL | Status | What Was Done |
|---|---|---|---|
| The System | `/the-system/` | ✅ | Title/H1 updated, schema added, internal links to service pages added |
| The Value / Why Us | `/the-value/` | ✅ | H1 targets competitor keywords, schema added, related pages section added |
| Our Team | `/our-team/` | ✅ | Jared named, role/credentials, installation breakdown, Reviews added, "Nationwide" fixed |
| Common Questions | `/common-questions/` | ✅ | 10 new Utah-specific FAQs added (financing, well water, remineralization, permits, etc.) |

---

## LOCATION PAGES

### Custom Pages Built ✅

| City | URL | Key Differentiator |
|---|---|---|
| Salt Lake City | `/locations/salt-lake-city/` | JVWCD + SLC source, PFAS detected, arsenic 135x, neighborhoods, SLC-specific FAQs |
| Provo | `/locations/provo/` | Arsenic 100x, seasonal hardness, Provo River watershed, Utah County |
| Lehi | `/locations/lehi/` | Arsenic 484x (highest WF), Silicon Slopes, new construction focus |
| Draper | `/locations/draper/` | Arsenic 450x, HAA9 802x, uranium, premium home market |
| Orem | `/locations/orem/` | Chromium-6 36x, arsenic 131x, HAA9 272x, family community |
| Sandy | `/locations/sandy/` | HAA5 306x, dichloroacetic acid 104x, 99k pop, Alta Canyon |
| Ogden | `/locations/ogden/` | Weber County, manganese/iron, artesian wells, variable hardness |
| Layton | `/locations/layton/` | 21 GPG, Davis County, Hill AFB, surface water HAA |
| Bountiful | `/locations/bountiful/` | 18–38 GPG most variable, arsenic + radium, well vs. surface |
| West Jordan | `/locations/west-jordan/` | Chromium-6 93x, arsenic 275x, 113k pop |
| South Jordan | `/locations/south-jordan/` | HAA9 525x (highest valley), master-planned communities |
| Murray | `/locations/murray/` | ~50k, JVWCD, HAA + arsenic |
| Millcreek | `/locations/millcreek/` | ~65k, SLC system, PFAS 404x + arsenic 135x |
| Cottonwood Heights | `/locations/cottonwood-heights/` | Premium homes, SLC system, PFAS + arsenic, compact system angle |

### Template-Only Pages (cities.ts → [city].astro)
Adequate for indexing; upgrade to custom when resources allow.

| City | Slug | Priority for Upgrade |
|---|---|---|
| American Fork | `american-fork` | Medium — arsenic + chromium-6, fast-growing Utah County |
| Spanish Fork | `spanish-fork` | Low-medium |
| Springville | `springville` | Low |
| Park City | `park-city` | Low (Summit County, outside primary service area) |
| Herriman | `herriman` | ✅ Custom page built |
| West Jordan | *(custom page built — template overridden)* | ✅ done |
| South Jordan | *(custom page built — template overridden)* | ✅ done |

### Not Yet in cities.ts — Candidates for Addition
| City | Pop | Why | Priority |
|---|---|---|---|
| Saratoga Springs | ~35k | Fast-growing, Utah County, JVWCD arsenic profile | Medium |
| Eagle Mountain | ~35k | Fast-growing, Utah County | Medium |
| Taylorsville | ~60k | Salt Lake County, JVWCD, significant market | Medium |
| Midvale | ~35k | Salt Lake County | Low |

---

## BLOG POSTS

### Published ✅

| Post | File | Date | Target Keyword |
|---|---|---|---|
| Pure Water, Pure Health (updated) | `pure-water-pure-health.md` | 2025-08-12 | reverse osmosis Utah homes |
| Why Utah Homes Have the Hardest Water | `utah-hard-water-explained.md` | 2026-06-04 | Utah hard water explained |
| Arsenic in Utah Drinking Water | `arsenic-utah-drinking-water.md` | 2026-06-04 | arsenic Utah drinking water |
| How Much Does a Whole-Home System Cost | `whole-home-water-system-cost-utah.md` | 2026-06-04 | whole home water system cost Utah |
| PFAS in Utah Water | `pfas-utah-water.md` | 2026-06-04 | PFAS Utah water |
| Moving to New Home in Utah | `moving-to-new-home-utah-water-test.md` | 2026-06-04 | new home Utah water test |
| Water Softener vs. RO for Utah | `water-softener-vs-reverse-osmosis-utah.md` | 2026-06-04 | water softener vs reverse osmosis Utah |

### Published — Session 6 ✅
| Post | File | Date | Target Keyword |
|---|---|---|---|
| What Is Hexavalent Chromium in Utah Water | `hexavalent-chromium-utah-water.md` | 2026-06-05 | hexavalent chromium Utah water |
| Utah Water Test — What Your Results Mean | `utah-water-test-results-explained.md` | 2026-06-05 | Utah water test results |

### Published — Session 7 ✅
| Post | File | Date | Target Keyword |
|---|---|---|---|
| How to Replace Bottled Water | `replace-bottled-water-utah.md` | 2026-06-05 | replace bottled water Utah |
| Is Salt Lake City Water Safe to Drink? | `is-salt-lake-city-water-safe.md` | 2026-06-05 | Salt Lake City water safe |

### Published — Session 9 ✅
| Post | File | Target Keyword |
|---|---|---|
| How Water Softeners Work | `how-water-softeners-work.md` | how water softeners work |
| Utah Water Infrastructure Explained | `utah-water-infrastructure-explained.md` | Utah water utility Wasatch Front |

### Planned — Next Session ⬜
| Post | Target Keyword | Type | Priority |
|---|---|---|---|
| Is Provo Water Safe to Drink? | Provo water safe | Informational | High |
| What Is a Water Hardness Test? | water hardness test Utah | Informational | Medium |

---

## SCHEMA IMPLEMENTATION STATUS

| Schema Type | Status | Pages |
|---|---|---|
| Organization | ✅ | All pages (Layout.astro) |
| LocalBusiness (full areaServed — 25 cities) | ✅ | All location pages |
| BreadcrumbList | ✅ | All pages |
| Service | ✅ | Service pages |
| FAQPage | ✅ | Service, FAQ, comparison, location pages |
| AggregateRating (5.0, 10 reviews) | ✅ | Homepage, free-water-test, RO, softener, filtration, all 17 city pages |
| Product / AggregateOffer ($5,995–$19,999) | ✅ | `the-system.astro` |
| Article / BlogPosting | ✅ | All blog posts via `[...slug].astro` |
| VideoObject | ⬜ | Add if/when video content is created |

---

## SESSION 7 — COMPLETE ✅
- ✅ AggregateRating added to getLocalBusinessSchema (all 17 city pages updated at once)
- ✅ /locations/saratoga-springs/ custom page built
- ✅ /locations/eagle-mountain/ custom page built
- ✅ Blog: "How to Replace Bottled Water" published
- ✅ Blog: "Is Salt Lake City Water Safe to Drink?" published

## SESSION 9 — COMPLETE ✅
- ✅ /locations/payson/ custom page (southernmost service area; added to cities.ts)
- ✅ Blog: "How Water Softeners Work" — links to /water-softener-utah/, /locations/lehi/ etc.
- ✅ Blog: "Utah Water Infrastructure Explained" — JVWCD, CUWCD, SLCDPU, Ogden explained
- ✅ Footer Locations column expanded — added Orem, American Fork, Saratoga Springs, Spanish Fork, Springville

## SESSION 10 — CODE WORK COMPLETE ✅ (+ competitor page compliance fix)
- ✅ Taylorsville, Midvale, Riverton added to cities.ts
- ✅ /locations/taylorsville/, /locations/midvale/, /locations/riverton/ custom pages built
- ✅ Blog: "Is Provo Water Safe to Drink?" published
- ✅ Blog: "What Is a Water Hardness Test?" published
- ✅ GA4 `generate_lead` + Meta Pixel `Lead` event added to LeadForm.astro (window cast fix applied)
- ✅ VSL + water-is-real breadcrumb trailing slashes corrected

## ALL CODE WORK IS NOW COMPLETE

The remaining work is entirely off-site user actions:

1. ⚠️ **Check GSC query data** — GA4 → Acquisition → Search Console → Queries (48hrs+ post-link)
2. ⚠️ **Claim Angi, BBB, Houzz, WQA, HomeAdvisor** — directory citations
3. ⚠️ **GBP review automation in GHL** — text every install within 24hr
4. ⚠️ **GBP weekly posts** — offers, water quality facts, review highlights
5. ⚠️ **Homebuilder outreach** — Ivory Homes, Richmond American, Woodside preferred vendor request
6. ⚠️ **Realtor co-branded guide** — water quality PDF for new homeowner packets
7. ⚠️ **Local news pitch** — PFAS + SLC, Lehi arsenic angles
8. ⚠️ **Verify GA4 conversion events live** — submit test form on /free-water-test/ and confirm event fires in GA4 DebugView

---

## AUTHORITY & BACKLINK TARGETS (Off-Site — User Actions)

### Quick Wins (Do This Month)
- [ ] WQA (Water Quality Association) membership → directory listing
- [ ] BBB Utah accreditation application
- [ ] Angi / HomeAdvisor business profile
- [ ] Houzz business profile
- [ ] Nextdoor Business page

### Medium-Term
- [ ] Homebuilder preferred vendor pages (Ivory Homes, Richmond American, Woodside)
- [ ] Realtor co-branded water quality guide
- [ ] Local news pitch: "PFAS in SLC water"
- [ ] Local news pitch: "Lehi arsenic levels — what new homeowners need to know"
- [ ] Utah Business Magazine angle

---

## CONVERSION TRACKING CHECKLIST

- [ ] GA4 `generate_lead` event fires on `/free-water-test/` form submission
- [ ] GA4 `page_view` on `/thank-you/` tracked as conversion
- [ ] GA4 phone click event fires on `tel:+18019802583`
- [ ] Meta Pixel `Lead` event fires on form submission
- [ ] GBP call tracking number enabled

---

## KEYWORD PRIORITY TRACKER

| Keyword | Target Page | Current Rank | Goal |
|---|---|---|---|
| whole home reverse osmosis Utah | `/whole-home-reverse-osmosis-utah/` | Check GSC | Top 5 |
| water softener Utah | `/water-softener-utah/` | Check GSC | Top 5 |
| water treatment Utah | Homepage | Check GSC | Top 5 |
| whole home water filtration Utah | `/whole-home-water-filtration/` | Check GSC | Top 5 |
| free water test Utah | `/free-water-test/` | Check GSC | Top 3 |
| water treatment Salt Lake City | `/locations/salt-lake-city/` | Check GSC | Top 5 |
| water softener Provo UT | `/locations/provo/` | Check GSC | Top 5 |
| water treatment Lehi Utah | `/locations/lehi/` | Check GSC | Top 5 |
| Culligan alternative Utah | `/blue-logic-vs-culligan-utah/` | Check GSC | Top 5 |
| Kinetico alternative Utah | `/blue-logic-vs-kinetico-utah/` | Check GSC | Top 5 |
| Utah hard water | `/utah-hard-water/` | Check GSC | Top 5 |
| PFAS Utah water | `/blog/pfas-utah-water/` | Check GSC | Top 10 |
| arsenic Utah drinking water | `/blog/arsenic-utah-drinking-water/` | Check GSC | Top 10 |

> GSC linked 2026-06-05. Query data should populate within 24–48 hours. Check GA4 → Reports → Acquisition → Search Console → Queries.

---

## CITY DATA QUICK REFERENCE

| City | GPG | Key Contaminant | EWG Above | Custom Page |
|---|---|---|---|---|
| Lehi | 11–16 | Arsenic 484x | 12 | ✅ |
| Draper | ~21 | Arsenic 450x, HAA9 802x | 14 | ✅ |
| Sandy | ~18 | HAA5 306x, DCA 104x | 14 | ✅ |
| South Jordan | ~18 | HAA9 525x, THM 245x | 15 | ✅ |
| West Jordan | ~18 | Chromium-6 93x, Arsenic 275x | 15 | ✅ |
| Orem | ~18 | Chromium-6 36x, Arsenic 131x | 13 | ✅ |
| SLC / Millcreek / Cottonwood Hts | ~12 | Arsenic 135x, PFAS 404x | 16 | ✅ |
| Provo | 9–15 | Arsenic 100x, HAA9 66x | 12 | ✅ |
| Ogden | 10–28 | Manganese, arsenic | 9 | ✅ |
| Bountiful | 18–38 | Arsenic, radium | 8 | ✅ |
| Layton | ~21 | Arsenic, HAA | 10 | ✅ |
| Murray | ~15–18 | Arsenic, HAA, chloroform | 14 | ✅ |
| American Fork | ~15 | Arsenic, chromium-6 | 11 | ✅ custom |
| Spanish Fork | ~25 | Arsenic, nitrates | 9 | ✅ custom |
| Springville | ~23 | Arsenic, HAA | 9 | ✅ custom |
| Herriman | ~18 | Arsenic, HAA | 13 | ✅ |

---

## SITE ARCHITECTURE MAP (Current State)

```
bluelogicwater.com/
│
├── / (Homepage) ✅ — Services hub, Reviews, Location trust grid
├── /free-water-test/ ✅ ← Primary CTA destination
│
├── SERVICE PAGES
│   ├── /whole-home-reverse-osmosis-utah/ ✅
│   ├── /whole-home-water-filtration/ ✅
│   └── /water-softener-utah/ ✅
│
├── COMPARISON PAGES
│   ├── /water-softener-vs-whole-home-filtration/ ✅
│   ├── /blue-logic-vs-culligan-utah/ ✅
│   ├── /blue-logic-vs-kinetico-utah/ ✅
│   ├── /blue-logic-vs-aj-softeners-utah/ ✅
│   ├── /blue-logic-vs-element-water-utah/ ✅
│   ├── /blue-logic-vs-nuwater-utah/ ✅
│   └── /blue-logic-vs-alta-water-utah/ ✅
│
├── EDUCATIONAL PAGES
│   ├── /utah-hard-water/ ✅
│   ├── /utah-water-quality/ ✅
│   ├── /how-to-choose-water-treatment-system/ ✅
│   └── /how-to-read-a-water-test/ ✅
│
├── EXISTING PAGES (upgraded)
│   ├── /the-system/ ✅ (schema, internal links added)
│   ├── /the-value/ ✅ (H1 updated, related pages added)
│   ├── /our-team/ ✅ (Jared, E-E-A-T, Reviews)
│   ├── /common-questions/ ✅ (24 FAQs total)
│   ├── /book/ ✅ (redirects to GHL)
│   ├── /thank-you/ ✅
│   ├── /privacy/ ✅
│   └── /vsl/ ✅ (existing — paid traffic landing page)
│
├── /locations/ ✅
│   ├── [14 custom location pages] ✅
│   ├── [4 template-only pages] ✅ template
│   ├── /locations/herriman/ ✅ custom
│   ├── /locations/murray/ ✅ custom
│   ├── /locations/millcreek/ ✅ custom
│   ├── /locations/cottonwood-heights/ ✅ custom
│   ├── /locations/saratoga-springs/ ✅ custom
│   └── /locations/eagle-mountain/ ✅ custom
│
└── /blog/ ✅
    ├── /blog/pure-water-pure-health/ ✅
    ├── /blog/utah-hard-water-explained/ ✅
    ├── /blog/arsenic-utah-drinking-water/ ✅
    ├── /blog/whole-home-water-system-cost-utah/ ✅
    ├── /blog/pfas-utah-water/ ✅
    ├── /blog/moving-to-new-home-utah-water-test/ ✅
    ├── /blog/water-softener-vs-reverse-osmosis-utah/ ✅
    ├── /blog/hexavalent-chromium-utah-water/ ✅
    ├── /blog/utah-water-test-results-explained/ ✅
    ├── /blog/replace-bottled-water-utah/ ✅
    ├── /blog/is-salt-lake-city-water-safe/ ✅
    ├── /blog/how-long-water-treatment-systems-last/ ✅
    ├── /blog/how-water-softeners-work/ ✅
    ├── /blog/utah-water-infrastructure-explained/ ✅
    ├── /blog/is-provo-water-safe/ ✅
    └── /blog/what-is-a-water-hardness-test/ ✅
```

---

## BUSINESS CONTEXT REFERENCE

**Phone:** (801) 980-2583  
**Email:** info@bluelogicwater.com  
**GBP:** https://maps.app.goo.gl/SRHLVoVec7bkQx566  
**GHL Form Webhook:** `https://services.leadconnectorhq.com/hooks/Nd8el709gXwDJdVuixdV/webhook-trigger/ea841b49-85b0-436e-b298-541b997461c0`  
**GA4 Property:** G-GCNVMD4Z7R  
**Facebook:** https://www.facebook.com/BlueLogicWater  
**Instagram:** https://www.instagram.com/bluelogicwater/  
**Hosting:** Cloudflare (Astro SSR + prerender hybrid)  

**Named technician:** Jared (lead installer — do not name anyone else)  
**Price range:** $5,995 – $19,999  
**NSF certified:** Yes  
**Warranty:** 1-year limited; components 8–10 yr lifespan  
**Financing:** In-house, half down, flexible terms  
**Price match:** Written guarantee on any licensed competitor quote  

**Current offers:**
- Free in-home water test (no cost, no obligation)
- Free under-sink RO ($1,000 value) with any filtration purchase
- Free 250-gallon tank upgrade with whole-home purification purchase

---

## COMPLIANCE GUARD RAILS

**Never say:**
- "Removes all bacteria and viruses"
- "Protects your family from cancer" or any disease/cure claim
- "TDS of X means your water is bad" (TDS includes benign minerals)
- EWG stats without disclaimer that water meets federal legal standards

**Always pair EWG stats with:**
> "EWG health guidelines are stricter than federal legal limits. [City]'s water meets all federal standards."

---

*Update this file at the start of each working session.*
