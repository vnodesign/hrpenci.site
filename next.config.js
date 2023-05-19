const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: true,
  staticImage: true,
  defaultShowCopyCode: true,
})

const nextConfig = withNextra({
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  images: {
    domains: ['ik.imagekit.io'],
    loader: 'custom',
    loaderFile: './imagekitLoader.js',
  },
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

module.exports = nextConfig
