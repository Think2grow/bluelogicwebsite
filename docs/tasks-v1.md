# Version 1 Tasks

---

## ✅ COMPLETED: Foundation & Core Infrastructure

_These form the rock-solid foundation of the site._

- [x] **Astro SSR with Cloudflare Adapter**
  - Fully configured SSR mode with Cloudflare Pages deployment
  - CI/CD pipeline via GitHub Actions
  - **Complexity:** Low

- [x] **Design System (Tailwind 4 + OKLCH Colors)**
  - Custom color palette (Obsidian, Glacier Blue, Soft Quartz)
  - Typography system (Instrument Serif / Inter)
  - Responsive utilities and components
  - **Complexity:** Low

- [x] **Asset Pipeline & Image Optimization**
  - Astro `<Image />` component with `imageService: 'compile'`
  - Optimized for Cloudflare (no Sharp runtime issues)
  - **Complexity:** Low

---

## ✅ COMPLETED: Lead Capture & Forms

- [x] **Custom Lead Form Component**
  - `LeadForm.astro` with Tailwind styling
  - Client-side validation and success states
  - No iFrames—fully branded experience
  - **Complexity:** Medium

- [~] **GHL Server-Side Proxy** (In Progress)
  - API route at `src/pages/api/lead.ts`
  - Securely proxies lead data to GoHighLevel
  - Hides API keys from client
  - **Complexity:** Medium

---

## ✅ COMPLETED: UI/UX & Animation

- [x] **"Ghost" Header with Glassmorphism**
  - Sticky header with `backdrop-blur-lg` effect
  - Hide-on-scroll-down, show-on-scroll-up behavior (Apple style)
  - Responsive mobile sidebar with smooth transitions
  - Works correctly with Astro View Transitions
  - **Complexity:** Medium

- [x] **Smooth Page Transitions**
  - Astro View Transitions enabled for SPA-like feel
  - Integrated into Layout.astro globally
  - **Complexity:** Low

- [x] **"Exploded View" Scroll Animation**
  - `ProductExplosion.astro` with IntersectionObserver-based animations
  - Filter stages animate in with staggered delays
  - Stats counter animates when visible
  - **Complexity:** High

- [x] **Localized Parallax Hero**
  - `ParallaxHero.astro` with scroll-linked parallax background
  - LCP optimization via `fetchpriority="high"`
  - Location badge, trust indicators, animated entrance effects
  - Accessibility support (`prefers-reduced-motion`)
  - **Complexity:** Medium

---

## ✅ COMPLETED: Local SEO & Trust Architecture

- [x] **Programmatic City Routing**
  - Dynamic routes at `src/pages/locations/[city].astro`
  - 10+ cities with local water quality data from EWG.org
  - Unique pages for Salt Lake City, Park City, Draper, Sandy, etc.
  - **Complexity:** Medium

- [x] **JSON-LD Structured Data System**
  - `src/utils/schema.ts` with modular schema generators
  - Base Organization schema auto-injected on all pages
  - Page-specific schemas: LocalBusiness, Product, FAQ, Breadcrumb
  - Properly escaped and injected via `set:html`
  - All location pages include LocalBusiness schema
  - **Complexity:** Medium

- [x] **FAQ with SEO-Optimized JSON-LD**
  - `/common-questions` page with 15 FAQs
  - FAQPage JSON-LD schema with all questions/answers
  - HTML stripped from schema for clean structured data
  - Visual links preserved via `set:html` in template
  - **Complexity:** Low

- [x] **Comparison Matrix**
  - High-contrast comparison table: Blue Logic vs. Competitors
  - Visual design emphasizing value at $15k price point
  - **Complexity:** Low

---

## ✅ COMPLETED: Core Content & Pages

- [x] **Homepage with Mission Section**
  - "Purity Without the Premium" messaging
  - Value proposition grid: 1/2 Cost, 1/2 Footprint, 10x Quieter
  - Social proof section with installation counts
  - Links to location pages for local SEO
  - **Complexity:** Low

- [x] **Process Stepper Component**
  - `ProcessStepper.astro` showing white-glove service steps
  - Interactive and responsive design
  - **Complexity:** Medium

- [x] **About Us / Team Page**
  - "Wasatch-Born" story highlighting local roots
  - Professional team photography and bios
  - **Complexity:** Low

- [x] **Blog Content Collection**
  - Astro Content Collections setup with markdown articles
  - Initial articles targeting long-tail keywords
  - Ready for future expansion and SEO growth
  - **Complexity:** Medium

