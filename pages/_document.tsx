import { siteConfig } from '@data/siteConfig'
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang={siteConfig.language} prefix="og: https://ogp.me/ns#">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
