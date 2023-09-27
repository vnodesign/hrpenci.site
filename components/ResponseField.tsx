import type { ReactNode } from 'react'
import { GenericParam } from './Param'

// The API playground detects all Params to generate the playground fields,
// so this cannot be replaced by the Param component even if the UI is the same.
export function ResponseField({
  name,
  type,
  hidden,
  default: defaultValue,
  required,
  children
}: {
  name: string
  type: string
  hidden?: boolean
  default?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <GenericParam
      name={name}
      type={type}
      hidden={hidden}
      defaultValue={defaultValue}
      required={required}
    >
      {children}
    </GenericParam>
  )
}
