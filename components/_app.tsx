import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { SSRProvider } from '@react-aria/ssr'
import { Scripts } from './Scripts'
import CopyLink from './CopyLink'
import { TailwindIndicator } from './tailwind-indicator'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    window.gtag('event', name, {
      event_category: 'web-vital',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
      event_label: metric.id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })  
  }
}

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
