// CBRS Group Brand Colors - Extracted from cbrsgroup.com

export const cbrsColors = {
  // Primary Brand Colors
  primary: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#1e3046', // Primary Navy/Ocean Blue - Main brand color
    950: '#102a43',
  },

  // Secondary Brand Colors
  secondary: {
    50: '#f7f9f3',
    100: '#eef2e6',
    200: '#dde5cd',
    300: '#c4d4a8',
    400: '#a8bf7c',
    500: '#8ca55a',
    600: '#6B7F35', // CBRS Olive Green
    700: '#56662b',
    800: '#435024',
    900: '#37421f',
    950: '#1c210f',
  },

  // Accent/Action Colors
  accent: {
    50: '#fef5f0',
    100: '#fde9dc',
    200: '#fbd0b8',
    300: '#f8b08a',
    400: '#f4855a',
    500: '#ef6535',
    600: '#D4611C', // CBRS Orange - CTA buttons
    700: '#b84917',
    800: '#923b17',
    900: '#763219',
    950: '#40170a',
  },

  // Emergency/Alert Colors
  emergency: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626', // Emergency Red
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Neutral/Gray Scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Service-specific colors (for visual distinction)
  service: {
    water: {
      light: '#D3E4FD', // Light blue for water damage
      main: '#3b82f6',
      dark: '#1d4ed8',
    },
    fire: {
      light: '#fed7aa', // Light orange for fire damage
      main: '#f97316',
      dark: '#c2410c',
    },
    storm: {
      light: '#E5DEFF', // Light purple for storm damage
      main: '#8b5cf6',
      dark: '#6d28d9',
    },
    mold: {
      light: '#bbf7d0', // Light green for mold
      main: '#22c55e',
      dark: '#15803d',
    },
    drone: {
      light: '#bae6fd', // Light cyan for drone services
      main: '#0ea5e9',
      dark: '#0369a1',
    },
    insurance: {
      light: '#fef3c7', // Light amber for insurance
      main: '#f59e0b',
      dark: '#d97706',
    },
  },
} as const;

// HSL values for Tailwind CSS variables (from cbrsgroup.com)
export const cbrsHSL = {
  primary: '215 35% 16%',        // #1e3046
  secondary: '82 41% 35%',        // #6B7F35
  accent: '20 76% 47%',           // #D4611C
  emergency: '0 72% 51%',         // #dc2626
} as const;

// Legacy/Direct hex values (for backwards compatibility)
export const cbrsHex = {
  primary: '#1e3046',     // Navy/Ocean Blue
  secondary: '#6B7F35',   // Olive Green
  accent: '#D4611C',      // Orange
  emergency: '#dc2626',   // Red
  lightBlue: '#D3E4FD',   // Light blue accent
  lightPurple: '#E5DEFF', // Light purple accent
} as const;
