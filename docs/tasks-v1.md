# Version 1 Tasks

## 1. Foundation & Infrastructure

*Critical for the "Speed as a Trust Signal" requirement.*

* [ ] **1.1.1 Astro SSR Core Setup**
* **Description:** Initialize Astro project with SSR mode enabled for Cloudflare adapter.
* **Deliverable:** Functional local dev environment with `adapter: cloudflare()`.
* **Complexity:** Low


* [ ] **1.2.1 Tailwind Design System Implementation**
* **Description:** Configure `tailwind.config.js` with the "Pure Living" palette (Obsidian, Glacier Blue, Soft Quartz) and typography (Instrument Serif / Inter). Use scoped and global style sheets that work well with astro.
* **Deliverable:** `theme.extend` configuration and global CSS file.
* **Complexity:** Low


* [ ] **1.3.1 Asset Pipeline & Optimization**
* **Description:** Setup Astro `<Image />` component and folder structure for high-fidelity localized assets.
* **Deliverable:** Configured image optimization pipeline.
* **Complexity:** Low

* [ ] **1.4 CICD Setup**
* **Description:** Use cloudflare + cloudflare.jsonc file with github actions to deploy automatically to cloudflare
* **Deliverable:** Basic template website is deployed on main branch changes
* **Complexity:** Low

* [ ] **1.5.1 Content Collections & MDX Infrastructure**
* **Description:** Configure Astro Content Collections for MDX and Markdown files. Setup schemas for Blog, FAQ, and Info pages using Gray Matter for metadata to allow non-technical editing.
* **Deliverable:** `src/content/config.ts` and folder structure for content.
* **Complexity:** Low

---

## 2. Advanced Lead Capture (GHL Integration)

*The primary functionality: driving leads without compromising UX.*

* [ ] **2.1.1 GHL Server-Side Proxy**
* **Description:** Create an Astro API route (`src/pages/api/lead.ts`) to receive form data and POST to GoHighLevel via fetch. This hides API keys and prevents iFrame lag.
* **Deliverable:** Secure endpoint for lead submission.
* **Complexity:** Medium


* [ ] **2.2.1 Custom Lead Form Component**
* **Description:** Build a multi-step or high-end single-step Tailwind form. No standard iFrames. Must include validation and "Success" state.
* **Deliverable:** `LeadForm.astro` (or React/Preact island).
* **Complexity:** Medium


* [ ] **2.3.1 Conversion Tracking (Server-Side)**
* **Description:** Integrate Cloudflare Zaraz or a custom worker to fire events to Google/Meta upon successful API response from 2.1.1.
* **Deliverable:** Tracking verification in dev console.
* **Complexity:** Medium


## 3. The "Apple-Grade" UI & Motion

*Creating the elevated feel for affluent clientele.*

* [ ] **3.1.1 The "Exploded View" Scroll Animation**
* **Description:** Use Framer Motion or GSAP to create a scroll-linked animation where the RO system parts fly together as the user scrolls.
* **Deliverable:** `ProductExplosion.astro` component.
* **Complexity:** High


* [ ] **3.2.1 Localized Parallax Hero**
* **Description:** High-res Wasatch Range background with a non-obstructive parallax effect.
* **Deliverable:** Hero section with LCP optimization (preload images).
* **Complexity:** Medium


* [ ] **3.3.1 Smooth State Transitions**
* **Description:** Implement Astro View Transitions for "SPA-like" feel between pages (Home -> Why Us).
* **Deliverable:** Seamless page transitions enabled in `Layout.astro`.
* **Complexity:** Low

## 4. Local SEO & Trust Architecture

*Capturing "Reverse Osmosis Salt Lake City" intent.*

* [ ] **4.1.1 Programmatic City Routing**
* **Description:** Create `src/pages/locations/[city].astro` to generate pages for Salt Lake, Park City, Draper, etc.
* **Deliverable:** Dynamic routes generating static-looking local pages.
* **Complexity:** Medium


* [ ] **4.2.1 Structured Data (JSON-LD) Generator**
* **Description:** Build a helper function to inject `LocalBusiness`, `Product`, and `FAQ` schema based on the current page context.
* **Deliverable:** `Schema.astro` component in the `<head>`.
* **Complexity:** Medium


* [ ] **4.3.1 Trust "Comparison" Module**
* **Description:** A clean, high-contrast table/graphic showing Blue Logic vs. Competitors ($15k vs $30k).
* **Deliverable:** `TrustTable.astro`.
* **Complexity:** Low


## 5. Content & Messaging

*Focusing on the mission and the "Why."*

* [ ] **5.1.1 The Mission Section**
* **Description:** Draft and implement the "Purity without the Premium" copy.
* **Deliverable:** Completed homepage section.
* **Complexity:** Low


* [ ] **5.2.1 Interactive Installation Roadmap**
* **Description:** A horizontal or vertical "Process" stepper showing the white-glove service.
* **Deliverable:** `ProcessStepper.astro`.
* **Complexity:** Medium


## 6. Future TODOs (Post-Critical Path)

*Tasks for long-term growth and SEO dominance.*

* [ ] **6.1.1 [FUTURE] Resource Center (Blog) Engine**
* **Description:** Setup Astro Content Collections for MDX-based articles targeting "Hard water skin effects," etc.


* [ ] **6.2.1 [FUTURE] Dynamic Water Quality API Integration**
* **Description:** Pull real-time TDS (Total Dissolved Solids) data for Utah zip codes to display on location pages.


* [ ] **6.3.1 [FUTURE] Video Testimonial Carousel**
* **Description:** "Netflix-style" slider of high-end clients talking about their installation experience.


