# Programmatic SEO Page Generation

This directory contains scripts for systematically generating SEO-optimized neighborhood and location pages.

## Overview

The programmatic SEO system allows you to generate hundreds of location-specific pages with unique content variations to avoid duplicate content penalties while maintaining scalability.

## Current Status

- **210 neighborhood pages** generated (35 Houston neighborhoods × 6 services)
- **390 ZIP code pages** generated (65 ZIP codes × 6 services)
- **Content variation system** in place (5 headline variations, 5 subheadline variations, 4 intro variations)
- **Automated sitemap generation** configured
- **Total pages**: 800+ (including city pages, service pages, neighborhood pages, and ZIP code pages)

## Quick Start

### Generate all neighborhood pages (default):
```bash
npm run generate:seo
# or
npm run generate:seo -- --type neighborhoods
```

### Generate ZIP code pages:
```bash
npm run generate:seo -- --type zipcodes
```

### Generate all page types:
```bash
npm run generate:seo -- --type all
```

### Dry run to preview without creating files:
```bash
npm run generate:seo -- --dry-run
npm run generate:seo -- --type zipcodes --dry-run
npm run generate:seo -- --type all --dry-run
```

## How to Add New Locations

### 1. Add Neighborhoods

Edit `src/config/locations.ts` and add to the `houstonNeighborhoods` array:

```typescript
{
  name: 'New Neighborhood Name',
  slug: 'new-neighborhood-slug',  // URL-friendly version
  city: 'houston',
  zipCodes: ['77001', '77002'],   // ZIP codes served
  keywords: ['keyword1', 'keyword2'],
  description: 'Brief description of this neighborhood for SEO',
}
```

### 2. Add ZIP Codes

Edit `src/config/locations.ts` and add to the `houstonZipCodes` array:

```typescript
{
  code: '77001',
  city: 'Houston',
  neighborhood: 'neighborhood-slug'  // Optional: link to neighborhood
}
```

### 3. Run the generation script

```bash
npm run generate:seo
```

This will create pages for all new neighborhoods across all featured services.

### 4. Update the sitemap

The sitemap is automatically updated to include new pages. You can verify it by visiting:
```
http://localhost:3000/sitemap.xml
```

Or run a production build:
```bash
npm run build
```

## Content Variation Strategy

To avoid duplicate content penalties, the system uses randomized templates:

### Hero Headlines (5 variations)
- `{service} in {location}`
- `Emergency {service} - {location}`
- `{location} {service}`
- `24/7 {service} in {location}`
- `Fast {service} - {location}, TX`

### Hero Subheadlines (5 variations)
- `Fast response to {location} · {tagline}`
- `{tagline} · Serving {location} 24/7`
- `24/7 emergency service in {location}`
- `{location} property damage specialists`
- `Immediate response to {location} residents`

### Intro Descriptions (4 variations)
Each with different phrasing about response time, licensing, and availability.

### FAQ Templates (4 standard questions)
- Response time
- Service area coverage
- Insurance assistance
- Cost estimates

**Each page gets random variations**, ensuring no two pages are identical while maintaining quality and relevance.

## File Structure

```
src/
├── app/
│   ├── service-areas/
│   │   └── houston/
│   │       ├── downtown/
│   │       │   ├── water-damage/page.tsx
│   │       │   ├── fire-damage/page.tsx
│   │       │   └── ... (6 services per neighborhood)
│   │       ├── memorial/
│   │       ├── river-oaks/
│   │       └── ... (35 neighborhoods total)
│   └── zip/
│       ├── 77002/
│       │   ├── water-damage/page.tsx
│       │   ├── fire-damage/page.tsx
│       │   └── ... (6 services per ZIP code)
│       ├── 77006/
│       ├── 77449/
│       └── ... (65 ZIP codes total)
├── config/
│   ├── locations.ts        # Location data and templates
│   └── site.ts             # Site-wide configuration
└── scripts/
    ├── generate-seo-pages.ts  # Generation script
    └── README.md              # This file
```

## URL Structure

Generated pages follow these patterns:

### Neighborhood Pages
```
/service-areas/{city}/{neighborhood}/{service-id}
```

Examples:
- `/service-areas/houston/downtown/water-damage`
- `/service-areas/houston/river-oaks/fire-damage`
- `/service-areas/houston/the-heights/mold`

### ZIP Code Pages
```
/zip/{zip-code}/{service-id}
```

Examples:
- `/zip/77002/water-damage`
- `/zip/77006/mold`
- `/zip/77449/fire-damage`

