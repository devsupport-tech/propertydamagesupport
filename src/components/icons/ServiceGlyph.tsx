// Industrial pictograms for the 9 service pillars.
// 36x36, stroke 2 — thicker than typical to read like signage/stencil glyphs.

import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const base: Props = {
  width: 36,
  height: 36,
  viewBox: '0 0 36 36',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
};

export function GlyphRestoration(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M5 16 L18 5 L31 16 V30 H5 Z" />
      <path d="M18 14 C14 18 13 21 13 23 a5 5 0 0 0 10 0 c0 -2 -1 -5 -5 -9 Z" fill="currentColor" stroke="none" opacity="0.18"/>
      <path d="M18 14 C14 18 13 21 13 23 a5 5 0 0 0 10 0 c0 -2 -1 -5 -5 -9 Z" />
    </svg>
  );
}

export function GlyphEstimating(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="5" width="26" height="26" />
      <path d="M11 5 V10 M16 5 V9 M21 5 V10 M26 5 V9" />
      <path d="M5 15 L31 15" />
      <path d="M11 22 H25 M11 26 H20" />
    </svg>
  );
}

export function GlyphClaims(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M7 9 H15 L18 13 H29 V29 H7 Z" />
      <path d="M12 21 L16 25 L24 17" />
    </svg>
  );
}

export function GlyphDesign(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="18" cy="18" r="13" />
      <circle cx="12" cy="14" r="2" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="10" r="2" fill="currentColor" stroke="none"/>
      <circle cx="24" cy="14" r="2" fill="currentColor" stroke="none"/>
      <circle cx="25" cy="21" r="2" fill="currentColor" stroke="none"/>
      <path d="M18 18 a4 4 0 0 0 4 7 c2 0 3 -1.5 3 -3" />
    </svg>
  );
}

export function GlyphOrganization(p: Props) {
  return (
    <svg {...base} {...p}>
      <rect x="5"  y="5"  width="11" height="11" />
      <rect x="20" y="5"  width="11" height="11" />
      <rect x="5"  y="20" width="11" height="11" />
      <rect x="20" y="20" width="11" height="11" />
    </svg>
  );
}

export function GlyphInspection(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="15" cy="15" r="9" />
      <path d="M22 22 L31 31" />
      <path d="M11 15 H19 M15 11 V19" />
    </svg>
  );
}

export function GlyphDrone(p: Props) {
  return (
    <svg {...base} {...p}>
      <circle cx="9"  cy="9"  r="3.5" />
      <circle cx="27" cy="9"  r="3.5" />
      <circle cx="9"  cy="27" r="3.5" />
      <circle cx="27" cy="27" r="3.5" />
      <path d="M11.5 11.5 L15 15 M24.5 11.5 L21 15 M11.5 24.5 L15 21 M24.5 24.5 L21 21" />
      <rect x="14" y="14" width="8" height="8" />
    </svg>
  );
}

export function GlyphLegal(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M18 5 V31" />
      <path d="M8 31 H28" />
      <path d="M9 10 H27" />
      <path d="M9 10 L5 19 a5 5 0 0 0 8 0 Z" />
      <path d="M27 10 L23 19 a5 5 0 0 0 8 0 Z" />
    </svg>
  );
}

export function GlyphPackout(p: Props) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12 L18 5 L31 12 V28 L18 35 L5 28 Z" />
      <path d="M5 12 L18 19 L31 12" />
      <path d="M18 19 V35" />
    </svg>
  );
}

export const glyphById: Record<string, (p: Props) => JSX.Element> = {
  restoration: GlyphRestoration,
  'estimating-services': GlyphEstimating,
  'insurance-claims': GlyphClaims,
  'interior-design': GlyphDesign,
  'home-organization': GlyphOrganization,
  'property-inspections': GlyphInspection,
  'drone-services': GlyphDrone,
  'expert-witness-services': GlyphLegal,
  'packout-services': GlyphPackout,
};
