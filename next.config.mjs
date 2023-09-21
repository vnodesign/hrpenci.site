import { withSentryConfig } from '@sentry/nextjs'
import nextra from 'nextra'
import withBundleAnalyzer from '@next/bundle-analyzer'
import withPWAInit from 'next-pwa'
import million from 'million/compiler'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './data/theme.config.tsx',
  flexsearch: true,
  defaultShowCopyCode: true
})

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = withNextra(
  withPWA({
    swcMinify: true,
    reactStrictMode: true,
    compress: true,
    crossOrigin: 'anonymous',
    compiler: {
      removeConsole: {
        exclude: ['error'],
      },
    },
    async redirects() {
      return [
        {
          source: '/group-hr',
          destination: 'https://www.facebook.com/groups/xomhr',
          permanent: true
        },
        {
          source: '/group-dev',
          destination: 'https://www.facebook.com/groups/2827248757496356',
          permanent: true
        },
        {
          source: '/group-design',
          destination: 'https://www.facebook.com/groups/1868252066694465',
          permanent: true
        },
        {
          source: '/blog',
          destination: 'https://hrpenci.site',
          permanent: true
        },
        {
          source: '/blog/khai-niem-giua-back-end-va-front-end',
          destination: 'https://redirect.hrpenci.site/khai-niem-giua-back-end-va-front-end',
          permanent: true
        }
      ]
    },
    images: {
      formats: ['image/webp'],
      domains: ['ik.imagekit.io'],
      loader: 'custom',
      loaderFile: './imagekitLoader.js'
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    }
  })
)

const millionConfig = {
  auto: { rsc: true },
}

export default million.next(
  withSentryConfig(
    bundleAnalyzer(nextConfig),
    {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      dist: '1'
    },
    {
      widenClientFileUpload: true,
      transpileClientSDK: true,
      hideSourceMaps: true,
      disableLogger: true
    }
  ),
  millionConfig
)
