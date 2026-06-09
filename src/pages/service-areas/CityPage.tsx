import { Link, useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SeoHead from '@/components/seo/SeoHead';
import {
  buildBreadcrumb,
  buildCityLocalBusiness,
  buildService,
} from '@/components/seo/schema';
import { allServiceAreas, services, siteConfig } from '@/config/site';

export default function CityPage() {
  const { city: slug } = useParams<{ city: string }>();
  const city = allServiceAreas.find((c) => c.slug === slug);

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const cityName = city.name;
  const cityUrl = `https://cbrsgroup.com/service-areas/${slug}`;

  const serviceSchemas = services
    .filter((s) => s.featured)
    .slice(0, 6)
    .map((s) =>
      buildService({
        name: `${s.title} in ${cityName}, TX`,
        description: s.description,
        serviceType: s.title,
        url: cityUrl,
        areaName: cityName,
      })
    );

  return (
    <>
      <SeoHead
        title={`${cityName} Property Damage Restoration — Water, Fire, Storm, Mold · 24/7 | CBRS Group`}
        description={`24/7 emergency property damage restoration in ${cityName}, TX. Water damage, fire damage, storm restoration, mold remediation, drone inspections, and insurance claim support. Licensed & insured. Call (832) 608-0535.`}
        path={`/service-areas/${slug}`}
        keywords={`${cityName} water damage, ${cityName} fire damage restoration, ${cityName} storm damage repair, ${cityName} mold remediation, property damage restoration ${cityName} TX, emergency restoration ${cityName}, insurance claim help ${cityName}`}
        jsonLd={[
          buildCityLocalBusiness({ cityName, citySlug: slug! }),
          ...serviceSchemas,
          buildBreadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/service-areas' },
            { name: cityName, path: `/service-areas/${slug}` },
          ]),
        ]}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[500px] flex items-center justify-center px-6 py-20 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

            <div className="container relative z-10 max-w-5xl mx-auto">
              {/* Location Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full shadow-sm">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold text-cbrs-navy-900">Serving {cityName}</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-navy-900 text-center mb-4">
                Property Damage Restoration in {cityName}
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
                24/7 emergency response · Licensed & insured · Insurance billing
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-8 py-4 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>📞</span>
                  Call Now: {siteConfig.phone}
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white border-2 border-cbrs-navy-900 text-cbrs-navy-900 hover:bg-cbrs-navy-900 hover:text-white text-lg font-semibold rounded-full transition-all"
                >
                  Get Free Estimate
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                {['30-60 Min Response', '24/7 Emergency', 'Licensed & Certified', 'Free Estimates'].map((badge, idx) => (
                  <div key={idx} className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-cbrs-navy-900 shadow-sm">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Available */}
          <section className="py-20 px-6">
            <div className="container max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
                  Emergency Services in {cityName}
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Full-service property damage restoration available 24/7
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.filter(s => s.featured).map((service) => (
                  <div
                    key={service.id}
                    className="block p-8 bg-white border border-neutral-200 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all group"
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-3 group-hover:text-cbrs-terracotta-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    <span className="text-cbrs-terracotta-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us in [City] */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="container max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
                  Why {cityName} Trusts Us
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: '⚡',
                    title: 'Local Response',
                    description: `Fast 30-60 minute response time to ${cityName}`,
                  },
                  {
                    icon: '🛡️',
                    title: 'Licensed & Insured',
                    description: 'Fully licensed, certified, and insured professionals',
                  },
                  {
                    icon: '📋',
                    title: 'Insurance Experts',
                    description: 'Direct insurance billing and claim assistance',
                  },
                  {
                    icon: '⭐',
                    title: '100% Satisfaction',
                    description: 'Guaranteed quality workmanship',
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white border border-neutral-200 rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Nearby Cities */}
          <section className="py-20 px-6">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
                  We Also Serve Nearby Cities
                </h2>
                <p className="text-lg text-gray-700">
                  Emergency property damage restoration throughout Greater Houston
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {allServiceAreas
                  .filter((c) => c.slug !== slug)
                  .slice(0, 12)
                  .map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      to={`/service-areas/${nearbyCity.slug}`}
                      className="px-6 py-3 bg-white border border-neutral-200 rounded-full hover:shadow-md transition-all group"
                    >
                      <span className="font-medium text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
                        {nearbyCity.name}
                      </span>
                    </Link>
                  ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 px-6 py-3 text-cbrs-terracotta-600 font-semibold hover:underline"
                >
                  View All Service Areas
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Emergency CTA Section */}
          <section className="py-16 px-6 bg-cbrs-terracotta-600">
            <div className="container max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Emergency in {cityName}? We're Here 24/7
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Don't wait - immediate action can prevent further damage
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-3 px-8 py-5 bg-white text-cbrs-terracotta-600 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                <span className="text-2xl">📞</span>
                Call Now: {siteConfig.phone}
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
