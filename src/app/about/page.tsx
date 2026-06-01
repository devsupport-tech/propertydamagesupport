import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: 'Professional property damage solutions in Houston. 9 specialized service pillars, licensed professionals, and comprehensive property support services.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 opacity-95" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Property Damage Support
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto">
            Houston's trusted partner for comprehensive property damage solutions
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-8 text-center">
            Who We Are
          </h2>
          <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
            <p className="leading-relaxed">
              Property Damage Support is Houston's comprehensive property solutions provider, proudly part of the{' '}
              <a href={siteConfig.relatedSites.cbrsGroup} className="text-cbrs-terracotta-600 hover:text-cbrs-terracotta-700 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                CBRS Group
              </a>
              {' '}family of restoration and professional services. We specialize in 9 core service pillars including restoration management, professional inspections, claims support, packout services, and expert witness testimony.
            </p>
            <p className="leading-relaxed">
              Our integrated approach means we handle every aspect of property damage from initial assessment through final completion. Whether you need emergency restoration, professional estimates, insurance documentation, or legal support, our specialized teams work together to provide seamless solutions.
            </p>
            <p className="leading-relaxed">
              We understand that property damage creates stress and uncertainty. That's why we provide clear communication, detailed documentation, and professional expertise at every step—from working with insurance companies to coordinating repairs and providing legal testimony when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Our 9 Service Pillars */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            Our 9 Specialized Service Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                ),
                title: 'Restoration Management',
                description: 'Water, fire, storm damage, and mold remediation with complete project management.',
                gradient: 'from-service-restoration to-service-drone',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Estimating & Supplementing',
                description: 'Professional Xactimate estimates and damage assessment services.',
                gradient: 'from-service-estimating to-service-legal',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Claims Management',
                description: 'Professional inspection and documentation for insurance submissions.',
                gradient: 'from-service-claims to-success-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                ),
                title: 'Packout & Storage',
                description: 'Professional packing, inventory, and climate-controlled storage.',
                gradient: 'from-cbrs-terracotta-600 to-cbrs-olive-600',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Interior Design',
                description: 'Custom design services and post-restoration upgrades.',
                gradient: 'from-service-design to-service-organization',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                ),
                title: 'Home Organization',
                description: 'Professional organization systems and post-restoration setup.',
                gradient: 'from-service-organization to-service-claims',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Property Inspections',
                description: 'Advanced inspections with thermal imaging and moisture detection.',
                gradient: 'from-service-inspection to-service-drone',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                ),
                title: 'Drone Inspections',
                description: 'FAA-certified aerial inspections for roofs and hard-to-access areas.',
                gradient: 'from-service-drone to-service-inspection',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Legal & Expert Witness',
                description: 'Professional testimony and forensic investigation support.',
                gradient: 'from-service-legal to-service-estimating',
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-xl transition-all group">
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-cbrs-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            Our Commitment to Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Rapid Response',
                description: 'Fast response times across Greater Houston. We arrive quickly because we know every minute counts in property damage situations.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Certified Experts',
                description: 'IICRC-certified technicians with ongoing training in the latest restoration techniques and professional standards.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Fully Licensed & Insured',
                description: 'Licensed, bonded, and insured for your protection. All work guaranteed with industry-leading standards.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Insurance Specialists',
                description: 'We handle all insurance documentation and work directly with adjusters to ensure proper coverage and compensation.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Advanced Technology',
                description: 'State-of-the-art inspection equipment, thermal imaging, and documentation systems for comprehensive assessment.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Client Satisfaction',
                description: 'Not satisfied? We'll make it right. Your complete satisfaction is our commitment on every project.',
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-xl transition-all group">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            Certifications & Affiliations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md">
              <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-6">Industry Certifications</h3>
              <ul className="space-y-4 text-neutral-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>IICRC Certified (Institute of Inspection, Cleaning and Restoration Certification)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Texas State Licensed Contractor</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EPA Lead-Safe Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>OSHA Safety Certified</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md">
              <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-6">Professional Affiliations</h3>
              <ul className="space-y-4 text-neutral-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Better Business Bureau (BBB) Accredited</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Restoration Industry Association (RIA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Houston Chamber of Commerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cbrs-terracotta-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>National Association of Home Builders (NAHB)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CBRS Group */}
      <section className="py-20 px-6 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Part of CBRS Group
          </h2>
          <p className="text-lg md:text-xl mb-8 text-neutral-200">
            Property Damage Support is proud to be part of CBRS Group, a family of restoration and construction service companies serving the Greater Houston area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.relatedSites.cbrsGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cbrs-navy-900 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Visit CBRS Group</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={siteConfig.relatedSites.claimToCompletion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/30 transition-all"
            >
              <span>Claim to Completion</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-6">
            Get Professional Property Support
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            9 specialized service pillars • Professional documentation • Insurance support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-cbrs-navy-900 hover:bg-cbrs-navy-900 text-cbrs-navy-900 hover:text-white font-semibold rounded-xl transition-all"
            >
              <span>Request Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
