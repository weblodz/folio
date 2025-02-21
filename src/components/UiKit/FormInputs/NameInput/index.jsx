import { useState, forwardRef } from "react"
import PropTypes from "prop-types"
import styles from "./nameinput.module.scss"

const validateName = (name) => {
  if (!name.trim()) return "Enter your first name"
  if (!/^[a-zA-Z'’-]+$/.test(name)) return "Unsupported characters detected"

  return ""
}

const NameInput = forwardRef(({ value, onChange, errorMessage, ...rest }, ref) => {
  const [localError, setLocalError] = useState(errorMessage || "")
  const [isTouched, setIsTouched] = useState(false)

  const handleChange = (e) => {
    const newValue = e.target.value

    if (isTouched) setLocalError(validateName(newValue))
    onChange(newValue)
  }

  const handleBlur = () => {
    setIsTouched(true)
    setLocalError(validateName(value))
  }

  const isValid = !localError

  return (
    <div className={styles.name_container}>
      <div className={styles.name_input_container} tabIndex={0}>
        <input
          className={isValid ? styles.name_input : `${styles.name_input} ${styles.invalid_input}`}
          type="text"
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
        <label className={value.trim() ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>
          {"First name"}
        </label>
      </div>
      {!isValid && <span className={styles.error_message}>{localError}</span>}
    </div>
  )
})

NameInput.displayName = "First Name"

export default NameInput

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}
