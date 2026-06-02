import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | CBRS Group</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-cbrs-navy-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-cbrs-navy-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Go to Homepage
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-cbrs-navy-900 text-cbrs-navy-900 hover:bg-cbrs-navy-900 hover:text-white rounded-xl font-semibold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
