// Site Configuration - CBRS Group

export const siteConfig = {
  name: "CBRS Group",
  legalName: "CBRS Group",
  description: "Complete property damage solutions in Houston: restoration, inspections, claims support, packout services, design & expert witness services. 9 specialized service pillars.",
  url: "https://cbrsgroup.com",
  phone: "(832) 608-0535",
  phoneRaw: "+18326080535",
  email: "support@cbrsgroup.com",
  address: {
    street: "", // Add street address
    city: "Houston",
    state: "TX",
    zip: "", // Add zip code
    full: "Houston, TX",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61564870028363",
    instagram: "https://www.instagram.com/cbrsgroup",
    linkedin: "https://linkedin.com/company/cbrs-group",
    youtube: "https://youtube.com/@cbrsgroup",
    tiktok: "https://www.tiktok.com/@cbrs.group",
  },
  relatedSites: {
    propertyDamageSupport: "https://propertydamagesupport.com",
    restoration: "https://restoration.cbrsgroup.com",
    claimToCompletion: "https://claimtocompletion.com",
  },
} as const;

export const services = [
  {
    id: "restoration",
    title: "Restoration Management",
    shortTitle: "Restoration",
    description: "Professional restoration for water damage, fire damage, storm damage, and mold remediation with complete project management.",
    icon: "🏠",
    href: "/restoration",
    color: "blue",
    featured: true,
  },
  {
    id: "estimating-services",
    title: "Estimating & Supplementing",
    shortTitle: "Estimating",
    description: "Professional Xactimate estimates, supplement writing, and damage assessment services for homeowners and adjusters.",
    icon: "📊",
    href: "/estimating-services",
    color: "purple",
    featured: true,
  },
  {
    id: "insurance-claims",
    title: "Claims Management",
    shortTitle: "Claims",
    description: "Independent property inspection and documentation packages for insurance claim submission and review.",
    icon: "📋",
    href: "/insurance-claims",
    color: "amber",
    featured: true,
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortTitle: "Design",
    description: "Custom cabinetry, flooring selection, and complete interior design services for post-restoration upgrades.",
    icon: "🎨",
    href: "/interior-design",
    color: "pink",
    featured: true,
  },
  {
    id: "home-organization",
    title: "Home Organization",
    shortTitle: "Organization",
    description: "Professional organization systems for closets, kitchens, garages, and home offices including post-restoration setup.",
    icon: "📦",
    href: "/home-organization",
    color: "green",
    featured: true,
  },
  {
    id: "property-inspections",
    title: "Property Inspections",
    shortTitle: "Inspections",
    description: "Advanced property inspections with thermal imaging, moisture detection, and comprehensive damage assessment.",
    icon: "🔍",
    href: "/property-inspections",
    color: "cyan",
    featured: true,
  },
  {
    id: "drone-services",
    title: "Drone Inspections",
    shortTitle: "Drone",
    description: "FAA-certified aerial inspections for roofs, storm damage, and hard-to-access areas with insurance-grade documentation.",
    icon: "🚁",
    href: "/drone-services",
    color: "sky",
    featured: true,
  },
  {
    id: "expert-witness-services",
    title: "Legal & Expert Witness",
    shortTitle: "Legal",
    description: "Professional expert witness testimony, forensic investigation, and litigation support for property damage cases.",
    icon: "⚖️",
    href: "/expert-witness-services",
    color: "slate",
    featured: true,
  },
  {
    id: "packout-services",
    title: "Packout & Storage",
    shortTitle: "Packout",
    description: "Professional contents packing, inventory cataloging, secure climate-controlled storage, and complete pack-back services during restoration.",
    icon: "📦",
    href: "/packout-services",
    color: "orange",
    featured: true,
  },
] as const;

export const serviceAreas = {
  tier1: [
    { name: "Houston", slug: "houston", featured: true },
    { name: "Katy", slug: "katy", featured: true },
    { name: "Sugar Land", slug: "sugar-land", featured: true },
    { name: "Pearland", slug: "pearland", featured: true },
    { name: "The Woodlands", slug: "the-woodlands", featured: true },
    { name: "Cypress", slug: "cypress", featured: true },
  ],
  tier2: [
    { name: "Spring", slug: "spring", featured: false },
    { name: "Humble", slug: "humble", featured: false },
    { name: "Pasadena", slug: "pasadena", featured: false },
    { name: "League City", slug: "league-city", featured: false },
    { name: "Missouri City", slug: "missouri-city", featured: false },
    { name: "Richmond", slug: "richmond", featured: false },
    { name: "Rosenberg", slug: "rosenberg", featured: false },
    { name: "Conroe", slug: "conroe", featured: false },
    { name: "Tomball", slug: "tomball", featured: false },
    { name: "Friendswood", slug: "friendswood", featured: false },
  ],
  tier3: [
    { name: "Baytown", slug: "baytown", featured: false },
    { name: "Galveston", slug: "galveston", featured: false },
    { name: "Texas City", slug: "texas-city", featured: false },
    { name: "Deer Park", slug: "deer-park", featured: false },
    { name: "La Porte", slug: "la-porte", featured: false },
    { name: "Seabrook", slug: "seabrook", featured: false },
    { name: "Webster", slug: "webster", featured: false },
    { name: "Clear Lake", slug: "clear-lake", featured: false },
    { name: "Kingwood", slug: "kingwood", featured: false },
    { name: "Atascocita", slug: "atascocita", featured: false },
    { name: "Bellaire", slug: "bellaire", featured: false },
    { name: "West University", slug: "west-university", featured: false },
  ],
} as const;

export const allServiceAreas = [
  ...serviceAreas.tier1,
  ...serviceAreas.tier2,
  ...serviceAreas.tier3,
];

export const trustBadges = [
  { text: "9 Specialized Service Pillars", icon: "🏛️" },
  { text: "Insurance Documentation Support", icon: "📋" },
  { text: "Licensed & Certified Professionals", icon: "✓" },
  { text: "Comprehensive Property Solutions", icon: "🏠" },
] as const;

export const navigation = {
  main: [
    {
      name: "Services",
      href: "#",
      children: services.filter(s => s.featured).map(s => ({
        name: s.title,
        href: s.href,
        description: s.description,
        icon: s.icon,
      })),
    },
    {
      name: "Service Areas",
      href: "/service-areas",
      children: serviceAreas.tier1.map(c => ({
        name: c.name,
        href: `/service-areas/${c.slug}`,
      })),
    },
    { name: "Insurance Help", href: "/insurance-help" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
} as const;
