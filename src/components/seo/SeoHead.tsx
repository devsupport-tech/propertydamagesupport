import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string; // Path only — will be appended to site URL
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  keywords?: string;
  /** Optional pre-built JSON-LD entities to inject for this page. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = 'https://cbrsgroup.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_IMAGE_ALT = 'CBRS Group — Houston property damage restoration field division';

/**
 * One Helmet block for the whole page — sets canonical, OG, Twitter, robots, JSON-LD.
 * Use this on every routed page instead of hand-rolling tags.
 */
export default function SeoHead({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = 'website',
  noindex = false,
  keywords,
  jsonLd,
}: SeoHeadProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes('CBRS') ? title : `${title} | CBRS Group`;
  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const ldArray = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="CBRS Group" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Per-page JSON-LD */}
      {ldArray.map((entity, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entity)}
        </script>
      ))}
    </Helmet>
  );
}
