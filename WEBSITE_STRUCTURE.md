# CBRS Group Website - Structure & Expansion Guide

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [How Pages Work](#how-pages-work)
5. [Adding New Pages](#adding-new-pages)
6. [Expanding to New Geographic Areas](#expanding-to-new-geographic-areas)
7. [SEO Best Practices](#seo-best-practices)
8. [Deployment](#deployment)

---

## Architecture Overview

### Current Setup
- **Framework:** React + Vite (migrated from Next.js)
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **SEO:** react-helmet-async
- **Deployment:** Docker + nginx on Coolify
- **Domain:** cbrsgroup.com

### Page Types
1. **Static Pages** - About, Contact, Insurance Help
2. **Service Pages** - Coming soon (water damage, fire damage, etc.)
3. **Service Area Pages** - Geographic location pages (Houston, Katy, etc.)
4. **Dynamic Pages** - Service areas use dynamic routing

---

## Project Structure

```
propertydamagesupport/
├── public/
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       └── cbrs-logo.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Site navigation
│   │   ├── Footer.tsx              # Site footer
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServicesGrid.tsx
│   │       ├── OurProcess.tsx
│   │       └── Testimonials.tsx
│   │
│   ├── config/
│   │   └── site.ts                 # ⭐ CENTRAL CONFIG
│   │
│   ├── pages/
│   │   ├── Index.tsx               # Homepage
│   │   ├── About.tsx               # About page
│   │   ├── Contact.tsx             # Contact page
│   │   ├── InsuranceHelp.tsx       # Insurance help page
│   │   ├── NotFound.tsx            # 404 page
│   │   └── service-areas/
│   │       ├── ServiceAreasIndex.tsx  # /service-areas
│   │       └── CityPage.tsx           # /service-areas/:city
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── App.tsx                     # ⭐ ROUTE DEFINITIONS
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── Dockerfile
├── nginx.conf
└── package.json
```

---

## Tech Stack

### Core Dependencies
```json
{
  "@tanstack/react-query": "^5.62.15",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-router-dom": "^6.30.1",
  "tailwindcss": "^3.4.17"
}
```

### Key Files

#### 1. `src/config/site.ts` - Central Configuration
Contains ALL site-wide settings:
- Company information
- Phone numbers
- Email
- Social media links
- Service definitions
- Service area definitions (Tier 1, 2, 3 cities)

#### 2. `src/App.tsx` - Route Definitions
All routes are defined here:
```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/insurance-help" element={<InsuranceHelp />} />
  <Route path="/service-areas" element={<ServiceAreasIndex />} />
  <Route path="/service-areas/:city" element={<CityPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

#### 3. `public/sitemap.xml` - SEO Sitemap
Lists all pages for search engines. **Must be updated** when adding new pages.

---

## How Pages Work

### Standard Page Template

Every page follows this structure:

```typescript
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function PageName() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Page Title | CBRS Group</title>
        <meta name="description" content="Page description" />
        <link rel="canonical" href="https://cbrsgroup.com/page-url" />
        <meta property="og:url" content="https://cbrsgroup.com/page-url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page Title | CBRS Group" />
        <meta property="og:description" content="Page description" />
      </Helmet>

      {/* Page Layout */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Page content here */}
        </main>

        <Footer />
      </div>
    </>
  );
}
```

### Dynamic Pages (Service Areas)

Service area pages use React Router's `useParams` hook:

```typescript
import { useParams, Navigate } from 'react-router-dom';

export default function CityPage() {
  const { city: slug } = useParams<{ city: string }>();
  const city = allServiceAreas.find((c) => c.slug === slug);

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  return (/* page content */);
}
```

---

## Adding New Pages

### Option 1: Static Page (e.g., "Our Team")

**Step 1:** Create the page component
```bash
# Create file: src/pages/Team.tsx
```

```typescript
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | CBRS Group</title>
        <meta name="description" content="Meet the CBRS Group team" />
        <link rel="canonical" href="https://cbrsgroup.com/team" />
        <meta property="og:url" content="https://cbrsgroup.com/team" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Team content */}
        </main>
        <Footer />
      </div>
    </>
  );
}
```

**Step 2:** Add route in `src/App.tsx`
```typescript
import Team from "./pages/Team";

