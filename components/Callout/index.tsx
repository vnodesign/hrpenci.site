import { ReactElement, ReactNode } from 'react'
import cn from 'clsx'

const DEFAULT_CLASS = cn(
  'bg-orange-100 border-orange-500 text-orange-700 dark:bg-orange-200 dark:text-orange-800'
)
const ERROR_CLASS = cn('bg-red-100 border-red-500 text-red-700 dark:bg-red-200 dark:text-red-800')
const INFO_CLASS = cn(
  'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-200 dark:text-blue-800'
)
const WARNING_CLASS = cn(
  'bg-yellow-100 border-yellow-500 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800'
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
    <div
      className={cn('my-6 flex items-start rounded-md p-4 border border-b-4', classByType[type])}
    >
      <div className="mr-4 text-2xl">{emoji}</div>
      <div>{children}</div>
    </div>
  )
}
