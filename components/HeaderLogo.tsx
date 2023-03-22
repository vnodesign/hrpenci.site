import DocsSwitcher from './DocsSwitcher'
import Link from './Link'

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Documentation" className="w-[28px] h-[26px]">
        <span className="sr-only">HR Documentation</span>
        <svg
          height={26}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </Link>
      <svg
        data-testid="geist-icon"
        fill="none"
        height={24}
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="mx-2 text-gray-500 dark:text-gray-400"
      >
        <path d="M16.88 3.549L7.12 20.451" />
      </svg>
      <div className="relative">
        <DocsSwitcher />
      </div>
    </>
  )
}

export default HeaderLogo
