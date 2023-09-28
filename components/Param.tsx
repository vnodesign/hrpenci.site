import type { ReactNode } from 'react'

export type ParamProps = {
  query?: string
  path?: string
  body?: string
  header?: string
  children: any
  default?: string
  type?: string
  required?: boolean
  optional?: boolean
  hidden?: boolean
}

// 9/8/2022 - Migrate everyone off Param
export function Param(props: ParamProps) {
  return <ParamField {...props} />
}

// Also props: query, body, path
export function ParamField({
  query,
  path,
  body,
  header,
  children,
  default: defaultValue,
  type,
  required = false,
  optional = false,
  hidden = false
}: ParamProps) {
  const name = query || path || body || header

  if (name == null) {
    return null
  }

  return (
    <GenericParam
      name={name}
      defaultValue={defaultValue}
      type={type}
      required={required}
      optional={optional}
      hidden={hidden}
    >
      {children}
    </GenericParam>
  )
}

// TODO: Remove from components
export type GenericParamProps = {
  name: string
  type?: string
  defaultValue?: string
  required?: boolean
  optional?: boolean
  hidden?: boolean
  children: ReactNode
}

export function GenericParam({
  name,
  type,
  defaultValue,
  required = false,
  optional = false,
  hidden = false,
  children
}: GenericParamProps) {
  if (hidden) {
    return null
  }

  return (
    <div className="pb-5 mb-5 border-b dark:border-neutral-800 contrast-more:border-neutral-400 dark:contrast-more:border-neutral-400">
      <div className="flex font-mono text-sm">
        {name && (
          <div className="flex-1 flex flex-row flex-wrap gap-x-2.5 content-start py-0.5 mr-5">
            <div className="flex flex-row gap-x-2.5">
              <div className="font-semibold text-vnodesign-500 dark:text-vnodesign-400">
                {name}
              </div>
            </div>
            {required && (
              <span className="text-slate-700 dark:text-slate-200">
                bắt buộc
              </span>
            )}
            {optional && (
              <span className="text-slate-700 dark:text-slate-200">
                tùy chọn
              </span>
            )}
            {defaultValue && (
              <span className="text-slate-700 dark:text-slate-200">
                Mặc định: {defaultValue}
              </span>
            )}
          </div>
        )}
        {type && (
          <div className="text-right text-gray-900 dark:text-gray-200">
            {type}
          </div>
        )}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}
