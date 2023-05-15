import React from 'react'
import { getPagesUnderRoute } from 'nextra/context'
import Link from '../Link'
import { Page } from '../Page'

export default function Blog() {
  const pages = getPagesUnderRoute('/blog')
  const pageTitle = 'Blog'
  const pageDescription =
    'Tổng hợp các bài viết chia sẻ về các khái niệm trong ngành IT và ngành Design.'

  return (
    <>
      <div className="max-w-screen-lg pt-4 pb-8 mx-auto mb-16 border-b border-gray-400 border-opacity-20">
        <h1 className="font-bold leading-tight lg:text-5xl">{pageTitle}</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">{pageDescription}</p>
      </div>
      {pages.map(({ route, name, meta, frontMatter }: Page) => (
        <div key={route} className="my-10 last:my-0">
          <Link
            href={route}
            className="block text-2xl font-semibold !no-underline"
            title={meta?.title || frontMatter?.title || name}
          >
            {meta?.title || frontMatter?.title || name}
          </Link>
          {frontMatter?.date && <p className="text-sm">{frontMatter.date}</p>}
          <p>{frontMatter?.description}</p>
          <p>
            <Link
              href={route}
              title={meta?.title || frontMatter?.title || name}
              className="!no-underline"
            >
              Đọc tiếp →
            </Link>
          </p>
        </div>
      ))}
    </>
  )
}
