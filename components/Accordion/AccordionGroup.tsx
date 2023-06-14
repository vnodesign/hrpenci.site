import type { ReactNode } from 'react'

function AccordionGroup({ children }: { children: ReactNode }) {
  // [&>div] modifies the Accordion's borders to only show divider borders.
  // We use border-0 instead of border-none because border-none turns off divide-y.
  // [&>div>button] modifies the button to not round the highlighted part
  // when inside of an Accordion group.
  return (
    <div
      className="[&>div]:border-0 [&>div]:rounded-none [&>div>button]:rounded-none [&>div]:mb-0 overflow-hidden my-3 rounded-xl divide-y divide-inherit border dark:border-neutral-800"
      role="list"
    >
      {children}
    </div>
  )
}

export default AccordionGroup
