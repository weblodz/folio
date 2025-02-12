import { useState, forwardRef } from "react"
import T from "prop-types"
import EyeShown from "@components/UiKit/Icons/EyeShown/index.jsx"
import EyeHidden from "@components/UiKit/Icons/EyeHidden/index.jsx"
import styles from "./password.module.scss"

const PasswordInput = forwardRef(({ isValid = true, errorMessage, ...rest }, ref) => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const inputStyle = isValid
    ? `${styles.input_field}`
    : `${styles.input_field} ${styles.invalid_email_input}`

  const labelStyle = isInputFocused
    ? `${styles.label_text} ${styles.focused_label_text}`
    : `${styles.label_text}`

  const inputType = isPasswordVisible
    ? "text"
    : "password"

  return (
    <div className={styles.container}>
      <div className={styles.input_container} tabIndex={0}>
        <label className={labelStyle}>
          Password
        </label>
        <div className={styles.input_wrapper}>
          <div className={styles.icon_field}>
            <input
              className={inputStyle}
              type={inputType}
              ref={ref}
              {...rest}
              onFocus={(event) => {
                setIsInputFocused(true)
                rest.onFocus?.(event)
              }}
              onBlur={(event) => {
                if (!event.target.value) {
                  setIsInputFocused(false)
                }
                rest.onBlur?.(event)
              }}
            />
            <span className={styles.toggle_wrapper}>
              <button type="button" className={styles.toggle_button} onClick={() => {
                setIsPasswordVisible((prev) => !prev)
              }}>
                {isPasswordVisible ? <EyeShown size={"24"} fill={"var(--common-color-bg-inverse-primary)"} /> : <EyeHidden size={"24"} fill={"var(--common-color-bg-inverse-primary)"} />}
              </button>
            </span>
          </div>
        </div>
      </div>
      {!isValid && <span className={styles.error_message}>{errorMessage}</span>}
    </div>
  )
})

PasswordInput.displayName = "PasswordInput"

PasswordInput.propTypes = {
  isValid: T.bool.isRequired,
  errorMessage: T.string.isRequired,
}

export default PasswordInput
