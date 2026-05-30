import { MetadataRoute } from 'next';
import { allServiceAreas, services, siteConfig } from '@/config/site';
import { houstonNeighborhoods, houstonZipCodes } from '@/config/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Service hub pages (6 pages)
  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => service.featured)
    .map((service) => ({
      url: `${baseUrl}${service.href}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  // City pages (28 pages - one for each city)
  const cityPages: MetadataRoute.Sitemap = allServiceAreas.map((city) => ({
    url: `${baseUrl}/service-areas/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // City + Service pages (168 pages - 28 cities × 6 services)
  const cityServicePages: MetadataRoute.Sitemap = [];
  allServiceAreas.forEach((city) => {
    services
      .filter((service) => service.featured)
      .forEach((service) => {
        cityServicePages.push({
          url: `${baseUrl}/service-areas/${city.slug}/${service.id}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        });
      });
  });

  // Neighborhood + Service pages (210 pages - 35 neighborhoods × 6 services)
  const neighborhoodServicePages: MetadataRoute.Sitemap = [];
  houstonNeighborhoods.forEach((neighborhood) => {
    services
      .filter((service) => service.featured)
      .forEach((service) => {
        neighborhoodServicePages.push({
          url: `${baseUrl}/service-areas/${neighborhood.city}/${neighborhood.slug}/${service.id}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        });
      });
  });

  // ZIP Code + Service pages (390 pages - 65 ZIP codes × 6 services)
  const zipCodeServicePages: MetadataRoute.Sitemap = [];
  houstonZipCodes.forEach((zipCode) => {
    services
      .filter((service) => service.featured)
      .forEach((service) => {
        zipCodeServicePages.push({
          url: `${baseUrl}/zip/${zipCode.code}/${service.id}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.5,
        });
      });
  });

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages,
    ...neighborhoodServicePages,
    ...zipCodeServicePages,
  ];
}
