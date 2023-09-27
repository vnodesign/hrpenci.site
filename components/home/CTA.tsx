import Container from './Container'
import ShimmerButton from './ShimmerButton'

export default function CTA() {
  return (
    <div>
      <Container>
        <div className="mt-48 m-auto space-y-6 md:w-8/12 lg:w-7/12">
          <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Tham gia vào cộng đồng
          </h1>
          <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300 text-lg">
            Đây không chỉ là một cộng đồng về tuyển dụng, tìm kiếm việc làm. Mà
            đó còn là nơi để các bạn đặt câu hỏi.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <ShimmerButton
              href="/group-hr"
              className="w-full sm:w-auto items-center justify-center"
              background="linear-gradient(135deg, #34b4f4 0%, #129ee5 100%)"
              title="Tham gia vào cộng đồng"
            >
              <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10">
                Tham gia ngay
              </span>
            </ShimmerButton>
          </div>
        </div>
      </Container>
    </div>
  )
}
