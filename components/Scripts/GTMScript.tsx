import Script from 'next/script'

export default function GTMScript() {
  // There is no npm package for Google Tag Manager so set up happens by placing this script.
  return (
    <>
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-RCV263F7H7');
          `
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-RCV263F7H7"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
