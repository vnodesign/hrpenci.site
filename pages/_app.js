import Script from 'next/script'
import 'nextra-theme-docs/style.css'
import '../src/assets/custom.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RCV263F7H7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RCV263F7H7');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
