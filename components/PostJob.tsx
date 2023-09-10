import gtagTrack from '@utils/gtag'
import Link from './Link'

export default function PostJob() {
  return (
    <Link
      href="/dang-tin-tuyen-dung"
      className="inline-flex items-center text-gray-900 bg-gray-200 dark:bg-vnodesign-100/10 dark:text-gray-50 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-vnodesign-100/5 dark:hover:text-gray-50 font-semibold rounded-lg text-sm px-3 py-2 text-center"
      title="Đăng tin tuyển dụng"
      onClick={() =>
        gtagTrack(
          'sitePostJobLink',
          'dang-tin-tuyen-dung',
          'Đăng tin tuyển dụng'
        )
      }
    >
      Đăng tin tuyển dụng
    </Link>
  )
}
