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
      <section className="relative min-h-[400px] flex items-center justify-center px-6 py-20 md:py-32 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800">
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Houston Metro Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
            24/7 emergency property damage restoration across Greater Houston
          </p>

          {/* Emergency CTA */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-terracotta-700 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Tier 1 Cities - Featured */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
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
                <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-center font-bold text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 Cities */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
              Extended Service Areas
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
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
                <span className="text-center font-semibold text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
              Additional Communities Served
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Emergency services available throughout the Houston metro area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.tier3.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="flex items-center justify-center p-3 bg-white border border-neutral-200 rounded-lg hover:border-cbrs-navy-900 hover:shadow-sm transition-all group"
              >
                <span className="text-sm font-medium text-neutral-700 group-hover:text-cbrs-navy-900 transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
              Services Available in All Areas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Water Damage',
                href: '/water-damage',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zm4.5 11a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                name: 'Fire Damage',
                href: '/fire-damage',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                name: 'Storm Damage',
                href: '/storm-damage',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                ),
              },
              {
                name: 'Mold Remediation',
                href: '/mold',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                name: 'Packout Services',
                href: '/packout-services',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                ),
              },
              {
                name: 'Drone Inspections',
                href: '/drone-services',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                ),
              },
              {
                name: 'Insurance Help',
                href: '/insurance-help',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
              },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex flex-col items-center p-6 glass-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-center font-bold text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-terracotta-700">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Service in Your Area?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 across all Greater Houston communities
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-cbrs-terracotta-700 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
