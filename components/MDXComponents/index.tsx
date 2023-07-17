import { Accordion, AccordionGroup } from '@components/Accordion'
import { Check, Info, Note, Tip, Warning } from '@components/Callout'
import { Card, CardGroup } from '@components/Card'
import Link from '@components/Link'
import { Steps } from '@components/Steps'
import { Tab, Tabs } from '@components/Tabs'

export const MDXComponents = {
  Accordion: props => <Accordion {...props} />,
  AccordionGroup: props => <AccordionGroup {...props} />,
  Check: props => <Check {...props} />,
  Info: props => <Info {...props} />,
  Note: props => <Note {...props} />,
  Tip: props => <Tip {...props} />,
  Warning: props => <Warning {...props} />,
  Tab: props => <Tab {...props} />,
  Tabs: props => <Tabs {...props} />,
  Steps: props => <Steps {...props} />,
  Card: props => <Card {...props} />,
  CardGroup: props => <CardGroup {...props} />,
  a: props => (
    <Link
      className="no-underline border-b border-primary-500 dark:border-primary-600 hover:border-b-2"
      {...props}
    />
  )
}
