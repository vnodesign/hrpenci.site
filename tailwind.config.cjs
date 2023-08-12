/** @type {import('tailwindcss').Config} */
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
          900: '#03283A',
          950: '#02141D'
        }
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
  darkMode: ['class', 'html[class~="dark"]']
}
