import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allServiceAreas, services, siteConfig } from '@/config/site';
import { serviceHubs } from '@/config/services.detailed';

interface CityServicePageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const paths: Array<{ city: string; service: string }> = [];

  allServiceAreas.forEach((city) => {
    services.filter(s => s.featured).forEach((service) => {
      paths.push({
        city: city.slug,
        service: service.id,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = allServiceAreas.find((c) => c.slug === citySlug);
  const service = serviceHubs[serviceSlug];

  if (!city || !service) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${service.title} in ${city.name}, TX | ${siteConfig.name}`,
    description: `${service.description} Fast response to ${city.name}. Call ${siteConfig.phone} for 24/7 emergency service.`,
  };
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = allServiceAreas.find((c) => c.slug === citySlug);
  const service = serviceHubs[serviceSlug];

  if (!city || !service) {
    notFound();
  }

  const cityName = city.name;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center px-6 py-20 md:py-32 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800">

        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex justify-center mb-6">
            <nav className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              <Link href="/service-areas" className="text-white/90 hover:text-white transition-colors">
                Service Areas
              </Link>
              <span className="text-white/50">/</span>
              <Link href={`/service-areas/${citySlug}`} className="text-white/90 hover:text-white transition-colors">
                {cityName}
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
          </div>

          {/* Service Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl">
              <span className="text-5xl">{service.icon}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            {service.title} in {cityName}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-200 text-center mb-8 max-w-3xl mx-auto">
            Fast response to {cityName} · {service.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-8 py-4 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-terracotta-700 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-cbrs-navy-900 text-lg font-semibold rounded-full hover:bg-neutral-100 hover:shadow-lg transition-all"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {[`Serving ${cityName}`, '24/7 Emergency', 'Licensed & Insured', 'Free Estimates'].map((badge, idx) => (
              <div key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
            {service.description} We provide fast emergency response to {cityName} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 text-center mb-12">
            {service.title} Services in {cityName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.subServices.map((subService) => (
              <div
                key={subService.id}
                className="p-6 glass-card rounded-xl border border-neutral-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                  {subService.title}
                </h3>
                <p className="text-neutral-700 mb-4">{subService.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {subService.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 text-center mb-4">
            Our Process in {cityName}
          </h2>
          <p className="text-lg text-neutral-700 text-center mb-12 max-w-2xl mx-auto">
            Proven 5-step restoration process for {cityName} properties
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps.map((step) => (
              <div key={step.number} className="relative">
                {step.number < service.processSteps.length && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-cbrs-primary to-transparent" />
                )}

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cbrs-primary text-white text-2xl font-bold rounded-full mb-4 shadow-lg">
                    {step.number}
                  </div>

                  {step.icon && (
                    <div className="text-4xl mb-3">{step.icon}</div>
                  )}

                  <h3 className="text-lg font-bold text-cbrs-navy-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
              Why {cityName} Chooses Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Local Response',
                description: `30-60 minute response time to ${cityName}`,
              },
              {
                icon: '🏆',
                title: 'Expert Technicians',
                description: 'Licensed, certified, and highly trained professionals',
              },
              {
                icon: '📋',
                title: 'Insurance Experts',
                description: 'We handle all insurance paperwork and billing',
              },
              {
                icon: '💯',
                title: 'Satisfaction Guaranteed',
                description: '100% satisfaction guarantee on all work',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 glass-card rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-700 text-center mb-12">
            Common questions about {service.title.toLowerCase()} in {cityName}
          </p>

          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 glass-card rounded-xl border border-neutral-200">
                <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services in City */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
              Other Services in {cityName}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.featured && s.id !== serviceSlug)
              .map((otherService) => (
                <Link
                  key={otherService.id}
                  href={`/service-areas/${citySlug}/${otherService.id}`}
                  className="flex flex-col items-center p-6 glass-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {otherService.icon}
                  </div>
                  <span className="text-center font-bold text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
                    {otherService.shortTitle}
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
            Emergency {service.title} in {cityName}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 - immediate response to {cityName}
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
