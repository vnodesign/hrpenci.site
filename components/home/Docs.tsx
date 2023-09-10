import gtagTrack from '@/utils/gtag'
import { ComponentIcon } from '@components/Icons'
import Link from '@components/Link'
import { siteConfig } from 'data/siteConfig'

export default function Docs() {
  return (
    <section className="py-16 lg:pt-24 lg:pb-28">
      <div className="pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] mx-auto text-center max-w-screen-xl">
        <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight lg:text-center md:text-4xl">
          Tài liệu chi tiết
        </h2>
        <p className="mb-10 text-lg font-normal lg:text-center lg:text-xl lg:px-64 lg:mb-16 dark:text-neutral-300">
          Tài liệu chi tiết và dễ hiểu, dễ tiếp cận với những bạn HR mới vào
          nghề.
        </p>
        <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12">
          {siteConfig.docsLink.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-8 py-12 text-center bg-black/[.05] dark:bg-gray-50/10 rounded-2xl"
              title={item.name}
              onClick={() => gtagTrack('docsLink', item.href, item.name)}
            >
              <ComponentIcon
                icon={item.icon}
                className="w-12 h-12 mx-auto fill-vnodesign-500"
              />
              <h3 className="font-semibold text-xl mt-3.5 text-gray-900 dark:text-gray-300">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
