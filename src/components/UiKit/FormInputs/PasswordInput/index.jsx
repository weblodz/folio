import T from 'prop-types'
import EyeShown from '@components/UiKit/Icons/EyeShown/index.jsx'
import EyeHidden from '@components/UiKit/Icons/EyeHidden/index.jsx'
import { useState } from 'react'
import styles from './password.module.scss'

function PasswordInput({ value="", onChange, onBlur=null, isValid=true, errorMessage }) {
  const inputStyle = isValid ? `${styles.inputField}` : `${styles.inputField} ${styles.invalidEmailInput}`
  const [isInputFocused, setIsInputFocused] = useState(value !== "")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputType = isPasswordVisible ? "text" : "password"

  function handleToggleClick() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  function handleBlur() {
    if(value === "") {
      setIsInputFocused(false)
    }
    onBlur?.()
  }

  function handleFocus() {
    if(!isInputFocused) {
      setIsInputFocused(true)
    }
  }

  return (
    <div className={styles.componentContainer}>
      <div className={styles.inputContainer} tabIndex={0}>
        <label className={isInputFocused ?  `${styles.labelText} ${styles.focusedLabelText}` : `${styles.labelText}`}>{'Password'}</label>
        <div className={styles.inputWrapper}>
          <div className={styles.iconField}>
            <input className={inputStyle} value={value} type={inputType} onChange={onChange}
              onFocus={() => {handleFocus()}}
              onBlur={() => {handleBlur()}}
            />
            <span className={styles.toggleWrapper}>
              <button className={styles.toggleButton} onClick={handleToggleClick}>
                {isPasswordVisible ? <EyeShown size={'24'} fill={'var(--common-color-bg-inverse-primary)'} /> : <EyeHidden size={'24'} fill={'var(--common-color-bg-inverse-primary)'} />}
              </button>
            </span>
          </div>
        </div>
      </div>
      {isValid ? null : <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  )
}

export default PasswordInput

PasswordInput.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  isValid: T.bool.isRequired,
  errorMessage: T.string.isRequired,
  onBlur: T.func
}