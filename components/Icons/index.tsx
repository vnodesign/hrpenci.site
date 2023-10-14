import dynamic from 'next/dynamic'

const ArrowLeft = dynamic(() => import('./ArrowLeft'))
const ArrowLeftShort = dynamic(() => import('./ArrowLeftShort'))
const ArrowRight = dynamic(() => import('./ArrowRight'))
const ArrowRightShort = dynamic(() => import('./ArrowRightShort'))
const CaretDown = dynamic(() => import('./CaretDown'))
const CaretUp = dynamic(() => import('./CaretUp'))
const Chat = dynamic(() => import('./Chat'))
const Check = dynamic(() => import('./Check'))
const Facebook = dynamic(() => import('./Facebook'))
const FileCode = dynamic(() => import('./FileCode'))
const Folder = dynamic(() => import('./Folder'))
const GitHub = dynamic(() => import('./GitHub'))
const Linkedin = dynamic(() => import('./Linkedin'))
const ReactIcon = dynamic(() => import('./React'))
const Server = dynamic(() => import('./Server'))
const SwatchBook = dynamic(() => import('./SwatchBook'))
const TableLayout = dynamic(() => import('./TableLayout'))
const Twitter = dynamic(() => import('./Twitter'))
const User = dynamic(() => import('./User'))

type IconProps = {
  icon?: any
  className?: string
}

/**
 * The `ComponentIcon` function takes in an `icon` and `className` as props and returns the corresponding icon component
 * based on the `icon` prop, or a default icon component if no matching icon is found.
 * @param {IconProps}  - - `icon`: The name of the icon component to render. It should be one of the keys in the `icons`
 * object.
 * @returns the component specified by the `icon` prop, or the `DefaultIcon` component if the `icon` prop does not match
 * any of the icons in the `icons` object. The returned component will have the `className` prop passed to it.
 */
export function ComponentIcon({ icon, className }: IconProps) {
  const icons = {
    ArrowLeft,
    ArrowLeftShort,
    ArrowRight,
    ArrowRightShort,
    CaretDown,
    CaretUp,
    Chat,
    Check,
    Facebook,
    GitHub,
    Linkedin,
    ReactIcon,
    Twitter,
    User,
    TableLayout,
    Server,
    SwatchBook,
    Folder,
    FileCode
  }

  const IconComponent = icons[icon] || DefaultIcon

  return <IconComponent className={className} />
}

function DefaultIcon() {
  return <Folder />
}
