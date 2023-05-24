import { GAScript } from './GAScript'
import { UMScript } from './UMScript'
import { HotJarScript } from './HotJarScript'

const isProduction = process.env.NODE_ENV === 'production'

export function Scripts() {
  return (
    <>
      {isProduction && (
        <>
          <GAScript />
          <UMScript />
          <HotJarScript />
        </>
      )}
    </>
  )
}
