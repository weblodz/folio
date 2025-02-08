import { useState } from 'react'
import { Slant as Hamburger } from 'hamburger-react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Language from './components/Language'
import styles from './header.module.scss'

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={styles.header}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        <Language isHovered={isHovered} />
      </div>
    </header>
  )
}
