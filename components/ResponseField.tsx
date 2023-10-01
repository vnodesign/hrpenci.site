import type { ResponseFieldProps } from '@config/Type'
import { GenericParam } from './Param'

// The API playground detects all Params to generate the playground fields,
// so this cannot be replaced by the Param component even if the UI is the same.
export function ResponseField({
  name,
  type,
  hidden,
  default: defaultValue,
  required,
  optional,
  children
}: ResponseFieldProps) {
  return (
    <GenericParam
      name={name}
      type={type}
      hidden={hidden}
      defaultValue={defaultValue}
      required={required}
      optional={optional}
    >
      {children}
    </GenericParam>
  )
}
