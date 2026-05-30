import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Drone Inspections in River Oaks | ${siteConfig.name}`,
  description: `Emergency drone inspections for River Oaks residents. 30-60 minute response time, free estimates, and expert restoration.`,
};

export default function RiverOaksDroneServicesPage() {
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
              <Link href="/service-areas/houston/river-oaks" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                River Oaks
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Drone Inspections</span>
            </nav>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary text-center mb-4">
            Drone Inspections in River Oaks
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Aerial property and roof inspections for damage documentation. · Serving River Oaks 24/7
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
            {[`Serving River Oaks`, '24/7 Emergency', 'Licensed & Insured', 'Free Estimates'].map((badge, idx) => (
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
            Emergency drone inspections for River Oaks residents. 30-60 minute response time, free estimates, and expert restoration.
          </p>
        </div>
      </section>

      {/* Neighborhood-Specific Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-8">
            Drone Inspections in River Oaks
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Premium property restoration services in River Oaks. Specialized care for luxury homes and high-value properties.
            </p>

            
            <p>
              We serve all zip codes in River Oaks, including 77019, 77027.
              Our local technicians are familiar with the specific challenges facing River Oaks properties.
            </p>
            

            <p>
              Whether you're dealing with flood damage from nearby bayous, pipe bursts in older homes,
              or storm damage from Houston's severe weather, our River Oaks team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-12">
            Common Questions About Drone Inspections in River Oaks
          </h2>

          <div className="space-y-6">
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                How fast can you respond to River Oaks?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide 30-60 minute emergency response to River Oaks and surrounding areas. Our local technicians are available 24/7 for immediate dispatch.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                Do you serve River Oaks?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we provide comprehensive property damage restoration services throughout River Oaks and the greater Houston area. We serve residential and commercial properties.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                Do you work with insurance companies in River Oaks?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. We work directly with all major insurance companies serving River Oaks. We handle all paperwork, communicate with adjusters, and help maximize your claim.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                How much does drone inspections cost in River Oaks?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cost varies based on damage extent, but we offer free estimates for River Oaks properties. Most work is covered by insurance. We provide transparent pricing and work within your budget.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Drone Inspections in River Oaks?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 - immediate response to River Oaks
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
