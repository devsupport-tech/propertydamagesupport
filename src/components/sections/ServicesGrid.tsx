import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '@/config/site';

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  featuredOnly?: boolean;
  columns?: 2 | 3;
}

export default function ServicesGrid({
  title = 'Our Service Pillars',
  subtitle = 'Complete property damage solutions across 9 specialized service areas',
  featuredOnly = true,
  columns = 3,
}: ServicesGridProps) {
  const displayServices = featuredOnly
    ? services.filter(service => service.featured)
    : services;

  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cbrs-terracotta-600 mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-4">
            {title}
          </h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {displayServices.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow group block"
            >
              <div className="h-12 w-12 rounded-xl bg-cbrs-terracotta-600/10 flex items-center justify-center mb-5 group-hover:bg-cbrs-terracotta-600/20 transition-colors">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-heading font-semibold text-cbrs-navy-900 mb-2 text-lg">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-cbrs-terracotta-600 group-hover:gap-2 transition-all">
                Learn More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* View all services link (if showing featured only) */}
        {featuredOnly && services.length > displayServices.length && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-cbrs-navy-900 font-semibold hover:shadow-lg transition-all group border border-neutral-200"
            >
              View All Services
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
        )}
      </div>
    </section>
  );
}
