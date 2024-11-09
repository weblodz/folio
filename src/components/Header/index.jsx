import styles from './header.module.scss'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Language from './components/LanguageSwitch'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
      <Language />
    </header>
  )
}
