import gtagTrack from '@utils/gtag'
import Link from './Link'

export default function PostJob() {
  return (
    <Link
      href="/dang-tin-tuyen-dung"
      className="inline-flex items-center transition-colors bg-vnodesign-100 text-vnodesign-800 dark:bg-vnodesign-400/10 dark:text-vnodesign-600 contrast-more:border contrast-more:border-vnodesign-500 contrast-more:dark:border-vnodesign-500 font-semibold rounded-lg text-sm px-3 py-2 text-center"
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
