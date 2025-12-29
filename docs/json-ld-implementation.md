# JSON-LD Schema Implementation

## Overview

This implementation provides a flexible JSON-LD schema system for Blue Logic Water that allows:

1. **Base schema** automatically injected into all pages
2. **Page-specific schema** augmentation for enhanced SEO
3. **Programmatic city routing** with dynamic location pages

## Architecture

### Base Schema (All Pages)

Every page automatically includes the base Organization schema via `Layout.astro`:

```astro
import {getBaseOrganizationSchema} from "../utils/schema"; const baseSchema =
getBaseOrganizationSchema(siteUrl);
```

This provides foundational business information across the entire site.

### Page-Specific Schema Augmentation

Individual pages can pass additional schema via the `schema` prop:

```astro
---
import Layout from "../layouts/Layout.astro";
import { getProductSchema, getBreadcrumbSchema } from "../utils/schema";

const schemas = [
  getProductSchema(currentUrl),
  getBreadcrumbSchema(siteUrl, breadcrumbs),
];
---

<Layout schema={schemas}>
  <!-- page content -->
</Layout>
```

The Layout combines base + page-specific schemas and renders them using Astro's `set:html` directive:

```astro
{
  allSchemas.map((schemaItem) => (
    <script type="application/ld+json" set:html={JSON.stringify(schemaItem)} />
  ))
}
```

## Schema Types Available

### 1. Base Organization Schema

- Used on all pages automatically
- Provides business contact info, location, and description
- Located in: `src/utils/schema.ts` → `getBaseOrganizationSchema()`

### 2. Local Business Schema

- Used on location/city pages
- Extends organization with local business details
- Located in: `src/utils/schema.ts` → `getLocalBusinessSchema()`

### 3. Product Schema

- Used on product/system pages
- Defines the RO system as a product with pricing
- Located in: `src/utils/schema.ts` → `getProductSchema()`

### 4. FAQ Schema

- Used on FAQ pages
- Structures Q&A pairs for rich snippets
- Located in: `src/utils/schema.ts` → `getFAQSchema()`

### 5. Breadcrumb Schema

- Used across multiple pages
- Provides navigation hierarchy
- Located in: `src/utils/schema.ts` → `getBreadcrumbSchema()`

## Programmatic City Routing

### City Data Structure

Cities are defined in `src/data/cities.ts` with comprehensive water quality data:

```typescript
export interface CityData {
  slug: string; // URL slug (e.g., "salt-lake-city")
  name: string; // Display name
  region: string; // County/region
  zipCodes: string[]; // Service area zip codes
  tdsRange: string; // TDS levels
  hardnessLevel: string; // Water hardness
  population?: string; // Estimated population
  description: string; // SEO description
  waterSource: string; // Water source info
  commonIssues: string[]; // Local water issues
}
```

### Static Path Generation

The `[city].astro` dynamic route uses `getStaticPaths()` to generate pages:

```astro
---
import { getCityPaths } from "../../data/cities";

export function getStaticPaths() {
  return getCityPaths();
}

const { cityData } = Astro.props;
---
```

This generates pages for:

- `/locations/salt-lake-city`
- `/locations/park-city`
- `/locations/draper`
- `/locations/sandy`
- `/locations/provo`
- `/locations/orem`
- `/locations/lehi`
- `/locations/south-jordan`
- `/locations/west-jordan`
- `/locations/cottonwood-heights`

### Adding New Cities

To add a new city, simply add it to the `cities` array in `src/data/cities.ts`:

```typescript
{
  slug: "new-city",
  name: "New City",
  region: "Some County",
  zipCodes: ["84XXX"],
  tdsRange: "300-450 ppm",
  hardnessLevel: "Very Hard",
  description: "Description of water challenges",
  waterSource: "Water source information",
  commonIssues: [
    "Issue 1",
    "Issue 2"
  ]
}
```

The page will be automatically generated on next build.

## Example Usage

### Home Page

```astro
---
import { getBreadcrumbSchema } from "../utils/schema";

const schemas = [getBreadcrumbSchema(siteUrl, [{ name: "Home", url: "/" }])];
---

<Layout schema={schemas}>
  <!-- content -->
</Layout>
```

### Product Page

```astro
---
import { getProductSchema, getBreadcrumbSchema } from "../utils/schema";

const schemas = [
  getProductSchema(currentUrl),
  getBreadcrumbSchema(siteUrl, breadcrumbs),
];
---

<Layout schema={schemas}>
  <!-- content -->
</Layout>
```

### FAQ Page

```astro
---
import { getFAQSchema, getBreadcrumbSchema } from "../utils/schema";

const schemas = [getFAQSchema(faqs), getBreadcrumbSchema(siteUrl, breadcrumbs)];
---

<Layout schema={schemas}>
  <!-- content -->
</Layout>
```

### Location Pages

Location pages automatically get `LocalBusiness` + `Breadcrumb` schemas:

```astro
---
import {
  getLocalBusinessSchema,
  getBreadcrumbSchema,
} from "../../utils/schema";

const schemas = [
  getLocalBusinessSchema(siteUrl, cityData.name, "UT"),
  getBreadcrumbSchema(siteUrl, breadcrumbs),
];
---

<Layout schema={schemas}>
  <!-- content -->
</Layout>
```

## Benefits

1. **SEO Enhancement**: Rich snippets in search results
2. **Maintainability**: Centralized schema definitions
3. **Flexibility**: Easy to add new schema types
4. **Scalability**: Programmatic city pages from single template
5. **Type Safety**: TypeScript interfaces for data structure

## Testing Schema

Use Google's Rich Results Test:
https://search.google.com/test/rich-results

Or validate JSON-LD at:
https://validator.schema.org/

## Tasks Completed

- ✅ 4.1 Programmatic City Routing
- ✅ 4.2 Structured Data (JSON-LD) Generator
