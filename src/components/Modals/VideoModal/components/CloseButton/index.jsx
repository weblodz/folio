import T from 'prop-types'
import closeBtn from '@assets/button/modalBtn.svg'
import styles from './closeButton.module.scss'

function Button({ onClose }) {
  return (
    <button className={styles.button} onClick={onClose}>
      <img src={closeBtn} alt="close modal" />
    </button>
  )
}

Button.propTypes = {
  onClose: T.func,
}

export default Button


