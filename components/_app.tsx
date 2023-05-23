import { Scripts } from './Scripts'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Scripts />
    </>
  )
}
