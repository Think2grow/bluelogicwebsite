# Version 1 Tasks

## 1. Foundation & Infrastructure

_Critical for the "Speed as a Trust Signal" requirement._

- [x] **1.1 Astro SSR Core Setup**
- **Description:** Initialize Astro project with SSR mode enabled for Cloudflare adapter.
- **Deliverable:** Functional local dev environment with `adapter: cloudflare()`.
- **Complexity:** Low

- [x] **1.2 Tailwind Design System Implementation**
- **Description:** Configure `tailwind.config.js` with the "Pure Living" palette (Obsidian, Glacier Blue, Soft Quartz) and typography (Instrument Serif / Inter). Use scoped and global style sheets that work well with astro.
- **Deliverable:** `theme.extend` configuration and global CSS file.
- **Complexity:** Low

- [x] **1.3 Asset Pipeline & Optimization**
- **Description:** Setup Astro `<Image />` component and folder structure for high-fidelity localized assets. Configure `imageService: 'compile'` or `'cloudflare'` in `astro.config.mjs` to handle Cloudflare's lack of Sharp support in SSR.
- Set to 'compile' by default. All 'astro:asset' features are disabled.
- **Deliverable:** Configured image optimization pipeline compatible with Cloudflare.
- **Complexity:** Low

- [x] **1.4 CICD Setup**
- **Description:** Use cloudflare + cloudflare.jsonc file with github actions to deploy automatically to cloudflare
- **Deliverable:** Basic template website is deployed on main branch changes
- **Complexity:** Low

---

## 2. Advanced Lead Capture (GHL Integration)

_The primary functionality: driving leads without compromising UX._

- [~] **2.1 GHL Server-Side Proxy**
- **Description:** Create an Astro API route (`src/pages/api/lead.ts`) to receive form data and POST to GoHighLevel via fetch. This hides API keys and prevents iFrame lag.
- **Deliverable:** Secure endpoint for lead submission.
- **Complexity:** Medium

- [x] **2.2 Custom Lead Form Component**
- **Description:** Build a multi-step or high-end single-step Tailwind form. No standard iFrames. Must include validation and "Success" state.
- **Deliverable:** `LeadForm.astro` (or React/Preact island).
- **Complexity:** Medium

- [ ] **2.3 Conversion Tracking (Server-Side)**
- **Description:** Integrate Cloudflare Zaraz or a custom worker to fire events to Google/Meta upon successful API response from 2.1.
- **Deliverable:** Tracking verification in dev console.
- **Complexity:** Medium

## 3. The "Apple-Grade" UI & Motion

_Creating the elevated feel for affluent clientele._

- [ ] **3.1 The "Exploded View" Scroll Animation**
- **Description:** Use Framer Motion or GSAP to create a scroll-linked animation where the RO system parts fly together as the user scrolls.
- **Deliverable:** `ProductExplosion.astro` component.
- **Complexity:** High

- [ ] **3.2 Localized Parallax Hero**
- **Description:** High-res Wasatch Range background with a non-obstructive parallax effect.
- **Deliverable:** Hero section with LCP optimization (preload images).
- **Complexity:** Medium

- [ ] **3.3 Smooth State Transitions**
- **Description:** Implement Astro View Transitions for "SPA-like" feel between pages (Home -> Why Us).
- **Deliverable:** Seamless page transitions enabled in `Layout.astro`.
- **Complexity:** Low

## 4. Local SEO & Trust Architecture

_Capturing "Reverse Osmosis Salt Lake City" intent._

- [x] **4.1 Programmatic City Routing**
- **Description:** Create `src/pages/locations/[city].astro` to generate pages for Salt Lake, Park City, Draper, etc.
- **Deliverable:** Dynamic routes generating static-looking local pages.
- **Complexity:** Medium
- **Implementation:**
  - Created `src/data/cities.ts` with comprehensive water quality data for 10 cities
  - Built dynamic route template at `src/pages/locations/[city].astro`
  - Generates unique pages for each city with local water data, TDS levels, and common issues
  - Includes LocalBusiness JSON-LD schema for each location

