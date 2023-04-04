import { ComponentProps, ReactElement, useRef, useEffect, useState } from 'react'
import { CopyToClipboard } from './CopyToClipboard'
import { Button } from './Button'
import { WordWrapIcon } from 'nextra/icons'

type PreProps = ComponentProps<'pre'> & {
  filename?: string
  hasCopyCode?: boolean
}

export const Pre = ({
  children,
  className = '',
  hasCopyCode,
  filename,
  ...props
}: PreProps): ReactElement => {
  const preRef = useRef<HTMLPreElement | null>(null)
  const [wordWrap, setWordWrap] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.nextraWordWrap = wordWrap ? '' : undefined
  }, [wordWrap])

  const handleToggleWordWrap = () => setWordWrap((wrap) => !wrap)

  const classes = [
    'bg-primary-700/5 mb-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em]',
    'contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40',
    filename ? 'pt-12 pb-4' : 'py-4',
    className,
  ]

  return (
    <div className="nextra-code-block relative mt-6 first:mt-0">
      {filename && (
        <div className="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200">
          {filename}
        </div>
      )}
      <pre className={classes.join(' ')} ref={preRef} {...props}>
        {children}
      </pre>
      <div
        className={`opacity-0 transition [div:hover>&]:opacity-100 focus-within:opacity-100
        flex gap-1 absolute m-[11px] right-0 ${filename ? 'top-8' : 'top-0'}`}
      >
        <Button onClick={handleToggleWordWrap} className="md:hidden" title="Toggle word wrap">
          <WordWrapIcon className="pointer-events-none h-4 w-4" />
        </Button>
        {hasCopyCode && (
          <CopyToClipboard
            getValue={() => preRef.current?.querySelector('code')?.textContent || ''}
          />
        )}
      </div>
    </div>
  )
}
