import { getPagesUnderRoute } from 'nextra/context'
import type { Page } from 'Type'
import Image from '../Image'
import Link from '../Link'

export default function DocsDesign() {
  return (
    <section className="py-16 lg:pt-24 lg:pb-28">
      <div className="pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] mx-auto max-w-[90rem] lg:text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight lg:font-extrabold lg:text-4xl lg:leading-snug lg:text-center 2xl:px-48">
          Tài liệu về Design
        </h2>
        <div className="mb-10 text-lg font-normal lg:text-center lg:text-xl lg:px-64 lg:mb-16 dark:text-neutral-300">
          Tổng hợp các tài liệu về Design dành cho những bạn HR mới tuyển dụng
          về Design.
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Docs />
        </div>
      </div>
    </section>
  )
}

function Docs() {
  const page = getPagesUnderRoute('/docs/design')
  return (
    <>
      {page.slice(0, 6).map((page: Page) => {
        return (
          <Link
            key={page.route}
            href={page.route}
            title={page.meta?.title || page.frontMatter?.title || page.name}
            className="block h-full rounded-none text-center overflow-hidden"
          >
            <div className="w-full flex flex-col gap-6">
              <Image
                className="w-full h-full object-cover rounded-xl aspect-video"
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
