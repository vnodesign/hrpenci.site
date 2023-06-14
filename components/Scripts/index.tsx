import GTMScript from './GTMScript'

const isProduction = process.env.NODE_ENV === 'production'

export function Scripts() {
  return (
    <>
      {isProduction && (
        <>
          <GTMScript />
        </>
      )}
    </>
  )
}
