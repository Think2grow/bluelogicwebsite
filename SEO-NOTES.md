# Blue Logic Water — SEO Notes

**Site:** https://www.bluelogicwater.com  
**Status as of 2026-06-11:** 18 pages indexed / 49 pages not indexed  
**Goal:** Get all SEO-targeted pages indexed and ranking for Wasatch Front water treatment queries

---

## What We Fixed (June 2026)

### 1. Redirected `/salt-lake-city/` → `/locations/salt-lake-city/` (301)
**Why:** An old, thin template page existed at the root `/salt-lake-city/` URL alongside the rich dedicated page at `/locations/salt-lake-city/`. Both had self-referential canonical tags, so Google saw two competing pages about the same topic with no signal about which to prefer. This was a primary contributor to the "Duplicate without user-selected canonical" bucket in GSC.  
**Expected outcome:** Google consolidates crawl equity on the rich `/locations/salt-lake-city/` page. Removes one clear duplicate. The redirect is permanent so any links to the old URL transfer value.

### 2. Added `noindex` to `thank-you`, `vsl`, and `privacy` pages
**Why:** These pages serve no organic search purpose (thank-you is a post-conversion confirmation, vsl is a paid funnel, privacy is a legal requirement) but were being crawled and potentially included in Google's "Excluded by noindex" count. More importantly, crawl budget spent on these pages is crawl budget not spent on the 24 city pages and 16 blog posts that need to rank.  
**Expected outcome:** Google stops crawling these pages routinely. Crawl budget redirected to indexable content.

### 3. Updated sitemap filter to exclude `/vsl/` and `/privacy/`
**Why:** Having noindex pages listed in the sitemap sends a conflicting signal — the sitemap says "crawl this" while the page says "don't index this." Google's documentation recommends keeping noindex pages out of the sitemap entirely.  
**Expected outcome:** Cleaner sitemap. No conflicting signals on those URLs.

### 4. Removed `park-city` from `cities.ts`
**Why:** Park City was the only city in the data file without a dedicated individual page. The dynamic `[city].astro` template was generating a thin, low-uniqueness page for it at `/locations/park-city/`. Park City is in Summit County, outside the primary Wasatch Front service area. Thin template pages are a common reason for "Crawled — currently not indexed."  
**Expected outcome:** Removes one thin page. Google stops wasting a crawl on it.

### 5. Fixed `water-test.astro` — added `prerender`, `title`, and `description`
**Why:** This page was server-rendered (not pre-rendered) and had no `title` or `description` props passed to the Layout. That meant it was using the same default title as every other page that omits those props: "Blue Logic Water - Professional RO Systems." Duplicate titles across multiple pages are treated by Google as a signal of thin or templated content. It was also excluded from the sitemap because un-prerendered pages aren't reliably picked up by the `@astrojs/sitemap` integration.  
**Expected outcome:** Page now has a unique title and description, is pre-rendered, and will be included in the sitemap. Eliminates one source of duplicate titles.

### 6. Fully rewrote all 5 comparison pages with genuinely distinct content
**Why:** The six comparison pages (Culligan, Kinetico, AJ Softeners, Element Water, NuWater, Alta Water) were nearly identical — same H1 structure ("Considering X? Here's What Blue Logic Offers"), same FAQ questions with slight name substitution, same spec table. Google saw six near-duplicate pages and was choosing not to index most of them (they appear in "Crawled — currently not indexed"). This was one of the biggest contributors to the indexing gap.

Each page now has a distinct angle:
- **Culligan** — Rental model vs. ownership, franchise accountability, high-pressure sales
- **Kinetico** — Softening vs. full RO for Utah's arsenic/PFAS/DBP problem (includes comparison table)
- **AJ Softeners** — When softening alone isn't enough, Utah contamination data by city
- **Element Water** — 5 questions to ask any local provider before signing, NSF cert deep dive
- **Alta Water** — Who does the work, accountability over 10 years, step-by-step process

**Expected outcome:** Google should index all 5 pages as genuinely distinct pieces of content. Each targets a different search intent (people researching that specific competitor). Combined, these pages should capture comparison search traffic from homeowners who've been contacted by or are evaluating each competitor.

### 7. Removed NuWater comparison page entirely
**Why:** Per owner decision — NuWater is no longer a relevant competitor to address.  
**Expected outcome:** One less page for Google to evaluate. If the page was indexed, it will return 404 and eventually drop out of the index naturally. If it was never indexed (likely, given the duplicate content issue), no action needed.

