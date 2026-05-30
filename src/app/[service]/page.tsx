import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { serviceHubs, getAllServiceSlugs } from '@/config/services.detailed';
import { siteConfig } from '@/config/site';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = serviceHubs[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} in Houston | ${siteConfig.name}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = serviceHubs[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Service Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 glass-card rounded-2xl">
              <span className="text-5xl">{service.icon}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary text-center mb-4">
            {service.heroHeadline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            {service.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-8 py-4 bg-cbrs-emergency text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>📞</span>
              Call Now: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 glass-card text-cbrs-primary text-lg font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {['24/7 Emergency', 'Licensed & Insured', 'Free Estimates', 'Insurance Billing'].map((badge, idx) => (
              <div key={idx} className="px-4 py-2 glass-card rounded-full text-sm font-medium text-cbrs-primary">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-12">
            Our {service.title} Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.subServices.map((subService) => (
              <div
                key={subService.id}
                className="p-6 glass-card rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                  {subService.title}
                </h3>
                <p className="text-gray-700 mb-4">{subService.shortDescription}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            We follow a proven 5-step process to ensure complete restoration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps.map((step) => (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on mobile, shown on desktop except last) */}
                {step.number < service.processSteps.length && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-cbrs-primary to-transparent" />
                )}

                <div className="relative z-10 text-center">
                  {/* Step Number Circle */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cbrs-primary text-white text-2xl font-bold rounded-full mb-4 shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  {step.icon && (
                    <div className="text-4xl mb-3">{step.icon}</div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-cbrs-primary mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Common questions about {service.title.toLowerCase()}
          </p>

          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 glass-card rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas CTA */}
      <section className="py-16 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
            Serving All of Houston Metro
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Fast response times to Houston, Katy, Sugar Land, The Woodlands, and surrounding areas
          </p>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-cbrs-primary font-semibold hover:bg-white hover:shadow-lg transition-all group"
          >
            View All Service Areas
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency {service.title}? We're Here 24/7
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - immediate action prevents further damage
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