// Add to Routes:
<Route path="/team" element={<Team />} />
```

**Step 3:** Add to sitemap (`public/sitemap.xml`)
```xml
<url>
  <loc>https://cbrsgroup.com/team</loc>
  <lastmod>2026-06-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Step 4:** Add to navigation (optional)
Edit `src/components/Navbar.tsx` to add link.

---

### Option 2: Service Page (e.g., "Water Damage")

**Step 1:** Create the page
```bash
# Create file: src/pages/services/WaterDamage.tsx
```

**Step 2:** Update `src/config/site.ts`
```typescript
export const services = [
  {
    id: "water-damage",
    title: "Water Damage Restoration",
    description: "24/7 emergency water damage restoration...",
    icon: "💧",
    href: "/services/water-damage",
    featured: true,
  },
  // ... other services
];
```

**Step 3:** Add route
```typescript
<Route path="/services/water-damage" element={<WaterDamage />} />
```

**Step 4:** Update sitemap

---

## Expanding to New Geographic Areas

### Current Structure (Single State - Texas)
```
/service-areas                    # All areas
/service-areas/houston           # City page
/service-areas/katy              # City page
```

### Recommended: Multi-State Structure

When expanding to Florida, New Jersey, etc., use state-based URLs:

```
/service-areas                           # All states
/service-areas/texas                     # Texas overview
/service-areas/texas/houston            # Houston, TX
/service-areas/texas/katy               # Katy, TX
/service-areas/florida                   # Florida overview
/service-areas/florida/miami            # Miami, FL
/service-areas/florida/tampa            # Tampa, FL
/service-areas/new-jersey               # New Jersey overview
/service-areas/new-jersey/newark       # Newark, NJ
```

---

## Step-by-Step: Add Florida Service Areas

### Step 1: Update `src/config/site.ts`

**Current structure:**
```typescript
export const serviceAreas = {
  tier1: [
    { name: "Houston", slug: "houston", featured: true },
    // ...
  ]
};
```

**New structure (state-based):**
```typescript
export const states = {
  texas: {
    name: "Texas",
    slug: "texas",
    abbreviation: "TX",
    serviceAreas: {
      tier1: [
        { name: "Houston", slug: "houston", featured: true },
        { name: "Katy", slug: "katy", featured: true },
        { name: "Sugar Land", slug: "sugar-land", featured: true },
      ],
      tier2: [
        { name: "Spring", slug: "spring" },
        { name: "Humble", slug: "humble" },
      ],
      tier3: [
        { name: "Baytown", slug: "baytown" },
      ],
    },
  },
  florida: {
    name: "Florida",
    slug: "florida",
    abbreviation: "FL",
    serviceAreas: {
      tier1: [
        { name: "Miami", slug: "miami", featured: true },
        { name: "Tampa", slug: "tampa", featured: true },
        { name: "Orlando", slug: "orlando", featured: true },
      ],
      tier2: [
        { name: "Jacksonville", slug: "jacksonville" },
        { name: "Fort Lauderdale", slug: "fort-lauderdale" },
      ],
      tier3: [],
    },
  },
} as const;

// Helper functions
export const allStates = Object.values(states);

export const getAllCities = () => {
  return allStates.flatMap(state =>
    [
      ...state.serviceAreas.tier1,
      ...state.serviceAreas.tier2,
      ...state.serviceAreas.tier3,
    ].map(city => ({
      ...city,
      stateSlug: state.slug,
      stateName: state.name,
      stateAbbreviation: state.abbreviation,
    }))
  );
};
```

### Step 2: Create State Landing Page

```bash
# Create: src/pages/service-areas/StatePage.tsx
```

