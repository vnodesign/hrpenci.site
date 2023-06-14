import cn from 'clsx'
import type { ReactElement, ReactNode } from 'react'
import { Children, useState } from 'react'

function Tab({
  title,
  isActive = true,
  children
}: {
  title: string
  isActive?: boolean
  children?: ReactNode
}) {
  return (
    <>
      <h2
        className={cn(
          'flex text-sm leading-6 font-semibold whitespace-nowrap pt-3 pb-2.5 -mb-px max-w-max border-b',
          isActive
            ? 'text-primary-500 dark:text-primary-400 border-current'
            : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700'
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
      <ul className="mb-6 pb-[1px] flex-none min-w-full overflow-auto border-b border-zinc-200 space-x-6 flex dark:border-zinc-200/10">
        {arrayChildren.map((child: ReactElement, i: number) => (
          <li
            className="cursor-pointer"
            onClick={() => setActiveTabIndex(i)}
            key={i}
          >
            <Tab
              title={child?.props?.title ?? 'Tab Title'}
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
