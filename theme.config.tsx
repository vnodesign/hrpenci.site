/* eslint-disable import/no-anonymous-default-export */
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Navigation from '@components/Navigation'
// import Social from '@components/Navigation/Social'
import { Footer } from '@components/Footer'

export default {
  project: {
    link: 'https://github.com/vnodesign/hr-document',
  },
  chat: {
    link: 'https://www.facebook.com/groups/xomhr',
    icon: (
      <>
        <svg
          width="24"
          height="24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Facebook</title>
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        </svg>
        <span className="nx-sr-only">Facebook</span>
      </>
    ),
  },
  docsRepositoryBase: 'https://github.com/vnodesign/hr-document/blob/docs/',
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const ogTitle =
      frontMatter?.title || 'HR Documentation - Nền tảng chia sẻ các kiến thức và tài liệu'

    const ogUrl = frontMatter?.image
      ? `https://hr.penci.me${frontMatter.image}`
      : 'https://hr.penci.me/static/documentation-card.png'

    const ogDescription =
      frontMatter?.description ||
      'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.'

    const title = frontMatter?.title || 'HR Documentation'

    return {
      titleTemplate: ogTitle,
      description: ogDescription,
      canonical: `https://hr.penci.me${asPath}`,
      openGraph: {
        url: `https://hr.penci.me${asPath}`,
        title: title,
        description: ogDescription,
        images: [
          {
            url: ogUrl,
            alt: title,
            width: '1200',
            height: '630',
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
        { content: ogUrl, name: 'twitter:image' },
      ],
    }
  },
  logo: <strong>HR Documentation</strong>,
  search: {
    emptyResult: (
      <>
        <span className="block p-8 text-sm text-center text-gray-400 select-none">
          Không tìm thấy kết quả cho từ khoá này.
        </span>
      </>
    ),
    placeholder: 'Tìm kiếm tài liệu...',
  },
  head() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="apple-mobile-web-app-title" content="HR Documentation" />
        <meta name="msapplication-TileImage" content="/static/apple-touch-icon-144x144.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/static/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dateString = useMemo(() => {
      const locale = navigator.language || 'vi-VN'
      const options = { day: 'numeric', month: 'short', year: 'numeric' }
      return timestamp.toLocaleDateString(locale, options)
    }, [timestamp])

    return <>Cập nhật lần cuối lúc: {dateString}</>
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Sáng',
        dark: 'Tối',
        system: 'Hệ thống',
      }
    },
  },
  toc: {
    title: 'Mục lục tài liệu',
  },
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
  darkMode: true,
  navbar: {
    component: Navigation,
    // extraContent: <Social />,
  },
  footer: {
    component: Footer,
  },
}
