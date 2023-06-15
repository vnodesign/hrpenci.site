import cn from 'clsx'
import type { ReactNode } from 'react'
import { useState } from 'react'
import ExpandableCover from './ExpandableCover'

export function Expandable({
  title,
  defaultOpen = false,
  onChange: onChangeProp,
  children
}: {
  title: string
  defaultOpen?: boolean
  onChange?: (open: boolean) => void
  children: ReactNode
}) {
  const onChange = (open: boolean) => {
    if (onChangeProp) {
      onChangeProp(open)
    }
  }

  return (
    <GenericExpandable
      title={title}
      onChange={onChange}
      defaultOpen={defaultOpen}
    >
      {children}
    </GenericExpandable>
  )
}

function GenericExpandable({
  title,
  description,
  defaultOpen = false,
  onChange,
  children
}: {
  title: string
  description?: string
  defaultOpen?: boolean
  onChange?: (open: boolean) => void
  children: ReactNode
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen)

  const onClickOpen = (open: boolean) => {
    setOpen(open)
    if (onChange) {
      onChange(open)
    }
  }

  return (
    <div key={title} role="listitem">
      <ExpandableCover
        title={title}
        description={description}
        open={open}
        setOpen={onClickOpen}
      />
      <div
        id={title}
        className={cn(
          'mt-2 pt-2 mb-4 mx-[6px] px-4 border-l border-zinc-100 dark:border-zinc-800',
          !open && 'hidden'
        )}
      >
        {children}
      </div>
    </div>
  )
}
