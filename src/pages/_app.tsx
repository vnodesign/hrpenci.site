import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { SSRProvider } from '@react-aria/ssr'
import * as gtag from '@lib/gtag'
import { GAScript } from '@components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
import '../../scss/style.scss'

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SSRProvider>
      <Component {...pageProps} />
      <GAScript id="G-RCV263F7H7" />
      <Analytics />
    </SSRProvider>
  );
}
