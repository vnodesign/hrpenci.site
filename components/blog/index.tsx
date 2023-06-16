import { getPagesUnderRoute } from 'nextra/context'
import type { Page } from 'Type'
import Link from '../Link'

export default function Blog() {
  const pages = getPagesUnderRoute('/blog')
  const pageTitle = 'Blog'
  const pageDescription =
    'Tổng hợp các bài viết chia sẻ về các khái niệm trong ngành IT và ngành Design.'

  return (
    <div className="max-w-[52rem] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold">
          {pageTitle}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          {pageDescription}
        </p>
      </header>
      <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-black/[.05] dark:bg-gray-50/10 sm:block" />
        <div className="space-y-16">
          {pages.map(({ route, name, meta, frontMatter }: Page) => (
            <div key={route} className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-black/[.05] dark:group-hover:bg-gray-50/10" />
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-gray-500 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-current"
                  strokeWidth={2}
                />
              </svg>
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight pt-8 lg:pt-0">
                  {meta?.title || frontMatter?.title || name}
                </h3>
                <div
                  className="mt-2 mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: frontMatter?.description }}
                />
                {frontMatter?.date && (
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6">
                      <time dateTime={frontMatter.date}>
                        {frontMatter.date}
                      </time>
                    </dd>
                  </dl>
                )}
              </div>
              <Link
                href={route}
                className="flex items-center text-sm text-primary-500 font-medium !no-underline"
                title={meta?.title || frontMatter?.title || name}
              >
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                <span className="relative">
                  Xem thêm
                  <span className="sr-only">
                    , {meta?.title || frontMatter?.title || name}
                  </span>
                </span>
                <svg
                  className="relative mt-px overflow-visible ml-2.5 text-primary-300 dark:text-primary-700"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
