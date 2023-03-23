import { SSRProvider } from '@react-aria/ssr'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { Scripts } from './Scripts'
import CopyLink from './CopyLink'

type NextraAppProps = AppProps & {
  Component: AppProps['Component'] & {
    getLayout: (page: ReactNode) => ReactNode
  }
}

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  const router = useRouter()
  NProgress.configure({ showSpinner: false })
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
  }, [router.events])

  return (
    <SSRProvider>
      <Component {...pageProps} />
      <Scripts />
      <CopyLink />
    </SSRProvider>
  )
}
