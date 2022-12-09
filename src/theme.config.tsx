import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { FaGithub } from 'react-icons/fa'

export default {
  project: {
    link: 'https://github.com/vnodesign/hr-document',
    icon: <FaGithub className="w-6 h-6" />
  },
  docsRepositoryBase: 'https://github.com/vnodesign/hr-document/blob/docs/',
  useNextSeoProps() {
    const { route, asPath } = useRouter()
    const { frontMatter } = useConfig()
    return {
      titleTemplate: route == '/' ? 'HR Documentation' : '%s – HR Documentation',
      description:
        frontMatter.description || 'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.',
      canonical: `https://hr.penci.me${asPath}`,
      openGraph: {
        url: `https://hr.penci.me${asPath}`,
        title: frontMatter.title || 'HR Documentation',
        description:
        frontMatter.description || 'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.',
        images: [
          {
            url: frontMatter.image || 'https://hr.penci.me/documentation-card.png',
            alt: frontMatter.title || 'HR Documentation'
          }
        ],
        siteName: 'HR Documentation',
        type: asPath === '/' ? 'website' : 'article',
        locale: 'vi_VN'
      },
      facebook: {
        appId: '1031926270674334'
      },
      twitter: {
        handle: '@tuanducdesigner',
        site: '@tuanducdesigner',
        cardType: 'summary_large_image',
      },
    }
  },
  logo: <strong>HR Documentation</strong>,
  search: {
    emptyResult: 'Không tìm thấy kết quả cho từ khoá này',
    placeholder: 'Tìm kiếm tài liệu...',
  },
  head: () => {
    const { frontMatter } = useConfig()
    return <>
      <meta property="fb:admins" content="100005485267478" />
      <meta name="twitter:image" content={frontMatter.image || 'https://hr.penci.me/documentation-card.png'} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="vi" />
      <meta name="apple-mobile-web-app-title" content="HR Documentation" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
      <meta name="msapplication-TileImage" content="/apple-touch-icon-144x144.png" />
    </>
  },
  navigation: {
    prev: true,
    next: true,
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
    content: 'Gửi vấn đề về liên kết bị hỏng \u2192'
  },
  serverSideError: {
    content: 'Gửi vấn đề về lỗi trong url \u2192'
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Cập nhật lần cuối {dateString}</>;
  },
  darkMode: true,
  footer: {
    text: `Copyright © ${new Date().getFullYear()} HR Documentation. All Rights Reserved.`
  },
}
