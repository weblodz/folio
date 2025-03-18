import { useState, forwardRef, useCallback, useEffect } from 'react'
import T from 'prop-types'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import styles from './nameinput.module.scss'

const NameInput = forwardRef(({ value, onChange, errorMessage, isValid = true, ...rest }, ref) => {
  const { t } = useTranslation('nsForms')
  const [localError, setLocalError] = useState(errorMessage || '')
  const [isTouched, setIsTouched] = useState(false)

  const validateName = useCallback(
    (name) => {
      if (!name.trim()) return t('enterFirstName')
      if (!/^[a-zA-Z'’-]+$/.test(name)) return t('unsupportedCharacters')

      return ''
    },
    [t]
  )

  useEffect(() => {
    if (isTouched) {
      setLocalError(validateName(value))
    }
  }, [t, validateName, value, isTouched])

  const handleChange = (e) => {
    const newValue = e.target.value

    if (isTouched) setLocalError(validateName(newValue))
    onChange(newValue)
  }

  const handleBlur = () => {
    setIsTouched(true)
    setLocalError(validateName(value))
  }

  const isInputValid = isValid && !localError

  return (
    <div className={styles.name_container}>
      <div className={styles.name_input_container} tabIndex={0}>
        <input
          className={cls(styles.name_input, { [styles.invalid_input]: !isInputValid })}
          type="text"
          ref={ref}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        />
        <label className={cls(styles.label_text, { [styles.focused_label_text]: value.trim() })}>
          {t('enterFirstName')}
        </label>

      </div>
      {!isInputValid && <span className={styles.error_message}>{localError}</span>}
    </div>
  )
})

NameInput.displayName = 'NameInput'

export default NameInput

NameInput.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  errorMessage: T.string,
  isValid: T.bool,
}
