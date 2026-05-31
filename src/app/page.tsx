import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { siteConfig, serviceAreas } from '@/config/site';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid - Card Navigation Hub */}
      <ServicesGrid
        title="Our Service Pillars"
        subtitle="Complete property damage solutions across 8 specialized service areas"
        featuredOnly={true}
        columns={3}
      />

      {/* Service Areas Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-primary mb-4">
              Serving Greater Houston
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Fast response times to all major cities in the Houston metro area
            </p>
          </div>

          {/* Tier 1 Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {serviceAreas.tier1.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="flex items-center justify-center p-4 glass-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <span className="text-center font-semibold text-cbrs-primary group-hover:text-cbrs-accent transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
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
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A streamlined approach to property damage solutions from initial contact to final completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-service-restoration via-service-estimating via-service-claims to-service-legal opacity-20" style={{ width: '85%', left: '7.5%' }} />

            {[
              {
                step: '01',
                title: 'Contact & Assessment',
                description: 'Reach out to us and we\'ll schedule a comprehensive property assessment',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                gradient: 'from-service-restoration to-service-drone',
              },
              {
                step: '02',
                title: 'Detailed Estimate',
                description: 'Professional Xactimate estimate with complete scope of work and timeline',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                ),
                gradient: 'from-service-estimating to-service-legal',
              },
              {
                step: '03',
                title: 'Insurance Claims',
                description: 'We handle all documentation and communication with your insurance company',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                ),
                gradient: 'from-service-claims to-success-500',
              },
              {
                step: '04',
                title: 'Expert Execution',
                description: 'Licensed professionals complete all work with quality assurance throughout',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                gradient: 'from-cbrs-terracotta-600 to-cbrs-olive-600',
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl border-2 border-neutral-200 p-8 hover:border-neutral-300 hover:shadow-xl transition-all group">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-cbrs-navy-900 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${process.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {process.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-navy-900 mb-4">
              Why Choose Property Damage Support?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Professional expertise and comprehensive solutions for all your property damage needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                ),
                title: '8 Service Pillars',
                description: 'Comprehensive property damage solutions across specialized service areas',
                gradient: 'from-service-restoration to-service-drone',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Licensed & Certified',
                description: 'IICRC-certified professionals with industry expertise and credentials',
                gradient: 'from-success-500 to-service-claims',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Insurance Support',
                description: 'Professional documentation and inspection services for claim submission',
                gradient: 'from-service-estimating to-service-legal',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
                title: 'Professional Service',
                description: 'Quality workmanship and comprehensive property damage expertise',
                gradient: 'from-cbrs-terracotta-600 to-cbrs-olive-600',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-navy-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real stories from Houston homeowners and businesses we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'Katy, TX',
                rating: 5,
                text: 'Our kitchen flooded at 2 AM and they were here within 45 minutes! The team was professional, efficient, and worked directly with our insurance company. Highly recommend!',
                service: 'Water Damage',
              },
              {
                name: 'Michael R.',
                location: 'Sugar Land, TX',
                rating: 5,
                text: 'After a fire in our garage, we were devastated. Property Damage Support handled everything from emergency board-up to final restoration. They made a terrible situation manageable.',
                service: 'Fire Damage',
              },
              {
                name: 'Jennifer L.',
                location: 'Houston, TX',
                rating: 5,
                text: 'Hurricane damage to our roof and multiple rooms. The insurance process was so confusing until these guys stepped in. They handled all the paperwork and got us fully covered.',
                service: 'Storm Damage',
              },
              {
                name: 'David P.',
                location: 'Pearland, TX',
                rating: 5,
                text: 'Found mold in our attic and basement. They did a thorough inspection, explained everything clearly, and completed the remediation quickly. No mold since!',
                service: 'Mold Remediation',
              },
              {
                name: 'Amanda K.',
                location: 'The Woodlands, TX',
                rating: 5,
                text: 'Burst pipe caused major damage while we were on vacation. They responded immediately, dried everything out, and had repairs done before we got home. Lifesavers!',
                service: 'Water Damage',
              },
              {
                name: 'Robert J.',
                location: 'Cypress, TX',
                rating: 5,
                text: 'Commercial property with extensive water damage. They worked around our business hours and had us back to normal operations in 5 days. Professional and efficient.',
                service: 'Commercial Services',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-xl transition-all group"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 rounded-xl flex items-center justify-center shadow-lg opacity-80">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cbrs-terracotta-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div>
                    <p className="font-bold text-cbrs-navy-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-cbrs-terracotta-100 text-cbrs-terracotta-700 text-xs font-semibold">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-neutral-600 mb-6">
              See more reviews and leave your own
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/search?q=property+damage+support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl border-2 border-neutral-200 hover:border-cbrs-navy-800 text-cbrs-navy-900 font-semibold shadow-md hover:shadow-xl transition-all group"
              >
                <svg className="w-6 h-6 text-cbrs-terracotta-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Google Reviews</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl border-2 border-neutral-200 hover:border-cbrs-navy-800 text-cbrs-navy-900 font-semibold shadow-md hover:shadow-xl transition-all group"
              >
                <svg className="w-6 h-6 text-cbrs-terracotta-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Reviews</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-cbrs-primary to-cbrs-accent">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Professional Property Damage Support
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your property damage needs and explore our comprehensive service solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cbrs-primary text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              <span className="text-2xl">📞</span>
              {siteConfig.phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all"
            >
              <span className="text-2xl">✉️</span>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
