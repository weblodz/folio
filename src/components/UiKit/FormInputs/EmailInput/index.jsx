import { useState, forwardRef } from "react"
import T from "prop-types"
import styles from "./emailinput.module.scss"

const EmailInput = forwardRef(({ isValid = true, errorMessage, ...rest }, ref) => {
  const [hasValue, setHasValue] = useState(rest?.defaultValue)

  const emailStyle = isValid
    ? `${styles.email_input}`
    : `${styles.email_input} ${styles.invalid_email_input}`

  const labelStyle = hasValue
    ? `${styles.label_text} ${styles.focused_label_text}`
    : styles.label_text

  return (
    <div className={styles.container}>
      <div className={styles.input_container} tabIndex={0}>
        <input
          className={emailStyle}
          type="text"
          ref={ref}
          {...rest}
          onInput={(e) => {
            setHasValue(e.target.value.trim() !== "")
          }}
        />
        <label className={labelStyle}>{"Email address"}</label>
      </div>
      {!isValid && <span className={styles.error_message}>{errorMessage}</span>}
    </div>
  )
})

EmailInput.displayName = "EmailInput"

export default EmailInput

EmailInput.propTypes = {
  isValid: T.bool.isRequired,
  errorMessage: T.string.isRequired,
}

