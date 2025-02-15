import { useState, useEffect } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import styles from './header.module.scss'

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.position = 'relative'
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.position = 'relative'
    }
  }, [isMobileMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.hamburger}>
          <Hamburger
            toggled={isMobileMenuOpen}
            toggle={setMobileMenuOpen}
            size={24}
            color="white"
          />
        </div>

        <Navbar />
      </div>

      {isMobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  )
}
