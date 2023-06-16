import dynamic from 'next/dynamic'

const ArrowLeft = dynamic(() => import('./ArrowLeft'))
const ArrowLeftShort = dynamic(() => import('./ArrowLeftShort'))
const ArrowRight = dynamic(() => import('./ArrowRight'))
const ArrowRightShort = dynamic(() => import('./ArrowRightShort'))
const Check = dynamic(() => import('./Check'))
const Facebook = dynamic(() => import('./Facebook'))
const FileCode = dynamic(() => import('./FileCode'))
const Folder = dynamic(() => import('./Folder'))
const GitHub = dynamic(() => import('./GitHub'))
const Linkedin = dynamic(() => import('./Linkedin'))
const Server = dynamic(() => import('./Server'))
const SwatchBook = dynamic(() => import('./SwatchBook'))
const TableLayout = dynamic(() => import('./TableLayout'))
const Twitter = dynamic(() => import('./Twitter'))

export function ComponentIcon({ icon, className }) {
  const icons = {
    ArrowLeft,
    ArrowLeftShort,
    ArrowRight,
    ArrowRightShort,
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
