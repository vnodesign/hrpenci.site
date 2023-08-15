/* eslint-disable react/no-unknown-property */
import useProgressBar from '@/lib/useProgressBar'
import type { AppProps } from 'next/app'
import { Fira_Code, Inter } from 'next/font/google'
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

export default function App({ Component, pageProps }: AppProps) {
  useProgressBar()
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        .bar-of-progress::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          width: 100px;
          height: 100%;
          box-shadow:
            0 0 10px currentColor,
            0 0 5px currentColor;
          transform: rotate(3deg) translate(0, -4px);
        }
      `}</style>
      <main className={`${inter.variable} ${firaCode.variable}`}>
        <Component {...pageProps} />
      </main>
      <Scripts />
    </>
  )
}
