import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { GAScript } from '@components/GoogleAnalytics'
import '../../scss/style.scss'

export default function Nextra({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GAScript id="G-RCV263F7H7" />
      <Component {...pageProps} />
    </>
  );
}
