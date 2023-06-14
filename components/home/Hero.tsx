import { ComponentIcon } from '../Icons'
import Image from '../Image'
import Link from '../Link'

export default function Hero() {
  return (
    <section className="py-8 bg-gray-100 dark:bg-black lg:pt-12 lg:pb-16">
      <div className="max-w-screen-xl px-4 mx-auto lg:text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight lg:font-extrabold lg:text-6xl lg:leading-none lg:text-center xl:px-36 lg:mb-7 text-slate-800 dark:text-slate-200">
          Chào mừng bạn đến với HR Documentation!
        </h1>
        <p className="mb-10 text-lg font-normal lg:text-center lg:text-xl xl:px-60">
          Nền tảng này được tạo ra với mong muốn giúp những người mới bước chân
          vào nghề tuyển dụng hiểu rõ hơn về các khái niệm trong lĩnh vực IT và
          Design.
        </p>
        <div className="flex flex-col mb-8 md:flex-row lg:justify-center">
          <Link
            href="/docs"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
            title="Bắt đầu"
          >
            Bắt đầu
          </Link>
          <Link
            href="https://www.facebook.com/groups/xomhr"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center"
            title="Group đăng tin tuyển dụng"
          >
            <ComponentIcon icon="Facebook" className="w-5 h-5 mr-3" />
            Group đăng tin tuyển dụng
          </Link>
        </div>
        <Image
          className="relative w-full max-w-4xl mx-auto mt-12 border border-gray-100 shadow-lg shadow-gray-100 dark:shadow-gray-900 rounded-2xl lg:mt-20 dark:border-gray-800"
          src="/static/documentation-card.png"
          alt="Documentation Card"
          width={830}
          height={450}
          sizes="(max-width 830px) 80vw, 50vw"
          priority
        />
      </div>
    </section>
  )
}
