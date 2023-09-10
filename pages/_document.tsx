import ProgressBar from '@badrap/bar-of-progress'
import { siteConfig } from '@data/siteConfig'
import { Head, Html, Main, NextScript } from 'next/document'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100
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

export default function Document() {
  return (
    <Html lang={siteConfig.language} prefix="og: https://ogp.me/ns#">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
