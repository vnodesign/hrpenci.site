import withPWAInit from '@ducanh2912/next-pwa'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'
import million from 'million/compiler'
import nextra from 'nextra'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './config/theme.config.tsx',
  flexsearch: true,
  defaultShowCopyCode: true
})

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    maximumFileSizeToCacheInBytes: 20000000
  }
})

/** @type {import("next").NextConfig} */
const nextConfig = withNextra(
  withPWA({
    swcMinify: true,
    reactStrictMode: true,
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
          destination: 'https://blog.hrpenci.site',
          permanent: true
        },
        {
          source: '/blog/khai-niem-giua-back-end-va-front-end',
          destination:
            'https://blog.hrpenci.site/posts/khai-niem-giua-back-end-va-front-end-phan-1/',
          permanent: true
        },
        {
          source: '/bookmarks',
          destination: 'https://blog.hrpenci.site/posts/bookmarks/',
          permanent: true
        }
      ]
    },
    images: {
      formats: ['image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.imagekit.io'
        }
      ],
      loader: 'custom',
      loaderFile: './imagekitLoader.js'
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      return config
    }
  })
)

const millionConfig = {
  auto: { rsc: true }
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
