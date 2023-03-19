import Link from '../Link'
import cn from 'clsx'
import { ReactNode, ReactElement } from 'react'
import { ThemeSwitch, useConfig } from 'nextra-theme-docs'
import DMCABadge from '../DMCABadge'

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
          <div className="mb-4">
            <p>
              Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design
              dành cho HR.
            </p>
          </div>
          <ul className="flex my-5 space-x-6">
            <li>
              <Link href="https://www.facebook.com/groups/xomhr" title="Facebook Group">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/tuanductran" title="Linkedin Profile">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fillRule="evenodd"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/vnodesign/hr-document" title="GitHub Repository">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>
          <DMCABadge />
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
        <span className={cn('block', menu && 'mb-4')}>
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
