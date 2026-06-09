import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        // Big Shoulders Display — industrial signage variable font
        display: ['"Big Shoulders Display"', '"Oswald"', 'Impact', 'sans-serif'],
        condensed: ['"Big Shoulders Text"', '"Oswald"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        // Legacy aliases — kept pointed at the new system
        heading: ['"Big Shoulders Display"', '"Oswald"', 'sans-serif'],
      },
      colors: {
        // === Original brand palette restored ===
        'cbrs-navy': {
          900: '#0d2237',
          800: '#0d2237',
          700: '#1a3550',
          600: '#2A4A6A',
          500: '#3D5A7D',
        },
        'cbrs-terracotta': {
          700: '#B54515',
          600: '#E8691A',
          500: '#E8753F',
          400: '#F2935F',
          100: '#fee9df',
        },
        'cbrs-olive': {
          700: '#5A6B2E',
          600: '#6B7F35',
          500: '#7D9240',
          400: '#A4BC6A',
        },

        // === Industrial extensions ===
        cream: {
          DEFAULT: '#F5F1E8',
          50: '#FAF7EF',
          100: '#F5F1E8',
          200: '#EBE3D2',
          300: '#DCD2BB',
        },
        steel: {
          900: '#0a0d10',
          800: '#16191D',
          700: '#1a1d20',
          600: '#2C3338',
          500: '#4A5560',
          400: '#6B7682',
        },
        // Hazard stripe accents
        hazard: {
          terra: '#E8691A',
          navy: '#0d2237',
        },

        // Existing neutrals preserved
        neutral: {
          50: '#F5F1E8',
          100: '#EBE3D2',
          200: '#DCD2BB',
          300: '#C2B7A0',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Service pillars — kept for any legacy reference
        'service-restoration': '#3b82f6',
        'service-drone': '#8b5cf6',
        'service-estimating': '#10b981',
        'service-legal': '#f59e0b',
        'service-claims': '#06b6d4',
        'success-500': '#22c55e',
      },
      letterSpacing: {
        stencil: '0.18em',
        wider: '0.12em',
        wide: '0.06em',
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 60s linear infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
        stamp: 'stamp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.75)' },
        },
        stamp: {
          '0%':   { opacity: '0', transform: 'scale(1.4) rotate(-8deg)' },
          '60%':  { opacity: '1', transform: 'scale(0.95) rotate(-3deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-3deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
