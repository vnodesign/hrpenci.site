import { siteConfig } from '@config/siteConfig'
import { BrandJsonLd, LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Scripts } from './Scripts'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name={siteConfig.siteTitle}
        url={siteConfig.siteUrl}
        sameAs={[
          `https://twitter.com/${siteConfig.twitterSite}`,
          `https://www.facebook.com/${siteConfig.fbFanpage}`,
          `https://github.com/${siteConfig.githubUserName}`,
          `https://linkedin.com/in/${siteConfig.linkedIn}`
        ]}
      />
      <LogoJsonLd
        logo={`${siteConfig.siteUrl}${siteConfig.siteLogo}`}
        url={siteConfig.siteUrl}
      />
      <BrandJsonLd
        slogan={siteConfig.siteSubTitle}
        id={`${siteConfig.siteUrl}/#corporation`}
        logo={`${siteConfig.siteUrl}${siteConfig.siteLogo}`}
        aggregateRating={{
          ratingValue: '5',
          ratingCount: '18'
        }}
      />
      <Component {...pageProps} />
      <Scripts />
    </>
  )
}
