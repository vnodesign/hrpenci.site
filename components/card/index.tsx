import cn from 'clsx'
import Link from 'next/link'

import styles from './style.module.css'

export function Card({
  children,
  title,
  icon,
  image,
  arrow,
  demo,
  href,
  ...props
}) {
  const animatedArrow = arrow ? (
    <span
      className={cn(
        'nx-transition-transform nx-duration-75',
        'group-hover:nx-translate-x-[2px]'
      )}
    >
      →
    </span>
  ) : null

  if (image) {
    return (
      <Link
        href={href}
        className={cn(
          styles.card,
          'group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200 nx-bg-gray-100 nx-text-current nx-no-underline nx-shadow nx-shadow-gray-100 nx-transition-all nx-duration-200 dark:nx-border-neutral-800 dark:nx-shadow-none',
          'hover:nx-border-gray-300 hover:nx-shadow-lg hover:nx-shadow-gray-100 dark:hover:nx-border-neutral-500 dark:hover:nx-bg-gray-200 dark:hover:nx-shadow-none'
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            styles.title,
            'nx-gap-2 nx-p-4'
          )}
        >
          {icon}
          <span className="nx-flex nx-gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        styles.card,
        'group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200 nx-bg-transparent nx-text-current nx-no-underline nx-shadow-sm nx-shadow-gray-100 nx-transition-all nx-duration-200 dark:nx-border-neutral-800 dark:nx-shadow-none',
        'hover:nx-border-gray-300 hover:nx-bg-slate-50 hover:nx-shadow-md hover:nx-shadow-gray-100 dark:nx-hover:border-neutral-700 dark:hover:nx-bg-neutral-900 dark:hover:nx-shadow-none'
      )}
      {...props}
    >
      <span
        className={cn(
          styles.title,
          'nx-gap-2 nx-p-4 nx-text-gray-700 dark:nx-text-neutral-200',
          'hover:nx-text-gray-900 dark:hover:nx-text-neutral-50'
        )}
      >
        {icon}
        {title}
        {animatedArrow}
      </span>
    </Link>
  )
}

export function Cards({ children, num, ...props }) {
  return (
    <div
      className={cn(styles.cards, 'nx-mt-4 nx-gap-4')}
      {...props}
      style={
        {
          '--rows': num || 3,
          ...props.style
        } as any
      }
    >
      {children}
    </div>
  )
}
