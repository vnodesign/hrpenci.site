import "../scss/style.scss";
import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { FBChatScript } from '@components/Facebook/CustomizeChat'

export default function Nextra({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <FBChatScript />
    </>
  )
}
