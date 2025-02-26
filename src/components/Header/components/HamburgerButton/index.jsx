import PropTypes from "prop-types"
import cls from "classnames"
import styles from "./hamburgerButton.module.scss"

function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button className={cls(styles.button, { [styles.toggled]: isOpen })} onClick={onToggle}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  )
}

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default HamburgerButton
