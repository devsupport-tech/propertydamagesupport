import { siteConfig } from '@/config/site';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.7604,
      longitude: -95.3698,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Houston',
        '@id': 'https://en.wikipedia.org/wiki/Houston',
      },
      {
        '@type': 'City',
        name: 'Katy',
      },
      {
        '@type': 'City',
        name: 'Sugar Land',
      },
      {
        '@type': 'City',
        name: 'Pearland',
      },
      {
        '@type': 'City',
        name: 'The Woodlands',
      },
      {
        '@type': 'City',
        name: 'Cypress',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
    priceRange: '$$',
    serviceType: [
      'Water Damage Restoration',
      'Fire Damage Restoration',
      'Storm Damage Restoration',
      'Mold Remediation',
      'Emergency Property Damage Restoration',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
