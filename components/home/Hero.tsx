import gtagTrack from '@/utils/gtag'
import Image from '@components/Image'
import Link from '@components/Link'
import { siteConfig } from '@config/siteConfig'
import cn from 'clsx'
import styled from './hero.module.css'
import ShimmerButton from './ShimmerButton'

export default function Hero() {
  return (
    <div className="relative">
      <div className="pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div
          className={cn(
            'absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-dark',
            styled.beams
          )}
        >
          <div
            className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            {siteConfig.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            {siteConfig.heroSubTitle}
          </p>
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <ShimmerButton
              href="/docs"
              className="w-full sm:w-auto items-center justify-center"
              background="linear-gradient(135deg, #34b4f4 0%, #129ee5 100%)"
              title="Đọc các tài liệu trong lĩnh vực IT và Design"
              onClick={() =>
                gtagTrack(
                  'heroDocsLink',
                  '/docs',
                  'Đọc các tài liệu trong lĩnh vực IT và Design'
                )
              }
            >
              <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10">
                Bắt đầu
              </span>
            </ShimmerButton>
            <Link
              href="/gioi-thieu"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-vnodesign-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-vnodesign-900 dark:before:bg-vnodesign-950 sm:w-auto"
              title="Giới thiệu về nền tảng"
              onClick={() =>
                gtagTrack(
                  'heroAboutLink',
                  '/gioi-thieu',
                  'Giới thiệu về nền tảng'
                )
              }
            >
              <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-zinc-800 dark:text-zinc-100">
                Giới thiệu
              </span>
            </Link>
          </div>
        </div>
      </div>
      <HeroMockups />
    </div>
  )
}

function HeroMockups() {
  return (
    <div className="mx-auto mt-20 max-w-7xl px-4 sm:mt-24 sm:px-6 md:px-8 lg:mt-32">
      <Image
        src="/static/documentation-card.png"
        width={1200}
        height={600}
        alt="Documentation Card"
        className="relative mx-auto w-full max-w-4xl rounded-3xl border border-gray-300 dark:border-gray-700"
        sizes="(max-width 1200px) 80vw, 50vw"
        priority
      />
    </div>
  )
}
