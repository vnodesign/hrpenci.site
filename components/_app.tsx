import type { AppProps } from 'next/app'
import { Scripts } from './Scripts'

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Scripts />
    </>
  )
}
