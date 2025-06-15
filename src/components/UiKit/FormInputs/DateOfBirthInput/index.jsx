import { useState, useEffect, useCallback } from 'react'
import CustomDropdown from '@components/UiKit/FormInputs/DateOfBirthInput/CustomDropdown'
import YearInput from '@components/UiKit/FormInputs/DateOfBirthInput/YearInput'
import T from 'prop-types'
import cls from 'classnames'
import { useTranslation } from 'react-i18next'
import styles from './date_of_birth_input.module.scss'

export default function DateOfBirthInput({
  onChange = () => {},
  selectedMonth = '',
  selectedDay = '',
  selectedYear = '',
  showErrors = false,
}) {
  const { t } = useTranslation('nsForms')

  const monthNames = [
    t('january'), t('february'), t('march'), t('april'), t('may'), t('june'),
    t('july'), t('august'), t('september'), t('october'), t('november'), t('december')
  ]

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  const [monthIndex, setMonthIndex] = useState(
    selectedMonth ? monthNames.indexOf(selectedMonth) : ''
  )
  const [day, setDay] = useState(selectedDay)
  const [year, setYear] = useState(selectedYear)

  const [touched, setTouched] = useState({
    month: false,
    day: false,
    year: false,
  })

  useEffect(() => {
    setMonthIndex((prev) => (prev !== '' && prev >= 0 ? prev : ''))
  }, [t])

  const validateAllFields = useCallback(() => {
    const allFieldsFilled = monthIndex !== '' && day && year

    setTouched((prev) => ({
      month: prev.month || monthIndex !== '',
      day: prev.day || day,
      year: prev.year || year,
    }))

    return !allFieldsFilled
  }, [monthIndex, day, year])

  useEffect(() => {
    if (showErrors) {
      validateAllFields()
    }
  }, [showErrors, validateAllFields])

  const handleChange = (type, value) => {
    if (type === 'month') setMonthIndex(value)
    if (type === 'day') setDay(value)
    if (type === 'year') setYear(value)

    onChange({
      month: type === 'month' ? monthNames[value] : monthNames[monthIndex],
      day: type === 'day' ? value : day,
      year: type === 'year' ? value : year,
    })
  }

  const handleBlur = (type) => {
    setTouched((prev) => ({ ...prev, [type]: true }))
  }

  const showError = touched.month || touched.day || touched.year
  const allFieldsFilled = monthIndex !== '' && day && year

  const isError = showError && !allFieldsFilled

  return (
    <div className={cls(styles.birth_container, { [styles.error]: isError })}>
      <div className={styles.container}>
        <CustomDropdown
          label={t('month')}
          options={monthNames}
          selected={monthIndex !== '' ? monthNames[monthIndex] : ''}
          onSelect={(value) => handleChange('month', monthNames.indexOf(value))}
          onBlur={() => handleBlur('month')}
          hasError={isError}
        />

        <CustomDropdown
          label={t('day')}
          options={days}
          selected={day}
          onSelect={(value) => handleChange('day', value)}
          onBlur={() => handleBlur('day')}
          hasError={isError}
        />

        <YearInput
          label={t('year')}
          selected={year}
          onChange={(value) => handleChange('year', value)}
          onBlur={() => handleBlur('year')}
          hasError={isError}
        />
      </div>

      {isError && <p className={styles.error_text}>{t('enterDateOfBirth')}</p>}
    </div>
  )
}

DateOfBirthInput.propTypes = {
  onChange: T.func,
  selectedMonth: T.string,
  selectedDay: T.oneOfType([T.string, T.number]),
  selectedYear: T.string,
  showErrors: T.bool,
}
