import T from 'prop-types'
import styles from './formbuttom.module.scss'

function FormButton({ text, isActive }) {
  return (
    <button className={isActive ? styles.activeButton : styles.inactiveButton}>{text}</button>
  )
}

export default FormButton

FormButton.propTypes = {
  text: T.string.isRequired,
  isActive: T.bool.isRequired,
}
