import nextra from 'nextra'
import withPWA from 'next-pwa'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  unstable_flexsearch: true,
  unstable_staticImage: true,
})

export default withNextra(withPWA({
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  poweredByHeader: false,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
}))
