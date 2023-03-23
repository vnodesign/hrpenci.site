export default function ServerError() {
  return (
    <div className="w-full">
      <div className="py-8 px-4 mx-auto max-w-[90rem] lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600 dark:text-primary-500">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Internal Server Error
          </p>
          <p className="mb-4 text-lg font-light">Chúng tôi đang làm việc để giải quyết vấn đề</p>
        </div>
      </div>
    </div>
  )
}
