import ArrowLeft from './ArrowLeft'
import ArrowLeftShort from './ArrowLeftShort'
import ArrowRight from './ArrowRight'
import ArrowRightShort from './ArrowRightShort'
import CaretDown from './CaretDown'
import CaretUp from './CaretUp'
import Check from './Check'
import Facebook from './Facebook'
import FileCode from './FileCode'
import Folder from './Folder'
import GitHub from './GitHub'
import Linkedin from './Linkedin'
import Server from './Server'
import SwatchBook from './SwatchBook'
import TableLayout from './TableLayout'
import Twitter from './Twitter'

export function ComponentIcon({ icon, className }) {
  const icons = {
    ArrowLeft,
    ArrowLeftShort,
    ArrowRight,
    ArrowRightShort,
    CaretDown,
    CaretUp,
    Check,
    Facebook,
    GitHub,
    Linkedin,
    Twitter,
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
