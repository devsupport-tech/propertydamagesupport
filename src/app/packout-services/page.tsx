import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Packout & Storage Services | Property Damage Support',
  description: 'Professional contents packing, inventory cataloging, secure climate-controlled storage, and pack-back services during property restoration in Houston, TX.',
};

export default function PackoutServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 text-white py-20 px-6">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Packout & Storage Services
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed">
            Professional contents packing, cataloging, secure storage, and pack-back services to protect your belongings during restoration
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call for Packout: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* What is Packout */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-8 text-center">
            What is Packout Service?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              When your property suffers damage from water, fire, smoke, or storms, your belongings need to be safely removed and stored while restoration work is completed. Our professional packout service ensures your contents are carefully packed, inventoried, stored in climate-controlled facilities, and returned to your restored property.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              We handle everything from initial packing and detailed inventory to secure storage and final pack-back, giving you peace of mind while your property is being restored to pre-loss condition.
            </p>
          </div>
        </div>
      </section>

      {/* Our Packout Services */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            Comprehensive Packout Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                Professional Packing
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Our trained technicians carefully pack your belongings using professional packing materials and techniques. We handle everything from delicate items to large furniture with specialized packing methods for each item type.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-service-inspection to-service-drone text-white flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                Detailed Inventory
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Every item is cataloged with detailed descriptions, photographs, and condition notes. Our digital inventory system allows you to track your belongings and provides essential documentation for insurance claims.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-service-restoration to-service-drone text-white flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                Climate-Controlled Storage
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Your items are stored in our secure, climate-controlled warehouse facilities. Temperature and humidity controls protect against additional damage, and 24/7 security ensures your belongings are safe.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-service-claims to-success-500 text-white flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cbrs-navy-900 mb-4">
                Complete Pack-Back
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Once restoration is complete, we carefully return your belongings to your property. Items are unpacked and placed according to your preferences, ensuring a seamless transition back to your restored space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Packout */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            When You Need Packout Services
          </h2>
          <div className="grid gap-6">
            {[
              {
                title: 'Water Damage Restoration',
                description: 'Protect furniture, electronics, documents, and personal items from ongoing water exposure while drying and repairs are completed.',
              },
              {
                title: 'Fire & Smoke Damage',
                description: 'Remove contents from smoke-damaged areas for cleaning and storage while fire restoration work proceeds.',
              },
              {
                title: 'Mold Remediation',
                description: 'Safely remove belongings from mold-affected areas to prevent contamination and allow thorough remediation.',
              },
              {
                title: 'Storm Damage Repairs',
                description: 'Secure your belongings during major storm damage repairs, roof replacement, or structural reconstruction.',
              },
              {
                title: 'Large-Scale Renovations',
                description: 'Protect contents during extensive restoration or renovation projects that require clearing multiple rooms.',
              },
              {
                title: 'Insurance Claims',
                description: 'Detailed inventory documentation supports your insurance claim with photographic evidence and item descriptions.',
              },
            ].map((scenario, index) => (
              <div key={index} className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <h3 className="text-xl font-bold text-cbrs-navy-900 mb-3">
                  {scenario.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Packout Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            Our Packout Process
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Initial Assessment',
                description: 'We evaluate the scope of packout needed, identify items requiring special handling, and create a packing plan.',
              },
              {
                step: '2',
                title: 'Professional Packing',
                description: 'Our trained team carefully packs your belongings using appropriate materials and techniques for each item type.',
              },
              {
                step: '3',
                title: 'Digital Inventory',
                description: 'Every item is photographed, described, and cataloged in our digital system with detailed condition notes.',
              },
              {
                step: '4',
                title: 'Secure Transport',
                description: 'Packed items are loaded into our trucks and transported to our climate-controlled storage facility.',
              },
              {
                step: '5',
                title: 'Climate-Controlled Storage',
                description: 'Items are stored in temperature and humidity-controlled conditions with 24/7 security monitoring.',
              },
              {
                step: '6',
                title: 'Restoration Coordination',
                description: 'We coordinate with restoration teams to ensure packout and pack-back align with the restoration timeline.',
              },
              {
                step: '7',
                title: 'Contents Cleaning (if needed)',
                description: 'Items affected by smoke, soot, or other contaminants can be professionally cleaned before pack-back.',
              },
              {
                step: '8',
                title: 'Pack-Back Service',
                description: 'Once restoration is complete, we return your belongings and unpack them according to your preferences.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cbrs-navy-900 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cbrs-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-navy-900 mb-12 text-center">
            Why Choose Our Packout Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Trained Professionals',
                description: 'Our team is trained in proper packing techniques and specialized handling for fragile, valuable, and unique items.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                ),
                title: 'Fast Response',
                description: 'We provide quick packout services to minimize disruption and prevent additional damage to your belongings.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Secure Facilities',
                description: '24/7 monitored, climate-controlled warehouse with advanced security systems to protect your belongings.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Complete Documentation',
                description: 'Detailed inventory with photos provides full transparency and supports insurance claim requirements.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Insurance Coordination',
                description: 'We work directly with your insurance company and provide all necessary documentation for your claim.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Full-Service Solutions',
                description: 'From initial packing to final pack-back, we handle every step so you can focus on recovery.',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-cbrs-navy-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Belongings During Restoration
          </h2>
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            Get professional packout services with detailed inventory, secure storage, and complete pack-back
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
              href="/contact"
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
  );
}
