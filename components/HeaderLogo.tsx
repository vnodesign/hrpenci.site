import DocsSwitcher from './DocsSwitcher'
import Link from './Link'
import Image from './Image'

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Documentation">
        <Image src="/static/favicon.png" alt="HR Documentation" width={28} height={28} priority />
      </Link>
      <div className="absolute left-1/2 [transform:translateX(-50%)] md:ml-3 md:relative md:left-0 md:[transform:none]">
        <DocsSwitcher />
      </div>
    </>
  )
}

export default HeaderLogo
