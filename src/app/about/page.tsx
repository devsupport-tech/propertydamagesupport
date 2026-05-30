import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: 'Professional property damage restoration services in Houston. Licensed, certified, and available 24/7 for emergency response.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary mb-6">
            About Property Damage Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Houston's trusted partner for emergency property damage restoration since day one
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-8 text-center">
            Who We Are
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Property Damage Support is Houston's premier emergency restoration company, proudly part of the{' '}
              <a href={siteConfig.relatedSites.cbrsGroup} className="text-cbrs-accent hover:underline" target="_blank" rel="noopener noreferrer">
                CBRS Group
              </a>
              {' '}family of restoration services. We specialize in rapid response to property emergencies including water damage, fire damage, storm damage, and mold remediation.
            </p>
            <p>
              When disaster strikes, time is critical. Our 24/7 emergency response team is ready to respond within 30-60 minutes across the Greater Houston area, minimizing damage and beginning the restoration process immediately.
            </p>
            <p>
              We understand that property damage is more than just a physical problem—it's stressful, disruptive, and overwhelming. That's why we handle every aspect of the restoration process, from emergency response through final repairs, including working directly with your insurance company to streamline the claims process.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-12 text-center">
            Our Commitment to Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Rapid Response',
                description: '30-60 minute emergency response time across Houston. We arrive fast because we know every minute counts.'
              },
              {
                icon: '🎓',
                title: 'Certified Experts',
                description: 'IICRC-certified technicians with ongoing training in the latest restoration techniques and technologies.'
              },
              {
                icon: '🛡️',
                title: 'Fully Licensed & Insured',
                description: 'Licensed, bonded, and insured for your protection. All work guaranteed with industry-leading warranties.'
              },
              {
                icon: '📋',
                title: 'Insurance Specialists',
                description: 'We handle all insurance paperwork and work directly with adjusters to ensure you get the coverage you deserve.'
              },
              {
                icon: '🔧',
                title: 'Advanced Equipment',
                description: 'State-of-the-art moisture detection, drying, and restoration equipment for faster, more effective results.'
              },
              {
                icon: '💯',
                title: '100% Satisfaction',
                description: "Not satisfied? We'll make it right. Your complete satisfaction is our guarantee on every project."
              },
            ].map((item, index) => (
              <div key={index} className="p-6 glass-card rounded-xl hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-8 text-center">
            Certifications & Affiliations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 glass-card rounded-xl">
              <h3 className="text-2xl font-bold text-cbrs-primary mb-4">Industry Certifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>IICRC Certified (Institute of Inspection, Cleaning and Restoration Certification)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>Texas State Licensed Contractor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>EPA Lead-Safe Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>OSHA Safety Certified</span>
                </li>
              </ul>
            </div>

            <div className="p-8 glass-card rounded-xl">
              <h3 className="text-2xl font-bold text-cbrs-primary mb-4">Professional Affiliations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>Better Business Bureau (BBB) Accredited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>Restoration Industry Association (RIA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>Houston Chamber of Commerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cbrs-accent text-xl">✓</span>
                  <span>National Association of Home Builders (NAHB)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CBRS Group */}
      <section className="py-20 px-6 bg-cbrs-primary text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Part of CBRS Group
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Property Damage Support is proud to be part of CBRS Group, a family of restoration and construction service companies serving the Greater Houston area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.relatedSites.cbrsGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-cbrs-primary font-semibold rounded-full hover:scale-105 transition-all"
            >
              Visit CBRS Group →
            </a>
            <a
              href={siteConfig.relatedSites.claimToCompletion}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass-card text-white font-semibold rounded-full hover:bg-white hover:text-cbrs-primary transition-all"
            >
              Claim to Completion →
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Property?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            24/7 emergency response • Free estimates • Insurance assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-5 bg-white text-cbrs-emergency text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              <span className="text-2xl">📞</span>
              Call Now: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-5 glass-card text-white text-xl font-bold rounded-full hover:bg-white hover:text-cbrs-emergency transition-all"
            >
              Get Free Estimate →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
