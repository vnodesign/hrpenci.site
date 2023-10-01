import type { GenericParamProps } from '@config/Type'

export function GenericParam({
  name,
  type,
  defaultValue,
  required = false,
  optional,
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
              <div className="font-semibold text-vnodesign-600">{name}</div>
            </div>
            {required && (
              <span className="text-slate-700 dark:text-slate-200">
                bắt buộc
              </span>
            )}
            {optional && (
              <span className="text-slate-700 dark:text-slate-200">
                {optional}
              </span>
            )}
            {defaultValue && (
              <span className="text-slate-700 dark:text-slate-200">
                mặc định: {defaultValue}
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
