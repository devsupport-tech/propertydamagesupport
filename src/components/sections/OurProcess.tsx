'use client';

import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

export default function OurProcess() {
  const processSteps = [
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
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container max-w-7xl mx-auto">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A streamlined approach to property damage solutions from initial contact to final completion
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-service-restoration via-service-estimating via-service-claims to-service-legal opacity-20" style={{ width: '85%', left: '7.5%' }} />

          {processSteps.map((process, index) => (
            <FadeIn key={index} delay={200 + index * 150}>
              <div className="relative h-full">
                <div className="bg-white rounded-2xl border-2 border-neutral-200 p-8 hover:border-neutral-300 hover:shadow-xl transition-all group h-full">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
