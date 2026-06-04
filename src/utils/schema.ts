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
  image: "/3%20Blue%20Logic%20Water%20Logo-13.jpg",
  imageWidth: "1200",
  imageHeight: "630",
  imageAlt: "Blue Logic Water — Whole-Home Reverse Osmosis Systems",
  imageType: "image/jpeg",
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
    logo: new URL("3%20Blue%20Logic%20Water%20Logo-13.jpg", url).toString(),
    image: new URL("3%20Blue%20Logic%20Water%20Logo-13.jpg", url).toString(),
    description:
      "Professional whole home reverse osmosis water purification systems for Utah homes. Half the cost, half the footprint, 10x quieter than traditional systems.",
    email: "info@bluelogicwater.com",
    telephone: "+1-801-980-2583",
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

const WASATCH_FRONT_CITIES = [
  "Salt Lake City", "Provo", "Orem", "Lehi", "Sandy", "Draper",
  "Ogden", "Layton", "Bountiful", "American Fork", "Spanish Fork",
  "Springville", "Murray", "Millcreek", "Cottonwood Heights", "Holladay",
  "West Jordan", "South Jordan", "Herriman", "Saratoga Springs",
  "Eagle Mountain", "Pleasant Grove", "Lindon", "Payson", "Park City",
];

/**
 * Local business schema for location pages.
 * Includes full Wasatch Front areaServed plus the specific city.
 */
export function getLocalBusinessSchema(
  url: string,
  city: string,
  state: string = "UT",
): LocalBusinessSchema {
  const base = getBaseOrganizationSchema(url);
  const cities = WASATCH_FRONT_CITIES.includes(city)
    ? WASATCH_FRONT_CITIES
    : [city, ...WASATCH_FRONT_CITIES];
  return {
    ...base,
    "@type": "LocalBusiness",
    priceRange: "$$",
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "10",
    },
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
      "Professional whole home reverse osmosis water purification system. NSF-certified components. $5,995–$19,999 installed. Written price-match guarantee on any competing quote. Serving Utah's Wasatch Front.",
    brand: {
      "@type": "Brand",
      name: "Blue Logic Water",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "5995",
      highPrice: "19999",
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
 * Service schema for service landing pages (RO, filtration, softener, etc.)
 */
export function getServiceSchema(
  url: string,
  serviceName: string,
  serviceDescription: string,
  offerName: string = "Free In-Home Water Test",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: url,
    provider: {
      "@type": "LocalBusiness",
      name: "Blue Logic Water",
      url: "https://www.bluelogicwater.com",
      telephone: "+1-801-980-2583",
    },
    areaServed: {
      "@type": "State",
      name: "Utah",
    },
    serviceType: "Water Treatment",
    offers: {
      "@type": "Offer",
      name: offerName,
      price: "0",
      priceCurrency: "USD",
      description: "Free in-home water test with no cost or obligation. Blue Logic specialist tests your water on-site and recommends the right system.",
      url: "https://www.bluelogicwater.com/free-water-test/",
    },
  };
}

/**
 * AggregateRating schema — only use on pages where reviews are visibly displayed.
 * reviewCount and ratingValue must match what is actually shown on the page.
 */
export function getAggregateRatingSchema(
  url: string,
  ratingValue: number = 5.0,
  reviewCount: number = 10,
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Blue Logic Water",
    url: url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: reviewCount,
    },
  };
}

/**
 * Merge multiple schemas into a single array for multi-type pages
 */
export function mergeSchemas(...schemas: any[]): any[] {
  return schemas.filter(Boolean);
}
