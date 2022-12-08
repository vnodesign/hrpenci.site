import nextra from 'nextra'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblock: false
  }
})

export default withNextra(withBundleAnalyzer({
  reactStrictMode: true,
  enabled: process.env.ANALYZE === 'true',
  swcMinify: true,
}))
