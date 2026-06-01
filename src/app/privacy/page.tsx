import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Privacy Policy for Property Damage Support - How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-br from-cbrs-navy-900 to-cbrs-navy-800">
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-200">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <div className="p-6 bg-neutral-50 rounded-xl mb-12">
              <p className="text-neutral-800 font-medium">
                At {siteConfig.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-cbrs-navy-900 mt-6 mb-3">Personal Information</h3>
            <p className="text-neutral-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li>Fill out contact forms or request estimates</li>
              <li>Call our emergency hotline</li>
              <li>Schedule service appointments</li>
              <li>Communicate with us via email or phone</li>
              <li>Sign service contracts or agreements</li>
            </ul>

            <p className="text-neutral-700 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li>Name and contact information (phone, email, address)</li>
              <li>Property details and location</li>
              <li>Insurance information</li>
              <li>Description of damage and service needs</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-cbrs-navy-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-neutral-700 mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Click patterns and navigation paths</li>
            </ul>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">2. How We Use Your Information</h2>

            <p className="text-neutral-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li>Provide and deliver emergency restoration services</li>
              <li>Respond to your inquiries and service requests</li>
              <li>Process payments and manage billing</li>
              <li>Communicate about service appointments and updates</li>
              <li>Work with insurance companies on your behalf</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations and resolve disputes</li>
            </ul>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">3. Information Sharing and Disclosure</h2>

            <p className="text-neutral-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party vendors who assist with business operations (payment processing, scheduling, etc.)</li>
              <li><strong>Insurance Companies:</strong> When authorized by you to process claims</li>
              <li><strong>CBRS Group Affiliates:</strong> Related companies within our corporate family</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>

            <p className="text-neutral-700 mb-6">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">4. Data Security</h2>

            <p className="text-neutral-700 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure server infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>

            <p className="text-neutral-700 mb-6">
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">5. Cookies and Tracking Technologies</h2>

            <p className="text-neutral-700 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertising</li>
              <li>Improve website functionality</li>
            </ul>

            <p className="text-neutral-700 mb-6">
              You can control cookies through your browser settings and opt-out of certain tracking.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">6. Your Privacy Rights</h2>

            <p className="text-neutral-700 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2 mb-6">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
            </ul>

            <p className="text-neutral-700 mb-6">
              To exercise these rights, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-cbrs-terracotta-600 hover:underline">{siteConfig.email}</a>.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">7. Children's Privacy</h2>

            <p className="text-neutral-700 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">8. Third-Party Links</h2>

            <p className="text-neutral-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">9. Changes to This Privacy Policy</h2>

            <p className="text-neutral-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-navy-900 mt-12 mb-4">10. Contact Us</h2>

            <p className="text-neutral-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="p-6 glass-card rounded-xl mt-6">
              <p className="text-neutral-800 font-semibold mb-3">{siteConfig.name}</p>
              <p className="text-neutral-700 mb-2">
                <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-cbrs-terracotta-600 hover:underline">{siteConfig.email}</a>
              </p>
              <p className="text-neutral-700 mb-2">
                <strong>Phone:</strong> <a href={`tel:${siteConfig.phoneRaw}`} className="text-cbrs-terracotta-600 hover:underline">{siteConfig.phone}</a>
              </p>
              <p className="text-neutral-700">
                <strong>Address:</strong> {siteConfig.address.full}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-300">
              <p className="text-sm text-neutral-600 text-center">
                <Link href="/terms" className="text-cbrs-terracotta-600 hover:underline">View our Terms of Service</Link>
                {' '} | {' '}
                <Link href="/contact" className="text-cbrs-terracotta-600 hover:underline">Contact Us</Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
