const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

const makePrimaryColor =
  l =>
  ({ opacityValue }) => {
    return (
      `hsl(var(--nextra-primary-hue) var(--nextra-primary-saturation) ${l}%` +
      (opacityValue ? ` / ${opacityValue})` : ')')
    )
  }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,tsx}',
    './pages/**/*.{md,mdx,tsx}',
    './config/theme.config.tsx'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        dark: '#111111',
        vnodesign: {
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
          950: makePrimaryColor(16)
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono]
      },
      animation: {
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate'
      },
      maxWidth: {
        '8xl': '92rem'
      },
      keyframes: {
        spin: {
          '0%': {
            rotate: '0deg'
          },
          '15%, 35%': {
            rotate: '90deg'
          },
          '65%, 85%': {
            rotate: '270deg'
          },
          '100%': {
            rotate: '360deg'
          }
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)'
          }
        },
        'scroll-5': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(calc(-12rem * 5))'
          }
        }
      },
      backgroundImage: theme => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`
      })
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      )
      addVariant(
        'supports-scrollbars',
        '@supports selector(::-webkit-scrollbar)'
      )
      addVariant('children', '& > *')
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }
  ],
  darkMode: ['class', 'html[class~="dark"]']
}
