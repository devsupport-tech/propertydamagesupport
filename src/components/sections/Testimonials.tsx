'use client';

import React from 'react';
import FadeIn from '@/components/animations/FadeIn';

export default function Testimonials() {
  const testimonials = [
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
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container max-w-7xl mx-auto">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-navy-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real stories from Houston homeowners and businesses we've helped
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={200 + index * 100}>
              <div className="relative p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-xl transition-all group h-full">
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
            </FadeIn>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <FadeIn delay={1000}>
          <div className="text-center mt-16">
            <p className="text-lg text-neutral-600 mb-6">
              See more reviews and leave your own
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/search?q=property+damage+support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-neutral-200 hover:border-cbrs-navy-800 rounded-xl font-semibold text-cbrs-navy-800 transition-all hover:shadow-lg group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Read Google Reviews</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
