import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs'
import Navigation from '@components/Navigation'
import HeaderLogo from '@components/HeaderLogo'
import { Footer } from '@components/Footer'
import { MDXComponents } from '@components/MDXComponents'

const siteUrl = 'https://hrpenci.site'

const theme: DocsThemeConfig = {
  project: {
    link: 'https://github.com/vnodesign/hr-document',
  },
  docsRepositoryBase: 'https://github.com/vnodesign/hr-document/edit/master/',
  useNextSeoProps: function SEO() {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const ogTitle = frontMatter?.title
      ? `${frontMatter.title} - HR Documentation`
      : 'HR Documentation - Nền tảng chia sẻ các kiến thức và tài liệu'

    const ogImage = frontMatter?.image
      ? `${siteUrl}${frontMatter.image}`
      : `${siteUrl}/static/documentation-card.png`

    const ogDescription =
      frontMatter?.description ||
      'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.'

    const title = frontMatter?.title || 'HR Documentation'

    const fullUrl = asPath === '/' ? siteUrl : `${siteUrl}${asPath}`

    return {
      titleTemplate: `${ogTitle}`,
      description: ogDescription,
      canonical: `${fullUrl}`,
      openGraph: {
        url: `${fullUrl}`,
        title: ogTitle,
        description: ogDescription,
        images: [
          {
            url: ogImage,
            alt: title,
            width: 1200,
            height: 630,
          },
        ],
        siteName: 'HR Documentation',
        type: asPath === '/' ? 'website' : 'article',
        locale: 'vi_VN',
      },
      facebook: {
        appId: '1031926270674334',
      },
      twitter: {
        handle: '@tuanducdesigner',
        site: '@tuanducdesigner',
        cardType: 'summary_large_image',
      },
      additionalMetaTags: [
        { content: '100005485267478', property: 'fb:admins' },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: ogDescription,
          name: 'twitter:description',
        },
        { content: ogImage, name: 'twitter:image' },
      ],
    }
  },
  logo: HeaderLogo,
  logoLink: false,
  search: {
    emptyResult: (
      <>
        <span className="block p-8 text-sm text-center text-gray-400 select-none">
          Không tìm thấy kết quả cho từ khoá này.
        </span>
      </>
    ),
    placeholder: 'Tìm kiếm...',
  },
  head: function Head() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="HR Documentation" />
        <meta name="application-name" content="HR Documentation" />
        <meta name="msapplication-TileImage" content="/static/apple-touch-icon-144x144.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
        <link rel="prefetch" href="/docs" as="document" />
        <link rel="prefetch" href="/blog" as="document" />
        <link rel="prefetch" href="/interview" as="document" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString())
    const locale = navigator.language || 'vi-VN'

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        )
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [locale, timestamp])

    return <>Cập nhật lần cuối lúc: {dateString}</>
  },
  toc: {
    float: true,
    title: 'Mục lục tài liệu',
  },
  i18n: [],
  editLink: {
    text: 'Đóng góp nội dung cho tài liệu này',
  },
  feedback: {
    content: 'Đặt câu hỏi cho tài liệu này',
  },
  notFound: {
    content: 'Gửi vấn đề về liên kết bị hỏng \u2192',
  },
  serverSideError: {
    content: 'Gửi vấn đề về lỗi trong url \u2192',
  },
  navbar: {
    component: Navigation,
  },
  footer: {
    component: Footer,
  },
  components: MDXComponents,
}

export default theme
