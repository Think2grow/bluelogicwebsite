/**
 * City data for programmatic routing
 * Defines Utah cities served by Blue Logic Water
 */

export interface CityData {
  slug: string;
  name: string;
  region: string;
  zipCodes: string[];
  tdsRange: string;
  hardnessLevel: "Very Hard" | "Hard" | "Moderate";
  population?: string;
  description: string;
  waterSource: string;
  commonIssues: string[];
}

/**
 * List of cities with their specific water data
 */
export const cities: CityData[] = [
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    region: "Salt Lake County",
    zipCodes: ["84101", "84102", "84103", "84104", "84105", "84106", "84107", "84108", "84109", "84110", "84111", "84112", "84113", "84114", "84115", "84116", "84117", "84118", "84119", "84120", "84121", "84122", "84123", "84124", "84125", "84126", "84127", "84128", "84130", "84131", "84132", "84133", "84134", "84138", "84139", "84140", "84141", "84143", "84144", "84145", "84147", "84148", "84150", "84151", "84152", "84157", "84158", "84165", "84170", "84171", "84180", "84184", "84189", "84190", "84199"],
    tdsRange: "350-500 ppm",
    hardnessLevel: "Very Hard",
    population: "200,000+",
    description: "Utah's capital and largest city faces significant hard water challenges from mountain watershed sources.",
    waterSource: "Mountain watersheds and underground aquifers",
    commonIssues: [
      "High mineral content from mountain runoff",
      "Calcium and magnesium deposits",
      "Chlorine taste and odor",
      "Scale buildup on fixtures and appliances",
      "Potential PFAS contamination",
      "Aging infrastructure and pipe issues"
    ]
  },
  {
    slug: "park-city",
    name: "Park City",
    region: "Summit County",
    zipCodes: ["84060", "84098"],
    tdsRange: "300-450 ppm",
    hardnessLevel: "Very Hard",
    population: "8,000+",
    description: "Mountain resort community with premium water quality needs and high-end clientele.",
    waterSource: "High-altitude mountain springs and wells",
    commonIssues: [
      "Extremely hard water from mountain sources",
      "Iron and manganese staining",
      "Seasonal water quality variations",
      "High-end appliance protection needs"
    ]
  },
  {
    slug: "draper",
    name: "Draper",
    region: "Salt Lake County",
    zipCodes: ["84020"],
    tdsRange: "350-480 ppm",
    hardnessLevel: "Very Hard",
    population: "50,000+",
    description: "Rapidly growing suburb with modern homes requiring advanced water filtration.",
    waterSource: "Salt Lake Valley aquifer and watershed blends",
    commonIssues: [
      "Hard water scale on new fixtures",
      "Chlorine and chloramine treatment",
      "Mineral buildup in tankless water heaters",
      "Spotting on glass and tile"
    ]
  },
  {
    slug: "sandy",
    name: "Sandy",
    region: "Salt Lake County",
    zipCodes: ["84047", "84070", "84090", "84091", "84092", "84093", "84094"],
    tdsRange: "340-470 ppm",
    hardnessLevel: "Very Hard",
    population: "95,000+",
    description: "Major suburban center with diverse housing and consistent water quality challenges.",
    waterSource: "Jordan Valley Water Conservancy District",
    commonIssues: [
      "Consistently hard water throughout city",
      "Chlorine treatment taste",
      "Appliance longevity concerns",
      "White residue on surfaces"
    ]
  },
  {
    slug: "provo",
    name: "Provo",
    region: "Utah County",
    zipCodes: ["84601", "84602", "84603", "84604", "84605", "84606"],
    tdsRange: "320-450 ppm",
    hardnessLevel: "Very Hard",
    population: "115,000+",
    description: "University city with high water demand and quality concerns from Utah Lake proximity.",
    waterSource: "Provo River and underground sources",
    commonIssues: [
      "Hard water from Provo River",
      "Seasonal TDS variations",
      "Chlorination byproducts",
      "Scale in hot water systems"
    ]
  },
  {
    slug: "orem",
    name: "Orem",
    region: "Utah County",
    zipCodes: ["84057", "84058", "84059", "84097"],
    tdsRange: "330-460 ppm",
    hardnessLevel: "Very Hard",
    population: "98,000+",
    description: "Family-focused community adjacent to Provo with similar water challenges.",
    waterSource: "Provo River watershed",
    commonIssues: [
      "Very hard water affecting homes",
      "Rapid scale accumulation",
      "Taste and odor issues",
      "High mineral content"
    ]
  },
  {
    slug: "lehi",
    name: "Lehi",
    region: "Utah County",
    zipCodes: ["84043"],
    tdsRange: "360-490 ppm",
    hardnessLevel: "Very Hard",
    population: "75,000+",
    description: "Tech hub with rapid growth and new construction needing quality water solutions.",
    waterSource: "Jordan River and local wells",
    commonIssues: [
      "Some of Utah's hardest water",
      "New home plumbing protection needs",
      "High TDS from multiple sources",
      "Mineral staining on modern fixtures"
    ]
  },
  {
    slug: "south-jordan",
    name: "South Jordan",
    region: "Salt Lake County",
    zipCodes: ["84009", "84095"],
    tdsRange: "345-475 ppm",
    hardnessLevel: "Very Hard",
    population: "75,000+",
    description: "Master-planned communities with modern amenities requiring premium water quality.",
    waterSource: "Jordan Valley Water system",
    commonIssues: [
      "Hard water in new developments",
      "Scale on fixtures and appliances",
      "Chlorine taste in treated water",
      "Spotting on vehicles and windows"
    ]
  },
  {
    slug: "west-jordan",
    name: "West Jordan",
    region: "Salt Lake County",
    zipCodes: ["84081", "84084", "84088"],
    tdsRange: "350-480 ppm",
    hardnessLevel: "Very Hard",
    population: "116,000+",
    description: "Large suburban city with diverse neighborhoods all facing hard water issues.",
    waterSource: "Jordan Valley Water Conservancy District",
    commonIssues: [
      "Consistent hard water problems",
      "Mineral deposits on plumbing",
      "Chlorine and treatment chemicals",
      "Appliance efficiency loss"
    ]
  },
  {
    slug: "cottonwood-heights",
    name: "Cottonwood Heights",
    region: "Salt Lake County",
    zipCodes: ["84047", "84092", "84093", "84121"],
    tdsRange: "340-470 ppm",
    hardnessLevel: "Very Hard",
    population: "33,000+",
    description: "Upscale foothills community with high expectations for water quality.",
    waterSource: "Mountain watershed and valley aquifer",
    commonIssues: [
      "Hard water from mountain sources",
      "Premium home protection needs",
      "Scale on luxury fixtures",
      "Taste concerns for health-conscious residents"
    ]
  }
];

/**
 * Get city data by slug
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

/**
 * Get all city slugs for static path generation
 */
export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

/**
 * Generate paths for Astro's getStaticPaths
 */
export function getCityPaths() {
  return cities.map(city => ({
    params: { city: city.slug },
    props: { cityData: city }
  }));
}
