import Script from 'next/script'

export function UMScript() {
  return (
    <>
      <Script
        src="https://analytics.umami.is/script.js"
        data-website-id="b391f518-ab8a-47bc-b914-d00bb7f23386"
        async
        defer
      />
    </>
  )
}
