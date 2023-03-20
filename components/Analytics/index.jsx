import { GAScript } from './GAScript'
import { UMScript } from './UMScript'

const isProduction = process.env.NODE_ENV === 'production'

export function Analytics() {
  return (
    <>
      {isProduction && (
        <>
          <GAScript />
          <UMScript />
        </>
      )}
    </>
  )
}