## SEO Features

Each generated page includes:
- ✅ **Unique meta title and description**
- ✅ **Breadcrumb navigation**
- ✅ **Location-specific content**
- ✅ **ZIP code integration**
- ✅ **FAQ section with local context**
- ✅ **Emergency CTA sections**
- ✅ **Trust badges**
- ✅ **Randomized content to avoid duplication**

## Sitemap Integration

The sitemap (`src/app/sitemap.ts`) automatically includes:
- Static pages (priority: 1.0 - 0.8)
- Service hub pages (priority: 0.9)
- City pages (priority: 0.8)
- City + Service pages (priority: 0.7)
- **Neighborhood + Service pages (priority: 0.6)** ← 210 pages
- **ZIP Code + Service pages (priority: 0.5)** ← 390 pages

Total URLs in sitemap: **800+**

## Scaling Strategy

### Current Scale ✅
- **35 neighborhoods** × 6 services = **210 pages**
- **65 ZIP codes** × 6 services = **390 pages**
- **Total programmatic pages: 600**
- **Total site pages: 800+** (including static pages, city pages, service pages)

### Future Expansion Options

1. **More Houston neighborhoods** (Target: 50 total = 90 additional pages)
   - Museum District, Uptown, Rice Military
   - Inner Loop neighborhoods
   - Suburban areas

2. **More ZIP codes** (Target: 100 total = 210 additional pages)
   - Expand to all major Houston metro ZIP codes
   - Include Katy, Sugar Land, Pearland, The Woodlands ZIP codes

3. **Emergency landing pages** (Target: 28 cities × 6 services = 168 pages)
   - Create `/emergency/{city}/{service}` pattern
   - Optimized for "emergency water damage houston" queries
   - Implement `generateEmergencyPage()` function

4. **Expand to other cities**
   - Katy, Sugar Land, Pearland, The Woodlands
   - Each with neighborhood-level breakdown

### Estimated Total Potential
- 50 Houston neighborhoods × 6 services = **300 pages** (90 more to add)
- 100 ZIP codes × 6 services = **600 pages** (210 more to add)
- 28 cities emergency × 6 services = **168 pages** (new)
- **Total: 1,068+ pages** (vs current 800)

## Best Practices

### Before Running Generation
1. ✅ Verify location data is accurate
2. ✅ Check service list in `src/config/site.ts`
3. ✅ Review content variations for quality
4. ✅ Run in `--dry-run` mode first

### After Running Generation
1. ✅ Test a few pages manually
2. ✅ Run `npm run build` to regenerate sitemap
3. ✅ Check `/sitemap.xml` for all new URLs
4. ✅ Verify no duplicate content issues
5. ✅ Test mobile responsiveness

## Troubleshooting

### Pages return 500 error
- Check for syntax errors in generated files
- Ensure all template variables are filled
- Verify imports in page files

### Duplicate content warnings
- Add more content variations to `locations.ts`
- Increase randomization in templates
- Add neighborhood-specific content

### Build errors
- Check TypeScript types in generated files
- Verify all imports resolve correctly
- Run `npm run build` to see specific errors

## Technical Details

### Template Variables
- `{service}` - Service title (e.g., "Water Damage")
- `{location}` - Neighborhood name (e.g., "Downtown Houston")
- `{tagline}` - Service tagline from config

### Helper Functions
- `fillTemplate()` - Replaces template variables
- `getRandomVariation()` - Selects random content
- `toPascalCase()` - Converts slugs to component names
- `titleCase()` - Capitalizes first letter

### Generated Component Structure
```typescript
export const metadata: Metadata = { /* SEO metadata */ };

export default function {Neighborhood}{Service}Page() {
  return (
    <main>
      {/* Hero Section */}
      {/* Service Overview */}
      {/* Neighborhood Info */}
      {/* FAQ Section */}
      {/* Emergency CTA */}
    </main>
  );
}
```

## Next Steps

- [ ] Add ZIP code page generation
- [ ] Create emergency landing page variant
- [ ] Expand to other major cities
- [ ] Add more content variations
- [ ] Implement dynamic neighborhood pages (vs static generation)
- [ ] Add neighborhood-level landing pages with service grid

## Support

For questions or issues with the generation system, check:
1. This README
2. `src/config/locations.ts` - Location data structure
3. `scripts/generate-seo-pages.ts` - Generation logic
4. `src/app/sitemap.ts` - Sitemap configuration
