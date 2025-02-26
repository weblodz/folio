import PropTypes from "prop-types"
import { useEffect } from "react"
import cls from "classnames"
import styles from "./hamburgerButton.module.scss"

function HamburgerButton({ isOpen, onToggle }) {

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = 'hidden'
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`)

      const handleResize = () => {
        if (window.innerWidth > 768) {
          onToggle()
        }
      }

      window.addEventListener('resize', handleResize)

      return () => {
        document.body.style.overflow = ''
        document.documentElement.style.removeProperty('--scrollbar-width')
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isOpen, onToggle])

  return (
    <button className={cls(styles.button, { [styles.toggled]: isOpen })} onClick={onToggle}>
      <div className={styles.bar_top}></div>
      <div className={styles.bar_bottom}></div>
    </button>
  )
}

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default HamburgerButton
