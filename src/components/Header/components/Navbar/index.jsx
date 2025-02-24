import { useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Menu from "@components/Header/components/Menu"
import HamburgerButton from "@components/Header/components/HamburgerButton"
import styles from "./navbar.module.scss"

function Navbar({ setIsMenuOpen, isMenuOpen }) {
  const { t } = useTranslation("nsCommon")
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev)
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <HamburgerButton
        isMenuOpen={isMenuOpen}
        isOpen={isOpen}
        onToggle={handleToggleMenu}
      />
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("product")}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("discover")}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("about")}
          </a>
        </li>
      </ul>

      {isOpen && <Menu isOpen={isOpen} onClose={() => { setIsOpen(false); setIsMenuOpen(false) }} />}
    </div>
  )
}

Navbar.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Navbar
