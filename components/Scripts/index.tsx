import { GAScript } from './GAScript'

const isProduction = process.env.NODE_ENV === 'production'

export function Scripts() {
  return (
    <>
      {isProduction && (
        <>
          <GAScript />
        </>
      )}
    </>
  )
}
