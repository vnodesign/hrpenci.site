import Link from '../Link'
import Image from '../Image'
import { BiCheck } from 'react-icons/bi'

const heroContent = {
  featured: [
    { name: 'Dễ tiếp cận và dễ hiểu với những bạn HR mới vào nghề.', icon: BiCheck },
    { name: 'Tài liệu đa dạng về các chủ đề liên quan đến IT và Design.', icon: BiCheck },
    { name: 'Các bài chia sẻ chi tiết và chuyên sâu về IT và Design.', icon: BiCheck },
  ],
}

export default function Hero() {
  return (
    <div className="w-full py-8 space-y-12 md:space-y-20 md:py-16 lg:py-20 bg-gray-100 dark:bg-[#000]">
      <div className="flex justify-start w-full px-4 md:justify-center">
        <div className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm bg-white rounded-full dark:bg-gray-900">
          <div className="rounded-full bg-pink-600 py-1.5 px-4 mr-3 text-xs text-pink-50">New</div>
          <Link
            href="/blog/khai-niem-giua-back-end-va-front-end"
            title="Khái niệm giữa Back End và Front End"
            className="text-sm font-medium"
          >
            Khái niệm giữa Back End và Front End, dành cho các bạn HR mới tuyển dụng về IT.
          </Link>
        </div>
      </div>
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-16 px-4 mx-auto md:grid-cols-2 md:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-200 lg:text-5xl">
            Welcome to HR Documentation
          </h1>
          <p className="text-lg leading-relaxed">
            HR Documentation là một nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back
            End, Linux và Design dành cho những bạn HR mới bước chân vào nghề tuyển dụng.
          </p>
          <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
            {heroContent.featured.map((value, index) => (
              <li key={index} className="flex space-x-3">
                <div className="pt-1">
                  <value.icon className="w-5 h-5 text-green-800 dark:text-green-400" />
                </div>
                <span>{value.name}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-col md:space-y-4 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4">
            <Link
              href="/docs"
              className="flex items-center justify-center px-6 py-2 space-x-3 font-medium bg-pink-600 border border-pink-800 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-900 text-pink-50 hover:bg-pink-500 dark:border-pink-700 dark:hover:border-pink-600"
              title="Bắt đầu đọc tài liệu về IT và Design"
            >
              Bắt đầu
            </Link>
            <Link
              href="/gioi-thieu"
              className="flex items-center justify-center px-6 py-2 space-x-3 font-medium text-pink-800 bg-pink-100 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-900 hover:bg-pink-50 dark:text-pink-300 dark:border-pink-500/30 dark:hover:bg-pink-500/30 dark:bg-pink-500/20"
              title="Giới thiệu về HR Documentation và HR Community"
            >
              Giới thiệu
            </Link>
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="overflow-hidden border border-gray-100 shadow-lg rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 shadow-gray-100 dark:shadow-gray-900">
            <Image
              src="/static/documentation-card.png"
              alt="Documentation Card"
              width={830}
              height={450}
              placeholder="blur"
              blurDataURL="/static/documentation-card.png"
              sizes="(max-width 830px) 80vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
