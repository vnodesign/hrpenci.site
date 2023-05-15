import dynamic from 'next/dynamic'
const DocsSwitcher = dynamic(() => import('./DocsSwitcher'))
import Link from './Link'
import Image from './Image'

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Documentation">
        <Image src="/static/favicon.png" alt="HR Documentation" width={28} height={28} priority />
      </Link>
      <DocsSwitcher />
    </>
  )
}

export default HeaderLogo
