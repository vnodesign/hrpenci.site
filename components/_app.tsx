import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { SSRProvider } from '@react-aria/ssr'
import { Scripts } from './Scripts'
import CopyLink from './CopyLink'
import { TailwindIndicator } from './tailwind-indicator'

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Scripts />
      <CopyLink />
      <TailwindIndicator />
    </>
  )
}
