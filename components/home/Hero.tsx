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
    <div className="py-10 bg-gray-100 dark:bg-black">
      <div className="w-full max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-200">
              Chào mừng bạn đến với HR Documentation!
            </h1>
            <p className="sm:text-xl">
              Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho những bạn HR mới bước chân vào nghề tuyển dụng.
            </p>
            <ul className="space-y-2 sm:text-xl text-slate-700 dark:text-slate-300">
              {heroContent.featured.map((value, index) => (
                <li key={index} className="flex space-x-3">
                  <div className="pt-1">
                    <value.icon className="w-5 h-5 text-green-800 dark:text-green-400" />
                  </div>
                  <span>{value.name}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row">
              <Link
                href="/docs"
                className="flex items-center justify-center px-6 py-3 font-medium text-white rounded-full bg-primary-600"
                title="Bắt đầu đọc tài liệu về IT và Design"
              >
                Bắt đầu đọc tài liệu về IT và Design
                <span className="ml-1">→</span>
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
    </div>
  )
}
