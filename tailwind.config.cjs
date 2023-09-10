/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,tsx}',
    './pages/**/*.{md,mdx,tsx}',
    './theme.config.tsx'
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        dark: '#111111',
        vnodesign: {
          50: '#ECF8FE',
          100: '#D8F1FD',
          200: '#ADE1FB',
          300: '#86D2F8',
          400: '#5BC2F6',
          500: '#34B4F4',
          600: '#0C98DF',
          700: '#0974A9',
          800: '#064C6F',
          900: '#03283A'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono],
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      )
    }
  ],
  safelist: [
    'm-0',
    'my-0.5',
    'ml-8',
    'ml-12',
    'ml-16',
    'w-7',
    'h-6',
    'h-7',
    'h-8',
    'h-32',
    'h-80',
    'h-96',
    'w-10',
    'w-6/12',
    'space-x-1',
    'flex-wrap',
    'border-none',
    'aspect-video',
    'dark:bg-white',
  ],
  darkMode: ['class', 'html[class~="dark"]']
}
