import ArrowLeft from './ArrowLeft'
import ArrowLeftShort from './ArrowLeftShort'
import ArrowRight from './ArrowRight'
import ArrowRightShort from './ArrowRightShort'
import CaretDown from './CaretDown'
import CaretUp from './CaretUp'
import Chat from './Chat'
import Check from './Check'
import Facebook from './Facebook'
import FileCode from './FileCode'
import Folder from './Folder'
import GitHub from './GitHub'
import Linkedin from './Linkedin'
import ReactIcon from './React'
import Server from './Server'
import SwatchBook from './SwatchBook'
import TableLayout from './TableLayout'
import Twitter from './Twitter'
import User from './User'

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
