import gtagTrack from '@/utils/gtag'
import { siteConfig } from 'data/siteConfig'
import dynamic from 'next/dynamic'
import Image from './Image'
import Link from './Link'

const DocsSwitcher = dynamic(() => import('./DocsSwitcher'))

function HeaderLogo() {
  return (
    <>
      <Link
        href="/"
        title={siteConfig.siteTitle}
        onClick={() => gtagTrack('siteLogoLink', '/', siteConfig.siteTitle)}
      >
        <Image
          src={siteConfig.siteLogo}
          alt={siteConfig.siteTitle}
          width={28}
          height={28}
          priority
        />
      </Link>
      <DocsSwitcher />
    </>
  )
}

export default HeaderLogo
