import { GAScript } from './GAScript'
import { UMScript } from './UMScript'
// import { VercelAnalytics } from './VercelAnalytics'

const isProduction = process.env.NODE_ENV === 'production'

export function Scripts() {
  return (
    <>
      {isProduction && (
        <>
          <GAScript />
          <UMScript />
          {/* <VercelAnalytics /> */}
        </>
      )}
    </>
  )
}
