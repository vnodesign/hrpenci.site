import dynamic from 'next/dynamic'
import Image from './Image'
import Link from './Link'

const DocsSwitcher = dynamic(() => import('./DocsSwitcher'))

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Documentation">
        <Image
          src="/static/favicon.png"
          alt="HR Documentation"
          width={28}
          height={28}
          decoding="async"
          priority
        />
      </Link>
      <DocsSwitcher />
    </>
  )
}

export default HeaderLogo
