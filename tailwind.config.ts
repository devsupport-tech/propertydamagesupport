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
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'cbrs-navy': {
          900: '#0d2237',
          800: '#0d2237',
        },
        'cbrs-terracotta': {
          700: '#d15b15',
          600: '#E8691A',
          500: '#f07a2e',
          400: '#f38b46',
          100: '#fee9df',
        },
        'cbrs-olive': {
          600: '#6d7c3d',
        },
        'service-restoration': '#3b82f6',
        'service-drone': '#8b5cf6',
        'service-estimating': '#10b981',
        'service-legal': '#f59e0b',
        'service-claims': '#06b6d4',
        'success-500': '#22c55e',
      },
    },
  },
  plugins: [],
} satisfies Config;
