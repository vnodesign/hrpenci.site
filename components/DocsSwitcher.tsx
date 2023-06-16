import { Menu } from '@headlessui/react'
import cn from 'clsx'
import { DocsSwitcherSite } from 'data/data'
import Link from 'next/link'

function DocsSwitcher() {
  return (
    <Menu as="div" className="relative mx-3">
      <Menu.Button className="flex items-center px-3 py-1 space-x-2 text-xs font-semibold leading-5 text-gray-900 bg-gray-200 rounded-full dark:bg-primary-100/10 dark:text-gray-50 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50">
        Tài liệu phổ biến
        <svg
          width="6"
          height="3"
          className="ml-2 overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute w-40 py-2 mt-1 text-sm font-semibold leading-6 bg-white rounded-lg shadow-lg top-full ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/20">
        {DocsSwitcherSite.map(option => (
          <Menu.Item key={option.href}>
            {({ active }) => (
              <Link
                href={option.href}
                className={cn(
                  'flex items-center justify-between px-3 py-1 cursor-pointer',
                  active
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                    : 'text-gray-800 dark:text-gray-100'
                )}
                title={option.name}
              >
                {option.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default DocsSwitcher
