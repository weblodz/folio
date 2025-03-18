import { useState, forwardRef, useCallback, useEffect } from 'react'
import T from 'prop-types'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import styles from './surnameinput.module.scss'

const SurnameInput = forwardRef(({ value, onChange, errorMessage, isValid = true, ...rest }, ref) => {
  const { t } = useTranslation('nsForms')
  const [localError, setLocalError] = useState(errorMessage || '')
  const [isTouched, setIsTouched] = useState(false)

  const validateSurname = useCallback(
    (surname) => {
      if (!surname.trim()) return t('enterLastName')
      if (!/^[a-zA-Z'’-]+$/.test(surname)) return t('unsupportedCharacters')

      return ''
    },
    [t]
  )

  useEffect(() => {
    if (isTouched) {
      setLocalError(validateSurname(value))
    }
  }, [t, validateSurname, value, isTouched])

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
          className={cls(styles.surname_input, { [styles.invalid_input]: !isInputValid })}
          type="text"
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
        <label className={cls(styles.label_text, { [styles.focused_label_text]: value.trim() })}>
          {t('enterLastName')}
        </label>
      </div>
      {!isInputValid && <span className={styles.error_message}>{localError}</span>}
    </div>
  )
})

SurnameInput.displayName = 'SurnameInput'

export default SurnameInput

SurnameInput.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  errorMessage: T.string,
  isValid: T.bool,
}
