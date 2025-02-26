import { useState, forwardRef } from 'react'
import T from 'prop-types'
import styles from './usernameinput.module.scss'

const validateUsername = (username) => {
  if (!username.trim()) return 'Enter your username'

  return ''
}

const UsernameInput = forwardRef(({ value, onChange, errorMessage, isValid = true, ...rest }, ref) => {
  const [localError, setLocalError] = useState(errorMessage || '')
  const [isTouched, setIsTouched] = useState(false)

  const handleChange = (e) => {
    const newValue = e.target.value

    if (isTouched) setLocalError(validateUsername(newValue))
    onChange(newValue)
  }

  const handleBlur = () => {
    setIsTouched(true)
    setLocalError(validateUsername(value))
  }

  const isInputValid = isValid && !localError

  return (
    <div className={styles.username_container}>
      <div className={styles.username_input_container} tabIndex={0}>
        <input
          className={isInputValid ? styles.username_input : `${styles.username_input} ${styles.invalid_input}`}
          type='text'
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
        <label className={value.trim() ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>
          {'Username'}
        </label>
      </div>
      {!isInputValid && <span className={styles.error_message}>{localError}</span>}
    </div>
  )
})

UsernameInput.displayName = 'UsernameInput'

export default UsernameInput

UsernameInput.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  errorMessage: T.string,
  isValid: T.bool,
}
