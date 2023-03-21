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

const nextConfig = withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/front-end/:path*',
        destination: '/docs/front-end/:path*',
        permanent: true,
      },
      {
        source: '/back-end/:path*',
        destination: '/docs/back-end/:path*',
        permanent: true,
      },
      {
        source: '/linux/:path*',
        destination: '/docs/linux/:path*',
        permanent: true,
      },
      {
        source: '/design/:path*',
        destination: '/docs/design/:path*',
        permanent: true,
      },
      {
        source: '/nang-cao/:path*',
        destination: '/docs/nang-cao/:path*',
        permanent: true,
      },
    ]
  },
})

module.exports = withPWA(nextConfig)
