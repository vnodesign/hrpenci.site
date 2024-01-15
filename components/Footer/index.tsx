import gtagTrack from '@/utils/gtag'
import { ComponentIcon } from '@components/Icons'
import Link from '@components/Link'
import { siteConfig } from '@config/siteConfig'
import { cn } from '@utils/cn'
import { ThemeSwitch, useConfig } from 'nextra-theme-docs'
import type { ReactElement, ReactNode } from 'react'

function FooterLink({
  href,
  title,
  children
}: {
  href: string
  title: string
  children: ReactNode
}) {
  if (href.startsWith('http')) {
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

  return (
    <Link
      href={href}
      title={title}
      className="no-underline hover:text-gray-700 hover:dark:text-white"
      onClick={() => gtagTrack('siteFooterLink', href, title)}
    >
      {children}
    </Link>
  )
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h2 className="mb-6 font-semibold">{children}</h2>
}

function FooterContent() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {siteConfig.navigation.map((section, sectionIndex) => {
          return (
            <div key={`footer-${sectionIndex}`}>
              <FooterHeader>{section.title}</FooterHeader>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li
                    key={`footer-item-${itemIndex}`}
                    className="mb-4 last:mb-0"
                  >
                    <FooterLink href={item.href} title={item.name}>
                      {item.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
      <hr className="my-6 lg:my-8 sm:mx-auto dark:border-neutral-800" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center">
          © 2022-{new Date().getFullYear()} {siteConfig.siteTitle}. All Rights
          Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            href={`https://www.facebook.com/${siteConfig.fbFanpage}`}
            title="Facebook Fanpage"
            aria-label="Facebook Fanpage"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <ComponentIcon icon="Facebook" className="size-6" />
          </Link>
          <Link
            href={`https://twitter.com/${siteConfig.twitterSite}`}
            title="Twitter Profile"
            aria-label="Twitter Profile"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <ComponentIcon icon="Twitter" className="size-6" />
          </Link>
          <Link
            href={`https://github.com/${siteConfig.githubUserName}`}
            title="GitHub Profile"
            aria-label="GitHub Profile"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <ComponentIcon icon="GitHub" className="size-6" />
          </Link>
          <Link
            href={`https://linkedin.com/in/${siteConfig.linkedIn}`}
            title="Linkedin Profile"
            aria-label="Linkedin Profile"
            className="hover:text-gray-700 hover:dark:text-white"
          >
            <ComponentIcon icon="Linkedin" className="size-6" />
          </Link>
        </div>
      </div>
    </>
  )
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  const config = useConfig()
  return (
    <footer className="justify-self-end pb-[env(safe-area-inset-bottom)] border-t border-t-gray-100 dark:border-t-neutral-900">
      <div
        className={cn(
          'mx-auto max-w-[90rem] py-2 px-4 flex gap-2',
          menu && config.darkMode ? 'flex' : 'hidden'
        )}
      >
        {config.darkMode && <ThemeSwitch />}
      </div>
      <div className="max-w-[90rem] mx-auto py-12 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] text-gray-600 dark:text-gray-400">
        <FooterContent />
      </div>
    </footer>
  )
}
