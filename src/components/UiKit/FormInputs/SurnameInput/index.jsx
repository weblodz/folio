import { useState, forwardRef } from "react"
import T from "prop-types"
import styles from "./surnameinput.module.scss"

const validateSurname = (surname) => {
  if (!surname.trim()) return "Enter your last name"
  if (!/^[a-zA-Z'’-]+$/.test(surname)) return "Unsupported characters detected"

  return ""
}

const SurnameInput = forwardRef(({ value, onChange, errorMessage, isValid = true, ...rest }, ref) => {
  const [localError, setLocalError] = useState(errorMessage || "")
  const [isTouched, setIsTouched] = useState(false)

  const handleChange = (e) => {
    const newValue = e.target.value

    if (isTouched) setLocalError(validateSurname(newValue))
    onChange(newValue)
  }

  const handleBlur = () => {
    setIsTouched(true)
    setLocalError(validateSurname(value))
  }

  const isInputValid = isValid && !localError

  return (
    <div className={styles.surname_container}>
      <div className={styles.surname_input_container} tabIndex={0}>
        <input
          className={isInputValid ? styles.surname_input : `${styles.surname_input} ${styles.invalid_input}`}
          type="text"
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
        <label className={value.trim() ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>
          {"Surname"}
        </label>
      </div>
      {!isInputValid && <span className={styles.error_message}>{localError}</span>}
    </div>
  )
})

SurnameInput.displayName = "SurnameInput"

export default SurnameInput

SurnameInput.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  errorMessage: T.string,
  isValid: T.bool,
}
