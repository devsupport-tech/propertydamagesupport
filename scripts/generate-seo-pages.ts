#!/usr/bin/env ts-node
/**
 * Programmatic SEO Page Generator
 *
 * Usage:
 *   npm run generate:seo -- --type neighborhoods
 *   npm run generate:seo -- --type zipcodes
 *   npm run generate:seo -- --type emergency
 *   npm run generate:seo -- --all
 */

import * as fs from 'fs';
import * as path from 'path';
import { houstonNeighborhoods, houstonZipCodes, contentVariations, faqTemplates } from '../src/config/locations';
import { services } from '../src/config/site';

interface GenerateOptions {
  type: 'neighborhoods' | 'zipcodes' | 'emergency' | 'all';
  dryRun?: boolean;
}

// Get random variation
function getRandomVariation<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Replace placeholders in template
function fillTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => vars[key] || match);
}

// Generate neighborhood page
function generateNeighborhoodPage(
  neighborhood: typeof houstonNeighborhoods[number],
  service: typeof services[number]
) {
  const pageDir = path.join(
    process.cwd(),
    'src/app/service-areas',
    neighborhood.city,
    neighborhood.slug,
    service.id
  );

  const headline = fillTemplate(getRandomVariation(contentVariations.heroHeadlines), {
    service: service.title,
    location: neighborhood.name,
  });

  const subheadline = fillTemplate(getRandomVariation(contentVariations.heroSubheadlines), {
    location: neighborhood.name,
    tagline: service.description,
  });

  const intro = fillTemplate(getRandomVariation(contentVariations.introDescriptions), {
    service: service.title.toLowerCase(),
    location: neighborhood.name,
  });

  const content = `import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: \`${service.title} in ${neighborhood.name} | \${siteConfig.name}\`,
  description: \`${intro.substring(0, 155)}\`,
};

export default function ${toPascalCase(neighborhood.slug)}${toPascalCase(service.id)}Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex justify-center mb-6">
            <nav className="flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm">
              <Link href="/service-areas" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                Service Areas
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/service-areas/${neighborhood.city}" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                ${titleCase(neighborhood.city)}
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/service-areas/${neighborhood.city}/${neighborhood.slug}" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                ${neighborhood.name}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">${service.title}</span>
            </nav>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary text-center mb-4">
            ${headline}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            ${subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={\`tel:\${siteConfig.phoneRaw}\`}
              className="px-8 py-4 bg-cbrs-emergency text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>📞</span>
              Call Now: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 glass-card text-cbrs-primary text-lg font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {[\`Serving ${neighborhood.name}\`, '24/7 Emergency', 'Licensed & Insured', 'Free Estimates'].map((badge, idx) => (
              <div key={idx} className="px-4 py-2 glass-card rounded-full text-sm font-medium text-cbrs-primary">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            ${intro}
          </p>
        </div>
      </section>

      {/* Neighborhood-Specific Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-8">
            ${service.title} in ${neighborhood.name}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              ${neighborhood.description}
            </p>

            ${neighborhood.zipCodes.length > 0 ? `
            <p>
              We serve all zip codes in ${neighborhood.name}, including ${neighborhood.zipCodes.join(', ')}.
              Our local technicians are familiar with the specific challenges facing ${neighborhood.name} properties.
            </p>
            ` : ''}

            <p>
              Whether you're dealing with flood damage from nearby bayous, pipe bursts in older homes,
              or storm damage from Houston's severe weather, our ${neighborhood.name} team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-12">
            Common Questions About ${service.title} in ${neighborhood.name}
          </h2>

          <div className="space-y-6">
            ${Object.entries(faqTemplates).map(([key, faq]) => `
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                ${fillTemplate(faq.question, { location: neighborhood.name, service: service.title.toLowerCase() })}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ${fillTemplate(faq.answer, { location: neighborhood.name, service: service.title.toLowerCase() })}
              </p>
            </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency ${service.title} in ${neighborhood.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 - immediate response to ${neighborhood.name}
          </p>
          <a
            href={\`tel:\${siteConfig.phoneRaw}\`}
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-cbrs-emergency text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            <span className="text-2xl">📞</span>
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
`;

  return { pageDir, content };
}

// Generate ZIP code page
function generateZipCodePage(
  zipCode: typeof houstonZipCodes[number],
  service: typeof services[number]
) {
  const pageDir = path.join(
    process.cwd(),
    'src/app/zip',
    zipCode.code,
    service.id
  );

  const locationName = `${zipCode.city} ${zipCode.code}`;
  const headline = fillTemplate(getRandomVariation(contentVariations.heroHeadlines), {
    service: service.title,
    location: locationName,
  });

  const subheadline = fillTemplate(getRandomVariation(contentVariations.heroSubheadlines), {
    location: locationName,
    tagline: service.description,
  });

  const intro = fillTemplate(getRandomVariation(contentVariations.introDescriptions), {
    service: service.title.toLowerCase(),
    location: locationName,
  });

  const neighborhoodLink = zipCode.neighborhood
    ? `<Link href="/service-areas/${zipCode.city.toLowerCase()}/${zipCode.neighborhood}" className="text-cbrs-accent hover:underline">
        ${zipCode.neighborhood.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
      </Link>`
    : 'the area';

  const content = `import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: \`${service.title} ${zipCode.code} | \${siteConfig.name}\`,
  description: \`${intro.substring(0, 155)}\`,
};

export default function Zip${zipCode.code}${toPascalCase(service.id)}Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex justify-center mb-6">
            <nav className="flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm">
              <Link href="/service-areas" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                Service Areas
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/zip/${zipCode.code}" className="text-cbrs-primary hover:text-cbrs-accent transition-colors">
                ${zipCode.code}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">${service.title}</span>
            </nav>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary text-center mb-4">
            ${headline}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            ${subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={\`tel:\${siteConfig.phoneRaw}\`}
              className="px-8 py-4 bg-cbrs-emergency text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>📞</span>
              Call Now: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 glass-card text-cbrs-primary text-lg font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {[\`Serving ZIP ${zipCode.code}\`, '24/7 Emergency', 'Licensed & Insured', 'Free Estimates'].map((badge, idx) => (
              <div key={idx} className="px-4 py-2 glass-card rounded-full text-sm font-medium text-cbrs-primary">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            ${intro}
          </p>
        </div>
      </section>

      {/* ZIP Code Specific Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-8">
            ${service.title} for ZIP Code ${zipCode.code}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              We provide expert ${service.title.toLowerCase()} services throughout the ${zipCode.code} ZIP code area in ${zipCode.city}.
              ${zipCode.neighborhood ? `This area is part of ${neighborhoodLink}, and we're familiar with the specific challenges facing properties here.` : 'Our local technicians are ready to respond quickly to your emergency.'}
            </p>

            <p>
              Whether you're dealing with water damage from pipe bursts, fire damage, storm damage from Houston's severe weather,
              or mold issues, our ${zipCode.code} team provides fast, professional restoration services.
            </p>

            <p>
              Residents of ZIP ${zipCode.code} can expect 30-60 minute emergency response times and direct insurance assistance
              to make the restoration process as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-primary text-center mb-12">
            Common Questions About ${service.title} in ${zipCode.code}
          </h2>

          <div className="space-y-6">
            ${Object.entries(faqTemplates).map(([key, faq]) => `
            <div className="p-6 glass-card rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-cbrs-primary mb-3">
                ${fillTemplate(faq.question, { location: `ZIP ${zipCode.code}`, service: service.title.toLowerCase() })}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ${fillTemplate(faq.answer, { location: `the ${zipCode.code} area`, service: service.title.toLowerCase() })}
              </p>
            </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 px-6 bg-cbrs-emergency">
        <div className="container max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency ${service.title} in ${zipCode.code}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're available 24/7 - immediate response to ZIP ${zipCode.code}
          </p>
          <a
            href={\`tel:\${siteConfig.phoneRaw}\`}
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-cbrs-emergency text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            <span className="text-2xl">📞</span>
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
`;

  return { pageDir, content };
}

// Helper functions
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function titleCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Main generation function
async function generate(options: GenerateOptions) {
  console.log(`\n🚀 Generating ${options.type} pages...\n`);

  let pagesGenerated = 0;

  if (options.type === 'neighborhoods' || options.type === 'all') {
    console.log('📍 Generating neighborhood pages...');

    for (const neighborhood of houstonNeighborhoods) {
      for (const service of services.filter(s => s.featured)) {
        const { pageDir, content } = generateNeighborhoodPage(neighborhood, service);

        if (options.dryRun) {
          console.log(`  Would create: ${pageDir}/page.tsx`);
        } else {
          fs.mkdirSync(pageDir, { recursive: true });
          fs.writeFileSync(path.join(pageDir, 'page.tsx'), content);
          console.log(`  ✓ Created: ${pageDir}/page.tsx`);
        }

        pagesGenerated++;
      }
    }
  }

  if (options.type === 'zipcodes' || options.type === 'all') {
    console.log('📮 Generating ZIP code pages...');

    for (const zipCode of houstonZipCodes) {
      for (const service of services.filter(s => s.featured)) {
        const { pageDir, content } = generateZipCodePage(zipCode, service);

        if (options.dryRun) {
          console.log(`  Would create: ${pageDir}/page.tsx`);
        } else {
          fs.mkdirSync(pageDir, { recursive: true });
          fs.writeFileSync(path.join(pageDir, 'page.tsx'), content);
          console.log(`  ✓ Created: ${pageDir}/page.tsx`);
        }

        pagesGenerated++;
      }
    }
  }

  console.log(`\n✅ Generated ${pagesGenerated} pages!\n`);

  if (!options.dryRun) {
    console.log('📝 Next steps:');
    console.log('  1. Regenerate sitemap: npm run build');
    console.log('  2. Test a few pages: npm run dev');
    console.log('  3. Check for duplicate content issues');
  }
}

// CLI
const args = process.argv.slice(2);

// Parse --type argument
let type: GenerateOptions['type'] = 'neighborhoods';
const typeIndex = args.indexOf('--type');
if (typeIndex !== -1 && args[typeIndex + 1]) {
  const typeArg = args[typeIndex + 1] as GenerateOptions['type'];
  if (['neighborhoods', 'zipcodes', 'emergency', 'all'].includes(typeArg)) {
    type = typeArg;
  }
} else if (args.includes('--all')) {
  type = 'all';
} else if (args.includes('--neighborhoods')) {
  type = 'neighborhoods';
} else if (args.includes('--zipcodes')) {
  type = 'zipcodes';
} else if (args.includes('--emergency')) {
  type = 'emergency';
}

const dryRun = args.includes('--dry-run');

generate({ type, dryRun });
