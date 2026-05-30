import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-3xl mx-auto text-center">
        <div className="text-8xl md:text-9xl font-bold text-cbrs-primary mb-6 opacity-20">
          404
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cbrs-primary mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          We couldn't find the page you're looking for. It may have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="px-8 py-4 bg-cbrs-primary hover:bg-opacity-90 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 glass-card text-cbrs-primary text-lg font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all"
          >
            Contact Us
          </Link>
        </div>

        <div className="glass-card p-8 rounded-2xl max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-cbrs-primary mb-4">
            Need Emergency Help?
          </h2>
          <p className="text-gray-700 mb-6">
            If you're experiencing a property damage emergency, don't wait:
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cbrs-emergency hover:bg-red-700 text-white text-xl font-bold rounded-full shadow-lg transition-all hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            Call Now: {siteConfig.phone}
          </a>
          <p className="text-sm text-gray-600 mt-4">
            Available 24/7 • 30-60 minute response time
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/water-damage" className="text-cbrs-accent hover:underline">
              Water Damage
            </Link>
            <Link href="/fire-damage" className="text-cbrs-accent hover:underline">
              Fire Damage
            </Link>
            <Link href="/storm-damage" className="text-cbrs-accent hover:underline">
              Storm Damage
            </Link>
            <Link href="/service-areas" className="text-cbrs-accent hover:underline">
              Service Areas
            </Link>
            <Link href="/about" className="text-cbrs-accent hover:underline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