- [x] **4.2 Structured Data (JSON-LD) Generator**
- **Description:** Build a helper function to inject `LocalBusiness`, `Product`, and `FAQ` schema based on the current page context.
- **Deliverable:** `Schema.astro` component in the `<head>`.
- **Complexity:** Medium
- **Implementation:**
  - Created `src/utils/schema.ts` with modular schema functions
  - Base Organization schema auto-injected on all pages via Layout.astro
  - Pages can augment with additional schemas via `schema` prop
  - Uses Astro's `set:html` directive with `JSON.stringify()`
  - Schema types: Organization, LocalBusiness, Product, FAQ, Breadcrumb
  - Updated pages: index.astro, common-questions.astro, the-system.astro, [city].astro

- [x] **4.3 Trust "Comparison" Module**
- **Description:** A clean, high-contrast table/graphic showing Blue Logic vs. Competitors ($15k vs $30k).
- **Deliverable:** `TrustTable.astro`.
- **Complexity:** Low

## 5. Content & Messaging

_Focusing on the mission and the "Why."_

- [ ] **5.1 The Mission Section**
- **Description:** Draft and implement the "Purity without the Premium" copy.
- **Deliverable:** Completed homepage section.
- **Complexity:** Low

- [ ] **5.2 Interactive Installation Roadmap**
- **Description:** A horizontal or vertical "Process" stepper showing the white-glove service.
- **Deliverable:** `ProcessStepper.astro`.
- **Complexity:** Medium

## 6. Future TODOs (Post-Critical Path)

_Tasks for long-term growth and SEO dominance._

- [ ] **6.1 [FUTURE] Resource Center (Blog) Engine**
- **Description:** Setup Astro Content Collections for MDX-based articles targeting "Hard water skin effects," etc.

- [ ] **6.2 [FUTURE] Dynamic Water Quality API Integration**
- **Description:** Pull real-time TDS (Total Dissolved Solids) data for Utah zip codes to display on location pages.

- [ ] **6.3 [FUTURE] Video Testimonial Carousel**
- **Description:** "Netflix-style" slider of high-end clients talking about their installation experience.

- [ ] **6.4 [FUTURE] A/B Testing GHL Forms**
- **Description:** Test "Free Water Audit" vs. "Get Pricing Now" as the primary CTA.

## 7. Core Page Development (V1)

### 7.1 The "Hook" (Home Page)

_Purpose: Establish the mission and immediate "Apple-level" brand authority._

- [ ] **7.1 Hero Section & Mission Statement**
- **Description:** "Your Family, Unfiltered." Large typography, a background video of clear water, and the core value prop: Professional RO for the health-conscious home.
- **Deliverable:** `HomeHero.astro` with an optimized LCP video or high-res image.
- **Complexity:** Medium

- [ ] **7.1 The "Value Snapshot" Section**
- **Description:** A high-level scroll-linked graphic highlighting the "1/2 Cost, 1/2 Footprint, 10x Quieter" USP to tease the Product page.
- **Deliverable:** Homepage summary module.
- **Complexity:** Medium

### 7.2 The "Logic" (Product Page)

_Purpose: Sell the engineering. Focus on: 1/2 Cost, 1/2 Footprint, 10x Quieter._

- [ ] **7.2 The "Silent Power" Interactive Module**
- **Description:** A visual comparison of the "10x Quieter" claim—perhaps a decibel slider or an animation showing the sound-dampening tech.
- **Deliverable:** `ProductSpecs.astro`.
- **Complexity:** Medium

- [ ] **7.2 The "Footprint" Visualization**
- **Description:** A "Clip-path" or side-by-side visual of a bulky traditional softener vs. the sleek Blue Logic RO system to prove the "1/2 Footprint" claim.
- **Deliverable:** Interactive "Space-Saving" graphic.
- **Complexity:** Medium

