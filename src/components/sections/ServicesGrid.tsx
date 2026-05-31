import React from 'react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/config/site';
import FadeIn from '@/components/animations/FadeIn';

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  featuredOnly?: boolean;
  columns?: 2 | 3;
}

export default function ServicesGrid({
  title = 'Our Services',
  subtitle = 'Comprehensive property damage restoration services for your home or business',
  featuredOnly = true,
  columns = 3,
}: ServicesGridProps) {
  const displayServices = featuredOnly
    ? services.filter(service => service.featured)
    : services;

  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-primary mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {displayServices.map((service, index) => (
            <FadeIn key={service.id} delay={200 + index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                color={service.color}
              />
            </FadeIn>
          ))}
        </div>

        {/* View all services link (if showing featured only) */}
        {featuredOnly && services.length > displayServices.length && (
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-cbrs-primary font-semibold hover:bg-white hover:shadow-lg transition-all group"
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
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
