import { GAScript } from './GAScript'
import { UMScript } from './UMScript'
import { CustomizeChat } from './CustomizeChat'

const isProduction = process.env.NODE_ENV === 'production'

export function Scripts() {
  return (
    <>
      {isProduction && (
        <>
          <GAScript />
          <UMScript />
          <CustomizeChat />
        </>
      )}
    </>
  )
}
