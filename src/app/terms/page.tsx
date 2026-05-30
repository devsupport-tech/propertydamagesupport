import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: 'Terms of Service for Property Damage Support - Legal terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cbrs-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-700">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <div className="p-6 bg-blue-50 rounded-xl mb-12">
              <p className="text-gray-800 font-medium">
                These Terms of Service ("Terms") govern your use of {siteConfig.name}'s website and services. By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">1. Services Overview</h2>

            <p className="text-gray-700 mb-4">
              {siteConfig.name} provides emergency property damage restoration services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Water damage restoration and mitigation</li>
              <li>Fire and smoke damage restoration</li>
              <li>Storm damage repair</li>
              <li>Mold inspection and remediation</li>
              <li>Aerial drone inspections</li>
              <li>Insurance claim assistance</li>
            </ul>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">2. Service Agreements</h2>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">2.1 Estimates and Quotes</h3>
            <p className="text-gray-700 mb-6">
              All estimates and quotes provided are preliminary assessments based on initial inspections. Final costs may vary based on the extent of damage discovered during restoration work, unforeseen complications, or changes in scope requested by the customer.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">2.2 Work Authorization</h3>
            <p className="text-gray-700 mb-6">
              By authorizing work to begin, you agree to the scope of services outlined in the work order or service agreement. Any changes to the scope of work must be approved in writing and may result in additional charges.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">2.3 Emergency Services</h3>
            <p className="text-gray-700 mb-6">
              Emergency response services may be initiated to prevent further damage to your property. By requesting emergency services, you authorize us to take immediate action to mitigate damage and understand that formal documentation may follow after initial response.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">3. Payment Terms</h2>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">3.1 Payment Methods</h3>
            <p className="text-gray-700 mb-6">
              We accept payment via cash, check, credit card, and insurance assignment. Payment terms will be specified in your service agreement.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">3.2 Insurance Claims</h3>
            <p className="text-gray-700 mb-4">
              When working with insurance companies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>You remain responsible for payment of all services rendered</li>
              <li>We will work directly with your insurance company when authorized</li>
              <li>You are responsible for any amounts not covered by insurance</li>
              <li>You must pay any deductible as specified in your policy</li>
              <li>Insurance claim assistance does not guarantee claim approval</li>
            </ul>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">3.3 Late Payments</h3>
            <p className="text-gray-700 mb-6">
              Late payments may be subject to interest charges as permitted by law. Accounts more than 30 days past due may be referred to collections, and you will be responsible for all collection costs, including reasonable attorney fees.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">4. Customer Responsibilities</h2>

            <p className="text-gray-700 mb-4">
              As a customer, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide accurate information about the damage and property</li>
              <li>Ensure safe access to the property for our technicians</li>
              <li>Remove or secure valuable items before work begins</li>
              <li>Maintain adequate insurance coverage on your property</li>
              <li>Notify us promptly of any changes affecting the work</li>
              <li>Follow recommended safety precautions during restoration</li>
              <li>Make timely payments according to the agreed terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">5. Warranties and Guarantees</h2>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">5.1 Workmanship Warranty</h3>
            <p className="text-gray-700 mb-6">
              We warrant that our work will be performed in a professional and workmanlike manner in accordance with industry standards. This warranty is limited to correcting defects in our workmanship and does not cover issues arising from pre-existing conditions, normal wear and tear, or improper maintenance.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">5.2 Limitations</h3>
            <p className="text-gray-700 mb-6">
              We make no warranties regarding the complete removal of mold, odors, or stains, as complete removal may not always be possible. We will make best efforts using industry-standard methods and equipment.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">6. Liability and Indemnification</h2>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">6.1 Limitation of Liability</h3>
            <p className="text-gray-700 mb-6">
              Our liability for any claim arising from our services is limited to the amount paid for the specific services that gave rise to the claim. We are not liable for consequential, incidental, or indirect damages, including loss of business, profits, or data.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">6.2 Force Majeure</h3>
            <p className="text-gray-700 mb-6">
              We are not liable for delays or failure to perform due to circumstances beyond our reasonable control, including natural disasters, acts of God, government actions, or labor disputes.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">6.3 Indemnification</h3>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold harmless {siteConfig.name}, CBRS Group, and their affiliates from any claims, damages, or expenses arising from your breach of these Terms or misuse of our services.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">7. Cancellation and Refunds</h2>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">7.1 Customer Cancellation</h3>
            <p className="text-gray-700 mb-6">
              You may cancel services before work begins without penalty. Cancellations after work has commenced may be subject to charges for work performed and materials ordered.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">7.2 Our Right to Cancel</h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to cancel services if conditions make it unsafe or impractical to proceed, if you breach these Terms, or if payment obligations are not met.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">8. Intellectual Property</h2>

            <p className="text-gray-700 mb-6">
              All content on our website, including text, graphics, logos, and images, is the property of {siteConfig.name} or CBRS Group and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without written permission.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">9. Privacy</h2>

            <p className="text-gray-700 mb-6">
              Your use of our services is also governed by our <Link href="/privacy" className="text-cbrs-accent hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect and use your information.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">10. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">10.1 Governing Law</h3>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-cbrs-primary mt-6 mb-3">10.2 Dispute Resolution Process</h3>
            <p className="text-gray-700 mb-4">
              In the event of a dispute:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>First, contact us to attempt informal resolution</li>
              <li>If informal resolution fails, disputes may be resolved through mediation</li>
              <li>Any legal action must be brought in the courts of Harris County, Texas</li>
            </ul>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">11. Severability</h2>

            <p className="text-gray-700 mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">12. Changes to Terms</h2>

            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective when posted on this page. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-cbrs-primary mt-12 mb-4">13. Contact Information</h2>

            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>

            <div className="p-6 glass-card rounded-xl mt-6">
              <p className="text-gray-800 font-semibold mb-3">{siteConfig.name}</p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-cbrs-accent hover:underline">{siteConfig.email}</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href={`tel:${siteConfig.phoneRaw}`} className="text-cbrs-accent hover:underline">{siteConfig.phone}</a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {siteConfig.address.full}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                By using {siteConfig.name}'s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-600 text-center">
                <Link href="/privacy" className="text-cbrs-accent hover:underline">View our Privacy Policy</Link>
                {' '} | {' '}
                <Link href="/contact" className="text-cbrs-accent hover:underline">Contact Us</Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
