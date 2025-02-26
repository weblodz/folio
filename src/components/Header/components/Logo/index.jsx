import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import cls from "classnames"
import LogoIcon from "@components/UiKit/Icons/Logo"
import LogoSubIcon from "@components/UiKit/Icons/LogoSub"
import styles from "./logo.module.scss"

function Logo({ isMenuOpen }) {
  return (
    <div>
      <Link className={styles.logo_link} to="/">
        <span className={cls(styles.img_wrapper, { [styles.black_logo]: isMenuOpen })}>
          <LogoIcon />
        </span>
        <span className={cls(styles.img_wrapper__sub, { [styles.black_logo]: isMenuOpen })}>
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
