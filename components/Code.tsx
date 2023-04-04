import type { ComponentProps, ReactElement } from 'react'

interface CodeProps extends ComponentProps<'code'> {
  hasLineNumbers?: boolean
}

export const Code = ({
  children,
  className = '',
  hasLineNumbers,
  ...props
}: CodeProps): ReactElement => {
  return (
    <code
      className={`
        border-black/[0.04] bg-black/[0.03] break-words rounded-md border py-0.5 px-[.25em] text-[.9em]
        dark:border-white/10 dark:bg-white/10
        ${hasLineNumbers ? '[counter-reset:line]' : ''}
        ${className}
      `}
      // always show code blocks in ltr
      dir="ltr"
      role="presentation"
      {...props}
    >
      {children}
    </code>
  )
}
