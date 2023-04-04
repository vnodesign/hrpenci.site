import type { ComponentProps, ReactElement } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import { CheckIcon, CopyIcon } from 'nextra/icons'
import { Button } from './Button'

type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>

export const CopyToClipboard = ({
  getValue,
  ...props
}: {
  getValue: () => string;
} & ComponentProps<'button'>): ReactElement => {
  const [isCopied, setCopied] = useState(false)

  const handleClick: MouseEventHandler = useCallback(async () => {
    setCopied(true)
    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!')
    }
    try {
      await navigator.clipboard.writeText(getValue())
    } catch {
      console.error('Failed to copy!')
    }
  }, [getValue])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (isCopied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [isCopied])

  const IconToUse = isCopied ? CheckIcon : CopyIcon

  return (
    <Button onClick={handleClick} title="Copy code" tabIndex={0} {...props}>
      <IconToUse className="nextra-copy-icon pointer-events-none h-4 w-4" />
    </Button>
  )
}