---

## What's Still Needed

### Priority 1 — Must Do (Cloudflare Dashboard)

**Non-www → www 301 redirect**  
If `bluelogicwater.com` (without www) is accessible without redirecting to `www.bluelogicwater.com`, Google sees two full copies of the entire site. Every page has a duplicate at the other domain. Even with canonical tags pointing to www, Google has to work harder to consolidate — and sometimes won't.  
**Fix:** In Cloudflare Pages → your domain settings, add a redirect rule: `bluelogicwater.com/*` → `https://www.bluelogicwater.com/$1` (301).  
**This is the single highest-impact remaining fix if it isn't already in place.**

### Priority 2 — Google Search Console Actions

**Identify the 12 "Not Found (404)" pages**  
Click into the 404 row in GSC's indexing report. These are URLs Google previously crawled (likely from an earlier version of the site or from external links) that now return 404. Each one needs a 301 redirect to the closest current equivalent page.  
Common culprits: old URL structures, renamed pages, old blog slugs.

**Submit sitemap**  
Go to GSC → Sitemaps → submit `https://www.bluelogicwater.com/sitemap-index.xml`. Confirm all expected pages are listed.

**Request indexing for key pages after this deploy**  
Use GSC URL Inspection → "Request Indexing" for:
- `/locations/salt-lake-city/` (highest value city page)
- `/locations/lehi/` (extreme arsenic stats = high engagement)
- `/locations/draper/`
- `/whole-home-reverse-osmosis-utah/`
- `/water-softener-utah/`
- `/blog/arsenic-utah-drinking-water/`
- All 5 comparison pages

### Priority 3 — Internal Linking (Next Development Sprint)

**Link blog posts from location pages**  
The 16 blog posts exist and are in the sitemap, but location pages don't link to relevant blog content. Google follows internal links to discover and prioritize pages. Example:
- Lehi city page → link to the arsenic blog post
- Salt Lake City page → link to the PFAS blog post
- Water softener page → link to the softener vs. RO blog post

**Link location pages from the blog**  
Blog posts about arsenic, PFAS, etc. should link to specific city pages where those problems are worst. This creates topical clusters that reinforce authority.

**Add comparison pages to site navigation or footer**  
The 5 comparison pages are currently only discoverable via direct URL or sitemap. Adding links to them from the locations index or footer would help Google treat them as important pages worth indexing.

### Priority 4 — Content (Ongoing)

**Continue publishing blog posts on a schedule**  
The 16 existing posts cover strong topics (arsenic, PFAS, chromium-6, hard water, RO vs. softener, etc.). Google needs to see consistent publishing activity to treat the blog as an authority source. Target: 1–2 posts per month minimum.

Good next topics:
- "Is [City] Water Safe?" for additional cities (Orem, West Jordan, Ogden, etc.)
- "How to Read Your Utah Water Quality Report"
- "PFAS in Utah Water: 2024 EPA MCL What It Means for Your Family"
- "Best Water Filtration Companies in [City], Utah" (more local comparison content)

**Expand blog posts with city-specific internal links**  
Most blog posts discuss Utah water quality generally. Adding city-specific data points and linking to the corresponding city page converts generic traffic into local traffic.

### Priority 5 — Off-Page (Ongoing)

**Google Business Profile**  
Ensure GBP is fully populated: service area cities listed explicitly, service categories correct ("Water Softening Equipment Supplier", "Water Purification Company"), business description mentions Wasatch Front and specific cities, posts published regularly.

**Local citations**  
Get listed on Yelp, BBB, HomeAdvisor/Angi, and Utah-specific business directories. NAP (name, address, phone) must be consistent: Blue Logic Water, same phone, same address across all listings.

**Backlinks from local sources**  
Reach out to Utah home improvement blogs, local news outlets covering water quality, and Utah County/Salt Lake County homeowner resources. A backlink from a local news article about Utah water contamination to your arsenic or PFAS blog post would be high-value.

---

## Current Page Inventory

