import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import OurProcess from '@/components/sections/OurProcess';
import Testimonials from '@/components/sections/Testimonials';
import { siteConfig, serviceAreas } from '@/config/site';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CBRS Group | Houston Property Damage Support & Emergency Restoration Services</title>
        <meta name="description" content="CBRS Group - Houston's trusted restoration experts. 24/7 emergency water damage, fire damage, inspections & claims support. Call (832) 608-0535." />
        <link rel="canonical" href="https://cbrsgroup.com/" />
        <meta property="og:url" content="https://cbrsgroup.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
        <ServicesGrid
          title="Our Service Pillars"
          subtitle="Complete property damage solutions across 9 specialized service areas"
          featuredOnly={true}
          columns={3}
        />

        {/* Service Areas Section */}
        <section className="py-20 px-6 bg-neutral-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-navy-900 mb-4">
                Serving Greater Houston
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
                Fast response times to all major cities in the Houston metro area
              </p>
            </div>

            {/* Tier 1 Cities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {serviceAreas.tier1.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="flex items-center justify-center p-4 glass-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <span className="text-center font-semibold text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-cbrs-navy-900 font-semibold hover:bg-white hover:shadow-lg transition-all group"
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
        <OurProcess />

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
                  title: '9 Service Pillars',
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
        <Testimonials />

        {/* Contact CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-terracotta-700">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cbrs-terracotta-700 text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteConfig.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
