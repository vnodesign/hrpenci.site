import type { AppProps } from 'next/app'
import { Scripts } from './Scripts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Scripts />
    </>
  )
}
