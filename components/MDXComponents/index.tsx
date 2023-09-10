import { Accordion, AccordionGroup } from '@components/Accordion'
import { Check, Info, Note, Tip, Warning } from '@components/Callout'
import { Card, CardGroup } from '@components/Card'
import Link from '@components/Link'
import { Steps } from '@components/Steps'
import { Tab, Tabs } from '@components/Tabs'

export const MDXComponents = {
  Accordion: (props: any) => <Accordion {...props} />,
  AccordionGroup: (props: any) => <AccordionGroup {...props} />,
  Check: (props: any) => <Check {...props} />,
  Info: (props: any) => <Info {...props} />,
  Note: (props: any) => <Note {...props} />,
  Tip: (props: any) => <Tip {...props} />,
  Warning: (props: any) => <Warning {...props} />,
  Tab: (props: any) => <Tab {...props} />,
  Tabs: (props: any) => <Tabs {...props} />,
  Steps: (props: any) => <Steps {...props} />,
  Card: (props: any) => <Card {...props} />,
  CardGroup: (props: any) => <CardGroup {...props} />,
  p: (props: any) => <p className="my-6 leading-7 first:my-0" {...props} />,
  // blockquote: (props: any) => (
  //   <blockquote
  //     className="p-4 my-4 border-gray-300 bg-black/[.05] italic text-gray-900 dark:border-gray-700 dark:text-white dark:bg-gray-50/10 first:my-0 ltr:border-l-4 rtl:border-r-4"
  //     {...props}
  //   />
  // ),
  a: (props: any) => (
    <Link
      className="font-semibold no-underline border-b border-vnodesign-500 dark:border-vnodesign-600 hover:border-b-2 rounded-none"
      {...props}
    />
  )
}
