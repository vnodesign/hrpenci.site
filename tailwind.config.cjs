const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

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
          50: 'hsl(204, 100%, 97%)', // #f0f9ff
          100: 'hsl(206, 88%, 94%)', // #e1f1fd
          200: 'hsl(202, 92%, 86%)', // #bbe4fc
          300: 'hsl(201, 92%, 74%)', // #7fcffa
          400: 'hsl(200, 90%, 58%)', // #34b4f4
          500: 'hsl(200, 85%, 48%)', // #129ee5
          600: 'hsl(202, 94%, 39%)', // #067ec3
          700: 'hsl(203, 93%, 32%)', // #06649e
          800: 'hsl(203, 87%, 27%)', // #095583
          900: 'hsl(203, 77%, 24%)', // #0e486c
          950: 'hsl(206, 78%, 16%)' // #092d48
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono]
      },
      animation: {
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate'
      },
      maxWidth: {
        '8xl': '90rem'
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
