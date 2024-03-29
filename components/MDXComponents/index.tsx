import { Accordion, AccordionGroup } from '@components/Accordion'
import { Check, Info, Note, Tip, Warning } from '@components/Callout'
import { Card, CardGroup } from '@components/Card'
import Image from '@components/Image'
import { ResponseField } from '@components/ResponseField'
import { Steps } from '@components/Steps'
import { Tab, Tabs } from '@components/Tabs'

export const MDXComponents = {
  Image: (props: any) => <Image {...props} />,
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
  ResponseField: (props: any) => <ResponseField {...props} />,
  Card: (props: any) => <Card {...props} />,
  CardGroup: (props: any) => <CardGroup {...props} />,
  p: (props: any) => <p className="my-6 leading-7 first:my-0" {...props} />
}