### 7.3 The "Trust" (Why Us vs. Competitors)

_Purpose: Rationalize the $15k price point and dismantle the $30k status quo._

- [ ] **7.3 The Transparency Matrix**
- **Description:** A beautifully designed comparison table (no generic checkmarks—think high-end design) showing Blue Logic vs. "Big Box" vs. "Overpriced Competitors."
- **Deliverable:** `ComparisonMatrix.astro`.
- **Complexity:** Low

- [ ] **7.4 The $15k Value Narrative**
- **Description:** Text-heavy but well-spaced section explaining how the business model allows for half the cost without sacrificing grade-A components.
- **Deliverable:** Narrative copy block with trust badges.
- **Complexity:** Low

### 7.4 The "People" (About Us)

_Purpose: Localize the brand. Affluent buyers want to know who is entering their home._

- [ ] **7.4 The "Wasatch-Born" Story**
- **Description:** Highlight the team's local roots. Use professional, high-end photography of the founders/lead installers in a Salt Lake setting.
- **Deliverable:** `AboutTeam.astro`.
- **Complexity:** Low

- [ ] **7.4 The "Purity Guarantee" Section**
- **Description:** Outline the specific standard of installation and the "Blue Logic" code of conduct.
- **Deliverable:** Trust-building listicle with icons.
- **Complexity:** Low

### 7.5 The "Answers" (FAQ)

_Purpose: Remove friction and objections for SEO "Long-Tail" keywords._

- [ ] **7.5 The Intelligent FAQ Accordion**
- **Description:** Semantic FAQ section driven by MDX content collections. Must include "Maintenance costs," "Installation time," and "Water waste" answers.
- **Deliverable:** `FaqAccordion.astro` with JSON-LD Schema wrapper.
- **Complexity:** Low

### 7.6 The "Local Engine" (Salt Lake City / Regional Page)

_Purpose: The primary SEO landing page for local search queries._

- [x] **7.6 The "SLC Water Report" Landing Page**
- **Description:** A dedicated page (`/locations/salt-lake-city`) that talks specifically about Utah's hard water, high TDS levels, and local mineral profile.
- **Deliverable:** Dynamic localized template with a map embed.
- **Complexity:** Medium

## 8. Navigation & Architecture

- [ ] **8.1 The "Ghost" Header**
- **Description:** A sticky, glassmorphism (backdrop-blur) header that disappears on scroll-down and reappears on scroll-up (Apple style).
- **Deliverable:** `Header.astro`.
- **Complexity:** Medium

- [ ] **8.1 Footer Lead Magnet**
- **Description:** A massive, high-contrast footer that acts as a final CTA: "Ready for Purer Water?"
- **Deliverable:** `Footer.astro`.
- **Complexity:** Low

## Summary

## Updated Path/Naming Recommendations

| Page           | Proposed Path       | SEO Strategy                                  |
| -------------- | ------------------- | --------------------------------------------- |
| **Home**       | `/`                 | Brand Awareness & General "RO Systems"        |
| **Product**    | `/the-system`       | Technical specs, "Reverse Osmosis Footprint"  |
| **Comparison** | `/the-value`        | "Reverse Osmosis Cost Utah"                   |
| **About**      | `/our-team`         | E-E-A-T (Expertise, Authoritativeness, Trust) |
| **Local**      | `/salt-lake-city`   | "Water Filtration Near Me" / "RO Salt Lake"   |
| **FAQ**        | `/common-questions` | Featured Snippets on Google                   |

### Complexity Summary

- **Total Critical Path Tasks:** 13
- **Total New Tasks:** 13
- **Estimated Dev Hours for Page Logic/Copy:** 15–20 hours.
- **Estimated Developer Hours:** 28–35 hours (roughly 4-5 full workdays for an experienced dev to reach a "V1 Platinum" state).
