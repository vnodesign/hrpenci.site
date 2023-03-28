import { ReactElement, ReactNode } from 'react'
import cn from 'clsx'

const DEFAULT_CLASS = cn(
  'border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300'
)
const ERROR_CLASS = cn(
  'border-red-200 bg-red-100 text-red-900 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200'
)
const INFO_CLASS = cn(
  'border-blue-200 bg-blue-100 text-blue-900 dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200'
)
const WARNING_CLASS = cn(
  'border-yellow-100 bg-yellow-50 text-yellow-900 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200'
)

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: '!',
  warning: '⚠️',
}

type CalloutType = keyof typeof TypeToEmoji

type CalloutProps = {
  type?: CalloutType
  emoji?: string | ReactElement
  children: ReactNode
}

export function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type],
}: CalloutProps): ReactElement {
  const classByType = {
    default: DEFAULT_CLASS,
    error: ERROR_CLASS,
    info: INFO_CLASS,
    warning: WARNING_CLASS,
  }

  return (
    <div className={cn('my-6 px-4 py-2 flex items-start rounded-lg border-b-4', classByType[type])}>
      <div
        className="my-auto mr-4 text-2xl"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 leading-7">{children}</div>
    </div>
  )
}
