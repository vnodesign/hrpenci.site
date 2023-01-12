import "../scss/style.scss";
import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { FacebookProvider, CustomChat } from 'react-facebook'

export default function Nextra({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <FacebookProvider appId="1031926270674334" chatSupport>
        <CustomChat pageId="102793352173146" minimized={false}/>
      </FacebookProvider>
    </>
  )
}
