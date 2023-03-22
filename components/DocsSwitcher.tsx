import cn from 'clsx'
import { useRouter } from 'next/router'
import Link from './Link'

export type DocSite = 'blog' | 'docs';

export function useDocsSite(): DocSite | undefined {
  const { pathname } = useRouter()

  if (pathname.startsWith('/docs')) {
    return 'docs'
  }

  if (pathname.startsWith('/blog')) {
    return 'blog'
  }

  return undefined;
}

function DocsSiteSwitcherLink({ href, text, isActive }) {
  const classes =
    'py-1 transition-colors duration-300 inline-block w-[50px] cursor-pointer hover:text-black dark:hover:text-white';

  const conditionalClasses = {
    'text-black dark:text-white': !!isActive,
  };

  return (
    <Link href={href} className={cn(classes, conditionalClasses)}>
      {text}
    </Link>
  );
}

function DocsSwitcher() {
  const site = useDocsSite()

  return (
    <div className='relative flex items-center justify-between p-2 text-xl group'>
      <span
        className={cn(
          'flex h-[34px] w-[100px] flex-shrink-0 items-center rounded-[8px] border border-[#dedfde] dark:border-[#333333] p-1 duration-300 ease-in-out',
          'after:h-[24px] after:w-[44px] after:rounded-md dark:after:bg-[#333333] after:shadow-sm after:duration-300 after:border dark:after:border-[#333333] after:border-[#666666]/100 after:bg-gradient-to-b after:from-[#3286F1] after:to-[#C33AC3] after:opacity-20 dark:after:opacity-100 dark:after:bg-none',
          'indeterminate:after:hidden',
          {
            'after:hidden': !site,
            'after:translate-x-[46px]': site === 'pack',
          }
        )}
      />

      <span
        className={cn(
          'z-50 absolute p-1 text-sm flex justify-between text-center w-[100px] text-[#666666] dark:text-[#888888]',
          { 'hover:text-black dark:hover:text-white': site }
        )}
      >
        <DocsSiteSwitcherLink href='/docs' text='Docs' isActive={site === 'docs'} />
        <DocsSiteSwitcherLink href='/blog' text='Blog' isActive={site === 'blog'} />
      </span>
    </div>
  );
}

export default DocsSwitcher
