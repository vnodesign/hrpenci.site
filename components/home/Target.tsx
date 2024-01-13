import { ComponentIcon } from '@components/Icons'
import cn from 'clsx'
import Card from './Card'
import styled from './target.module.css'

const overhangs = {
  sm: cn('top-0 xl:top-8'),
  md: cn('top-0 xl:top-14'),
  lg: cn('top-0 xl:top-16')
}

export default function Target() {
  return (
    <div className="relative">
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div>
          <div
            className={cn(
              'hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120]',
              overhangs.sm
            )}
          />
          <div
            className={cn(
              'absolute inset-x-0 bg-top bg-no-repeat',
              styled['beams-1'],
              overhangs.sm
            )}
          />
          <div
            className={cn(
              'absolute inset-x-0 h-[37.5rem] bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-100/[0.03] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5',
              overhangs.sm
            )}
          />
        </div>
      </div>
      <div className="relative py-5 my-auto xl:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-2xl text-center font-bold text-zinc-900 dark:text-white md:text-3xl lg:text-4xl">
            Mục tiêu của nền tảng này là gì?
          </h3>
          <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300 text-lg">
            Mục tiêu chính của HR Documentation được thành lập ra là để chia sẻ
            những thông tin mà người sáng lập biết và muốn chia sẻ.
          </p>
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Tài liệu về IT"
              description="Các tài liệu trong này dành cho những bạn đang tuyển dụng về IT."
              icon={
                <ComponentIcon
                  icon="FileCode"
                  className="w-6 h-6 fill-vnodesign-400 hover:animate-spin"
                />
              }
            />
            <Card
              title="Tài liệu về Design"
              description="Các tài liệu trong này dành cho những bạn đang tuyển dụng về Design."
              icon={
                <ComponentIcon
                  icon="SwatchBook"
                  className="w-6 h-6 fill-vnodesign-400 hover:animate-spin"
                />
              }
            />
            <Card
              title="Tài liệu nâng cao"
              description="Các tài liệu trong này sẽ giúp bạn hiểu rõ hơn về ngành IT và ngành Design."
              icon={
                <ComponentIcon
                  icon="Folder"
                  className="w-6 h-6 fill-vnodesign-400 hover:animate-spin"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
