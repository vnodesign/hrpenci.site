const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
  readingTime: true,
})

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/front-end/:slug',
        destination: '/docs/front-end/:slug',
        permanent: false,
      },
      {
        source: '/back-end/:slug',
        destination: '/docs/back-end/:slug',
        permanent: false,
      },
      {
        source: '/linux/:slug',
        destination: '/docs/linux/:slug',
        permanent: false,
      },
      {
        source: '/design/:slug',
        destination: '/docs/design/:slug',
        permanent: false,
      },
      {
        source: '/nang-cao/:slug',
        destination: '/docs/nang-cao/:slug',
        permanent: false,
      },
    ]
  },
}

module.exports = withNextra(withPWA(nextConfig))
