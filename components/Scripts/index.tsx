import GTMScript from './GTMScript'
import UMScript from './UMScript'

const isProduction = process.env.NODE_ENV === 'production'

export function Scripts() {
  return (
    <>
      {isProduction && (
        <>
          <GTMScript />
          <UMScript />
        </>
      )}
    </>
  )
}
