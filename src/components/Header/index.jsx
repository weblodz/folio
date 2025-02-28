import { useState } from "react"
import Logo from "./components/Logo"
import Navbar from "./components/Navbar"
import Language from "./components/Language"
import styles from "./header.module.scss"

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`${styles.header} ${isMenuOpen ? styles.white_background : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.container}>
        <Logo isMenuOpen={isMenuOpen}/>
        <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <Language isHovered={isHovered} />
      </div>
    </header>
  )
}
