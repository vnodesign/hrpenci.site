/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app'
import { Fira_Code, Inter } from 'next/font/google'
import Router from 'next/router'
import NProgress from 'nprogress'
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

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
