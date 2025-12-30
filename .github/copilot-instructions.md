# Blue Logic Water - AI Development Instructions

## Project Overview

This is a **premium reverse osmosis water filtration website** for Blue Logic Water, serving the Salt Lake City, Utah market. The project is built with **Astro (SSR)** on **Cloudflare Pages**, focused on three core objectives:

1. **SEO Dominance** - Rank #1 for "reverse osmosis Salt Lake City" and related local queries
2. **Lead Generation** - Drive high-quality leads through strategic CTAs and GoHighLevel integration
3. **Premium Positioning** - Convey trust, technology, and value for a $15k product

### Target Audience
- Health-conscious, affluent homeowners (wellness demographic)
- 70% mobile users
- Values quality, transparency, and local expertise
- Price-sensitive but willing to invest in family health

### Brand Identity: "High-Tech Wellness"
We are **NOT** a traditional plumbing company. Think **Apple meets clean water science**.

---

## Technical Architecture

### Core Stack
- **Framework**: Astro 5+ with SSR (`output: "server"`)
- **Adapter**: `@astrojs/cloudflare` for edge deployment
- **Styling**: Tailwind CSS 4+ (via `@tailwindcss/vite`)
- **Runtime**: Cloudflare Pages with edge functions
- **Package Manager**: pnpm

### Key Technologies
- **Islands Architecture**: Hydrate only interactive components (forms, animations)
- **Content Strategy**: Static pages for speed; dynamic routing for city pages
- **Type Safety**: TypeScript throughout
- **SEO**: JSON-LD structured data, sitemap, RSS
- **CRM Integration**: GoHighLevel via server-side API proxy

### Performance Requirements
- **LCP < 1.2s** (Largest Contentful Paint)
- **Mobile-first** responsive design
- **Zero client-side API key exposure**
- **WCAG 2.1 Level AA accessibility compliance**

---

## Design System

### Color Palette (OKLCH)
```css
--color-obsidian: oklch(0.2 0.02 270);   /* Deep text color */
--color-glacier: oklch(0.7 0.1 220);     /* Accent blue */
--color-quartz: oklch(0.95 0.01 90);     /* Soft background */
```

**Always use OKLCH** instead of hex values for color definitions.

### Typography Hierarchy
- **Headings**: Premium serif (e.g., Instrument Serif) - conveys sophistication
- **Body**: Clean sans-serif (e.g., Inter, Geist) - tech-forward readability
- **Massive whitespace**: Apple-minimalist approach
- **High contrast**: Ensure AA accessibility

### Visual Language
- ❌ **Avoid**: Generic stock photos, "plumbing blue" aesthetics, cluttered layouts
- ✅ **Embrace**: High-fidelity imagery, localized photography (Wasatch Mountains), clean product shots
- ✅ **Interactions**: Subtle parallax, liquid button effects, scroll-linked animations
- ✅ **Transitions**: Clip-path reveals, diagonal/organic section dividers (water-flow curves)

---

## File Structure & Conventions

### Directory Organization
```
src/
├── components/         # Reusable Astro components
│   ├── Header.astro   # Site navigation
│   ├── Footer.astro   # Site footer with contact info
│   ├── LeadForm.astro # Custom GHL form (no iframes)
│   └── Welcome.astro  # Hero sections
├── data/              # Static data files
│   └── cities.ts      # City-specific water quality data
├── layouts/
│   └── Layout.astro   # Base layout with schema injection
├── pages/             # File-based routing
│   ├── index.astro    # Homepage
│   ├── api/           # Server endpoints
│   │   └── lead.ts    # GHL proxy endpoint
│   └── locations/     # Dynamic city pages
│       ├── index.astro      # City directory
│       └── [city].astro     # Dynamic city routes
├── styles/
│   └── global.css     # Tailwind + custom styles
└── utils/
    └── schema.ts      # JSON-LD schema generators
```

### Naming Conventions
- **Files**: `kebab-case.astro` or `camelCase.ts`
- **Components**: PascalCase (e.g., `LeadForm.astro`)
- **Routes**: Lowercase with hyphens (e.g., `the-system.astro`)
- **Dynamic routes**: Use brackets (e.g., `[city].astro`)

---

## SEO Strategy & Implementation

### Local SEO (Critical)
We are targeting **local intent keywords**:
- "reverse osmosis Salt Lake City"
- "water filtration Draper Utah"
- "RO system Park City"

**Implementation Pattern:**
1. **Dynamic City Pages**: `src/pages/locations/[city].astro`
   - Pull data from `src/data/cities.ts`
   - Include TDS levels, hardness data, local water issues
   - Inject city-specific JSON-LD LocalBusiness schema
2. **Localized Content**: Every page mentions Utah/local areas naturally
3. **Water Quality Data**: Real EWG.org data for credibility

### Structured Data (JSON-LD)
**Always inject appropriate schema** via `src/utils/schema.ts`:

- **All Pages**: Base Organization schema (auto-injected in `Layout.astro`)
- **Homepage**: Breadcrumb + enhanced Organization
- **Product Pages**: Product schema with offers
- **FAQ Pages**: FAQPage schema
- **City Pages**: LocalBusiness schema per location

