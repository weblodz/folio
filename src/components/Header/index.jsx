import { useState } from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Language from './components/Language'
import styles from './header.module.scss'

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header
      className={styles.header}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.container}>
        <Logo />
        <Navbar />
        <Language isHovered={isHovered} />
      </div>
    </header>
  )
}
