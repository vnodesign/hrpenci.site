import DocsSwitcher from './DocsSwitcher'
import Link from './Link'
import styles from './header-logo.module.scss'

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="HR Documentation" className="font-semibold">
        HR Documentation
      </Link>
      <div className={styles.siteSwitcher}>
        <DocsSwitcher />
      </div>
    </>
  )
}

export default HeaderLogo
