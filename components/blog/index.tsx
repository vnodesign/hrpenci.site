import React from 'react'
import { getPagesUnderRoute } from 'nextra/context'
import Link from '../Link'

type Page = {
  route: string
  name: string
  meta?: {
    title?: string
  }
  frontMatter?: {
    title?: string
    description?: string
    date?: string
  }
}

export default function Blog() {
  const pages = getPagesUnderRoute('/blog')
  const pageTitle = 'Blog'
  const pageDescription =
    'Tổng hợp các bài viết chia sẻ về các khái niệm trong ngành IT và ngành Design.'

  return (
    <>
      <div className="max-w-screen-lg pt-4 pb-8 mx-auto mb-16 border-b border-gray-400 border-opacity-20">
        <h1>
          <span className="font-bold leading-tight lg:text-5xl">{pageTitle}</span>
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 font-space-grotesk">
          {pageDescription}
        </p>
      </div>
      {pages.map(({ route, name, meta, frontMatter }: Page) => (
        <div key={route} className="my-10 last:my-0">
          <Link
            href={route}
            className="block mt-8 text-2xl font-semibold !no-underline"
            title={meta?.title || frontMatter?.title || name}
          >
            {meta?.title || frontMatter?.title || name}
          </Link>
          <p className="mt-3">
            {frontMatter?.description}{' '}
            <span className="inline-block">
              <Link href={route} title={meta?.title || frontMatter?.title || name}>
                {'Đọc tiếp →'}
              </Link>
            </span>
          </p>
          {frontMatter?.date && <p className="text-sm">{frontMatter.date}</p>}
        </div>
      ))}
    </>
  )
}
