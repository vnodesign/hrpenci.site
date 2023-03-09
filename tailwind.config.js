module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/nextra-theme-docs/dist**/*',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', 'html[class~="dark"]'],
}
