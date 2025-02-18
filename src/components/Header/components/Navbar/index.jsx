import { useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Rotate as Hamburger } from "hamburger-react"
import Menu from "@components/Header/components/Menu"
import styles from "./navbar.module.scss"

function Navbar({ setIsMenuOpen, isMenuOpen }) {
  const { t } = useTranslation("nsCommon")
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
    setIsMenuOpen(!isOpen)
  }

  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${isMenuOpen ? styles.black_button : ""}`} onClick={handleToggleMenu}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
      </button>
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