### Indexed (target: all below)
| Page | URL | Priority |
|---|---|---|
| Home | `/` | High |
| Locations Hub | `/locations/` | High |
| Salt Lake City | `/locations/salt-lake-city/` | High |
| Lehi | `/locations/lehi/` | High |
| Draper | `/locations/draper/` | High |
| Sandy | `/locations/sandy/` | High |
| Provo | `/locations/provo/` | High |
| Orem | `/locations/orem/` | High |
| West Jordan | `/locations/west-jordan/` | High |
| South Jordan | `/locations/south-jordan/` | High |
| Herriman | `/locations/herriman/` | Medium |
| Riverton | `/locations/riverton/` | Medium |
| Murray | `/locations/murray/` | Medium |
| Midvale | `/locations/midvale/` | Medium |
| Taylorsville | `/locations/taylorsville/` | Medium |
| Millcreek | `/locations/millcreek/` | Medium |
| Cottonwood Heights | `/locations/cottonwood-heights/` | Medium |
| Ogden | `/locations/ogden/` | Medium |
| Layton | `/locations/layton/` | Medium |
| Bountiful | `/locations/bountiful/` | Medium |
| American Fork | `/locations/american-fork/` | Medium |
| Saratoga Springs | `/locations/saratoga-springs/` | Medium |
| Eagle Mountain | `/locations/eagle-mountain/` | Medium |
| Spanish Fork | `/locations/spanish-fork/` | Low |
| Springville | `/locations/springville/` | Low |
| Payson | `/locations/payson/` | Low |
| Whole-Home RO Utah | `/whole-home-reverse-osmosis-utah/` | High |
| Whole-Home Filtration | `/whole-home-water-filtration/` | High |
| Water Softener Utah | `/water-softener-utah/` | High |
| Softener vs. RO | `/water-softener-vs-whole-home-filtration/` | High |
| How to Choose | `/how-to-choose-water-treatment-system/` | Medium |
| Free Water Test | `/free-water-test/` | High |
| Water Test (landing) | `/water-test/` | Medium |
| The System | `/the-system/` | High |
| The Value | `/the-value/` | Medium |
| Our Team | `/our-team/` | Low |
| Utah Hard Water | `/utah-hard-water/` | High |
| Utah Water Quality | `/utah-water-quality/` | High |
| How to Read a Water Test | `/how-to-read-a-water-test/` | Medium |
| Common Questions | `/common-questions/` | Medium |
| Water Is Real | `/water-is-real/` | Low |
| vs. Culligan | `/blue-logic-vs-culligan-utah/` | High |
| vs. Kinetico | `/blue-logic-vs-kinetico-utah/` | High |
| vs. AJ Softeners | `/blue-logic-vs-aj-softeners-utah/` | Medium |
| vs. Element Water | `/blue-logic-vs-element-water-utah/` | Medium |
| vs. Alta Water | `/blue-logic-vs-alta-water-utah/` | Medium |
| Blog Index | `/blog/` | High |
| Blog: Arsenic | `/blog/arsenic-utah-drinking-water/` | High |
| Blog: PFAS | `/blog/pfas-utah-water/` | High |
| Blog: Chromium-6 | `/blog/hexavalent-chromium-utah-water/` | High |
| Blog: SLC Safe? | `/blog/is-salt-lake-city-water-safe/` | High |
| Blog: Provo Safe? | `/blog/is-provo-water-safe/` | High |
| Blog: Hard Water | `/blog/utah-hard-water-explained/` | High |
| Blog: Softener vs. RO | `/blog/water-softener-vs-reverse-osmosis-utah/` | High |
| Blog: Bottled Water | `/blog/replace-bottled-water-utah/` | Medium |
| Blog: System Cost | `/blog/whole-home-water-system-cost-utah/` | High |
| Blog: How Long Systems Last | `/blog/how-long-water-treatment-systems-last/` | Medium |
| Blog: How Softeners Work | `/blog/how-water-softeners-work/` | Medium |
| Blog: Moving to Utah | `/blog/moving-to-new-home-utah-water-test/` | Medium |
| Blog: Test Results | `/blog/utah-water-test-results-explained/` | Medium |
| Blog: Read Test | `/blog/what-is-a-water-hardness-test/` | Medium |
| Blog: Infrastructure | `/blog/utah-water-infrastructure-explained/` | Low |
| Blog: Pure Health | `/blog/pure-water-pure-health/` | Low |

### Intentionally Excluded (noindex / redirect)
| Page | Reason |
|---|---|
| `/thank-you/` | Post-conversion confirmation — noindex |
| `/vsl/` | Paid funnel — noindex |
| `/privacy/` | Legal page — noindex |
| `/book/` | Redirects to external booking system |
| `/whole-home-reverse-osmosis/` | 301 redirect to `/whole-home-reverse-osmosis-utah/` |
| `/salt-lake-city/` | 301 redirect to `/locations/salt-lake-city/` |

---

## Keyword Targets

