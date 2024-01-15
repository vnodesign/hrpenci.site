import Link from '@components/Link'
import type { ShimmerButtonProps } from '@config/Type'
import { cn } from '@utils/cn'
import type { CSSProperties } from 'react'
import { Fragment } from 'react'

export default function ShimmerButton({
  background = 'radial-gradient(ellipse 80% 50% at 50% 120%,rgba(62, 61, 117),rgba(18, 18, 38))',
  className,
  children,
  href,
  ...props
}: ShimmerButtonProps) {
  return (
    <Fragment>
      {href ? (
        <Link
          href={href}
          style={
            {
              '--bg': background
            } as CSSProperties
          }
          className={cn(
            'flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-12 px-6 [background:var(--bg)] rounded-lg transition-all hover:scale-105 duration-300',
            className
          )}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button
          style={
            {
              '--bg': background
            } as CSSProperties
          }
          className={cn(
            'flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-12 px-6 [background:var(--bg)] rounded-lg transition-all hover:scale-105 duration-300',
            className
          )}
          {...props}
        >
          {children}
        </button>
      )}
    </Fragment>
  )
}
