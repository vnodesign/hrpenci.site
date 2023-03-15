import Link from '../Link'

export default function Social() {
  return (
    <Link
      href="https://www.facebook.com/groups/xomhr?rel=hr.penci.me"
      className="inline-flex items-center text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      title="Group đăng tin tuyển dụng, tìm kiếm việc làm"
    >
      Community{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
        className="hidden w-4 h-4 ml-1 xl:inline"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}
