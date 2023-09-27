import { ComponentIcon } from '@components/Icons'
import Image from '@components/Image'
import Link from '@components/Link'
import { siteConfig } from '@config/siteConfig'
import type { JSX } from 'react'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'

type DocsCoverProps = {
  children: JSX.Element
  onClick: () => void
}

export default function Docs() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-20 sm:mt-32 md:mt-40">
      <div className="lg:p-4 space-y-6 md:flex md:gap-20 justify-center md:space-y-0 lg:items-center">
        <div className="md:w-7/12 lg:w-1/2">
          <DocsCover />
        </div>
        <div className="md:w-7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
            HR Documentation có những tài liệu nào?
          </h2>
          <p className="text-lg my-8 text-slate-700 dark:text-slate-200">
            Tại HR Documentation, chúng tôi hiện đang có các tài liệu sau.{' '}
            <Link
              href="/docs"
              title="Xem toàn bộ tài liệu"
              className="text-vnodesign-800 dark:text-vnodesign-600 font-semibold [text-underline-position:under] underline [text-decoration-thinkness:from-font]"
            >
              Xem toàn bộ tài liệu
            </Link>
          </p>
          <div className="divide-y space-y-6 divide-neutral-200/70 dark:divide-vnodesign-100/10">
            {siteConfig.docsItem.map((item, index) => (
              <div
                key={`docs-item-${index}`}
                className="pt-8 flex gap-4 md:items-center"
              >
                <div className="w-12 h-12 flex gap-4 rounded-full bg-vnodesign-100 dark:bg-vnodesign-400/10">
                  <ComponentIcon
                    icon={item.icon}
                    className="w-6 h-6 m-auto fill-vnodesign-800 dark:fill-vnodesign-600 hover:animate-spin"
                  />
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-100">
                    {item.name}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="my-10 text-sm text-gray-500 dark:text-gray-400">
            Ghi chú: Chúng tôi đang cần tìm một số cá nhân, tổ chức cùng chung ý
            tưởng để đóng góp nhiều nội dung hơn cho dự án này.
          </div>
        </div>
      </div>
    </section>
  )
}

function DocsCover() {
  const [showShowdown, setShowShowdown] = useState(false)

  const handleClick = () => {
    setShowShowdown(!showShowdown)
  }

  return (
    <DocsCoverWrapper onClick={handleClick}>
      {showShowdown ? (
        <div className="bg-white p-4 pb-6 dark:bg-[#202020] rounded-2xl">
          <div className="w-full">
            <p className="font-bold text-lg">Group Design Talks</p>
            <p className="text-sm mt-1 text-black dark:text-white">
              Group hỏi đáp và chia sẻ các kiến thức về Design.
            </p>
            <div className="p-4 rounded-2xl w-auto">
              <Image
                src="/static/banner/banner-group-design.png"
                alt="Banner Group Design Talks"
                width={1200}
                height={600}
                sizes="(max-width 1200px) 80vw, 50vw"
                loading="eager"
              />
            </div>
          </div>
          <div className="text-sm text-black dark:text-white">
            Tìm hiểu thêm về{' '}
            <Link
              href="/group-design"
              title="Group Design Talks"
              className="text-vnodesign-800 dark:text-vnodesign-600 font-semibold [text-underline-position:under] underline [text-decoration-thinkness:from-font]"
            >
              Group Design Talks
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 pb-6 dark:bg-[#202020] rounded-2xl">
          <div className="w-full">
            <p className="font-bold text-lg">Group HR Community</p>
            <p className="text-sm mt-1 text-black dark:text-white">
              Group đăng tin tuyển dụng và tìm kiếm việc làm về IT và Design.
            </p>
            <div className="p-4 rounded-2xl w-auto">
              <Image
                src="/static/banner/banner-group-hr.png"
                alt="Banner Group HR Community"
                width={1200}
                height={600}
                sizes="(max-width 1200px) 80vw, 50vw"
                loading="eager"
              />
            </div>
          </div>
          <div className="text-sm text-black dark:text-white">
            Tìm hiểu thêm về{' '}
            <Link
              href="/group-hr"
              title="Group HR Community"
              className="text-vnodesign-800 dark:text-vnodesign-600 font-semibold [text-underline-position:under] underline [text-decoration-thinkness:from-font]"
            >
              Group HR Community
            </Link>
          </div>
        </div>
      )}
    </DocsCoverWrapper>
  )
}

function DocsCoverWrapper({ children, onClick }: DocsCoverProps) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="shadow-[0_8px_16px_rgb(0_0_0_/_8%),0_1px_2px_rgb(0_0_0_/_4%),0_0_0_1px_rgb(0_0_0_/_3%)] dark:shadow-[0_0_0_1px_rgb(82_82_82_/_60%)] w-full
rounded-2xl text-center bg-white dark:bg-[#202020] p-px"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      <div className="absolute z-50 flex p-3 justify-end w-full">
        <button onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      {children}
    </Tilt>
  )
}
