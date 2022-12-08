import nextra from 'nextra'
import withBundleAnalyzer from '@next/bundle-analyzer'
import withPWA from 'next-pwa'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblock: false
  }
})

export default withNextra(withBundleAnalyzer(withPWA({
  reactStrictMode: true,
  enabled: process.env.ANALYZE === 'true',
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable:process.env.NODE_ENV === 'development'
  }
})))
