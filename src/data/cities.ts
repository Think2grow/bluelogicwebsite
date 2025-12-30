/**
 * City data for programmatic routing
 * Defines Utah cities served by Blue Logic Water
 */

export interface CityData {
  slug: string;
  name: string;
  region: string;
  zipCodes: string[];
  ewgTapwaterDatabaseUrl?: string; // environmental working group URL
  contaminantsExceedingGuidelines?: number;
  totalContaminants?: number;
  topContaminants?: string[];
  complianceStatus?: string;
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
    zipCodes: [
      "84101",
      "84102",
      "84103",
      "84104",
      "84105",
      "84106",
      "84107",
      "84108",
      "84109",
      "84110",
      "84111",
      "84112",
      "84113",
      "84114",
      "84115",
      "84116",
      "84117",
      "84118",
      "84119",
      "84120",
      "84121",
      "84122",
      "84123",
      "84124",
      "84125",
      "84126",
      "84127",
      "84128",
      "84130",
      "84131",
      "84132",
      "84133",
      "84134",
      "84138",
      "84139",
      "84140",
      "84141",
      "84143",
      "84144",
      "84145",
      "84147",
      "84148",
      "84150",
      "84151",
      "84152",
      "84157",
      "84158",
      "84165",
      "84170",
      "84171",
      "84180",
      "84184",
      "84189",
      "84190",
      "84199",
    ],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH18026",
    contaminantsExceedingGuidelines: 16,
    totalContaminants: 36,
    topContaminants: [
      "Arsenic (135x guideline)",
      "Perfluorohexane sulfonate (404x guideline)",
      "Dichloroacetic acid (101x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "350-500 ppm",
    hardnessLevel: "Very Hard",
    population: "360,654",
    description:
      "Utah's capital and largest city faces significant hard water challenges from surface water sources with elevated PFAS contamination.",
    waterSource: "Surface water from mountain watersheds",
    commonIssues: [
      "High mineral content from surface water",
      "Calcium and magnesium deposits",
      "PFAS (per- and polyfluoroalkyl substances) contamination",
      "Chlorine byproducts and disinfection",
      "Scale buildup on fixtures and appliances",
      "Arsenic detection above EWG guidelines",
    ],
  },
  {
    slug: "park-city",
    name: "Park City",
    region: "Summit County",
    zipCodes: ["84060", "84098"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH22011",
    contaminantsExceedingGuidelines: 17,
    totalContaminants: 31,
    topContaminants: [
      "Arsenic (343x guideline)",
      "Perfluorooctanoic acid/PFOA (16x guideline)",
      "Perfluorooctane sulfonate/PFOS (4.4x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "300-450 ppm",
    hardnessLevel: "Very Hard",
    population: "8,500",
    description:
      "Mountain resort community with high PFAS contamination and elevated arsenic levels requiring advanced filtration.",
    waterSource: "Surface water from high-altitude mountain sources",
    commonIssues: [
      "High PFAS contamination (emerging contaminant)",
      "Extremely hard water from mountain sources",
      "Arsenic detection above EWG guidelines",
      "Seasonal water quality variations",
      "High-end appliance protection needs",
    ],
  },
  {
    slug: "draper",
    name: "Draper",
    region: "Salt Lake County",
    zipCodes: ["84020"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH18006",
    contaminantsExceedingGuidelines: 14,
    totalContaminants: 27,
    topContaminants: [
      "Arsenic (450x guideline)",
      "Haloacetic acids/HAA9 (802x guideline)",
      "Uranium (26x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "350-480 ppm",
    hardnessLevel: "Very Hard",
    population: "28,000",
    description:
      "Growing suburb with extremely high contamination levels - among Utah's most concerning water supplies with 450x arsenic guideline exceedance.",
    waterSource: "Surface water",
    commonIssues: [
      "Extreme arsenic contamination",
      "High disinfection byproducts (HAA5, HAA9)",
      "Uranium and radioactive contaminant presence",
      "Hard water scale on fixtures",
      "Mineral buildup in tankless water heaters",
      "Multiple contaminants exceeding guidelines",
    ],
  },
  {
    slug: "sandy",
    name: "Sandy",
    region: "Salt Lake County",
    zipCodes: ["84047", "84070", "84090", "84091", "84092", "84093", "84094"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH18028",
    contaminantsExceedingGuidelines: 14,
    totalContaminants: 23,
    topContaminants: [
      "Dichloroacetic acid (104x guideline)",
      "Haloacetic acids/HAA5 (306x guideline)",
      "Chloroform (43x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "340-470 ppm",
    hardnessLevel: "Very Hard",
    population: "99,750",
    description:
      "Major suburban center with significant disinfection byproduct contamination from purchased surface water.",
    waterSource:
      "Purchased surface water from Jordan Valley Water Conservancy District",
    commonIssues: [
      "High disinfection byproduct levels",
      "Hard water deposits throughout city",
      "Chlorine taste and odor concerns",
      "Appliance longevity and efficiency loss",
      "White mineral residue on surfaces",
      "Scale accumulation in plumbing",
    ],
  },
  {
    slug: "provo",
    name: "Provo",
    region: "Utah County",
    zipCodes: ["84601", "84602", "84603", "84604", "84605", "84606"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH25006",
    contaminantsExceedingGuidelines: 12,
    totalContaminants: 28,
    topContaminants: [
      "Arsenic (100x guideline)",
      "Haloacetic acids/HAA9 (66x guideline)",
      "Chloroform (4.9x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "320-450 ppm",
    hardnessLevel: "Very Hard",
    population: "116,288",
    description:
      "University city with purchased surface water and arsenic contamination requiring advanced filtration solutions.",
    waterSource: "Purchased surface water",
    commonIssues: [
      "Arsenic detection above guidelines",
      "Hard water deposits from watershed",
      "Disinfection byproducts present",
      "Scale in hot water systems",
      "Seasonal water quality variations",
      "Chlorine taste and odor",
    ],
  },
  {
    slug: "orem",
    name: "Orem",
    region: "Utah County",
    zipCodes: ["84057", "84058", "84059", "84097"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH25020",
    contaminantsExceedingGuidelines: 13,
    totalContaminants: 27,
    topContaminants: [
      "Chromium (hexavalent) (36x guideline)",
      "Arsenic (131x guideline)",
      "Haloacetic acids/HAA9 (272x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "330-460 ppm",
    hardnessLevel: "Very Hard",
    population: "98,129",
    description:
      "Family-focused community with purchased surface water containing arsenic and hexavalent chromium contamination.",
    waterSource: "Purchased surface water from Jordan Valley system",
    commonIssues: [
      "Very hard water with mineral deposits",
      "Arsenic contamination",
      "Hexavalent chromium (cancer risk)",
      "Rapid scale accumulation",
      "Disinfection byproducts present",
      "High mineral content causing staining",
    ],
  },
  {
    slug: "lehi",
    name: "Lehi",
    region: "Utah County",
    zipCodes: ["84043"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH25015",
    contaminantsExceedingGuidelines: 12,
    totalContaminants: 27,
    topContaminants: [
      "Arsenic (484x guideline)",
      "Chromium (hexavalent) (29x guideline)",
      "Haloacetic acids/HAA5 (41x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "360-490 ppm",
    hardnessLevel: "Very Hard",
    population: "79,978",
    description:
      "Tech hub with extreme arsenic contamination levels and purchased surface water requiring comprehensive filtration.",
    waterSource: "Purchased surface water from Jordan Valley system",
    commonIssues: [
      "Extreme arsenic contamination (484x)",
      "Some of Utah's hardest water",
      "Hexavalent chromium contamination",
      "High TDS from surface sources",
      "Mineral staining on modern fixtures",
      "New home plumbing degradation risk",
    ],
  },
  {
    slug: "south-jordan",
    name: "South Jordan",
    region: "Salt Lake County",
    zipCodes: ["84009", "84095"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH18023",
    contaminantsExceedingGuidelines: 15,
    totalContaminants: 26,
    topContaminants: [
      "Chloroform (62x guideline)",
      "Haloacetic acids/HAA9 (525x guideline)",
      "Total trihalomethanes (245x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "345-475 ppm",
    hardnessLevel: "Very Hard",
    population: "87,356",
    description:
      "Master-planned communities with high disinfection byproduct levels requiring advanced water treatment.",
    waterSource: "Purchased surface water from Jordan Valley system",
    commonIssues: [
      "High disinfection byproducts (DBPs)",
      "Chloroform and related compounds",
      "Hard water in new developments",
      "Scale on fixtures and appliances",
      "Chlorine taste in treated water",
      "Spotting on vehicles and windows",
    ],
  },
  {
    slug: "west-jordan",
    name: "West Jordan",
    region: "Salt Lake County",
    zipCodes: ["84081", "84084", "84088"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH18020",
    contaminantsExceedingGuidelines: 15,
    totalContaminants: 31,
    topContaminants: [
      "Chloroform (51x guideline)",
      "Chromium (hexavalent) (93x guideline)",
      "Arsenic (275x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "350-480 ppm",
    hardnessLevel: "Very Hard",
    population: "113,699",
    description:
      "Large suburban city with diverse neighborhoods all facing hard water and multiple chemical contaminants.",
    waterSource:
      "Purchased surface water from Jordan Valley Water Conservancy District",
    commonIssues: [
      "Consistent hard water problems",
      "Hexavalent chromium contamination",
      "Arsenic detection above guidelines",
      "Mineral deposits on plumbing",
      "Disinfection byproducts (chloroform)",
      "Appliance efficiency loss",
    ],
  },
  {
    slug: "cottonwood-heights",
    name: "Cottonwood Heights",
    region: "Salt Lake County",
    zipCodes: ["84047", "84092", "84093", "84121"],
    ewgTapwaterDatabaseUrl:
      "https://www.ewg.org/tapwater/system.php?pws=UTAH18026",
    contaminantsExceedingGuidelines: 16,
    totalContaminants: 36,
    topContaminants: [
      "Arsenic (135x guideline)",
      "Perfluorohexane sulfonate (404x guideline)",
      "Dichloroacetic acid (101x guideline)",
    ],
    complianceStatus: "Federally compliant but exceeds EWG health guidelines",
    tdsRange: "340-470 ppm",
    hardnessLevel: "Very Hard",
    population: "33,000",
    description:
      "Upscale foothills community with high expectations for water quality facing significant PFAS and arsenic contamination.",
    waterSource: "Surface water from Salt Lake City system",
    commonIssues: [
      "Hard water from surface water sources",
      "PFAS contamination in premium homes",
      "Arsenic above EWG guidelines",
      "Premium home fixture degradation",
      "Health concerns for affluent residents",
      "Emerging contaminant presence (PFAS)",
    ],
  },
];

/**
 * Get city data by slug
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

/**
 * Get all city slugs for static path generation
 */
export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

/**
 * Generate paths for Astro's getStaticPaths
 */
export function getCityPaths() {
  return cities.map((city) => ({
    params: { city: city.slug },
    props: { cityData: city },
  }));
}
