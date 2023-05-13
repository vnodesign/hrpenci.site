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
})

const nextConfig = withNextra({
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './cfImageLoader.js'
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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        module: false,
        path: false,
        os: false,
        crypto: false,
      }
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})

module.exports = withPWA(nextConfig)
