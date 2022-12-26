/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/theme.config.tsx'
  ],
  theme: {
    extend: {
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        in: 'in .6s both',
      },
    }
  },
  plugins: [],
  darkMode: ['class', 'html[class~="dark"]']
}