```typescript
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { states } from '@/config/site';

export default function StatePage() {
  const { state: stateSlug } = useParams<{ state: string }>();
  const state = Object.values(states).find(s => s.slug === stateSlug);

  if (!state) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Property Damage Restoration in {state.name} | CBRS Group</title>
        <meta name="description" content={`24/7 emergency property damage restoration services across ${state.name}.`} />
        <link rel="canonical" href={`https://cbrsgroup.com/service-areas/${state.slug}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <h1>{state.name} Service Areas</h1>

          {/* List all cities in this state */}
          <section>
            <h2>Primary Service Areas</h2>
            {state.serviceAreas.tier1.map(city => (
              <Link
                key={city.slug}
                to={`/service-areas/${state.slug}/${city.slug}`}
              >
                {city.name}
              </Link>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
```

### Step 3: Update `CityPage.tsx` for Multi-State

```typescript
import { useParams, Navigate } from 'react-router-dom';
import { states } from '@/config/site';

export default function CityPage() {
  const { state: stateSlug, city: citySlug } = useParams<{
    state: string;
    city: string
  }>();

  // Find state
  const state = Object.values(states).find(s => s.slug === stateSlug);
  if (!state) return <Navigate to="/404" replace />;

  // Find city within state
  const allCities = [
    ...state.serviceAreas.tier1,
    ...state.serviceAreas.tier2,
    ...state.serviceAreas.tier3,
  ];
  const city = allCities.find(c => c.slug === citySlug);
  if (!city) return <Navigate to="/404" replace />;

  return (
    <>
      <Helmet>
        <title>Property Damage Restoration in {city.name}, {state.abbreviation} | CBRS Group</title>
        <link rel="canonical" href={`https://cbrsgroup.com/service-areas/${stateSlug}/${citySlug}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <h1>Property Damage Restoration in {city.name}, {state.name}</h1>
          {/* City-specific content */}
        </main>
        <Footer />
      </div>
    </>
  );
}
```

### Step 4: Update Routes in `src/App.tsx`

```typescript
import StatePage from "./pages/service-areas/StatePage";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/insurance-help" element={<InsuranceHelp />} />

  {/* Service Areas - State Based */}
  <Route path="/service-areas" element={<ServiceAreasIndex />} />
  <Route path="/service-areas/:state" element={<StatePage />} />
  <Route path="/service-areas/:state/:city" element={<CityPage />} />

  <Route path="*" element={<NotFound />} />
</Routes>
```

### Step 5: Update Sitemap

Update `public/sitemap.xml` to include all new Florida pages:

```xml
<!-- Florida State Page -->
<url>
  <loc>https://cbrsgroup.com/service-areas/florida</loc>
  <lastmod>2026-06-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>

<!-- Florida Cities -->
<url>
  <loc>https://cbrsgroup.com/service-areas/florida/miami</loc>
  <lastmod>2026-06-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://cbrsgroup.com/service-areas/florida/tampa</loc>
  <lastmod>2026-06-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Step 6: Add Marketing Shortcuts (Optional)

For clean marketing URLs:

```typescript
// In App.tsx
<Route path="/texas" element={<Navigate to="/service-areas/texas" replace />} />
<Route path="/florida" element={<Navigate to="/service-areas/florida" replace />} />
```

Now you can market:
- `cbrsgroup.com/texas`
- `cbrsgroup.com/florida`

---

## SEO Best Practices

### Required on Every Page

1. **Title Tag** - Unique per page
```typescript
<title>Page Name | CBRS Group</title>
```

2. **Meta Description** - 150-160 characters
```typescript
<meta name="description" content="..." />
```

3. **Canonical URL** - Prevents duplicate content
```typescript
<link rel="canonical" href="https://cbrsgroup.com/page-url" />
```

4. **Open Graph Tags** - For social media
```typescript
<meta property="og:url" content="https://cbrsgroup.com/page-url" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Page Title | CBRS Group" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://cbrsgroup.com/og-image.png" />
```

### Sitemap Priority Guidelines

- **1.0** - Homepage only
- **0.9** - High-priority pages (Contact, State overviews)
- **0.8** - Tier 1 cities, Main service pages
- **0.7** - Tier 2 cities, Secondary pages
- **0.6** - Tier 3 cities, Blog posts
- **0.5** - Archive pages, Tags

### Internal Linking

Always link between related pages:
- City pages should link to nearby cities
- Service pages should link to related services
- All pages should have breadcrumbs for navigation

---

## Deployment

### Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output: dist/ directory
```

### Docker Deployment

The site uses Docker with nginx:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
```

### Deployment Workflow

1. **Commit changes to git**
```bash
git add .
git commit -m "feat: add new service area"
git push origin master
```

2. **Coolify auto-deploys** from master branch

3. **Verify deployment**
- Check https://cbrsgroup.com
- Test new pages
- Check sitemap: https://cbrsgroup.com/sitemap.xml

---

## Common Tasks Checklist

### Adding a New Service Area City

- [ ] Update `src/config/site.ts` - Add city to appropriate tier
- [ ] Update `public/sitemap.xml` - Add city URL
- [ ] Test locally: `npm run dev`
- [ ] Check `/service-areas` page shows new city
- [ ] Check `/service-areas/new-city` loads correctly
- [ ] Commit and push to deploy

### Adding a New State

- [ ] Update `src/config/site.ts` - Add state with cities
- [ ] Create `StatePage.tsx` if not exists
- [ ] Update `CityPage.tsx` to handle state parameter
- [ ] Update routes in `App.tsx`
- [ ] Update `public/sitemap.xml` - Add all new URLs
- [ ] Test all new pages locally
- [ ] Commit and push to deploy

### Adding a New Service Page

- [ ] Create service page component in `src/pages/services/`
- [ ] Update `src/config/site.ts` - Add to services array
- [ ] Add route in `src/App.tsx`
- [ ] Update `public/sitemap.xml`
- [ ] Update navigation if needed
- [ ] Commit and push

---

## Troubleshooting

### Page Not Found (404)

1. Check route is added to `App.tsx`
2. Verify component is imported correctly
3. Check URL matches route path exactly
4. Test with `npm run dev` locally

### SEO Tags Not Showing

1. Verify `<Helmet>` component is used
2. Check tags are inside `<Helmet>` block
3. View page source (right-click → View Page Source)
4. Tags should be in `<head>` section

### New City Not Showing

1. Check city is added to `src/config/site.ts`
2. Verify slug matches URL (lowercase, hyphens for spaces)
3. Clear browser cache and refresh
4. Check component is using correct tier array

---

## Future Enhancements

### Recommended Next Steps

1. **Add all 9 service pages** (water damage, fire damage, etc.)
2. **Create blog section** for SEO content
3. **Add testimonials page** with reviews
4. **Implement contact form backend** (currently frontend only)
5. **Add photo galleries** for before/after projects
6. **Multi-state expansion** using state-based structure
7. **Add location-specific phone numbers** per state
8. **Implement live chat** widget
9. **Add emergency request form** with SMS notifications
10. **Create resource center** with guides and checklists

---

## Support & Questions

### Key Files Reference
- **Site Config:** `src/config/site.ts`
- **Routes:** `src/App.tsx`
- **Sitemap:** `public/sitemap.xml`
- **Styling:** `tailwind.config.ts`
- **Build:** `vite.config.ts`
- **Deployment:** `Dockerfile` + `nginx.conf`

### Development Commands
```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Important URLs
- **Production:** https://cbrsgroup.com
- **Health Check:** https://cbrsgroup.com/health
- **Sitemap:** https://cbrsgroup.com/sitemap.xml
- **Robots:** https://cbrsgroup.com/robots.txt

---

**Last Updated:** June 3, 2026
**Current Version:** React + Vite with 33 pages (1 homepage + 3 core pages + 1 service areas index + 28 city pages)
**Page Components:** 8 React components (Index, About, Contact, InsuranceHelp, ServiceAreasIndex, CityPage, NotFound, App)
