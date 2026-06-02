import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function InsuranceHelpPage() {
  return (
    <>
      <Helmet>
        <title>Insurance Claims Help | CBRS Group</title>
        <meta name="description" content="Expert guidance for navigating property damage insurance claims. Documentation, adjuster communication, claim filing, and dispute resolution services." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 text-white py-20 px-6">
            <div className="container max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insurance Claims Help
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed">
                Expert guidance to navigate your property damage insurance claim from start to finish
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Get Claims Support: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </section>

          {/* Why Insurance Claims Are Complex */}
          <section className="py-20 px-6 bg-white">
            <div className="container max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-8 text-center">
                Why Insurance Claims Can Be Challenging
              </h2>
              <div className="grid gap-6">
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                    Complex Documentation Requirements
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Insurance companies require extensive documentation, photos, estimates, and proof of damage. Missing or incomplete documentation can delay or reduce your claim.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                    Adjuster Negotiations
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Insurance adjusters work for the insurance company. They may underestimate damages or depreciate items more than necessary to reduce payouts.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                    Technical Terminology & Policy Language
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Insurance policies are filled with technical terms, exclusions, and conditions that are difficult to understand without expertise.
                  </p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                    Strict Deadlines & Procedures
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Missing a deadline or failing to follow proper procedures can result in claim denial. Each insurance company has different requirements and timelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Help */}
          <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-white">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
                How We Help With Your Insurance Claim
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-service-estimating to-service-legal text-white flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                    Professional Xactimate Estimates
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We provide industry-standard Xactimate estimates that insurance companies recognize and accept. Our detailed scope of work includes labor, materials, and all necessary repairs.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-service-inspection to-service-drone text-white flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                    Thorough Documentation
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Complete photo and video documentation of all damage, including infrared thermal imaging and drone inspections for roofs and hard-to-reach areas.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-service-claims to-success-500 text-white flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                    Adjuster Communication
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We handle all communication with insurance adjusters, ensuring nothing is missed and all damage is properly documented and included in your claim.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                    Claim Advocacy
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    If your claim is disputed or underpaid, we provide expert witness testimony and advocate for fair compensation based on industry standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 text-white">
            <div className="container max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't Navigate Your Claim Alone
              </h2>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                Get professional insurance claims support to ensure you receive fair compensation for your property damage
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call {siteConfig.phone}</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/30 transition-all"
                >
                  <span>Request Free Consultation</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
