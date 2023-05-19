import { Menu as HeadlessMenu } from '@headlessui/react'
import cn from 'clsx'
import Link from './Link'

function DocsSwitcher() {
  return (
    <HeadlessMenu as="div" className="mx-3 relative">
      <HeadlessMenu.Button className="text-xs leading-5 font-semibold rounded-full py-1 px-3 flex items-center space-x-2 bg-gray-200 text-gray-900 dark:bg-primary-100/10 dark:text-gray-50 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50">
        Tài liệu phổ biến
        <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </HeadlessMenu.Button>
      <HeadlessMenu.Items className="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow-lg ring-1 ring-black/5 text-sm leading-6 font-semibold dark:bg-neutral-800 dark:ring-white/20">
        <HeadlessMenu.Item>
          {({ active }) => (
            <Link
              href="/docs/front-end"
              className={cn(
                'block px-3 py-1.5 transition-colors',
                active
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                  : 'text-gray-800 dark:text-gray-100'
              )}
              title="Đọc tài liệu về Frontend"
            >
              Tài liệu Frontend
            </Link>
          )}
        </HeadlessMenu.Item>
        <HeadlessMenu.Item>
          {({ active }) => (
            <Link
              href="/docs/front-end/reactjs"
              className={cn(
                'block px-3 py-1.5 transition-colors',
                active
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                  : 'text-gray-800 dark:text-gray-100'
              )}
              title="Đọc tài liệu về ReactJS"
            >
              Tài liệu ReactJS
            </Link>
          )}
        </HeadlessMenu.Item>
        <HeadlessMenu.Item>
          {({ active }) => (
            <Link
              href="/docs/front-end/vuejs"
              className={cn(
                'block px-3 py-1.5 transition-colors',
                active
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                  : 'text-gray-800 dark:text-gray-100'
              )}
              title="Đọc tài liệu về VueJS"
            >
              Tài liệu VueJS
            </Link>
          )}
        </HeadlessMenu.Item>
        <HeadlessMenu.Item>
          {({ active }) => (
            <Link
              href="/docs/back-end"
              className={cn(
                'block px-3 py-1.5 transition-colors',
                active
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                  : 'text-gray-800 dark:text-gray-100'
              )}
              title="Đọc tài liệu về Backend"
            >
              Tài liệu Backend
            </Link>
          )}
        </HeadlessMenu.Item>
        <HeadlessMenu.Item>
          {({ active }) => (
            <Link
              href="/docs/back-end/nodejs"
              className={cn(
                'block px-3 py-1.5 transition-colors',
                active
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                  : 'text-gray-800 dark:text-gray-100'
              )}
              title="Đọc tài liệu về NodeJS"
            >
              Tài liệu NodeJS
            </Link>
          )}
        </HeadlessMenu.Item>
        <HeadlessMenu.Item>
          {({ active }) => (
            <Link
              href="/docs/back-end/laravel"
              className={cn(
                'block px-3 py-1.5 transition-colors',
                active
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                  : 'text-gray-800 dark:text-gray-100'
              )}
              title="Đọc tài liệu về Laravel"
            >
              Tài liệu Laravel
            </Link>
          )}
        </HeadlessMenu.Item>
      </HeadlessMenu.Items>
    </HeadlessMenu>
  )
}

export default DocsSwitcher
