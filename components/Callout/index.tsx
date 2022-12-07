import React, { ReactElement, ReactNode } from 'react'
import cn from 'clsx'
import { InformationCircleIcon } from 'nextra/icons'

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: <InformationCircleIcon className="nx-mt-1" />,
  warning: '⚠️'
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  default: cn(
    'nx-bg-orange-100 nx-border-orange-500 nx-text-orange-700  dark:nx-bg-orange-200 dark:nx-text-orange-800'
  ),
  error: cn(
    'nx-bg-red-100 nx-border-red-500 nx-text-red-700 dark:nx-bg-red-200 dark:nx-text-red-800'
  ),
  info: cn(
    'nx-bg-blue-100 nx-border-blue-500 nx-text-blue-700 dark:nx-bg-blue-200 dark:nx-text-blue-800'
  ),
  warning: cn(
    'nx-bg-yellow-100 nx-border-yellow-500 nx-text-yellow-700 dark:nx-bg-yellow-200 dark:nx-text-yellow-800'
  )
}

type CalloutProps = {
  type?: CalloutType
  emoji?: string | ReactElement
  children: ReactNode
}

export function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type]
}: CalloutProps): ReactElement {
  return (
    <div
      className={cn(
        'nextra-callout nx-mt-6 nx-border-t-4 nx-flex nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4',
        classes[type]
      )}
    >
      <div
        className="nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }}
      >
        {emoji}
      </div>
      <div className="nx-w-full nx-min-w-0 nx-leading-7">{children}</div>
    </div>
  )
}
