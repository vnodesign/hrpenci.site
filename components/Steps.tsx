import { cn } from '@utils/cn'
import type { ComponentProps, ReactElement } from 'react'

export function Steps({
  children,
  className,
  ...props
}: ComponentProps<'div'>): ReactElement {
  return (
    <div
      className={cn(
        '[&>h3]:[counter-increment:step] [&>h3]:before:absolute [&>h3]:before:ml-[-41px] [&>h3]:before:mt-[3px] [&>h3]:before:size-[33px] [&>h3]:before:rounded-full [&>h3]:before:border-4 [&>h3]:before:border-white [&>h3]:before:bg-gray-100 [&>h3]:before:text-center [&>h3]:before:-indent-px [&>h3]:before:text-base [&>h3]:before:font-normal [&>h3]:before:text-neutral-400 [&>h3]:before:dark:border-dark [&>h3]:before:dark:bg-neutral-800 [&>h3]:before:content-[counter(step)] ml-4 mb-12 border-l border-gray-200 pl-6 dark:border-neutral-800 [counter-reset:step]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