**Usage Example:**
```astro
---
import { getProductSchema } from "../utils/schema";
const schema = [getProductSchema(...)];
---
<Layout schema={schema}>
```

### Open Graph Metadata
Every page should have OG metadata for social sharing. Use the `og` prop in `Layout.astro`:
```astro
<Layout og={{ title: "Custom Title", image: "/path/to/image.jpg" }}>
```

---

## Lead Capture & Conversion

### GoHighLevel Integration (Critical)
**Never use GHL iframes** - they break the Apple-esque flow.

**Implementation:**
1. **Custom Form**: `src/components/LeadForm.astro`
   - Tailwind-styled, validation included
   - Multi-step optional (for higher engagement)
2. **Server Proxy**: `src/pages/api/lead.ts`
   - POST data to GHL via server-side fetch
   - Hides API keys from client
   - Returns success/error for UX feedback
3. **Success State**: Show animated confirmation (no page redirect)

### Conversion Tracking
- **Zaraz/GTM**: Server-side event tracking to bypass ad-blockers
- **Meta/Google Conversion API**: Fire events on successful API response

### CTA Strategy
Primary CTAs tested:
- "Schedule Free Water Audit" (trust-building)
- "Get Pricing Now" (direct intent)

Place CTAs:
- Hero section (above fold)
- After value propositions
- End of educational content
- Sticky bottom bar on mobile

---

## Content Guidelines

### Tone & Voice
- **Authoritative but approachable**: Expert without being condescending
- **Transparent**: Explain the $15k value vs. $30k competitors
- **Mission-driven**: "Purity without the premium"
- **Local**: Mention Salt Lake, Wasatch, Utah water issues naturally

### Copy Structure
1. **Headlines**: Short, benefit-driven (e.g., "Your Family, Unfiltered.")
2. **Subheads**: Clarify the benefit (e.g., "Half the cost. Half the footprint. 10x quieter.")
3. **Body**: Short paragraphs (2-3 sentences). Use bullet points for technical specs.
4. **CTAs**: Action-oriented (e.g., "Schedule Audit" not "Learn More")

### Trust Signals to Include
- "Trusted by 500+ Homes in the Wasatch Front"
- Local team bios with professional photography
- Transparent pricing breakdown
- Comparison tables (Blue Logic vs. Competitors)
- Local water quality data (TDS, contaminants)

---

## Component Development Guidelines

### Astro Components
- Use `.astro` for static or lightly interactive components
- Use TypeScript interfaces for props:
  ```astro
  ---
  interface Props {
    title: string;
    description?: string;
  }
  const { title, description } = Astro.props;
  ---
  ```
- Leverage `Astro.props` for type-safe prop access
- Keep components focused (single responsibility)

### Interactive Components (Islands)
- Minimize JavaScript hydration
- Use `client:load` only for above-fold interactivity
- Use `client:visible` for below-fold components
- Prefer `client:idle` for non-critical interactions

### Animation Guidelines
When implementing animations:
- **Framer Motion** or **GSAP** for complex scroll animations
- Use `prefers-reduced-motion` media query for accessibility
- Keep animations subtle and purposeful (not decorative)
- Target 60fps performance

---

## Development Workflow

### Running the Project
```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm format       # Format with Prettier
pnpm lint         # Lint with ESLint
```

### Environment Setup
- **Local**: `http://localhost:4321`
- **Production**: `https://www.bluelogicwater.com`
- **Cloudflare**: Deploys via GitHub Actions on push to `main`

### Adding New Pages
1. Create file in `src/pages/` (e.g., `new-page.astro`)
2. Use `Layout.astro` wrapper for consistency
3. Add appropriate JSON-LD schema
4. Include Open Graph metadata
5. Add to sitemap (auto-generated via `@astrojs/sitemap`)

### Adding New City Pages
1. Add city data to `src/data/cities.ts`:
   ```typescript
   {
     slug: "city-name",
     name: "City Name",
     tdsRange: "300-450 ppm",
     hardnessLevel: "Very Hard",
     // ... other properties
   }
   ```
2. The dynamic route will auto-generate the page
3. Verify JSON-LD LocalBusiness schema is correct

---

## Cloudflare-Specific Considerations

### Image Handling
- **Use `service: 'compile'`** in `astro.config.mjs`
- Cloudflare doesn't support Sharp in SSR
- Pre-optimize images before uploading
- Use modern formats (WebP, AVIF) with fallbacks

### Edge Functions
- Server endpoints (`src/pages/api/*.ts`) run on Cloudflare Workers
- Keep cold-start times low (<50ms)
- Avoid heavy dependencies in API routes

### Environment Variables
- Store in Cloudflare Pages dashboard
- Access via `import.meta.env.VARIABLE_NAME`
- Never expose keys client-side (use API proxy pattern)

---

## Quality Standards

### Before Committing Code
- [ ] Test on mobile (70% of traffic)
- [ ] Verify LCP < 1.2s (use Chrome DevTools)
- [ ] Check accessibility (aXe DevTools)
- [ ] Validate JSON-LD (Google Rich Results Test)
- [ ] Run `pnpm format` and `pnpm lint`
- [ ] Test form submission to GHL endpoint

