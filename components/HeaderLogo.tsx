import DocsSwitcher from './DocsSwitcher'
import Link from './Link'
import Image from './Image'

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Documentation">
        <Image src="/static/favicon.png" alt="HR Documentation" width={28} height={28} priority />
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
