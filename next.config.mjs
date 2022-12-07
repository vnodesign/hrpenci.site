import nextra from 'nextra'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

export default withNextra(withBundleAnalyzer({
  reactStrictMode: true,
  enabled: process.env.ANALYZE === 'true',
}))
