import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { Footer } from "@components/Footer";

export default {
  project: {
    link: 'https://github.com/vnodesign/hr-document',
  },
  docsRepositoryBase: 'https://github.com/vnodesign/hr-document/blob/docs/',
  useNextSeoProps() {
    const { route } = useRouter()
    if (route == '/') {
      return {
        titleTemplate: 'HR Documentation'
      }
    } else {
      return {
        titleTemplate: '%s – HR Documentation'
      }
    }
  },
  logo: <strong>HR Documentation</strong>,
  search: {
    emptyResult: 'Không tìm thấy kết quả cho từ khoá này',
    placeholder: 'Tìm kiếm tài liệu...',
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="vi" />
      <link rel="canonical" href={asPath} />
      <meta name="description" content={frontMatter.description || 'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.'} />
      <meta property="og:site_name" content="HR Documentation" />
      <meta property="og:type" content={asPath === '/' ? 'website' : 'article'} />
      <meta property="og:url" content={asPath} />
      <meta property="og:title" content={frontMatter.title || 'HR Documentation'} />
      <meta property="og:description" content={frontMatter.description || 'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.'} />
      <meta property="og:image" content="/EAEC120F-BD44-45FA-8F1A-E9052824DA98.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={frontMatter.title || 'HR Documentation'} />
      <meta name="twitter:description" content={frontMatter.description || 'Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.'} />
      <meta name="twitter:url" content={asPath} />
      <meta name="twitter:image" content="/EAEC120F-BD44-45FA-8F1A-E9052824DA98.png" />
      <meta name="apple-mobile-web-app-title" content="HR Documentation" />
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
    return (
      <>
        Cập nhật lần cuối{' '}
        {timestamp.toLocaleDateString()}
      </>
    )
  },
  darkMode: true,
  footer: {
    component: Footer,
  },
}
