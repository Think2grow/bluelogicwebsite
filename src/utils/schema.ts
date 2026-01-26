/**
 * Base JSON-LD schema definitions for Blue Logic Water
 * Uses schema.org types for SEO and structured data
 */

/**
 * Open Graph metadata for social sharing
 */
export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  imageType?: string;
  type?: string;
  url?: string;
}

/**
 * Default Open Graph values
 */
export const DEFAULT_OG_METADATA: OpenGraphMetadata = {
  title: "Blue Logic Water - Professional RO Systems",
  description:
    "Premium reverse osmosis water filtration systems for Utah homes. Half the cost, half the footprint, 10x quieter than traditional systems.",
  image: "/Blue%20Logic%20Logo%20FINAL-02.png",
  imageWidth: "1200",
  imageHeight: "630",
  imageAlt: "Blue Logic Water Logo",
  imageType: "image/png",
  type: "website",
};

interface BaseOrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  image: string;
  description: string;
  email: string;
  telephone: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
}

interface LocalBusinessSchema extends BaseOrganizationSchema {
  "@type": "LocalBusiness";
  priceRange: string;
  areaServed: Array<{
    "@type": string;
    name: string;
  }>;
}

interface ProductSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  brand: {
    "@type": string;
    name: string;
  };
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
}

/**
 * Base organization schema that appears on all pages
 */
export function getBaseOrganizationSchema(url: string): BaseOrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Blue Logic Water",
    url: url,
    logo: new URL("favicon.ico", url).toString(),
    image: new URL("Blue%20Logic%20Logo%20FINAL-02.png", url).toString(),
    description:
      "Professional whole home reverse osmosis water purification systems for Utah homes. Half the cost, half the footprint, 10x quieter than traditional systems.",
    email: "info@bluelogicwater.com",
    telephone: "+1-838-232-2583",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salt Lake City",
      addressRegion: "UT",
      postalCode: "84101",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/BlueLogicWater",
      "https://www.instagram.com/bluelogicwater/",
    ],
  };
}

/**
 * Local business schema for location pages
 */
export function getLocalBusinessSchema(
  url: string,
  city: string,
  state: string = "UT",
): LocalBusinessSchema {
  const base = getBaseOrganizationSchema(url);
  return {
    ...base,
    "@type": "LocalBusiness",
    priceRange: "$$$",
    areaServed: [
      {
        "@type": "City",
        name: city,
      },
    ],
  } as LocalBusinessSchema;
}

/**
 * Product schema for system/product pages
 */
export function getProductSchema(url: string): ProductSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Blue Logic Whole Home Reverse Osmosis System",
    description:
      "Professional whole home reverse osmosis water purification system. 50% smaller footprint, 10x quieter operation, and half the cost of traditional systems. Removes 99% of contaminants from every tap.",
    brand: {
      "@type": "Brand",
      name: "Blue Logic Water",
    },
    offers: {
      "@type": "Offer",
      price: "15000",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: url,
    },
  };
}

/**
 * FAQ schema for question pages
 * Strips HTML tags from answers for clean structured data
 */
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };
}

/**
 * Breadcrumb schema for navigation
 */
export function getBreadcrumbSchema(
  url: string,
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.url}`,
    })),
  };
}

/**
 * Merge multiple schemas into a single array for multi-type pages
 */
export function mergeSchemas(...schemas: any[]): any[] {
  return schemas.filter(Boolean);
}
