import cn from 'clsx'
import { useRouter } from 'next/router'
import Link from './Link'

export type DocSite = 'blog' | 'docs'

export function useDocsSite(): DocSite | undefined {
  const { pathname } = useRouter()

  if (pathname.startsWith('/docs')) {
    return 'docs'
  }

  if (pathname.startsWith('/blog')) {
    return 'blog'
  }

  return null
}

function DocsSiteSwitcherLink({ href, text, isActive }) {
  return (
    <Link
      href={href}
      className={cn(
        'py-1 font-semibold transition-colors duration-300 inline-block w-[50px] cursor-pointer',
        isActive && 'text-primary-600'
      )}
      title={text}
    >
      {text}
    </Link>
  )
}

function DocsSwitcher() {
  const currentSite = useDocsSite()

  return (
    <div className="relative flex items-center justify-between p-2 text-xl">
      <span
        className={cn(
          'flex h-[34px] w-[100px] flex-shrink-0 items-center rounded-lg border border-neutral-200/70 dark:border-primary-100/10 p-1 duration-300 ease-in-out',
          'after:h-[24px] after:w-[44px] after:rounded-md after:duration-300 after:bg-primary-50 after:dark:bg-primary-500/10',
          'indeterminate:after:hidden',
          {
            'after:hidden': !currentSite,
            'after:translate-x-[46px]': currentSite === 'blog',
          }
        )}
      />

      <span
        className={cn(
          'z-50 absolute p-1 text-sm flex justify-between text-center w-[100px] text-gray-500 dark:text-gray-400',
          { 'hover:text-gray-900 dark:hover:text-gray-300': currentSite }
        )}
      >
        <DocsSiteSwitcherLink href="/docs" text="Docs" isActive={currentSite === 'docs'} />
        <DocsSiteSwitcherLink href="/blog" text="Blog" isActive={currentSite === 'blog'} />
      </span>
    </div>
  )
}

export default DocsSwitcher
