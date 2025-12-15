import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // New Design System Colors (from DESIGN-LAYOUT.md)
          primary: '#1B4B63',      // Deep Ocean Blue (main brand color)
          secondary: '#00A8B5',     // Aqua/Cyan (highlights, links)
          accent: '#FF6B35',        // Coral Orange (CTAs, important buttons)
          success: '#4ECDC4',       // Seafoam Green (success states)

          // Legacy colors (backward compatibility - deprecated)
          blue: '#5db4d2',
          'blue-dark': '#1895c0',
          teal: '#21BDA1',
        },
        // Extended gray scale from design system
        gray: {
          50: '#F7FAFC',   // Backgrounds
          200: '#E2E8F0',  // Borders
          600: '#718096',  // Secondary text
          900: '#1A202C',  // Primary text
        },
        neutral: {
          darkest: '#020908',
          gray: '#d9dad9',
          'aqua-light': '#e8f8f5',
          'teal-light': '#d2f1ec',
          'blue-light': '#e7f4f8',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // H1: 56px / 120% / -0.01em
        'h1': ['3.5rem', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        // H2: 48px / 120% / -0.01em
        'h2': ['3rem', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        // H4: 32px / 130% / -0.01em
        'h4': ['2rem', { lineHeight: '130%', letterSpacing: '-0.01em' }],
        // H5: 24px / 140% / -0.01em
        'h5': ['1.5rem', { lineHeight: '140%', letterSpacing: '-0.01em' }],
        // Body: 16px / 150%
        'body': ['1rem', { lineHeight: '150%' }],
        // Text Medium: 18px / 150%
        'text-md': ['1.125rem', { lineHeight: '150%' }],
      },
      spacing: {
        // Section padding: 112px vertical
        '28': '7rem',    // 112px
        // Various gaps from design system
        '20': '5rem',    // 80px
        '18': '4.5rem',  // 72px
        '17': '4rem',    // 64px
        '12': '3rem',    // 48px
        '8': '2rem',     // 32px
        '6': '1.5rem',   // 24px
        '4': '1rem',     // 16px
        '2': '0.5rem',   // 8px
      },
      screens: {
        'sm': '640px',   // mobile
        'md': '768px',   // tablet
        'lg': '1024px',  // desktop
        'xl': '1280px',
        '2xl': '1440px', // design width
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
