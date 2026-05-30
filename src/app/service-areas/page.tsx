import { Metadata } from 'next';
import Link from 'next/link';
import { serviceAreas, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Service Areas in Houston Metro | ${siteConfig.name}`,
  description: 'Emergency property damage restoration services serving Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, and surrounding areas.',
};

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary mb-4">
            Houston Metro Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            24/7 emergency property damage restoration across Greater Houston
          </p>

          {/* Emergency CTA */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cbrs-emergency text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <span>📞</span>
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Tier 1 Cities - Featured */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fast 30-60 minute response time to our primary service areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceAreas.tier1.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="flex flex-col items-center justify-center p-6 glass-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="text-4xl mb-3">🏙️</div>
                <span className="text-center font-bold text-cbrs-primary group-hover:text-cbrs-accent transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 Cities */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
              Extended Service Areas
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We also serve these nearby communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreas.tier2.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="flex items-center justify-center p-4 glass-card rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <span className="text-center font-semibold text-cbrs-primary group-hover:text-cbrs-accent transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3 Cities */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
              Additional Communities Served
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Emergency services available throughout the Houston metro area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.tier3.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="flex items-center justify-center p-3 bg-white border border-gray-200 rounded-lg hover:border-cbrs-primary hover:shadow-sm transition-all group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-cbrs-primary transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
              Services Available in All Areas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Water Damage', icon: '💧', href: '/water-damage' },
              { name: 'Fire Damage', icon: '🔥', href: '/fire-damage' },
              { name: 'Storm Damage', icon: '⛈️', href: '/storm-damage' },
              { name: 'Mold Remediation', icon: '🦠', href: '/mold' },
              { name: 'Drone Inspections', icon: '🚁', href: '/drone-services' },
              { name: 'Insurance Help', icon: '📋', href: '/insurance-help' },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex flex-col items-center p-6 glass-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-center font-bold text-cbrs-primary group-hover:text-cbrs-accent transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Service in Your Area?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 across all Greater Houston communities
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-cbrs-emergency text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            <span className="text-2xl">📞</span>
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
