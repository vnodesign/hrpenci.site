import Link from 'next/link'
import { ReactNode, ReactElement } from 'react'
import cn from 'clsx'
import { ThemeSwitch, useConfig } from 'nextra-theme-docs'

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline hover:text-gray-700 hover:dark:text-white transition font-normal";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm font-semibold uppercase">{children}</h3>;
}

const navigation = {
  documention: [
    { name: "Front End là gì", href: "/front-end" },
    { name: "Back End là gì", href: "/back-end" },
    { name: "Linux là gì", href: "/linux" },
    { name: "Design là gì", href: "/design" },
  ],
  help: [
    { name: "Liên hệ", href: "/lien-he" },
    { name: "GitHub issues", href: "https://github.com/vnodesign/hr-document/issues" },
  ],
  interview: [
    { name: "Front End Interview Handbook", href: "https://www.frontendinterviewhandbook.com/" },
  ],
  links: [
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Bản quyền", href: "/ban-quyen" },
    { name: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
    { name: "Điều khoản", href: "/dieu-khoan" },
  ],
};

export function FooterContent() {
  return (
    <div className="w-full">
      <div className="w-full py-3 mx-auto">
        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-6 xl:gap-8">
          <div className="col-span-2">
            <Link className="flex self-center mb-6 text-2xl font-semibold" title="HR Documention" href="/">
              HR Documention
            </Link>
            <div>
              <p>
                Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.
              </p>
            </div>
          </div>
          <div>
            <FooterHeader>Tài liệu</FooterHeader>
            <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
              {navigation.documention.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterHeader>Giúp đỡ và hỗ trợ</FooterHeader>
            <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
              {navigation.help.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterHeader>Front End Interview</FooterHeader>
            <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
              {navigation.interview.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterHeader>Liên kết</FooterHeader>
            <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
              {navigation.links.map((item) => (
                <li key={item.name}>
                  <FooterLink href={item.href}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 mx-auto mt-8 border-t dark:border-neutral-800">
          <div className="mt-4">
            <p className="font-normal">
              ©{new Date().getFullYear()} HR Documentation. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {

  const config = useConfig()

  return (
    <footer className="bg-transparent pb-[env(safe-area-inset-bottom)] relative">
      <div className="footer-container-blur pointer-events-none absolute z-[-1] h-full w-full bg-white/[.85] dark:bg-neutral-900/80 shadow-[0_2px_4px_rgba(0,0,0,.02),0_-1px_0_rgba(0,0,0,.06)_inset] dark:shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] contrast-more:shadow-[0_0_0_1px_#000] contrast-more:dark:shadow-[0_0_0_1px_#fff]"></div>
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        {config.darkMode && <ThemeSwitch />}
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={cn(
          'mx-auto flex max-w-[90rem] justify-center py-12 text-gray-600 dark:text-gray-400 md:justify-start',
          'pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]'
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
