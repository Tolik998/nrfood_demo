import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D0D0D',
          800: '#141414',
          700: '#1B1B1B',
          600: '#242424',
        },
        // Bright street-food yellow — primary accent.
        yellow: {
          DEFAULT: '#FFC627',
          dark: '#FFB800',
          deep: '#E0A000',
        },
        // Bold red — secondary accent.
        red: {
          DEFAULT: '#E31E24',
          dark: '#C8181E',
        },
        cream: '#FAFAFA',
      },
      fontFamily: {
        // Heavy Latin display for the brand wordmark.
        brand: ['Anton', 'Oswald', 'system-ui', 'sans-serif'],
        // Condensed bold display (Cyrillic-capable) for headings.
        heading: ['Oswald', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(255, 198, 39, 0.5)',
        'glow-red': '0 0 28px rgba(227, 30, 36, 0.45)',
        hard: '6px 6px 0 0 #0D0D0D',
        'hard-yellow': '6px 6px 0 0 #FFC627',
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 198, 39, 0.6)' },
          '50%': { boxShadow: '0 0 0 14px rgba(255, 198, 39, 0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.9) translateY(20px)', opacity: '0' },
          '60%': { transform: 'scale(1.03) translateY(-4px)', opacity: '1' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        bounceIn: 'bounceIn 0.5s ease-out both',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
