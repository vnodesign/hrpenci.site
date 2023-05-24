import Script from 'next/script'

export function UMScript() {
  return (
    <>
      <Script
        async
        src="https://analytics.umami.is/script.js"
        data-website-id="10a41acb-6612-4211-964b-1b1407debbf1"
      />
    </>
  )
}
