import Link from '@components/Link'
import { siteConfig } from '@data/siteConfig'
import { Navbar } from 'nextra-theme-docs'

export default function Navigation(props) {
  return (
    <>
      <Navbar {...props} />
      {siteConfig.navigationBanner && (
        <div className="w-full px-4 py-3 text-white bg-primary-600">
          <div className="text-sm font-semibold text-left sm:text-center">
            {siteConfig.navigationBannerTitle}{' '}
            {siteConfig.navigationBannerLink && (
              <Link
                title={siteConfig.navigationBannerLinkTitle}
                href={siteConfig.navigationBannerLink}
                className="font-extrabold underline"
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
