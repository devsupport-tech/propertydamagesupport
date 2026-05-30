// Expanded Location Data for Programmatic SEO
// This file contains detailed location data for Houston metro area

export interface Neighborhood {
  name: string;
  slug: string;
  city: string;
  zipCodes: string[];
  keywords: string[]; // Local SEO keywords
  description: string;
}

export interface ZipCode {
  code: string;
  city: string;
  neighborhood?: string;
  population?: number;
}

export interface City {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  county: string;
  population?: number;
  zipCodes?: string[];
  neighborhoods?: string[]; // References neighborhood slugs
  metaDescription?: string;
}

// Houston Neighborhoods (Top 20 by search volume)
export const houstonNeighborhoods: Neighborhood[] = [
  {
    name: 'Downtown Houston',
    slug: 'downtown',
    city: 'houston',
    zipCodes: ['77002', '77010', '77019'],
    keywords: ['downtown', 'midtown', 'central business district'],
    description: 'Emergency property damage restoration in downtown Houston. Serving high-rise condos, apartments, and commercial buildings in the heart of Houston.',
  },
  {
    name: 'Memorial',
    slug: 'memorial',
    city: 'houston',
    zipCodes: ['77024', '77079', '77024'],
    keywords: ['memorial', 'memorial drive', 'bunker hill'],
    description: 'Property damage restoration serving Memorial area homes and businesses. Fast response to water damage, fire damage, and storm damage.',
  },
  {
    name: 'River Oaks',
    slug: 'river-oaks',
    city: 'houston',
    zipCodes: ['77019', '77027'],
    keywords: ['river oaks', 'luxury homes', 'upscale'],
    description: 'Premium property restoration services in River Oaks. Specialized care for luxury homes and high-value properties.',
  },
  {
    name: 'The Heights',
    slug: 'the-heights',
    city: 'houston',
    zipCodes: ['77008', '77009'],
    keywords: ['heights', 'houston heights', 'historic district'],
    description: 'Historic Heights restoration specialists. Expert care for vintage homes and modern renovations in Houston Heights.',
  },
  {
    name: 'Montrose',
    slug: 'montrose',
    city: 'houston',
    zipCodes: ['77006', '77098'],
    keywords: ['montrose', 'museum district', 'midtown'],
    description: 'Property damage restoration in Montrose and Museum District. Serving historic homes and modern condos.',
  },
  {
    name: 'Galleria / Uptown',
    slug: 'galleria',
    city: 'houston',
    zipCodes: ['77056', '77057', '77063'],
    keywords: ['galleria', 'uptown', 'post oak'],
    description: 'Commercial and residential restoration in Galleria area. High-rise specialists serving Uptown Houston.',
  },
  {
    name: 'Energy Corridor',
    slug: 'energy-corridor',
    city: 'houston',
    zipCodes: ['77079', '77094', '77084'],
    keywords: ['energy corridor', 'west houston', 'eldridge'],
    description: 'Emergency restoration services in Energy Corridor. Serving west Houston residential and corporate properties.',
  },
  {
    name: 'Clear Lake',
    slug: 'clear-lake',
    city: 'houston',
    zipCodes: ['77058', '77059'],
    keywords: ['clear lake', 'nasa', 'webster'],
    description: 'Property damage restoration near Clear Lake and NASA. Fast response to coastal flood and storm damage.',
  },
  {
    name: 'Westchase',
    slug: 'westchase',
    city: 'houston',
    zipCodes: ['77042', '77077'],
    keywords: ['westchase', 'westheimer', 'gessner'],
    description: 'Restoration services in Westchase district. Serving residential communities and commercial properties.',
  },
  {
    name: 'Medical Center',
    slug: 'medical-center',
    city: 'houston',
    zipCodes: ['77030', '77021'],
    keywords: ['medical center', 'tmc', 'texas medical center'],
    description: 'Emergency restoration near Texas Medical Center. Specialized services for medical facilities and nearby residences.',
  },
  {
    name: 'Bellaire',
    slug: 'bellaire',
    city: 'houston',
    zipCodes: ['77401', '77096'],
    keywords: ['bellaire', 'chinatown', 'southwest houston'],
    description: 'Property restoration in Bellaire and surrounding areas. Multilingual staff serving diverse communities.',
  },
  {
    name: 'Meyerland',
    slug: 'meyerland',
    city: 'houston',
    zipCodes: ['77025', '77096'],
    keywords: ['meyerland', 'braes bayou', 'flood prone'],
    description: 'Flood restoration specialists serving Meyerland. Experienced with recurring flood events and insurance claims.',
  },
  {
    name: 'Sharpstown',
    slug: 'sharpstown',
    city: 'houston',
    zipCodes: ['77036', '77074'],
    keywords: ['sharpstown', 'southwest houston', 'harwin'],
    description: 'Affordable restoration services in Sharpstown area. Fast emergency response to southwest Houston.',
  },
  {
    name: 'Spring Branch',
    slug: 'spring-branch',
    city: 'houston',
    zipCodes: ['77043', '77055', '77080'],
    keywords: ['spring branch', 'northwest houston', 'long point'],
    description: 'Property damage restoration in Spring Branch. Serving established northwest Houston neighborhoods.',
  },
  {
    name: 'Greenspoint',
    slug: 'greenspoint',
    city: 'houston',
    zipCodes: ['77060', '77067'],
    keywords: ['greenspoint', 'north houston', 'intercontinental airport'],
    description: 'Emergency restoration in Greenspoint area. Commercial and residential services near IAH airport.',
  },
  {
    name: 'East End',
    slug: 'east-end',
    city: 'houston',
    zipCodes: ['77003', '77020'],
    keywords: ['east end', 'second ward', 'eado'],
    description: 'Property restoration in East End and EaDo. Serving historic neighborhoods and new developments.',
  },
  {
    name: 'Third Ward',
    slug: 'third-ward',
    city: 'houston',
    zipCodes: ['77004', '77021'],
    keywords: ['third ward', 'university of houston', 'tsu'],
    description: 'Community-focused restoration in Third Ward. Fast response to student housing and historic properties.',
  },
  {
    name: 'Fifth Ward',
    slug: 'fifth-ward',
    city: 'houston',
    zipCodes: ['77011', '77026'],
    keywords: ['fifth ward', 'near northside', 'lyons avenue'],
    description: 'Emergency services in Fifth Ward. Affordable property damage restoration for northeast Houston.',
  },
  {
    name: 'West University',
    slug: 'west-university',
    city: 'houston',
    zipCodes: ['77005'],
    keywords: ['west u', 'west university place', 'rice village'],
    description: 'Premium restoration near Rice University. Expert care for West U homes and businesses.',
  },
  {
    name: 'Afton Oaks / Tanglewood',
    slug: 'tanglewood',
    city: 'houston',
    zipCodes: ['77056', '77057'],
    keywords: ['tanglewood', 'afton oaks', 'san felipe'],
    description: 'Luxury property restoration in Tanglewood and Afton Oaks. White-glove service for upscale neighborhoods.',
  },
  {
    name: 'Midtown',
    slug: 'midtown',
    city: 'houston',
    zipCodes: ['77002', '77006'],
    keywords: ['midtown', 'downtown adjacent', 'urban living'],
    description: 'Property damage restoration in Midtown Houston. Serving high-rise condos and mixed-use developments.',
  },
  {
    name: 'Rice Village / Rice Military',
    slug: 'rice-village',
    city: 'houston',
    zipCodes: ['77005', '77019'],
    keywords: ['rice village', 'rice military', 'university area'],
    description: 'Restoration services near Rice University. Expert care for historic homes and modern apartments.',
  },
  {
    name: 'Washington Avenue',
    slug: 'washington-avenue',
    city: 'houston',
    zipCodes: ['77007', '77008'],
    keywords: ['washington ave', 'washington corridor', 'memorial park'],
    description: 'Emergency restoration on Washington Avenue corridor. Serving trendy lofts and commercial spaces.',
  },
  {
    name: 'Garden Oaks / Oak Forest',
    slug: 'garden-oaks',
    city: 'houston',
    zipCodes: ['77018', '77092'],
    keywords: ['garden oaks', 'oak forest', 'northwest houston'],
    description: 'Property restoration in Garden Oaks and Oak Forest. Family-friendly neighborhood specialists.',
  },
  {
    name: 'Neartown / Montrose',
    slug: 'neartown',
    city: 'houston',
    zipCodes: ['77006', '77019'],
    keywords: ['neartown', 'montrose area', 'inner loop'],
    description: 'Restoration services in Neartown area. Serving diverse residential and commercial properties.',
  },
  {
    name: 'Greater Heights',
    slug: 'greater-heights',
    city: 'houston',
    zipCodes: ['77007', '77008', '77009'],
    keywords: ['greater heights', 'houston heights area', 'timbergrove'],
    description: 'Emergency services throughout Greater Heights. Specialized in historic home restoration.',
  },
  {
    name: 'Gulfton',
    slug: 'gulfton',
    city: 'houston',
    zipCodes: ['77036', '77081'],
    keywords: ['gulfton', 'southwest houston', 'sharpstown area'],
    description: 'Affordable restoration in Gulfton area. Multilingual staff serving diverse communities.',
  },
  {
    name: 'Alief',
    slug: 'alief',
    city: 'houston',
    zipCodes: ['77072', '77099'],
    keywords: ['alief', 'southwest houston', 'westwood'],
    description: 'Property damage restoration in Alief. Fast response to southwest Houston residents.',
  },
  {
    name: 'Northside / Northline',
    slug: 'northside',
    city: 'houston',
    zipCodes: ['77009', '77022', '77026'],
    keywords: ['northside', 'northline', 'north houston'],
    description: 'Emergency restoration in Northside Houston. Community-focused service with bilingual staff.',
  },
  {
    name: 'Near Northside',
    slug: 'near-northside',
    city: 'houston',
    zipCodes: ['77009', '77022'],
    keywords: ['near northside', 'east downtown', 'eado adjacent'],
    description: 'Restoration services in Near Northside. Serving growing residential and commercial areas.',
  },
  {
    name: 'Greenway Plaza',
    slug: 'greenway-plaza',
    city: 'houston',
    zipCodes: ['77046', '77056'],
    keywords: ['greenway plaza', 'upper kirby', 'southwest freeway'],
    description: 'Commercial and residential restoration near Greenway Plaza. High-rise and office specialists.',
  },
  {
    name: 'Fondren Southwest',
    slug: 'fondren-southwest',
    city: 'houston',
    zipCodes: ['77035', '77036'],
    keywords: ['fondren', 'southwest houston', 'fondren area'],
    description: 'Property restoration in Fondren Southwest. Serving established residential communities.',
  },
  {
    name: 'Kashmere Gardens',
    slug: 'kashmere-gardens',
    city: 'houston',
    zipCodes: ['77026', '77028'],
    keywords: ['kashmere gardens', 'northeast houston', 'historic neighborhood'],
    description: 'Community restoration services in Kashmere Gardens. Fast emergency response to northeast Houston.',
  },
  {
    name: 'Sunnyside',
    slug: 'sunnyside',
    city: 'houston',
    zipCodes: ['77033', '77051'],
    keywords: ['sunnyside', 'south houston', 'mlk area'],
    description: 'Affordable property restoration in Sunnyside. Community-focused emergency services.',
  },
  {
    name: 'South Houston',
    slug: 'south-houston',
    city: 'houston',
    zipCodes: ['77033', '77047', '77053'],
    keywords: ['south houston', 'hobby area', 'south side'],
    description: 'Emergency restoration in South Houston. Serving residential areas near Hobby Airport.',
  },
];

