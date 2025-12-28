# Version 1 Technical Design Document

## 1. Project Requirements (TL;DR)

### Functional Requirements

* **Must:** Utilize **Astro (SSR)** for near-instantaneous load times (LCP < 1.2s).
* **Must:** Use **MDX or Markdown with Gray Matter** for content-heavy pages (FAQ, Blog, Info) to facilitate easy editing by non-technical stakeholders.
* **Must:** Integrate with **GoHighLevel (GHL)** via API or custom-styled forms to ensure lead flow.
* **Must:** Be **Mobile-First**; 70% of the target "wellness" demographic browses on mobile.
* **Shall:** Use **Cloudflare Zaraz** or **GTM** for server-side event tracking (conversion tracking).
* **Shall Not:** Use generic stock photography; all primary imagery must be high-fidelity or localized.
* **Should:** Incorporate **JSON-LD Schema** for LocalBusiness and FAQ to dominate SERP real estate.

### Non-Functional Requirements

* **Accessibility:** WCAG 2.1 Level AA compliance (crucial for trust and SEO).
* **Security:** SSL/TLS encryption via Cloudflare; no client-side exposure of GHL API keys.
* **Sustainability:** Lean code footprint to reflect the "Clean Water" brand mission.

---

## 2. Visual Identity & "The Feel"

We are moving away from the "Plumbing Blue" and toward **"High-Tech Wellness."**

| Element | Description |
| --- | --- |
| **Style** | **Apple-Minimalist.** High-contrast, massive whitespace, and sharp typography. |
| **Color Palette** | *Deep Obsidian* (Text), *Glacier Blue* (Accent), *Soft Quartz* (Backgrounds), *Pure White*. Use olkch instead of hex |
| **Typography** | A premium Serif for headings (e.g., *Instrument Serif*) paired with a clean, tech-forward Sans-Serif for body (e.g., *Geist* or *Inter*). |
| **Visual Polish** | **Clip-path transitions** between sections. Instead of flat lines, use diagonal or organic "water-flow" curves to guide the eye downward. |

### Interaction Strategy: "The Scroll Journey"

* **The "Exploded View" Animation:** As the user scrolls through the "Product" section, the RO system components should animate into view (Framer Motion / GSAP).
* **Subtle Parallax:** Background images of the **Wasatch Mountains** will move at 0.5x speed relative to the foreground text, creating a sense of depth and local "rootedness."
* **Micro-interactions:** Buttons should have a "liquid" fill hover effect.

---

## 3. Product Visualization

To sell a $15k system, the user must understand the complexity and the purity it provides.

---

## 4. Technical Architecture (The "Experienced Dev" Specs)

### Frontend: Astro + Tailwind

* **Islands Architecture:** Only hydrate the "Lead Capture Form" and "Scroll Animations." Keep the rest as pure HTML.
* **Content Collections:** Use Astro's `getCollection` with **MDX/Markdown** for the Blog, FAQ, and Case Studies to ensure Type-Safety, fast builds, and easy content updates.

### SEO & Local Indexing (The "Salt Lake" Engine)

To index correctly for "Reverse Osmosis Salt Lake City," we will use **Dynamic Route Injection**:

1. **Directory Structure:** `/locations/[city].astro`
2. **Edge Middleware:** Detect the user's IP (via Cloudflare). If they are in **Draper**, the hero text dynamically shifts to: *"The Purest Water in Draper, Utah."*
3. **The "Local Expert" Paragraph:** Every page must include a "Local Water Profile" section.
> *Technical Logic:* "By injecting dynamic data about Salt Lake's specific TDS (Total Dissolved Solids) levels into the HTML on the server side, Google's crawler sees high-relevancy, non-templated content, boosting the 'Helpful Content' score."



### Lead Capture: GHL Integration

* **The Strategy:** Avoid the iFrame. It creates a "box within a box" feel that breaks the Apple-esque flow.
* **Implementation:** Build a custom Tailwind form. On submit, use an **Astro API Route (Server Endpoint)** to POST the data to the GHL Webhook. This allows for custom "Success" animations and preserves SEO metadata.

---

## 5. Information Architecture (Page Flow)

### Home Page (The Mission)

1. **Hero:** Video background of pure moving water (muted) + "Your Family, Unfiltered."
2. **The Comparison (Trust):** A "Blue Logic vs. The Others" section using a **Clip-path Reveal** slider.
3. **The Technology:** The animated RO build-out mentioned above.
4. **Local Social Proof:** "Trusted by 500+ Homes in the Wasatch Front."
5. **Final CTA:** "Schedule a Water Purity Audit."

### Why Blue Logic (Trust & Process)

* **The Team:** Bio-cards with professional photography (white shirts, clean gear).
* **The $15k Value Prop:** A transparent breakdown. "Why others charge $30k, and why our engineering makes $15k the smarter investment."

### The Blog (Resource Center)

* **SEO Target:** "Hard water effects on skin," "PFAS in Utah groundwater," "Best RO systems 2024."
* **Format:** Long-form, research-backed articles with "Key Takeaways" boxes.

---

## 6. Deployment & Performance Tracking

* **Hosting:** Cloudflare Pages (Global CDN, Edge Functions for SSR).
* **Tracking:** * **PostHog:** For heatmaps (to see where affluent users drop off).
* **Conversion API:** Send lead events back to Meta/Google via the server to bypass ad-blockers.