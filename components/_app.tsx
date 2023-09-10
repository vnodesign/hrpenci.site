/* eslint-disable react/no-unknown-property */
import ProgressBar from '@badrap/bar-of-progress'
import type { AppProps } from 'next/app'
import { Fira_Code, Inter } from 'next/font/google'
import Router from 'next/router'
import { Scripts } from './Scripts'

const inter = Inter({
  display: 'block',
  subsets: ['latin'],
  variable: '--font-inter'
})

const firaCode = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code'
})

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <div className={`${inter.variable} ${firaCode.variable}`}>
        <Component {...pageProps} />
      </div>
      <Scripts />
    </>
  )
}
