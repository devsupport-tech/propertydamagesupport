// Site Configuration - PropertyDamageSupport.com

export const siteConfig = {
  name: "Property Damage Support",
  legalName: "CBRS Group",
  description: "24/7 emergency property damage restoration services in Houston. Water damage, fire damage, storm damage, and mold remediation.",
  url: "https://propertydamagesupport.com",
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
    facebook: "https://facebook.com/propertydamagesupport",
    instagram: "https://instagram.com/propertydamagesupport",
    linkedin: "https://linkedin.com/company/cbrs-group",
    youtube: "https://youtube.com/@propertydamagesupport",
  },
  relatedSites: {
    cbrsGroup: "https://cbrsgroup.com",
    restoration: "https://restoration.cbrsgroup.com",
    claimToCompletion: "https://claimtocompletion.com",
  },
} as const;

export const services = [
  {
    id: "water-damage",
    title: "Water Damage",
    shortTitle: "Water Damage",
    description: "Emergency water removal, flood cleanup, and restoration services.",
    icon: "💧",
    href: "/water-damage",
    color: "blue",
    featured: true,
  },
  {
    id: "fire-damage",
    title: "Fire Damage",
    shortTitle: "Fire Damage",
    description: "Fire, smoke, and soot damage restoration and cleanup.",
    icon: "🔥",
    href: "/fire-damage",
    color: "orange",
    featured: true,
  },
  {
    id: "storm-damage",
    title: "Storm Damage",
    shortTitle: "Storm Damage",
    description: "Hurricane, wind, hail, and storm damage restoration.",
    icon: "⛈️",
    href: "/storm-damage",
    color: "purple",
    featured: true,
  },
  {
    id: "mold",
    title: "Mold Remediation",
    shortTitle: "Mold",
    description: "Professional mold inspection, testing, and removal.",
    icon: "🦠",
    href: "/mold",
    color: "green",
    featured: true,
  },
  {
    id: "drone-services",
    title: "Drone Inspections",
    shortTitle: "Drone",
    description: "Aerial property and roof inspections for damage documentation.",
    icon: "🚁",
    href: "/drone-services",
    color: "sky",
    featured: true,
  },
  {
    id: "insurance-help",
    title: "Insurance Help",
    shortTitle: "Insurance",
    description: "Claim assistance, documentation, and advocacy.",
    icon: "📋",
    href: "/insurance-help",
    color: "amber",
    featured: true,
  },
  {
    id: "plumbing-damage",
    title: "Plumbing Damage",
    shortTitle: "Plumbing",
    description: "Burst pipes, slab leaks, and plumbing-related water damage.",
    icon: "🔧",
    href: "/plumbing-damage",
    color: "cyan",
    featured: false,
  },
  {
    id: "hvac-damage",
    title: "HVAC Damage",
    shortTitle: "HVAC",
    description: "AC leaks, drain line overflow, and HVAC water damage.",
    icon: "❄️",
    href: "/hvac-damage",
    color: "indigo",
    featured: false,
  },
  {
    id: "commercial",
    title: "Commercial Services",
    shortTitle: "Commercial",
    description: "Property managers, apartments, and commercial properties.",
    icon: "🏢",
    href: "/commercial",
    color: "slate",
    featured: false,
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
  { text: "24/7 Emergency Response", icon: "🚨" },
  { text: "Insurance Claim Assistance", icon: "📋" },
  { text: "Licensed & Certified", icon: "✓" },
  { text: "Free Estimates", icon: "💰" },
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
