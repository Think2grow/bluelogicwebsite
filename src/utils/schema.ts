import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "../data/google-reviews";

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
    "Water softening, whole-home filtration and whole-home reverse osmosis for Utah homes, installed by a local, family-owned team.",
  image: "/3%20Blue%20Logic%20Water%20Logo-13.jpg",
  imageWidth: "1501",
  imageHeight: "1501",
  imageAlt: "Blue Logic logo, Whole Home Reverse Osmosis",
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
  image: string;
  brand: {
    "@type": string;
    name: string;
  };
  offers: {
    "@type": string;
    lowPrice: string;
    highPrice: string;
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
    logo: new URL("/3%20Blue%20Logic%20Water%20Logo-13.jpg", url).toString(),
    image: new URL("/3%20Blue%20Logic%20Water%20Logo-13.jpg", url).toString(),
    description:
      "Whole-home reverse osmosis, filtration and softening systems for Utah homes, built in house and installed by a local team.",
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
  "Eagle Mountain", "Pleasant Grove", "Lindon", "Payson", "Tooele",
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
      ratingValue: GOOGLE_RATING.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(GOOGLE_REVIEW_COUNT),
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
    name: "Blue Logic Water Treatment Systems",
    description:
      "Blue Logic water treatment systems: Softener, Filtration with an under-sink RO, and the whole-home Purification System. From about $1,000 out the door, customized to the home, installation and tax included. 5-year warranty, 10 years on tank media. Serving the Wasatch Front.",
    image: new URL("/3%20Blue%20Logic%20Water%20Logo-13.jpg", url).toString(),
    brand: {
      "@type": "Brand",
      name: "Blue Logic Water",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "2999",
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
      image:
        "https://www.bluelogicwater.com/3%20Blue%20Logic%20Water%20Logo-13.jpg",
      telephone: "+1-801-980-2583",
      email: "info@bluelogicwater.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salt Lake City",
        addressRegion: "UT",
        postalCode: "84101",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Salt Lake County, Utah" },
      { "@type": "AdministrativeArea", name: "Davis County, Utah" },
      { "@type": "AdministrativeArea", name: "Utah County, Utah" },
      { "@type": "AdministrativeArea", name: "Weber County, Utah" },
      { "@type": "AdministrativeArea", name: "Tooele Valley, Utah" },
    ],
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
 * AggregateRating schema, only use on pages where reviews are visibly displayed.
 * reviewCount and ratingValue must match what is actually shown on the page.
 */
export function getAggregateRatingSchema(
  url: string,
  ratingValue: number = GOOGLE_RATING,
  reviewCount: number = GOOGLE_REVIEW_COUNT,
) {
  const base = getBaseOrganizationSchema(url);
  return {
    ...base,
    "@type": "LocalBusiness",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(reviewCount),
    },
  };
}

/**
 * Merge multiple schemas into a single array for multi-type pages
 */
export function mergeSchemas(...schemas: any[]): any[] {
  return schemas.filter(Boolean);
}
