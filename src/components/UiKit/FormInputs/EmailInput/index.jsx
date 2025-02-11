import T from 'prop-types'
import styles from './emailinput.module.scss'

function EmailInput({ value="", onChange, onBlur=null, isValid=true, errorMessage }) {
  const emailStyle = isValid ? `${styles.emailInput}` : `${styles.emailInput} ${styles.invalidEmailInput}`
  const isInputFocused = value === "" ? `${styles.labelText}` : `${styles.labelText} ${styles.focusedLabelText}`

  return (
    <div className={styles.componentContainer}>
      <div className={styles.inputContainer} tabIndex={0}>
        <input className={emailStyle} value={value} type="text" onChange={onChange} onBlur={onBlur}/>
        <label className={isInputFocused}>{"Email address"}</label>
      </div>
      {isValid ? null : <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  )
}

export default EmailInput

EmailInput.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  isValid: T.bool.isRequired,
  errorMessage: T.string.isRequired,
  onBlur: T.func
}
