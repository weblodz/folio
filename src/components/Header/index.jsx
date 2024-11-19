import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Language from './components/Language'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
        <Language />
      </div>
    </header>
  )
}
