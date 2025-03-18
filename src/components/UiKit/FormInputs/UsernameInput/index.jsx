import { useState, useEffect, forwardRef, useCallback } from 'react'
import T from 'prop-types'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import styles from './usernameinput.module.scss'

const UsernameInput = forwardRef(({ value, onChange, errorMessage, isValid = true, ...rest }, ref) => {
  const { t } = useTranslation('nsForms')
  const [localError, setLocalError] = useState(errorMessage || '')
  const [isTouched, setIsTouched] = useState(false)

  const validateUsername = useCallback(
    (username) => (!username.trim() ? t('enterUserName') : ''),
    [t]
  )

  useEffect(() => {
    if (isTouched) {
      setLocalError(validateUsername(value))
    }
  }, [validateUsername, value, isTouched])

  const handleChange = (e) => {
    const newValue = e.target.value

    onChange(newValue)

    if (isTouched) setLocalError(validateUsername(newValue))
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
          className={cls(styles.username_input, { [styles.invalid_input]: !isInputValid })}
          type="text"
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
        <label className={cls(styles.label_text, { [styles.focused_label_text]: value.trim() })}>
          {t('username')}
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
