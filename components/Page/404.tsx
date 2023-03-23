import Link from '../Link'

export default function PageError() {
  return (
    <div className="w-full">
      <div className="py-8 px-4 mx-auto max-w-[90rem] lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Không tìm thấy trang</p>
          <p className="mb-4 text-lg font-light">
            Rất tiếc, trang bạn yêu cầu không khả dụng. Xin vui lòng thử lại hoặc trở về trang chủ
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 fontMedium rounded-full text-sm px-5 py-2.5 dark:focus:ring-primary-900 my-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="none"
              className="w-4 mr-2.5"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                fill="currentColor"
              />
            </svg>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
