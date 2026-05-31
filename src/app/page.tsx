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

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
              Why Choose Property Damage Support?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏛️',
                title: '8 Service Pillars',
                description: 'Comprehensive property damage solutions across specialized service areas',
              },
              {
                icon: '🛡️',
                title: 'Licensed & Certified',
                description: 'IICRC-certified professionals with industry expertise and credentials',
              },
              {
                icon: '📋',
                title: 'Insurance Support',
                description: 'Professional documentation and inspection services for claim submission',
              },
              {
                icon: '⭐',
                title: 'Professional Service',
                description: 'Quality workmanship and comprehensive property damage expertise',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 glass-card rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-700">
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
                className="p-6 glass-card rounded-xl hover:shadow-lg transition-all"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-bold text-cbrs-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-cbrs-accent font-semibold">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">
              See more reviews and leave your own
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/search?q=property+damage+support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-cbrs-primary font-semibold hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="text-xl">⭐</span>
                Google Reviews
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-cbrs-primary font-semibold hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="text-xl">👍</span>
                Facebook Reviews
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
