import gtagTrack from '@/utils/gtag'
import Link from '@components/Link'
import { siteConfig } from '@data/siteConfig'
import { Navbar } from 'nextra-theme-docs'

export default function Navigation(props) {
  return (
    <>
      <Navbar {...props} />
      {siteConfig.navigationBanner && (
        <div className="w-full px-4 py-3 text-white bg-vnodesign-600">
          <div className="text-sm font-semibold text-left sm:text-center">
            {siteConfig.navigationBannerTitle}{' '}
            {siteConfig.navigationBannerLink && (
              <Link
                title={siteConfig.navigationBannerLinkTitle}
                href={siteConfig.navigationBannerLink}
                className="font-extrabold underline"
                onClick={() =>
                  gtagTrack(
                    'navigationBannerLink',
                    siteConfig.navigationBannerLink,
                    siteConfig.navigationBannerLinkTitle
                  )
                }
              >
                {siteConfig.navigationBannerLinkText}
              </Link>
            )}{' '}
            {siteConfig.navigationBannerText}
          </div>
        </div>
      )}
    </>
  )
}
