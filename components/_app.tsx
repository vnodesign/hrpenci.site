import { SSRProvider } from '@react-aria/ssr'
import { Scripts } from './Scripts'
import CopyLink from './CopyLink'
import { TailwindIndicator } from './tailwind-indicator'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Scripts />
        <Component {...pageProps} />
      </SSRProvider>
      <CopyLink />
      <TailwindIndicator />
    </>
  )
}
