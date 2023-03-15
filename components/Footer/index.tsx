import Link from '../Link'
import { ReactNode, ReactElement } from 'react'
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
      className="text-[#666666] dark:text-[#888888] no-underline hover:text-gray-700 hover:dark:text-white transition font-normal"
    >
      {children}
    </Link>
  )
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="mb-6 text-sm font-semibold uppercase">{children}</h3>
}

const navigation = {
  documention: [
    { name: 'Front End là gì', href: '/front-end' },
    { name: 'Back End là gì', href: '/back-end' },
    { name: 'Linux là gì', href: '/linux' },
    { name: 'Design là gì', href: '/design' },
  ],
  help: [
    { name: 'Liên hệ', href: '/lien-he' },
    {
      name: 'GitHub issues',
      href: 'https://github.com/vnodesign/hr-document/issues',
    },
  ],
  interview: [
    {
      name: 'Front End Interview Handbook',
      href: 'https://www.frontendinterviewhandbook.com/',
    },
  ],
  links: [
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Bản quyền', href: '/ban-quyen' },
    { name: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
    { name: 'Điều khoản', href: '/dieu-khoan' },
  ],
}

export function FooterContent({ menu }) {
  const config = useConfig()
  return (
    <>
      <div className="grid gap-12 lg:grid-cols-6 lg:gap-24">
        <div className="col-span-2">
          <Link className="flex mb-6 text-2xl font-semibold" title="HR Documentation" href="/">
            HR Documentation
          </Link>
          <div>
            <p>
              Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design
              dành cho HR.
            </p>
          </div>
        </div>
        <div>
          <FooterHeader>Tài liệu</FooterHeader>
          <ul>
            {navigation.documention.map((item) => (
              <li key={item.name} className="mb-4 last:mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Giúp đỡ và hỗ trợ</FooterHeader>
          <ul>
            {navigation.help.map((item) => (
              <li key={item.name} className="mb-4 last:mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeader>Front End Interview</FooterHeader>
          <ul>
            {navigation.interview.map((item) => (
              <li key={item.name} className="mb-4 last:mb-4">
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
              <li key={item.name} className="mb-4 last:mb-4">
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="my-6 lg:my-8 dark:border-neutral-800" />
      <div className="flex flex-col items-center justify-between">
        <span className="block mb-4">
          © 2022-{new Date().getFullYear()} HR Documentation. All Rights Reserved.
        </span>
        {menu ? <>{config.darkMode && <ThemeSwitch />}</> : null}
      </div>
    </>
  )
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="py-8 bg-gray-100 justify-self-end lg:py-10 dark:bg-neutral-900">
      <div className="max-w-[90rem] mx-auto px-4 text-gray-600 dark:text-gray-400">
        <FooterContent menu={menu} />
      </div>
    </footer>
  )
}
