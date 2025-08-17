import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0b0f14',        // deep navy-black
        surface: '#0f1520',   // card bg
        primary: '#3aa0ff',   // neon-ish blue
        primaryAccent: '#66c2ff',
        accent: '#00e0a4',    // cyber green accent (sparingly)
        text: '#e6eef8',
        muted: '#8aa0b7',
        danger: '#ff4d4f',
      },
      boxShadow: {
        glow: '0 0 24px 2px rgba(58,160,255,0.35)',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'Inter', 'system-ui', 'Segoe UI', 'Roboto'],
      },
      perspective: {
        '800': '800px',
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
} satisfies Config
