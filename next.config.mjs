import nextra from 'nextra'
import withPWA from 'next-pwa'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblock: false
  }
})

export default withNextra(withPWA({
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  pwa: {
    dest: "public"
  }
}))
