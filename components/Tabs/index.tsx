import type { TabProps } from '@config/Type'
import cn from 'clsx'
import type { ReactElement } from 'react'
import { Children, useState } from 'react'

function Tab({ title, isActive = true, children }: TabProps) {
  return (
    <>
      <h2
        className={cn(
          'flex text-sm leading-6 font-semibold whitespace-nowrap pt-3 pb-2.5 -mb-px max-w-max border-b',
          isActive
            ? 'border-vnodesign-500 text-vnodesign-600'
            : 'border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white'
        )}
      >
        {title}
      </h2>
      {children ? <div>{children}</div> : null}
    </>
  )
}

function Tabs({ children }: { children: ReactElement[] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const arrayChildren = Children.toArray(children) as ReactElement[]
  const activeTabContent = arrayChildren[activeTabIndex]?.props?.children

  return (
    <>
      <ul className="mb-6 pb-[1px] flex-none min-w-full overflow-auto border-b border-gray-200 space-x-6 flex dark:border-neutral-800">
        {arrayChildren.map((child: ReactElement, i: number) => (
          <li
            className="cursor-pointer"
            onClick={() => setActiveTabIndex(i)}
            key={i}
          >
            <Tab
              title={child?.props?.title ?? 'Không có tiêu đề'}
              isActive={i === activeTabIndex}
            />
          </li>
        ))}
      </ul>
      <div>{activeTabContent}</div>
    </>
  )
}

export { Tab, Tabs }