### Primary (high commercial intent)
- water softener Utah
- water filtration Salt Lake City
- whole home reverse osmosis Utah
- water treatment [city] Utah (for each service area)
- hard water treatment Utah

### Comparison (mid-funnel, high conversion)
- Culligan vs [alternative] Utah
- Kinetico alternative Utah
- water softener company Utah reviews

### Informational (top-of-funnel, blog content)
- arsenic in Utah water
- PFAS Utah tap water
- is [city] water safe to drink
- how hard is Utah water
- Utah water quality report [city]

---

## Technical Health Checklist

- [x] Canonical tags on all pages (via Layout.astro)
- [x] Sitemap at `/sitemap-index.xml` (submitted to robots.txt)
- [x] robots.txt allows all crawlers
- [x] Schema markup: Organization, LocalBusiness, BreadcrumbList, FAQ, Article on relevant pages
- [x] Open Graph tags on all pages
- [x] noindex on thank-you, vsl, privacy
- [x] Sitemap filter excludes noindex and redirect pages
- [x] Cloudflare Bulk Redirects: 7 old URLs redirected (home, home/, home-7284, coming-soon/, products, contact-us) — June 2026
- [ ] Non-www → www pattern redirect (Redirect Rules in Cloudflare — pattern-based, covers all paths)
- [ ] GSC: Both www and non-www properties verified
- [ ] GSC: Sitemap submitted and showing expected page count
- [ ] Internal linking: Blog posts linked from city pages
- [ ] Internal linking: Comparison pages linked from site nav or footer

---

## Crawl Fixes — June 17, 2026 (Semrush mega export)

Source: `bluelogicwater.com_mega_export_20260617.csv`. Branch `seo/crawl-fixes-2026-06` (PR #1).

### Fixed in code (verified against a clean `npm run build`)
- [x] Internal links canonicalized to trailing-slash form (nav, footer, body, location cards, breadcrumb JSON-LD, `/api/reviews`) — kills the sitewide "temporary 302 redirects" and "broken internal links" flags
- [x] `trailingSlash: "always"` in `astro.config.mjs` so stray hits resolve via a single 301
- [x] Added `/terms/` page (footer linked it on every page but it didn't exist → sitewide broken link + 4xx)
- [x] Added `/locations/park-city/` page + `cities.ts` entry (homepage linked a 404). Real EWG data: PWS UTAH22137 (Mountain Regional Water) — arsenic 315x, TTHMs 54x, HAA5 48x, PFAS
- [x] Structured data: `Product` now has required `image`; `getAggregateRatingSchema` emits a full `LocalBusiness` with required `address`; logo URLs origin-absolute
- [x] Blog: optional `seoTitle` field used for `<title>`; concise titles on the 9 "title too long" posts
- [x] Blog: "Related Articles" block (adds inbound internal links to fix "only one internal link")
- [x] `llms.txt`: single H1 + `>` summary blockquote per spec
- [x] `public/_headers` adds `X-Content-Type-Options` + `Referrer-Policy` (HSTS handled at Cloudflare edge — see below)

### Done outside code
- [x] **HSTS enabled at Cloudflare edge** (SSL/TLS → Edge Certificates → HSTS) — June 17, 2026. Verified on apex: `Strict-Transport-Security: max-age=31536000; includeSubDomains`. This is the authoritative HSTS source and covers the apex redirect the `_headers` file can't reach. `includeSubDomains` is ON — every subdomain must serve HTTPS.

### Post-deploy validation (do after PR #1 merges + deploys)
- [ ] Google Rich Results Test (https://search.google.com/test/rich-results) — expect 0 errors on: `/`, `/the-system/`, `/free-water-test/`, `/water-softener-utah/`, `/whole-home-reverse-osmosis-utah/`, `/whole-home-water-filtration/`
- [ ] Cross-check in https://validator.schema.org/ (confirm `Product` has `image`, `LocalBusiness` has `address`)
- [ ] Rerun Semrush Site Audit; confirm these drop to ~0: broken internal links, temporary redirects, 4xx, structured data errors, title too long, llms.txt formatting

### Known / intentional (not bugs — left as-is)
- Brochure preview links are direct `.png` links ("resources formatted as page links" notice) — intentional; dedicated Download buttons already exist
- `/privacy/` "blocked from crawling" — intentional `noindex`
- Low text-to-HTML ratio (design-heavy pages), "orphaned" / "content not optimized" — content-level, optional
- Park City water hardness is qualitative ("Hard") — EWG doesn't report GPG; on-page copy directs users to a free test