### SEO Checklist
- [ ] Unique `<title>` per page (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Appropriate JSON-LD schema injected
- [ ] Open Graph tags present
- [ ] Image alt text descriptive
- [ ] H1 tag includes target keyword
- [ ] Internal links to related pages

---

## Common Patterns & Solutions

### Pattern: Creating a New Section Component
```astro
---
// src/components/Section.astro
interface Props {
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
}
const { title, subtitle, theme = "light" } = Astro.props;
---

<section class={`section-${theme}`}>
  <div class="container">
    <h2>{title}</h2>
    {subtitle && <p class="subtitle">{subtitle}</p>}
    <slot />
  </div>
</section>

<style>
  .section-light {
    background: var(--color-quartz);
    color: var(--color-obsidian);
  }
  .section-dark {
    background: var(--color-obsidian);
    color: white;
  }
</style>
```

### Pattern: Adding Schema to a Page
```astro
---
import Layout from "../layouts/Layout.astro";
import { getProductSchema } from "../utils/schema";

const siteUrl = Astro.site?.toString() || "https://bluelogicwater.com";
const schema = [
  getProductSchema(siteUrl, {
    name: "Blue Logic RO System",
    price: "15000"
  })
];
---

<Layout schema={schema}>
  <!-- Page content -->
</Layout>
```

### Pattern: Creating an API Endpoint
```typescript
// src/pages/api/example.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Process data...
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
```

---

## Current Project Status

### ✅ Completed
- [x] Astro SSR with Cloudflare adapter
- [x] Tailwind 4 design system with OKLCH colors
- [x] Asset optimization pipeline
- [x] CI/CD with GitHub Actions → Cloudflare Pages
- [x] Custom lead form (LeadForm.astro)
- [x] GHL server-side proxy (partially complete)
- [x] Programmatic city routing with 10+ cities
- [x] JSON-LD schema system (Organization, LocalBusiness, Product, FAQ, Breadcrumb)
- [x] Homepage with mission section
- [x] Location pages with water quality data from EWG Tapwater Database
- [x] Astro View Transitions between pages

### 🚧 In Progress / Next Steps
- [ ] Server-side conversion tracking (Zaraz/GTM integration)
- [ ] "Exploded View" RO system animation
- [ ] Localized parallax hero section
- [ ] Comparison table/module (Blue Logic vs. competitors)
- [ ] Google Search Console integration
- [ ] Process stepper component (installation roadmap)
- [ ] Blog/resource center with Content Collections

### 📋 Future Enhancements
- [ ] Video testimonial carousel
- [ ] A/B testing framework for CTAs
- [ ] Advanced analytics and heatmaps (PostHog)

---

## When Making Changes

### Always Consider:
1. **SEO Impact**: Does this affect crawlability, page speed, or schema?
2. **Mobile Experience**: Will this work on a phone? (70% of users)
3. **Conversion Path**: Does this drive toward or distract from lead capture?
4. **Brand Consistency**: Does this feel "high-tech wellness" vs. "plumbing blue"?
5. **Performance**: Will this increase LCP or bundle size?

### Best Practices:
- **Keep it fast**: Every millisecond matters for conversions
- **Keep it clean**: Whitespace is a feature, not wasted space
- **Keep it local**: Mention Utah, Salt Lake, Wasatch whenever natural
- **Keep it trustworthy**: Back claims with data (TDS levels, testimonials, comparisons)

### When Stuck:
1. Check `docs/design-document.md` for visual/technical guidance
2. Check `docs/tasks-v1.md` for implementation roadmap
3. Review existing patterns in `src/components/` or `src/pages/`
4. Test on mobile first (70% of users)

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration, adapters, integrations |
| `src/layouts/Layout.astro` | Base layout, schema injection, OG tags |
| `src/utils/schema.ts` | JSON-LD schema generators |
| `src/data/cities.ts` | City water quality data for dynamic pages |
| `src/components/LeadForm.astro` | Main conversion form |
| `src/pages/api/lead.ts` | GHL API proxy endpoint |
| `src/styles/global.css` | Tailwind config + custom OKLCH colors |
| `docs/design-document.md` | Visual identity, UX strategy, technical specs |
| `docs/tasks-v1.md` | Implementation roadmap and task tracking |

---

## Success Metrics

We measure success by:
1. **Organic traffic** to target keywords (Google Search Console)
2. **Lead volume** via form submissions (GHL CRM)
3. **Page performance** (Core Web Vitals, LCP < 1.2s)
4. **Conversion rate** (% of visitors who submit lead form)
5. **Local rankings** (position for "reverse osmosis [city] utah")

---

## Final Notes

This is a **premium product** ($15k) targeting an **affluent, health-conscious demographic**. Every decision—design, copy, interaction—should reflect that positioning. We're not competing with cheap Amazon filters; we're competing with $30k commercial systems.

**Quality over quantity. Speed over complexity. Trust over hype.**

When in doubt: **Make it faster. Make it cleaner. Make it local.**
