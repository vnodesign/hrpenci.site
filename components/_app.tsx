import { SSRProvider } from '@react-aria/ssr'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { Scripts } from './Scripts'

type NextraAppProps = AppProps & {
  Component: AppProps['Component'] & {
    getLayout: (page: ReactNode) => ReactNode
  }
}

// Shim requestIdleCallback in Safari
if (typeof window !== 'undefined' && !('requestIdleCallback' in window)) {
  ;(window as Window).requestIdleCallback = (fn: IdleRequestCallback) =>
    setTimeout(fn, 1)
  ;(window as Window).cancelIdleCallback = (id: number) => clearTimeout(id)
}

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <Scripts />
    </SSRProvider>
  )
}
