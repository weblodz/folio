import T from 'prop-types'
import styles from './formbuttom.module.scss'

function FormButton({ text, isActive, onClick }) {
  return (
    <button className={isActive ? styles.activeButton : styles.inactiveButton}
      onClick={() => {onClick()}} disabled={!isActive}>{text}</button>
  )
}

export default FormButton

FormButton.propTypes = {
  text: T.string.isRequired,
  isActive: T.bool.isRequired,
  onClick: T.func.isRequired,
}
