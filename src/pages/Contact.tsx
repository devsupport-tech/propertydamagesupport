import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: 'normal',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: 'normal',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please call us directly at ' + siteConfig.phone);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | CBRS Group</title>
        <meta name="description" content="Contact CBRS Group for professional property damage support in Houston. Free consultations and fast response." />
        <link rel="canonical" href="https://cbrsgroup.com/contact" />
        <meta property="og:url" content="https://cbrsgroup.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | CBRS Group" />
        <meta property="og:description" content="Contact CBRS Group for professional property damage support in Houston. Free consultations and fast response." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[300px] flex items-center justify-center px-6 py-16 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800 opacity-95" />

            <div className="container relative z-10 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200">
                Professional property support • Free consultations • Fast response
              </p>
            </div>
          </section>

          {/* Emergency Banner */}
          <section className="py-8 px-6 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-terracotta-700">
            <div className="container max-w-6xl mx-auto text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-xl md:text-2xl font-bold">
                  Emergency? Call Now for Immediate Response
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cbrs-navy-900 text-2xl font-bold rounded-xl shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteConfig.phone}
              </a>
              <p className="mt-4 text-sm text-white/90">
                Available for emergency support and consultations
              </p>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-20 px-6 bg-white">
            <div className="container max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-cbrs-navy-900 mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-neutral-700 mb-8 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. For emergencies, please call us directly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-cbrs-navy-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-cbrs-terracotta-600 focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-cbrs-navy-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-cbrs-terracotta-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-cbrs-navy-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-cbrs-terracotta-600 focus:outline-none transition-colors"
                        placeholder="(832) 555-0123"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-cbrs-navy-900 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-cbrs-terracotta-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="restoration">Restoration Management</option>
                        <option value="estimating">Estimating & Supplementing</option>
                        <option value="claims">Claims Management</option>
                        <option value="packout">Packout & Storage</option>
                        <option value="design">Interior Design</option>
                        <option value="organization">Home Organization</option>
                        <option value="inspection">Property Inspections</option>
                        <option value="drone">Drone Inspections</option>
                        <option value="legal">Legal & Expert Witness</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Urgency */}
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-semibold text-cbrs-navy-900 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-cbrs-terracotta-600 focus:outline-none transition-colors"
                      >
                        <option value="emergency">Emergency - Need help now</option>
                        <option value="urgent">Urgent - Within 24 hours</option>
                        <option value="normal">Normal - Free consultation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-cbrs-navy-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-cbrs-terracotta-600 focus:outline-none transition-colors resize-none"
                        placeholder="Please describe your situation and how we can help..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full px-8 py-4 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status Messages */}
                    {status === 'success' && (
                      <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-green-800 font-semibold">
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="text-red-800 font-semibold">
                          {errorMessage}
                        </p>
                      </div>
                    )}
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-cbrs-navy-900 mb-6">
                    Get In Touch
                  </h2>

                  <div className="space-y-6 mb-8">
                    {/* Phone */}
                    <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cbrs-navy-900 mb-2">Phone</h3>
                          <a
                            href={`tel:${siteConfig.phoneRaw}`}
                            className="text-lg text-cbrs-terracotta-600 hover:text-cbrs-terracotta-700 hover:underline font-semibold transition-colors"
                          >
                            {siteConfig.phone}
                          </a>
                          <p className="text-sm text-neutral-600 mt-1">Available for consultations and support</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cbrs-navy-900 mb-2">Email</h3>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-lg text-cbrs-terracotta-600 hover:text-cbrs-terracotta-700 hover:underline font-semibold transition-colors"
                          >
                            {siteConfig.email}
                          </a>
                          <p className="text-sm text-neutral-600 mt-1">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 text-white flex items-center justify-center">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cbrs-navy-900 mb-2">Service Area</h3>
                          <p className="text-lg text-neutral-700">{siteConfig.address.full}</p>
                          <p className="text-sm text-neutral-600 mt-1">Serving Greater Houston Metro</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
