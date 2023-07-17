import { ComponentIcon } from '@components/Icons'
import Image from '@components/Image'
import Link from '@components/Link'
import { siteConfig } from 'data/siteConfig'
import type { ReactNode } from 'react'

function FooterLink({
  href,
  title,
  children
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
  return <h3 className="mb-4 text-sm font-semibold">{children}</h3>
}

export function FooterContent() {
  return (
    <>
      <div className="grid grid-cols-2 gap-12 pt-10 mb-16 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 lg:pt-12">
        <div className="col-span-full lg:col-span-2">
          <div className="mb-4 lg:-mt-2">
            <Link
              className="inline-flex items-center gap-2 text-xl font-bold md:text-2xl"
              href="/"
              title={siteConfig.siteTitle}
            >
              <Image
                src={siteConfig.siteLogo}
                alt={siteConfig.siteTitle}
                width={95}
                height={94}
                className="w-5 h-auto"
                decoding="async"
                loading="lazy"
              />
              <span className="ml-1">{siteConfig.siteTitle}</span>
            </Link>
          </div>
          <p className="mb-6 sm:pr-8">{siteConfig.siteDescription}</p>
          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com/groups/xomhr"
              title="Facebook Group"
              aria-label="Facebook Group"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <ComponentIcon icon="Facebook" className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/tuanducdesigner"
              title="Twitter Profile"
              aria-label="Twitter Profile"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <ComponentIcon icon="Twitter" className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/vnodesign/hr-document"
              title="GitHub Repository"
              aria-label="GitHub Repository"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <ComponentIcon icon="GitHub" className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/tuanductran"
              title="Linkedin Profile"
              aria-label="Linkedin Profile"
              className="hover:text-gray-700 hover:dark:text-white"
            >
              <ComponentIcon icon="Linkedin" className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {siteConfig.navigation.map((section, sectionIndex) => {
          return (
            <div key={`footer-${sectionIndex}`}>
              <FooterHeader>{section.title}</FooterHeader>
              <nav className="flex flex-col gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={`footer-item-${itemIndex}`}>
                    <FooterLink href={item.href} title={item.name}>
                      {item.name}
                    </FooterLink>
                  </div>
                ))}
              </nav>
            </div>
          )
        })}
      </div>
      <hr className="my-6 lg:my-8 sm:mx-auto dark:border-neutral-800" />
      <div className="text-sm text-center">
        © 2022-{new Date().getFullYear()} {siteConfig.siteTitle}. All Rights
        Reserved.
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
