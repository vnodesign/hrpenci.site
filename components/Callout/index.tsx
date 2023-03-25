import { ReactElement, ReactNode } from 'react'
import cn from 'clsx'
import { MdLightbulb, MdError, MdInfo, MdWarning } from 'react-icons/md'

const DEFAULT_CLASS = cn('bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200')
const ERROR_CLASS = cn('bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600')
const INFO_CLASS = cn('bg-blue-100 text-blue-800 dark:text-blue-300 dark:bg-blue-200')
const WARNING_CLASS = cn('bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800')

const TypeToEmoji = {
  default: <MdLightbulb className="w-5 h-5 mt-1" />,
  error: <MdError className="w-5 h-5 mt-1" />,
  info: <MdInfo className="w-5 h-5 mt-1" />,
  warning: <MdWarning className="w-5 h-5 mt-1" />,
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
    <div className={cn('flex rounded-lg mt-6', classByType[type])}>
      <div
        className="py-2 pl-3 pr-2 text-xl select-none"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="py-2 pr-4 overflow-auto">{children}</div>
    </div>
  )
}
