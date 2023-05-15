import type { ComponentProps, ReactElement } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import { CheckIcon, CopyIcon } from 'nextra/icons'
import { Button } from './Button'

type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>

export const CopyToClipboard = ({
  getValue,
  ...props
}: {
  getValue: () => string
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
        setCopied(false)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [isCopied])

  const IconToUse = isCopied ? CheckIcon : CopyIcon

  return (
    <Button onClick={handleClick} title="Copy code" tabIndex={0} {...props}>
      <IconToUse className="w-4 h-4 pointer-events-none nextra-copy-icon" />
    </Button>
  )
}
