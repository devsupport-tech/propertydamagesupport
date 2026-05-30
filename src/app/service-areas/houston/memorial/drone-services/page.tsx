import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Drone Inspections in Memorial | ${siteConfig.name}`,
  description: `drone inspections serving Memorial and surrounding areas. Fast response, insurance assistance, and 24/7 emergency service.`,
};

export default function MemorialDroneServicesPage() {
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
              <Link href="/service-areas/houston/memorial" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                Memorial
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Drone Inspections</span>
            </nav>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary text-center mb-4">
            Memorial Drone Inspections
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Fast response to Memorial · Aerial property and roof inspections for damage documentation.
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
            {[`Serving Memorial`, '24/7 Emergency', 'Licensed & Insured', 'Free Estimates'].map((badge, idx) => (
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
            drone inspections serving Memorial and surrounding areas. Fast response, insurance assistance, and 24/7 emergency service.
          </p>
        </div>
      </section>

      {/* Neighborhood-Specific Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-8">
            Drone Inspections in Memorial
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Property damage restoration serving Memorial area homes and businesses. Fast response to water damage, fire damage, and storm damage.
            </p>

            
            <p>
              We serve all zip codes in Memorial, including 77024, 77079, 77024.
              Our local technicians are familiar with the specific challenges facing Memorial properties.
            </p>
            

            <p>
              Whether you're dealing with flood damage from nearby bayous, pipe bursts in older homes,
              or storm damage from Houston's severe weather, our Memorial team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-12">
            Common Questions About Drone Inspections in Memorial
          </h2>

          <div className="space-y-6">
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                How fast can you respond to Memorial?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide 30-60 minute emergency response to Memorial and surrounding areas. Our local technicians are available 24/7 for immediate dispatch.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                Do you serve Memorial?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we provide comprehensive property damage restoration services throughout Memorial and the greater Houston area. We serve residential and commercial properties.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                Do you work with insurance companies in Memorial?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. We work directly with all major insurance companies serving Memorial. We handle all paperwork, communicate with adjusters, and help maximize your claim.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                How much does drone inspections cost in Memorial?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cost varies based on damage extent, but we offer free estimates for Memorial properties. Most work is covered by insurance. We provide transparent pricing and work within your budget.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Drone Inspections in Memorial?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 - immediate response to Memorial
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
