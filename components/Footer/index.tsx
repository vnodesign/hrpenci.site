import { ReactNode, ReactElement } from 'react'
import Link from '../Link'
import { Facebook } from '../Icons/Facebook'
import { Twitter } from '../Icons/Twitter'
import { GitHub } from '../Icons/GitHub'
import { Linkedin } from '../Icons/Linkedin'
import { ThemeSwitch, useConfig } from 'nextra-theme-docs'

function FooterLink({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      title={title}
      className="no-underline hover:text-gray-700 hover:dark:text-white"
    >
      {children}
    </Link>
  )
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="mb-6 text-sm font-semibold">{children}</h3>
}

const navigation = {
  it: [
    { name: 'Front End là gì', href: '/docs/front-end' },
    { name: 'Back End là gì', href: '/docs/back-end' },
    { name: 'Linux là gì', href: '/docs/linux' },
  ],
  design: [
    { name: 'Design là gì', href: '/docs/design' },
    { name: 'Microsoft Designer là gì', href: '/docs/design/microsoft-designer' },
    { name: 'Figma là gì', href: '/docs/design/figma' },
  ],
  interview: [
    {
      name: 'Danh sách câu hỏi phỏng vấn',
      href: '/interview',
    },
    {
      name: 'Câu hỏi phỏng vấn Front End',
      href: '/interview/front-end',
    },
    {
      name: 'Câu hỏi phỏng vấn Git',
      href: '/interview/git',
    },
  ],
  help: [
    { name: 'Liên hệ', href: '/lien-he' },
    {
      name: 'GitHub issues',
      href: 'https://github.com/vnodesign/hr-document/issues',
    },
  ],
  links: [
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Bản quyền', href: '/ban-quyen' },
    { name: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
    { name: 'Điều khoản', href: '/dieu-khoan' },
  ],
  software: [
    { name: '1Office', href: 'https://1office.vn' },
    { name: 'MISA AMIS', href: 'https://amis.misa.vn' },
    { name: 'HappyTime', href: 'https://happytime.vn' },
    { name: 'CoffeeHR', href: 'https://coffeehr.com.vn' },
  ],
}

export function FooterContent() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 md:grid-cols-3">
        <div>
          <FooterHeader>Tài liệu IT</FooterHeader>
          <ul>
            {navigation.it.map((item) => (
              <li key={item.name} className="mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Tài liệu Design</FooterHeader>
          <ul>
            {navigation.design.map((item) => (
              <li key={item.name} className="mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Câu hỏi phỏng vấn</FooterHeader>
          <ul>
            {navigation.interview.map((item) => (
              <li key={item.name} className="mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Giúp đỡ & Hỗ trợ</FooterHeader>
          <ul>
            {navigation.help.map((item) => (
              <li key={item.name} className="mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Liên kết</FooterHeader>
          <ul>
            {navigation.links.map((item) => (
              <li key={item.name} className="mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Phần mềm quản lý nhân sự</FooterHeader>
          <ul>
            {navigation.software.map((item) => (
              <li key={item.name} className="mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-6 lg:my-8 sm:mx-auto dark:border-neutral-800" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center">
          © 2022-{new Date().getFullYear()} HR Documentation. All Rights Reserved.
        </span>
        <div className="flex justify-center mt-4 space-x-6 sm:mt-0">
          <Link
            href="https://www.facebook.com/groups/xomhr"
            title="Facebook Group"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com/tuanducdesigner"
            title="Twitter Profile"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/vnodesign/hr-document"
            title="GitHub Repository"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <GitHub className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/tuanductran"
            title="Linkedin Profile"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  )
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  const config = useConfig()
  return (
    <footer className="bg-gray-100 justify-self-end dark:bg-neutral-900">
      {menu && (
        <div className="max-w-[90rem] mx-auto py-2 px-4 flex gap-2">
          {config.darkMode && <ThemeSwitch />}
        </div>
      )}
      <hr className="dark:border-neutral-800" />
      <div className="max-w-[90rem] mx-auto py-6 md:py-8 lg:py-10 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] text-gray-600 dark:text-gray-400">
        <FooterContent />
      </div>
    </footer>
  )
}
