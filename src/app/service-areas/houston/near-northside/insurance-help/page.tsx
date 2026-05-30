import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Insurance Help in Near Northside | ${siteConfig.name}`,
  description: `Professional insurance help in Near Northside, Texas. Licensed technicians, direct insurance billing, and guaranteed workmanship.`,
};

export default function NearNorthsideInsuranceHelpPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex justify-center mb-6">
            <nav className="flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm">
              <Link href="/service-areas" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                Service Areas
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/service-areas/houston" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                Houston
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/service-areas/houston/near-northside" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                Near Northside
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Insurance Help</span>
            </nav>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary text-center mb-4">
            Near Northside Insurance Help
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            24/7 emergency service in Near Northside
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
            {[`Serving Near Northside`, '24/7 Emergency', 'Licensed & Insured', 'Free Estimates'].map((badge, idx) => (
              <div key={idx} className="px-4 py-2 glass-card rounded-full text-sm font-medium text-cbrs-primary">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Professional insurance help in Near Northside, Texas. Licensed technicians, direct insurance billing, and guaranteed workmanship.
          </p>
        </div>
      </section>

      {/* Neighborhood-Specific Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-8">
            Insurance Help in Near Northside
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Restoration services in Near Northside. Serving growing residential and commercial areas.
            </p>

            
            <p>
              We serve all zip codes in Near Northside, including 77009, 77022.
              Our local technicians are familiar with the specific challenges facing Near Northside properties.
            </p>
            

            <p>
              Whether you're dealing with flood damage from nearby bayous, pipe bursts in older homes,
              or storm damage from Houston's severe weather, our Near Northside team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-12">
            Common Questions About Insurance Help in Near Northside
          </h2>

          <div className="space-y-6">
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                How fast can you respond to Near Northside?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide 30-60 minute emergency response to Near Northside and surrounding areas. Our local technicians are available 24/7 for immediate dispatch.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                Do you serve Near Northside?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we provide comprehensive property damage restoration services throughout Near Northside and the greater Houston area. We serve residential and commercial properties.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                Do you work with insurance companies in Near Northside?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. We work directly with all major insurance companies serving Near Northside. We handle all paperwork, communicate with adjusters, and help maximize your claim.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                How much does insurance help cost in Near Northside?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cost varies based on damage extent, but we offer free estimates for Near Northside properties. Most work is covered by insurance. We provide transparent pricing and work within your budget.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Insurance Help in Near Northside?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 - immediate response to Near Northside
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
