import Script from 'next/script'

export function GAScript() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RCV263F7H7" />

      <Script id="gtag-script">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RCV263F7H7', {
                page_path: window.location.pathname,
              });
        `}
      </Script>
    </>
  );
}
