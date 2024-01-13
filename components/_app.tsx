import { siteConfig } from '@config/siteConfig'
import { BrandJsonLd, LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { Scripts } from './Scripts'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router.events])

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