// Major Zip Codes for Houston Metro (Top 50 by population/search volume)
export const houstonZipCodes: ZipCode[] = [
  { code: '77002', city: 'Houston', neighborhood: 'downtown' },
  { code: '77003', city: 'Houston', neighborhood: 'east-end' },
  { code: '77004', city: 'Houston', neighborhood: 'third-ward' },
  { code: '77005', city: 'Houston', neighborhood: 'west-university' },
  { code: '77006', city: 'Houston', neighborhood: 'montrose' },
  { code: '77008', city: 'Houston', neighborhood: 'the-heights' },
  { code: '77009', city: 'Houston', neighborhood: 'the-heights' },
  { code: '77010', city: 'Houston', neighborhood: 'downtown' },
  { code: '77011', city: 'Houston', neighborhood: 'fifth-ward' },
  { code: '77019', city: 'Houston', neighborhood: 'river-oaks' },
  { code: '77020', city: 'Houston', neighborhood: 'east-end' },
  { code: '77021', city: 'Houston', neighborhood: 'medical-center' },
  { code: '77024', city: 'Houston', neighborhood: 'memorial' },
  { code: '77025', city: 'Houston', neighborhood: 'meyerland' },
  { code: '77027', city: 'Houston', neighborhood: 'river-oaks' },
  { code: '77030', city: 'Houston', neighborhood: 'medical-center' },
  { code: '77036', city: 'Houston', neighborhood: 'sharpstown' },
  { code: '77042', city: 'Houston', neighborhood: 'westchase' },
  { code: '77043', city: 'Houston', neighborhood: 'spring-branch' },
  { code: '77055', city: 'Houston', neighborhood: 'spring-branch' },
  { code: '77056', city: 'Houston', neighborhood: 'galleria' },
  { code: '77057', city: 'Houston', neighborhood: 'galleria' },
  { code: '77058', city: 'Houston', neighborhood: 'clear-lake' },
  { code: '77059', city: 'Houston', neighborhood: 'clear-lake' },
  { code: '77060', city: 'Houston', neighborhood: 'greenspoint' },
  { code: '77063', city: 'Houston', neighborhood: 'galleria' },
  { code: '77067', city: 'Houston', neighborhood: 'greenspoint' },
  { code: '77074', city: 'Houston', neighborhood: 'sharpstown' },
  { code: '77077', city: 'Houston', neighborhood: 'westchase' },
  { code: '77079', city: 'Houston', neighborhood: 'energy-corridor' },
  { code: '77080', city: 'Houston', neighborhood: 'spring-branch' },
  { code: '77084', city: 'Houston', neighborhood: 'energy-corridor' },
  { code: '77094', city: 'Houston', neighborhood: 'energy-corridor' },
  { code: '77096', city: 'Houston', neighborhood: 'meyerland' },
  { code: '77098', city: 'Houston', neighborhood: 'montrose' },
  { code: '77007', city: 'Houston', neighborhood: 'washington-avenue' },
  { code: '77018', city: 'Houston', neighborhood: 'garden-oaks' },
  { code: '77092', city: 'Houston', neighborhood: 'garden-oaks' },
  { code: '77022', city: 'Houston', neighborhood: 'northside' },
  { code: '77026', city: 'Houston', neighborhood: 'kashmere-gardens' },
  { code: '77028', city: 'Houston', neighborhood: 'kashmere-gardens' },
  { code: '77033', city: 'Houston', neighborhood: 'sunnyside' },
  { code: '77051', city: 'Houston', neighborhood: 'sunnyside' },
  { code: '77047', city: 'Houston', neighborhood: 'south-houston' },
  { code: '77053', city: 'Houston', neighborhood: 'south-houston' },
  { code: '77072', city: 'Houston', neighborhood: 'alief' },
  { code: '77099', city: 'Houston', neighborhood: 'alief' },
  { code: '77081', city: 'Houston', neighborhood: 'gulfton' },
  { code: '77046', city: 'Houston', neighborhood: 'greenway-plaza' },
  { code: '77035', city: 'Houston', neighborhood: 'fondren-southwest' },
  // Katy
  { code: '77449', city: 'Katy' },
  { code: '77450', city: 'Katy' },
  { code: '77493', city: 'Katy' },
  { code: '77494', city: 'Katy' },
  // Sugar Land
  { code: '77478', city: 'Sugar Land' },
  { code: '77479', city: 'Sugar Land' },
  { code: '77498', city: 'Sugar Land' },
  // Pearland
  { code: '77581', city: 'Pearland' },
  { code: '77584', city: 'Pearland' },
  // The Woodlands
  { code: '77380', city: 'The Woodlands' },
  { code: '77381', city: 'The Woodlands' },
  { code: '77382', city: 'The Woodlands' },
  // Cypress
  { code: '77429', city: 'Cypress' },
  { code: '77433', city: 'Cypress' },
  { code: '77095', city: 'Cypress' },
];