- [x] **Product/System Page** (`/the-system`)
  - Technical specifications and system architecture
  - Filtration stages explained
  - **Complexity:** Medium

- [x] **Value/Comparison Page** (`/the-value`)
  - Detailed cost breakdown vs. competitors
  - "Why us?" positioning
  - **Complexity:** Medium

- [x] **Local Landing Page** (`/salt-lake-city`)
  - Utah hard water specific messaging
  - TDS levels and contaminant data
  - Location-specific trust signals
  - **Complexity:** Medium

---

## 🎯 PRIORITY: Next Steps (Ready to Start)

### SEO & Indexing

- [ ] **1. Add Site to Google Search Console**
  - Verify via DNS TXT record
  - Submit sitemap.xml
  - Monitor indexing status
  - **Complexity:** Low
  - **Impact:** Critical for organic visibility

### Lead Capture Optimization

- [x] **2. Complete GHL Integration**
  - Add iframe from go-high level site
  - Test end-to-end form submission
  - Add success/error handling
  - **Complexity:** Low
  - **Impact:** High (core business function)

- [ ] **3. Server-Side Conversion Tracking**
  - Integrate Cloudflare Zaraz or custom worker
  - Fire events to Google/Meta on successful lead submission
  - Verify in dev console
  - **Complexity:** Medium
  - **Impact:** Medium (analytics & retargeting)

### Missing Trust Signals

- [ ] **4. "Purity Guarantee" Section**
  - Installation standards & code of conduct
  - Trust-building listicle with icons
  - Add to `/our-team` or new dedicated page
  - **Complexity:** Low
  - **Impact:** Medium (conversion rate improvement)

- [ ] **5. Footer Lead Magnet**
  - High-contrast "Ready for Purer Water?" CTA
  - Final conversion opportunity
  - `Footer.astro` redesign
  - **Complexity:** Low
  - **Impact:** Medium (secondary conversion funnel)

---

## 💡 NICE TO HAVE: Future Enhancements

_These enhance the user experience but aren't critical for V1 launch._

### Product Page Enhancements

- [ ] **"Silent Power" Interactive Module**
  - Decibel slider or sound-dampening visualization
  - Highlight premium pump/motor quality
  - **Complexity:** Medium
  - **Timeline:** Post-launch

- [ ] **"Footprint" Visualization**
  - Clip-path or side-by-side comparison graphic
  - Traditional softener vs. Blue Logic system
  - **Complexity:** Medium
  - **Timeline:** Post-launch

### Content Expansion

- [ ] **Video Testimonial Carousel**
  - "Netflix-style" slider of client installations
  - High-production-value case studies
  - **Complexity:** High
  - **Timeline:** Q2 2026

### Analytics & Testing

- [ ] **A/B Testing Framework**
  - Test CTA copy: "Free Water Audit" vs. "Get Pricing Now"
  - Form variations for conversion optimization
  - **Complexity:** Medium
  - **Timeline:** Post-launch

- [ ] **Advanced Analytics (PostHog)**
  - Session recording & heatmaps
  - User behavior analysis
  - Funnel optimization
  - **Complexity:** Medium
  - **Timeline:** Post-launch

---

## 📋 Reference: Page Structure & SEO

| Page          | Path                | Status  | SEO Target                            |
| ------------- | ------------------- | ------- | ------------------------------------- |
| **Home**      | `/`                 | ✅ Done | Brand awareness, general "RO Systems" |
| **System**    | `/the-system`       | ✅ Done | "Reverse Osmosis Specs"               |
| **Value**     | `/the-value`        | ✅ Done | "Reverse Osmosis Cost Utah"           |
| **Team**      | `/our-team`         | ✅ Done | E-E-A-T (Expertise & Trust)           |
| **Salt Lake** | `/salt-lake-city`   | ✅ Done | "RO Systems Salt Lake City"           |
| **FAQ**       | `/common-questions` | ✅ Done | Featured Snippets & long-tail         |
| **Locations** | `/locations/*`      | ✅ Done | Local intent keywords (10+ cities)    |

---

## 📊 Progress Summary

**Completed Tasks:** 19 out of ~24 core items  
**In Progress:** GHL Server Proxy  
**Ready to Start:** 5 priority items  
**Future Enhancements:** 5 nice-to-have items

**V1 Launch Readiness:** ~82% (after completing priority items, ready for soft launch)
