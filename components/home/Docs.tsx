import dynamic from 'next/dynamic'
import Link from '../Link'
const ArrowRightShort = dynamic(() => import('../Icons/ArrowRightShort'))
const ArrowRight = dynamic(() => import('../Icons/ArrowRight'))

export default function Docs() {
  return (
    <section className="py-16 lg:pt-24 lg:pb-28">
      <div className="px-4 mx-auto max-w-7xl lg:px-6">
        <div className="grid gap-12 space-y-8 lg:grid-cols-2 lg:space-y-0">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight">Tài liệu chi tiết</h2>
            <p className="mb-4 sm:text-xl dark:text-neutral-300">
              Tài liệu chi tiết và dễ hiểu, dễ tiếp cận với những bạn HR mới vào nghề.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center font-medium sm:text-lg text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
              title="Tìm hiểu thêm về các tài liệu trong ngành IT và ngành Design"
            >
              Tìm hiểu thêm về các tài liệu
              <ArrowRightShort className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div>
            <Link
              href="/docs/front-end"
              className="flex items-center justify-between p-4 mb-6 bg-gray-100 border-l-8 rounded shadow dark:bg-black border-primary-600 dark:border-primary-500"
            >
              <div>
                <span className="block mb-1 text-xs font-medium uppercase">
                  Tài liệu này dành cho các bạn HR đang tuyển dụng về Front End.
                </span>
                <span className="text-lg font-semibold text-primary-600 dark:text-primary-500">
                  Front End
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-primary-600 dark:text-primary-500" />
            </Link>
            <Link
              href="/docs/back-end"
              className="flex items-center justify-between p-4 mb-6 bg-gray-100 border-l-8 rounded shadow dark:bg-black border-sky-600 dark:border-sky-500"
            >
              <div>
                <span className="block mb-1 text-xs font-medium uppercase">
                  Tài liệu này dành cho các bạn HR đang tuyển dụng về Back End.
                </span>
                <span className="text-lg font-semibold text-sky-600 dark:text-sky-500">
                  Back End
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-sky-600 dark:text-sky-500" />
            </Link>
            <Link
              href="/docs/linux"
              className="flex items-center justify-between p-4 mb-6 bg-gray-100 border-l-8 border-blue-600 rounded shadow dark:bg-black dark:border-blue-500"
            >
              <div>
                <span className="block mb-1 text-xs font-medium uppercase">
                  Tài liệu này dành cho các bạn HR đang tuyển dụng về System.
                </span>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-500">
                  Linux và Server
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            </Link>
            <Link
              href="/docs/design"
              className="flex items-center justify-between p-4 bg-gray-100 border-l-8 border-pink-600 rounded shadow dark:bg-black dark:border-pink-500"
            >
              <div>
                <span className="block mb-1 text-xs font-medium uppercase">
                  Tài liệu này dành cho các bạn HR đang tuyển dụng về Design.
                </span>
                <span className="text-lg font-semibold text-pink-600 dark:text-pink-500">
                  Design
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-pink-600 dark:text-pink-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