// Content variations to avoid duplicate content penalties
export const contentVariations = {
  heroHeadlines: [
    '{service} in {location}',
    'Emergency {service} - {location}',
    '{location} {service}',
    '24/7 {service} in {location}',
    'Fast {service} - {location}, TX',
  ],
  heroSubheadlines: [
    'Fast response to {location} · {tagline}',
    '{tagline} · Serving {location} 24/7',
    '24/7 emergency service in {location}',
    '{location} property damage specialists',
    'Immediate response to {location} residents',
  ],
  introDescriptions: [
    '{service} serving {location} and surrounding areas. Fast response, insurance assistance, and 24/7 emergency service.',
    'Professional {service} in {location}, Texas. Licensed technicians, direct insurance billing, and guaranteed workmanship.',
    'Emergency {service} for {location} residents. 30-60 minute response time, free estimates, and expert restoration.',
    '{location} homeowners trust us for {service}. IICRC certified, fully insured, and available 24/7 for emergencies.',
  ],
};

// SEO-optimized FAQ variations
export const faqTemplates = {
  responseTime: {
    question: 'How fast can you respond to {location}?',
    answer: 'We provide 30-60 minute emergency response to {location} and surrounding areas. Our local technicians are available 24/7 for immediate dispatch.',
  },
  serviceArea: {
    question: 'Do you serve {location}?',
    answer: 'Yes, we provide comprehensive property damage restoration services throughout {location} and the greater Houston area. We serve residential and commercial properties.',
  },
  insurance: {
    question: 'Do you work with insurance companies in {location}?',
    answer: 'Absolutely. We work directly with all major insurance companies serving {location}. We handle all paperwork, communicate with adjusters, and help maximize your claim.',
  },
  cost: {
    question: 'How much does {service} cost in {location}?',
    answer: 'Cost varies based on damage extent, but we offer free estimates for {location} properties. Most work is covered by insurance. We provide transparent pricing and work within your budget.',
  },
};
