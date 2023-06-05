import { Callout } from '../Callout'
import { Tab, Tabs } from '../Tabs'
import { Steps } from '../Steps'

export const MDXComponents = {
  Callout: (props) => <Callout {...props} />,
  Tab: (props) => <Tab {...props} />,
  Tabs: (props) => <Tabs {...props} />,
  Steps: (props) => <Steps {...props} />,
}
