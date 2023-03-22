import DocsSwitcher from './DocsSwitcher'
import Link from './Link'
import styles from './header-logo.module.scss'

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Document" className="font-semibold">
        HR Document
      </Link>
      <div className={styles.siteSwitcher}>
        <DocsSwitcher />
      </div>
    </>
  )
}

export default HeaderLogo
