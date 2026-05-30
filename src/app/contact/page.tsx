'use client';

import { useState } from 'react';
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center justify-center px-6 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            24/7 emergency response • Free estimates • Fast response
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 px-6 bg-cbrs-emergency">
        <div className="container max-w-6xl mx-auto text-center text-white">
          <p className="text-xl md:text-2xl font-bold mb-3">
            🚨 Emergency? Call Now for Immediate Response
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cbrs-emergency text-2xl font-bold rounded-full shadow-xl hover:scale-105 transition-all"
          >
            <span>📞</span>
            {siteConfig.phone}
          </a>
          <p className="mt-4 text-sm opacity-90">
            Available 24/7 • 30-60 minute response time
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-cbrs-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For emergencies, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-cbrs-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cbrs-accent focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cbrs-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cbrs-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-cbrs-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cbrs-accent focus:outline-none transition-colors"
                    placeholder="(832) 555-0123"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-cbrs-primary mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cbrs-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="water-damage">Water Damage</option>
                    <option value="fire-damage">Fire Damage</option>
                    <option value="storm-damage">Storm Damage</option>
                    <option value="mold">Mold Remediation</option>
                    <option value="drone">Drone Inspection</option>
                    <option value="insurance">Insurance Help</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-cbrs-primary mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cbrs-accent focus:outline-none transition-colors"
                  >
                    <option value="emergency">Emergency - Need help now</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                    <option value="normal">Normal - Free estimate</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-cbrs-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cbrs-accent focus:outline-none transition-colors resize-none"
                    placeholder="Please describe the damage and your situation..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-cbrs-emergency hover:bg-red-700 text-white text-lg font-bold rounded-full shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                    <p className="text-red-800 font-semibold">
                      ✗ {errorMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-cbrs-primary mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="p-6 glass-card rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📞</div>
                    <div>
                      <h3 className="text-xl font-bold text-cbrs-primary mb-2">Phone</h3>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="text-lg text-cbrs-accent hover:underline font-semibold"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 glass-card rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📧</div>
                    <div>
                      <h3 className="text-xl font-bold text-cbrs-primary mb-2">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-lg text-cbrs-accent hover:underline font-semibold"
                      >
                        {siteConfig.email}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-6 glass-card rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📍</div>
                    <div>
                      <h3 className="text-xl font-bold text-cbrs-primary mb-2">Service Area</h3>
                      <p className="text-lg text-gray-700">{siteConfig.address.full}</p>
                      <p className="text-sm text-gray-600 mt-1">Serving Greater Houston Metro</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-6 glass-card rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🕐</div>
                    <div>
                      <h3 className="text-xl font-bold text-cbrs-primary mb-2">Hours</h3>
                      <p className="text-lg text-gray-700 font-semibold">24/7 Emergency Service</p>
                      <p className="text-sm text-gray-600 mt-1">Always available when you need us</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 glass-card rounded-xl">
                <h3 className="text-xl font-bold text-cbrs-primary mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-cbrs-primary text-white rounded-full hover:scale-110 transition-transform"
                    aria-label="Facebook"
                  >
                    <span className="text-xl">f</span>
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-cbrs-primary text-white rounded-full hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <span className="text-xl">ig</span>
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-cbrs-primary text-white rounded-full hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xl">in</span>
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-cbrs-primary text-white rounded-full hover:scale-110 transition-transform"
                    aria-label="YouTube"
                  >
                    <span className="text-xl">yt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cbrs-primary mb-8 text-center">
            Service Area
          </h2>
          <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              🗺️ Map: Serving Greater Houston and surrounding areas
            </p>
          </div>
          <p className="text-center text-gray-700 mt-6 max-w-2xl mx-auto">
            We provide emergency property damage restoration services throughout the Greater Houston area,
            including Houston, Katy, Sugar Land, Pearland, The Woodlands, Cypress, and surrounding communities.
          </p>
        </div>
      </section>
    </main>
  );
}
