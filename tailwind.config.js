/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const makePrimaryColor =
  l =>
  ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(--color-primary) 100% ${l}%)`
    }
    return `hsl(var(--color-primary) 100% ${l}% / ${opacityValue})`
  }

const makeSecondaryColor =
  l =>
  ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(--color-secondary) 100% ${l}%)`
    }
    return `hsl(var(--color-secondary) 100% ${l}% / ${opacityValue})`
  }

module.exports = {
  prefix: 'nx-',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    letterSpacing: {
      tight: '-0.015em'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
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
        1000: makePrimaryColor(12)
      },
      secondary: {
        50: makeSecondaryColor(97),
        100: makeSecondaryColor(94),
        200: makeSecondaryColor(86),
        300: makeSecondaryColor(77),
        400: makeSecondaryColor(66),
        500: makeSecondaryColor(50),
        600: makeSecondaryColor(45),
        700: makeSecondaryColor(39),
        750: makeSecondaryColor(35),
        800: makeSecondaryColor(32),
        900: makeSecondaryColor(24),
        1000: makeSecondaryColor(12)
      }
    },
    extend: {
      colors: {
        dark: '#111'
      }
    }
  },
  darkMode: ['class', 'html[class~="dark"]']
}
