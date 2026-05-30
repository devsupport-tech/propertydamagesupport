// Detailed Services Configuration for PropertyDamageSupport.com
//Based on CBRS Ecosystem documentation

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubService {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  keywords: string[];
}

export interface ServiceHub {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  heroHeadline: string;
  heroSubheadline: string;
  subServices: SubService[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
}

export const serviceHubs: Record<string, ServiceHub> = {
  'water-damage': {
    id: 'water-damage',
    title: 'Water Damage Restoration',
    slug: 'water-damage',
    description: '24/7 emergency water damage restoration, flood cleanup, and water removal services in Houston.',
    icon: '💧',
    color: 'blue',
    heroHeadline: 'Emergency Water Damage Restoration',
    heroSubheadline: 'Fast response · Professional restoration · Insurance assistance',
    subServices: [
      {
        id: 'flood-cleanup',
        title: 'Flood Cleanup',
        slug: 'flood-cleanup',
        description: 'Professional flood cleanup and restoration services for homes and businesses.',
        shortDescription: 'Complete flood damage cleanup and restoration',
        keywords: ['flood cleanup', 'flood damage', 'flooding restoration'],
      },
      {
        id: 'burst-pipe',
        title: 'Burst Pipe Cleanup',
        slug: 'burst-pipe-cleanup',
        description: 'Emergency burst pipe water damage cleanup and repair services.',
        shortDescription: 'Fast response to burst pipe emergencies',
        keywords: ['burst pipe', 'broken pipe', 'pipe leak cleanup'],
      },
      {
        id: 'ceiling-water-damage',
        title: 'Ceiling Water Damage',
        slug: 'ceiling-water-damage',
        description: 'Expert ceiling water damage repair and restoration services.',
        shortDescription: 'Ceiling leak and water damage repair',
        keywords: ['ceiling leak', 'water stains ceiling', 'ceiling damage'],
      },
      {
        id: 'emergency-water-removal',
        title: 'Emergency Water Removal',
        slug: 'emergency-water-removal',
        description: '24/7 emergency water extraction and removal services.',
        shortDescription: 'Immediate water extraction services',
        keywords: ['water removal', 'water extraction', 'emergency water'],
      },
    ],
    processSteps: [
      { number: 1, title: 'Emergency Contact', description: 'Call us 24/7 for immediate response', icon: '📞' },
      { number: 2, title: 'Inspection', description: 'Free assessment and damage evaluation', icon: '🔍' },
      { number: 3, title: 'Water Extraction', description: 'Powerful pumps remove standing water', icon: '💨' },
      { number: 4, title: 'Drying & Dehumidification', description: 'Industrial equipment ensures complete drying', icon: '🌡️' },
      { number: 5, title: 'Restoration', description: 'Repairs and restoration to pre-loss condition', icon: '🏠' },
    ],
    faqs: [
      {
        question: 'How quickly can you respond to a water damage emergency?',
        answer: 'We provide 24/7 emergency response and typically arrive within 30-60 minutes in the Houston metro area.',
      },
      {
        question: 'Will my insurance cover water damage restoration?',
        answer: 'Most homeowner insurance policies cover sudden and accidental water damage. We work directly with insurance companies and can help with your claim.',
      },
      {
        question: 'How long does water damage restoration take?',
        answer: 'The timeline depends on the extent of damage. Minor cases may take 3-5 days, while major flooding can take 7-14 days for complete restoration.',
      },
    ],
  },

  'fire-damage': {
    id: 'fire-damage',
    title: 'Fire Damage Restoration',
    slug: 'fire-damage',
    description: 'Complete fire, smoke, and soot damage restoration services with 24/7 emergency response.',
    icon: '🔥',
    color: 'orange',
    heroHeadline: 'Fire & Smoke Damage Restoration',
    heroSubheadline: 'Emergency board-up · Smoke removal · Complete restoration',
    subServices: [
      {
        id: 'smoke-damage-cleanup',
        title: 'Smoke Damage Cleanup',
        slug: 'smoke-damage-cleanup',
        description: 'Professional smoke damage cleanup and odor removal services.',
        shortDescription: 'Complete smoke damage restoration',
        keywords: ['smoke damage', 'smoke cleanup', 'smoke removal'],
      },
      {
        id: 'soot-removal',
        title: 'Soot Removal',
        slug: 'soot-removal',
        description: 'Expert soot removal and cleaning services for all surfaces.',
        shortDescription: 'Professional soot cleaning',
        keywords: ['soot removal', 'soot cleanup', 'soot damage'],
      },
      {
        id: 'fire-board-up',
        title: 'Emergency Board-Up',
        slug: 'emergency-board-up',
        description: 'Emergency board-up services to secure your property after fire damage.',
        shortDescription: 'Immediate property securing',
        keywords: ['board-up', 'fire board-up', 'property securing'],
      },
      {
        id: 'odor-removal',
        title: 'Fire Odor Removal',
        slug: 'fire-odor-removal',
        description: 'Complete smoke and fire odor removal using advanced techniques.',
        shortDescription: 'Eliminate smoke odors permanently',
        keywords: ['smoke odor', 'fire smell', 'odor removal'],
      },
    ],
    processSteps: [
      { number: 1, title: '24/7 Emergency Call', description: 'Immediate response to your emergency', icon: '🚨' },
      { number: 2, title: 'Property Securing', description: 'Board-up and securing of your property', icon: '🛡️' },
      { number: 3, title: 'Damage Assessment', description: 'Thorough inspection and documentation', icon: '📋' },
      { number: 4, title: 'Cleanup & Restoration', description: 'Soot, smoke, and structural restoration', icon: '🧹' },
      { number: 5, title: 'Final Inspection', description: 'Quality check and final walkthrough', icon: '✅' },
    ],
    faqs: [
      {
        question: 'Can you help with insurance claims for fire damage?',
        answer: 'Yes, we work directly with insurance companies and can help document damage and navigate the claims process.',
      },
      {
        question: 'How do you remove smoke odor?',
        answer: 'We use advanced ozone treatment, thermal fogging, and specialized cleaning agents to eliminate smoke odor at the molecular level.',
      },
      {
        question: 'Do you provide emergency board-up services?',
        answer: 'Yes, we offer 24/7 emergency board-up and property securing to prevent further damage and unauthorized entry.',
      },
    ],
  },

  'storm-damage': {
    id: 'storm-damage',
    title: 'Storm Damage Restoration',
    slug: 'storm-damage',
    description: 'Hurricane, wind, hail, and storm damage restoration services for Houston properties.',
    icon: '⛈️',
    color: 'purple',
    heroHeadline: 'Storm & Hurricane Damage Restoration',
    heroSubheadline: 'Wind damage · Hail damage · Emergency tarping · Fast response',
    subServices: [
      {
        id: 'hurricane-damage',
        title: 'Hurricane Damage Restoration',
        slug: 'hurricane-damage-restoration',
        description: 'Complete hurricane damage restoration and recovery services.',
        shortDescription: 'Full hurricane damage recovery',
        keywords: ['hurricane damage', 'hurricane restoration', 'tropical storm'],
      },
      {
        id: 'wind-damage',
        title: 'Wind Damage Repair',
        slug: 'wind-damage-repair',
        description: 'Professional wind damage repair and restoration services.',
        shortDescription: 'Wind damage assessment and repair',
        keywords: ['wind damage', 'wind storm', 'windstorm damage'],
      },
      {
        id: 'hail-damage',
        title: 'Hail Damage Repair',
        slug: 'hail-damage-repair',
        description: 'Expert hail damage inspection and repair services.',
        shortDescription: 'Hail damage restoration',
        keywords: ['hail damage', 'hailstorm', 'hail repair'],
      },
      {
        id: 'emergency-tarping',
        title: 'Emergency Roof Tarping',
        slug: 'emergency-roof-tarping',
        description: 'Emergency roof tarping to prevent further water damage.',
        shortDescription: 'Immediate roof protection',
        keywords: ['roof tarping', 'emergency tarp', 'roof protection'],
      },
    ],
    processSteps: [
      { number: 1, title: 'Emergency Response', description: '24/7 storm damage response team', icon: '⚡' },
      { number: 2, title: 'Damage Inspection', description: 'Complete property assessment', icon: '🔍' },
      { number: 3, title: 'Emergency Repairs', description: 'Tarping and temporary repairs', icon: '🛠️' },
      { number: 4, title: 'Insurance Documentation', description: 'Detailed damage documentation', icon: '📸' },
      { number: 5, title: 'Full Restoration', description: 'Complete repair and restoration', icon: '🏗️' },
    ],
    faqs: [
      {
        question: 'Do you offer emergency tarping services?',
        answer: 'Yes, we provide 24/7 emergency roof tarping to prevent further water damage after storms.',
      },
      {
        question: 'How do you document storm damage for insurance?',
        answer: 'We use professional photography, detailed reports, and drone inspections to thoroughly document all storm damage.',
      },
      {
        question: 'Can you handle both wind and water damage?',
        answer: 'Yes, our team is equipped to handle all aspects of storm damage including wind, water, and structural issues.',
      },
    ],
  },

  'mold': {
    id: 'mold',
    title: 'Mold Remediation',
    slug: 'mold',
    description: 'Professional mold inspection, testing, and removal services for Houston homes and businesses.',
    icon: '🦠',
    color: 'green',
    heroHeadline: 'Professional Mold Remediation Services',
    heroSubheadline: 'Inspection · Testing · Safe removal · Prevention',
    subServices: [
      {
        id: 'mold-inspection',
        title: 'Mold Inspection',
        slug: 'mold-inspection',
        description: 'Professional mold inspection and assessment services.',
        shortDescription: 'Thorough mold inspection',
        keywords: ['mold inspection', 'mold assessment', 'mold test'],
      },
      {
        id: 'black-mold-removal',
        title: 'Black Mold Removal',
        slug: 'black-mold-removal',
        description: 'Safe black mold removal and remediation services.',
        shortDescription: 'Black mold remediation',
        keywords: ['black mold', 'toxic mold', 'mold removal'],
      },
      {
        id: 'attic-mold',
        title: 'Attic Mold Removal',
        slug: 'attic-mold-removal',
        description: 'Attic mold inspection and removal services.',
        shortDescription: 'Attic mold solutions',
        keywords: ['attic mold', 'mold in attic', 'attic remediation'],
      },
      {
        id: 'mold-testing',
        title: 'Mold Testing',
        slug: 'mold-testing',
        description: 'Professional mold testing and air quality analysis.',
        shortDescription: 'Comprehensive mold testing',
        keywords: ['mold testing', 'mold test', 'air quality test'],
      },
    ],
    processSteps: [
      { number: 1, title: 'Free Inspection', description: 'Visual mold inspection and assessment', icon: '👁️' },
      { number: 2, title: 'Mold Testing', description: 'Lab testing to identify mold types', icon: '🔬' },
      { number: 3, title: 'Containment', description: 'Prevent mold spread during removal', icon: '🚧' },
      { number: 4, title: 'Removal', description: 'Safe mold removal and disposal', icon: '🧼' },
      { number: 5, title: 'Prevention', description: 'Moisture control and prevention', icon: '🛡️' },
    ],
    faqs: [
      {
        question: 'How do I know if I have a mold problem?',
        answer: 'Signs include visible mold growth, musty odors, water stains, or recent water damage. We offer free inspections.',
      },
      {
        question: 'Is mold testing necessary?',
        answer: 'Testing helps identify mold types and extent of contamination, which guides our remediation approach and ensures safety.',
      },
      {
        question: 'How long does mold remediation take?',
        answer: 'Small areas may take 1-2 days, while larger infestations can take 3-7 days depending on severity and location.',
      },
    ],
  },

  'drone-services': {
    id: 'drone-services',
    title: 'Drone Inspections',
    slug: 'drone-services',
    description: 'Professional drone property inspections for damage documentation and insurance claims.',
    icon: '🚁',
    color: 'sky',
    heroHeadline: 'Aerial Drone Inspection Services',
    heroSubheadline: '4K documentation · Safe access · Fast turnaround · Insurance-ready reports',
    subServices: [
      {
        id: 'drone-roof-inspections',
        title: 'Drone Roof Inspections',
        slug: 'drone-roof-inspections',
        description: 'Safe and thorough roof inspections using professional drones.',
        shortDescription: 'Aerial roof inspection',
        keywords: ['drone roof inspection', 'aerial roof', 'roof damage'],
      },
      {
        id: 'drone-storm-damage',
        title: 'Storm Damage Documentation',
        slug: 'drone-storm-damage-documentation',
        description: 'Complete storm damage documentation from aerial perspectives.',
        shortDescription: 'Storm damage aerial views',
        keywords: ['drone storm', 'storm documentation', 'aerial damage'],
      },
      {
        id: 'drone-insurance',
        title: 'Insurance Documentation',
        slug: 'drone-insurance-documentation',
        description: 'Professional drone documentation for insurance claims.',
        shortDescription: 'Insurance-ready aerial documentation',
        keywords: ['insurance drone', 'claim documentation', 'aerial photos'],
      },
      {
        id: 'emergency-drone',
        title: 'Emergency Drone Inspection',
        slug: 'emergency-drone-inspection',
        description: '24/7 emergency drone inspections for urgent situations.',
        shortDescription: 'Emergency aerial inspection',
        keywords: ['emergency drone', 'urgent inspection', '24/7 drone'],
      },
    ],
    processSteps: [
      { number: 1, title: 'Schedule Inspection', description: 'Quick scheduling for your property', icon: '📅' },
      { number: 2, title: 'Drone Flight', description: 'Professional pilot conducts inspection', icon: '🚁' },
      { number: 3, title: 'Photo/Video Capture', description: '4K imagery and detailed documentation', icon: '📸' },
      { number: 4, title: 'Report Generation', description: 'Comprehensive inspection report', icon: '📊' },
      { number: 5, title: 'Delivery', description: 'Digital delivery within 24-48 hours', icon: '📧' },
    ],
    faqs: [
      {
        question: 'Why use a drone for property inspection?',
        answer: 'Drones provide safe access to roofs and high areas, capture detailed 4K imagery, and are faster and more cost-effective than traditional methods.',
      },
      {
        question: 'Are drone inspections accepted by insurance companies?',
        answer: 'Yes, most insurance companies accept drone documentation. We provide detailed reports and imagery that meet insurance requirements.',
      },
      {
        question: 'How long does a drone inspection take?',
        answer: 'Most residential inspections take 30-60 minutes on-site. You receive a detailed report within 24-48 hours.',
      },
    ],
  },

  'insurance-help': {
    id: 'insurance-help',
    title: 'Insurance Claim Assistance',
    slug: 'insurance-help',
    description: 'Expert insurance claim assistance and documentation for property damage claims.',
    icon: '📋',
    color: 'amber',
    heroHeadline: 'Insurance Claim Assistance',
    heroSubheadline: 'Claim documentation · Direct billing · Public adjuster support · Maximize your claim',
    subServices: [
      {
        id: 'claim-assistance',
        title: 'Insurance Claim Assistance',
        slug: 'insurance-claim-assistance',
        description: 'Complete insurance claim assistance and advocacy services.',
        shortDescription: 'Full claim support',
        keywords: ['insurance claim', 'claim help', 'insurance assistance'],
      },
      {
        id: 'water-damage-claims',
        title: 'Water Damage Claims',
        slug: 'water-damage-insurance-claims',
        description: 'Specialized assistance for water damage insurance claims.',
        shortDescription: 'Water damage claim help',
        keywords: ['water damage claim', 'flood insurance', 'water claim'],
      },
      {
        id: 'denied-claim-help',
        title: 'Denied Claim Help',
        slug: 'denied-claim-help',
        description: 'Support for denied or underpaid insurance claims.',
        shortDescription: 'Denied claim assistance',
        keywords: ['denied claim', 'claim denied', 'insurance dispute'],
      },
      {
        id: 'documentation-services',
        title: 'Claim Documentation',
        slug: 'insurance-documentation',
        description: 'Professional damage documentation for insurance claims.',
        shortDescription: 'Professional documentation',
        keywords: ['claim documentation', 'insurance photos', 'damage report'],
      },
    ],
    processSteps: [
      { number: 1, title: 'Damage Assessment', description: 'Complete damage inspection and documentation', icon: '📋' },
      { number: 2, title: 'Claim Filing', description: 'Help you file your insurance claim', icon: '📝' },
      { number: 3, title: 'Documentation', description: 'Professional photos and detailed reports', icon: '📸' },
      { number: 4, title: 'Adjuster Meeting', description: 'Present at adjuster inspections', icon: '🤝' },
      { number: 5, title: 'Claim Advocacy', description: 'Ensure fair claim settlement', icon: '💰' },
    ],
    faqs: [
      {
        question: 'Do you work directly with insurance companies?',
        answer: 'Yes, we work with all major insurance companies and can bill them directly for covered damages.',
      },
      {
        question: 'What if my claim is denied?',
        answer: 'We can help you understand why it was denied and work with you or a public adjuster to appeal the decision.',
      },
      {
        question: 'How much does insurance claim assistance cost?',
        answer: 'Our claim assistance is included with our restoration services at no additional cost to you.',
      },
    ],
  },
};

// Export helper functions
export function getServiceHub(slug: string): ServiceHub | undefined {
  return Object.values(serviceHubs).find(hub => hub.slug === slug);
}

export function getSubService(hubSlug: string, subServiceSlug: string): SubService | undefined {
  const hub = getServiceHub(hubSlug);
  return hub?.subServices.find(sub => sub.slug === subServiceSlug);
}

export function getAllServiceSlugs(): string[] {
  return Object.values(serviceHubs).map(hub => hub.slug);
}

export function getAllSubServicePaths(): Array<{ params: { service: string; subservice: string } }> {
  const paths: Array<{ params: { service: string; subservice: string } }> = [];

  Object.values(serviceHubs).forEach(hub => {
    hub.subServices.forEach(sub => {
      paths.push({
        params: {
          service: hub.slug,
          subservice: sub.slug,
        },
      });
    });
  });

  return paths;
}
