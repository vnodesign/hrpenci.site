import gtagTrack from '@/utils/gtag'
import { ComponentIcon } from '@components/Icons'
import Image from '@components/Image'
import Link from '@components/Link'
import { siteConfig } from 'data/siteConfig'

export default function Hero() {
  return (
    <section className="py-8 bg-gray-100 dark:bg-black lg:pt-12 lg:pb-16">
      <div className="max-w-screen-xl px-4 mx-auto lg:text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight lg:font-extrabold lg:text-6xl lg:leading-none lg:text-center xl:px-36 lg:mb-7 text-slate-800 dark:text-slate-200">
          {siteConfig.heroTitle}
        </h1>
        <p className="mb-10 text-lg font-normal lg:text-center lg:text-xl xl:px-60">
          {siteConfig.heroSubTitle}
        </p>
        <div className="flex flex-col mb-8 md:flex-row lg:justify-center">
          <Link
            href="/docs"
            className="text-white bg-vnodesign-600 hover:bg-vnodesign-700 focus:ring-4 focus:ring-vnodesign-300 dark:focus:ring-vnodesign-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
            title="Bắt đầu"
            onClick={() => gtagTrack('heroDocsLink', '/docs', 'Bắt đầu')}
          >
            Bắt đầu
          </Link>
          <Link
            href="/group-hr"
            className="text-white bg-vnodesign-700 hover:bg-vnodesign-800 focus:ring-4 focus:ring-vnodesign-300 dark:focus:ring-vnodesign-800 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center"
            title="Group đăng tin tuyển dụng"
            onClick={() =>
              gtagTrack('heroHRLink', '/group-hr', 'Group đăng tin tuyển dụng')
            }
          >
            <ComponentIcon icon="Facebook" className="w-5 h-5 mr-3" />
            Group đăng tin tuyển dụng
          </Link>
        </div>
        <Image
          className="relative w-full max-w-4xl mx-auto mt-12 border border-gray-100 shadow-lg shadow-gray-100 dark:shadow-gray-900 rounded-2xl lg:mt-20 dark:border-gray-800"
          src="/static/documentation-card.png"
          alt="Documentation Card"
          width={830}
          height={450}
          sizes="(max-width 830px) 80vw, 50vw"
          priority
        />
      </div>
    </section>
  )
}
