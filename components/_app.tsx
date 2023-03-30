import Router from 'next/router'
import type { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import { Scripts } from './Scripts'
import CopyLink from './CopyLink'
import { TailwindIndicator } from './tailwind-indicator'

type NextraAppProps = AppProps & {
  Component: AppProps['Component'] & {
    getLayout: (page: ReactNode) => ReactNode
  }
}

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Scripts />
      <CopyLink />
      <TailwindIndicator />
    </>
  )
}
