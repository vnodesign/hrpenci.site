import { siteConfig } from '@data/siteConfig'
import { Head, Html, Main, NextScript } from 'next/document'

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
