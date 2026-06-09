/**
 * Builders for schema.org JSON-LD entities used across pages.
 * Keep these pure functions — they return plain objects ready to embed.
 */

const SITE_URL = 'https://cbrsgroup.com';
const ORG_ID = `${SITE_URL}/#organization`;

export interface BreadcrumbItem {
  name: string;
  path: string; // path relative to site root, e.g. "/about"
}

/**
 * BreadcrumbList JSON-LD.
 * Always include "Home" as the first item.
 */
export function buildBreadcrumb(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export interface FaqQA {
  question: string;
  answer: string;
}

/**
 * FAQPage JSON-LD — emit on pages with Q&A content.
 * Answer is plain text (no HTML).
 */
export function buildFaqPage(qa: FaqQA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Service JSON-LD — describes a single service offered.
 */
export function buildService(opts: {
  name: string;
  description: string;
  serviceType: string;
  url: string; // canonical URL of the service or city page
  areaName?: string; // optional city or region
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    image: opts.image ?? `${SITE_URL}/og-image.png`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': ORG_ID,
      name: 'CBRS Group',
      url: SITE_URL,
      telephone: '+1-832-608-0535',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Houston',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    areaServed: opts.areaName
      ? { '@type': 'City', name: opts.areaName, containedIn: 'Houston Metropolitan Area, TX' }
      : { '@type': 'City', name: 'Houston' },
  };
}

/**
 * LocalBusiness JSON-LD scoped to a single city — used on city landing pages
 * to anchor the location-specific entity.
 */
export function buildCityLocalBusiness(opts: {
  cityName: string;
  citySlug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/service-areas/${opts.citySlug}#localbusiness`,
    name: `CBRS Group — ${opts.cityName} Property Damage Restoration`,
    description: `24/7 emergency property damage restoration in ${opts.cityName}, Texas: water damage, fire damage, storm damage, mold remediation, and insurance claim support.`,
    url: `${SITE_URL}/service-areas/${opts.citySlug}`,
    telephone: '+1-832-608-0535',
    email: 'support@cbrsgroup.com',
    image: `${SITE_URL}/og-image.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.cityName,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: opts.cityName },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'CBRS Group',
      '@id': ORG_ID,
      url: SITE_URL,
    },
  };
}

/**
 * ContactPage JSON-LD for the contact page.
 */
export function buildContactPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact CBRS Group',
    description: 'Reach CBRS Group dispatch for property damage restoration in Houston. 24/7 emergency response.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'CBRS Group',
      telephone: '+1-832-608-0535',
      email: 'support@cbrsgroup.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-832-608-0535',
          contactType: 'emergency',
          areaServed: 'US-TX',
          availableLanguage: ['English', 'Spanish'],
          hoursAvailable: 'Mo-Su 00:00-23:59',
        },
      ],
    },
  };
}

/**
 * ItemList JSON-LD — used for the service areas index page.
 */
export function buildItemList(opts: {
  name: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

/**
 * AboutPage JSON-LD.
 */
export function buildAboutPage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About CBRS Group',
    description: "Houston's trusted partner for comprehensive property damage solutions — restoration, inspections, claims support, and design services.",
    url: `${SITE_URL}/about`,
    about: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'CBRS Group',
    },
  };
}
