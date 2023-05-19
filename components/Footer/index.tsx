import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import Link from '../Link'
import Image from '../Image'
const Facebook = dynamic(() => import('../Icons/Facebook'))
const Twitter = dynamic(() => import('../Icons/Twitter'))
const GitHub = dynamic(() => import('../Icons/GitHub'))
const Linkedin = dynamic(() => import('../Icons/Linkedin'))

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
  return <h3 className="mb-4 font-semibold">{children}</h3>
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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
        <div className="col-span-full lg:col-span-2">
          <div className="lg:-mt-2 mb-4">
            <Link
              className="inline-flex items-center text-xl md:text-2xl font-bold gap-2"
              href="/"
              title="HR Documentation"
            >
              <Image
                src="/static/favicon.png"
                alt="HR Documentation"
                width={95}
                height={94}
                className="w-5 h-auto"
                priority
              />
              <span className="ml-1">HR Documentation</span>
            </Link>
          </div>
          <p className="sm:pr-8 mb-6">
            Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành
            cho HR.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com/groups/xomhr"
              title="Facebook Group"
              aria-label="Facebook Group"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/tuanducdesigner"
              title="Twitter Profile"
              aria-label="Twitter Profile"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/vnodesign/hr-document"
              title="GitHub Repository"
              aria-label="GitHub Repository"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <GitHub className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/tuanductran"
              title="Linkedin Profile"
              aria-label="Linkedin Profile"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <FooterHeader>Tài liệu IT</FooterHeader>
          <nav className="flex flex-col gap-4">
            {navigation.it.map((item) => (
              <div key={item.name}>
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </div>
            ))}
          </nav>
        </div>
        <div>
          <FooterHeader>Tài liệu Design</FooterHeader>
          <nav className="flex flex-col gap-4">
            {navigation.design.map((item) => (
              <div key={item.name}>
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </div>
            ))}
          </nav>
        </div>
        <div>
          <FooterHeader>Liên kết</FooterHeader>
          <nav className="flex flex-col gap-4">
            {navigation.links.map((item) => (
              <div key={item.name}>
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </div>
            ))}
          </nav>
        </div>
        <div>
          <FooterHeader>Phần mềm quản lý nhân sự</FooterHeader>
          <nav className="flex flex-col gap-4">
            {navigation.software.map((item) => (
              <div key={item.name}>
                <FooterLink href={item.href} title={item.name}>
                  {item.name}
                </FooterLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <hr className="my-6 lg:my-8 sm:mx-auto dark:border-neutral-800" />
      <div className="text-sm text-center">
        © 2022-{new Date().getFullYear()} HR Documentation. All Rights Reserved.
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-100 justify-self-end dark:bg-neutral-900">
      <div className="max-w-[90rem] mx-auto py-6 md:py-8 lg:py-10 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] text-gray-600 dark:text-gray-400">
        <FooterContent />
      </div>
    </footer>
  )
}
