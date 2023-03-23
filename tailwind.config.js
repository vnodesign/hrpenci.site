const colors = require('tailwindcss/colors')

const makePrimaryColor =
  (l) =>
  ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(--nextra-primary-hue) 100% ${l}%)`
    }
    return `hsl(var(--nextra-primary-hue) 100% ${l}% / ${opacityValue})`
  }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,tsx}', './pages/**/*.{md,mdx,tsx}', './theme.config.tsx'],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        primary: {
          50: makePrimaryColor(97),
          100: makePrimaryColor(94),
          200: makePrimaryColor(86),
          300: makePrimaryColor(77),
          400: makePrimaryColor(66),
          500: makePrimaryColor(50),
          600: makePrimaryColor(45),
          700: makePrimaryColor(39),
          750: makePrimaryColor(35),
          800: makePrimaryColor(32),
          900: makePrimaryColor(24),
        },
      },
      keyframes: {
        'nprogress-spinner': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'nprogress-spinner': 'nprogress-spinner 400ms linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: ['class', 'html[class~="dark"]'],
}
