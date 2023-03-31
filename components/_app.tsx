import { SSRProvider } from '@react-aria/ssr'
import { Scripts } from './Scripts'
import CopyLink from './CopyLink'
import { TailwindIndicator } from './tailwind-indicator'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Scripts />
      <CopyLink />
      <TailwindIndicator />
    </>
  )
}
