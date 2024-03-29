import gtagTrack from '@/utils/gtag'
import { siteConfig } from '@config/siteConfig'
import Image from './Image'
import Link from './Link'

function HeaderLogo() {
  return (
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
  )
}

export default HeaderLogo
