import Link from '@components/Link'
import { Navbar } from 'nextra-theme-docs'

export default function Navigation(props) {
  return (
    <>
      <Navbar {...props} />
      <div className="w-full px-4 py-3 text-white bg-primary-600">
        <div className="text-sm font-semibold text-left sm:text-center">
          Chào bạn, bạn mới tuyển dụng về IT?{' '}
          <Link
            title="Khái niệm giữa Back End và Front End"
            href="/blog/khai-niem-giua-back-end-va-front-end"
            className="font-extrabold underline"
          >
            Hãy đọc bài viết này nhé!
          </Link>{' '}
          (Trong bài viết này mình sẽ nói chi tiết hơn về khái niệm giữa Back
          End và Front End).
        </div>
      </div>
    </>
  )
}