* [ ] **6.4.1 [FUTURE] A/B Testing GHL Forms**
* **Description:** Test "Free Water Audit" vs. "Get Pricing Now" as the primary CTA.

## 7. Core Page Development (V1)

### 7.1 The "Hook" (Home Page)

*Purpose: Establish the mission and immediate "Apple-level" brand authority.*

* [ ] **7.1.1 Hero Section & Mission Statement**
* **Description:** "Your Family, Unfiltered." Large typography, a background video of clear water, and the core value prop: Professional RO for the health-conscious home.
* **Deliverable:** `HomeHero.astro` with an optimized LCP video or high-res image.
* **Complexity:** Medium


* [ ] **7.1.2 The "Value Snapshot" Section**
* **Description:** A high-level scroll-linked graphic highlighting the "1/2 Cost, 1/2 Footprint, 10x Quieter" USP to tease the Product page.
* **Deliverable:** Homepage summary module.
* **Complexity:** Medium



### 7.2 The "Logic" (Product Page)

*Purpose: Sell the engineering. Focus on: 1/2 Cost, 1/2 Footprint, 10x Quieter.*

* [ ] **7.2.1 The "Silent Power" Interactive Module**
* **Description:** A visual comparison of the "10x Quieter" claim—perhaps a decibel slider or an animation showing the sound-dampening tech.
* **Deliverable:** `ProductSpecs.astro`.
* **Complexity:** Medium


* [ ] **7.2.2 The "Footprint" Visualization**
* **Description:** A "Clip-path" or side-by-side visual of a bulky traditional softener vs. the sleek Blue Logic RO system to prove the "1/2 Footprint" claim.
* **Deliverable:** Interactive "Space-Saving" graphic.
* **Complexity:** Medium



### 7.3 The "Trust" (Why Us vs. Competitors)

*Purpose: Rationalize the $15k price point and dismantle the $30k status quo.*

* [ ] **7.3.1 The Transparency Matrix**
* **Description:** A beautifully designed comparison table (no generic checkmarks—think high-end design) showing Blue Logic vs. "Big Box" vs. "Overpriced Competitors."
* **Deliverable:** `ComparisonMatrix.astro`.
* **Complexity:** Low


* [ ] **7.4.1 The $15k Value Narrative**
* **Description:** Text-heavy but well-spaced section explaining how the business model allows for half the cost without sacrificing grade-A components.
* **Deliverable:** Narrative copy block with trust badges.
* **Complexity:** Low



### 7.4 The "People" (About Us)

*Purpose: Localize the brand. Affluent buyers want to know who is entering their home.*

* [ ] **7.4.1 The "Wasatch-Born" Story**
* **Description:** Highlight the team's local roots. Use professional, high-end photography of the founders/lead installers in a Salt Lake setting.
* **Deliverable:** `AboutTeam.astro`.
* **Complexity:** Low


* [ ] **7.4.2 The "Purity Guarantee" Section**
* **Description:** Outline the specific standard of installation and the "Blue Logic" code of conduct.
* **Deliverable:** Trust-building listicle with icons.
* **Complexity:** Low



### 7.5 The "Answers" (FAQ)

*Purpose: Remove friction and objections for SEO "Long-Tail" keywords.*

* [ ] **7.5.1 The Intelligent FAQ Accordion**
* **Description:** Semantic FAQ section driven by MDX content collections. Must include "Maintenance costs," "Installation time," and "Water waste" answers.
* **Deliverable:** `FaqAccordion.astro` with JSON-LD Schema wrapper.
* **Complexity:** Low



### 7.6 The "Local Engine" (Salt Lake City / Regional Page)

*Purpose: The primary SEO landing page for local search queries.*

* [ ] **7.6.1 The "SLC Water Report" Landing Page**
* **Description:** A dedicated page (`/locations/salt-lake-city`) that talks specifically about Utah's hard water, high TDS levels, and local mineral profile.
* **Deliverable:** Dynamic localized template with a map embed.
* **Complexity:** Medium

## 8. Navigation & Architecture

* [ ] **8.1.1 The "Ghost" Header**
* **Description:** A sticky, glassmorphism (backdrop-blur) header that disappears on scroll-down and reappears on scroll-up (Apple style).
* **Deliverable:** `Header.astro`.
* **Complexity:** Medium


* [ ] **8.1.2 Footer Lead Magnet**
* **Description:** A massive, high-contrast footer that acts as a final CTA: "Ready for Purer Water?"
* **Deliverable:** `Footer.astro`.
* **Complexity:** Low

## Summary

## Updated Path/Naming Recommendations

| Page | Proposed Path | SEO Strategy |
| --- | --- | --- |
| **Home** | `/` | Brand Awareness & General "RO Systems" |
| **Product** | `/the-system` | Technical specs, "Reverse Osmosis Footprint" |
| **Comparison** | `/the-value` | "Reverse Osmosis Cost Utah" |
| **About** | `/our-team` | E-E-A-T (Expertise, Authoritativeness, Trust) |
| **Local** | `/salt-lake-city` | "Water Filtration Near Me" / "RO Salt Lake" |
| **FAQ** | `/common-questions` | Featured Snippets on Google |

### Complexity Summary

* **Total Critical Path Tasks:** 13
* **Total New Tasks:** 13
* **Estimated Dev Hours for Page Logic/Copy:** 15–20 hours.
* **Estimated Developer Hours:** 28–35 hours (roughly 4-5 full workdays for an experienced dev to reach a "V1 Platinum" state).