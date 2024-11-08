import styles from './header.module.scss'
import logo from '/src/assets/header/logo.svg'
import subLogo from '/src/assets/header/subText.svg'
import langIcon from '/src/assets/header/language.svg'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
          <img src={subLogo} alt="Sub Logo" />
        </div>
        <div className={styles.linksContainer}>
          <a className={styles.link} href="#">
            Prototype
          </a>
          <a className={styles.link} href="#">
            Discover
          </a>
          <a className={styles.link} href="#">
            About Us
          </a>
        </div>
        <div className={styles.lang}>
          <img src={langIcon} alt="language" />
        </div>
      </div>
    </header>
  )
}
