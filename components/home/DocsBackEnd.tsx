import gtagTrack from '@/utils/gtag'
import Image from '@components/Image'
import Link from '@components/Link'
import { getPagesUnderRoute } from 'nextra/context'
import type { Page } from 'Type'

export default function DocsBackEnd() {
  return (
    <section className="py-16 lg:pt-24 lg:pb-28">
      <div className="pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] mx-auto max-w-[90rem] lg:text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight lg:font-extrabold lg:text-4xl lg:leading-snug lg:text-center 2xl:px-48">
          Tài liệu về Back End
        </h2>
        <p className="mb-10 text-lg font-normal lg:text-center lg:text-xl lg:px-64 lg:mb-16 dark:text-neutral-300">
          Tổng hợp các tài liệu về Back End dành cho những bạn HR mới tuyển dụng
          về IT.
        </p>
        <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0">
          <Docs />
        </div>
      </div>
    </section>
  )
}

function Docs() {
  const page = getPagesUnderRoute('/docs/back-end')
  return (
    <>
      {page.slice(0, 4).map((page: Page) => {
        return (
          <Link
            key={page.route}
            href={page.route}
            title={page.meta?.title || page.frontMatter?.title || page.name}
            className="block h-full rounded-none text-center overflow-hidden"
            onClick={() =>
              gtagTrack(
                'docsBackEndLink',
                page.route,
                page.meta?.title || page.frontMatter?.title || page.name
              )
            }
          >
            <div className="w-full flex flex-col gap-6">
              <Image
                className="w-full h-full object-cover rounded-2xl aspect-video"
                src={page.frontMatter?.image}
                width={1200}
                height={600}
                alt={page.meta?.title || page.frontMatter?.title || page.name}
                sizes="(max-width 1200px) 80vw, 50vw"
                decoding="async"
                loading="lazy"
              />
              <div className="w-full">
                <h3 className="text-xl font-bold leading-5 tracking-tight">
                  {page.meta?.title || page.frontMatter?.title || page.name}
                </h3>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
