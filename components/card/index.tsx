import cn from 'clsx'
import Link from '../Link'

import * as styles from './style.module.scss'

export function Card({ children, title, icon, href, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        styles['card'],
        'flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none'
      )}
      {...props}
    >
      <span className={cn(styles['card__title'], 'gap-2 p-4 text-gray-700 dark:text-neutral-200')}>
        {icon}
        {title}
      </span>
    </Link>
  )
}

export function Cards({ children, num, ...props }) {
  return (
    <div
      className={cn(styles['cards'], 'mt-4 gap-4')}
      {...props}
      style={
        {
          '--rows': num || 3,
          ...props.style,
        } as any
      }
    >
      {children}
    </div>
  )
}
