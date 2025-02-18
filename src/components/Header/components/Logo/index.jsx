import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import LogoIcon from "@components/UiKit/Icons/Logo"
import LogoSubIcon from "@components/UiKit/Icons/LogoSub"
import styles from "./logo.module.scss"

function Logo({ isMenuOpen }) {
  return (
    <div>
      <Link className={styles.logo_link} to="/">
        <span className={`${styles.img_wrapper} ${isMenuOpen ? styles.black_logo : ""}`}>
          <LogoIcon />
        </span>
        <span className={`${styles.img_wrapper__sub} ${isMenuOpen ? styles.black_logo : ""}`}>
          <LogoSubIcon />
        </span>
      </Link>
    </div>
  )
}

Logo.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Logo
