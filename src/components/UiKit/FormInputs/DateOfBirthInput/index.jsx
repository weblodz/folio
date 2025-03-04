import { useState, useEffect, useCallback } from 'react'
import CustomDropdown from '@components/UiKit/FormInputs/DateOfBirthInput/CustomDropdown'
import YearInput from '@components/UiKit/FormInputs/DateOfBirthInput/YearInput'
import T from 'prop-types'
import classNames from 'classnames'
import styles from './date_of_birth_input.module.scss'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function DateOfBirthInput({
  onChange = () => {},
  selectedMonth = '',
  selectedDay = '',
  selectedYear = '',
  showErrors = false,
}) {
  const [month, setMonth] = useState(selectedMonth)
  const [day, setDay] = useState(selectedDay)
  const [year, setYear] = useState(selectedYear)

  const [touched, setTouched] = useState({
    month: false,
    day: false,
    year: false,
  })

  const validateAllFields = useCallback(() => {
    const allFieldsFilled = month && day && year

    setTouched((prev) => ({
      month: prev.month || month,
      day: prev.day || day,
      year: prev.year || year,
    }))

    return !allFieldsFilled
  }, [month, day, year])

  useEffect(() => {
    // Only show errors if the fields were touched
    if (showErrors) {
      validateAllFields()
    }
  }, [showErrors, validateAllFields])

  const handleChange = (type, value) => {
    if (type === 'month') setMonth(value)
    if (type === 'day') setDay(value)
    if (type === 'year') setYear(value)

    onChange({
      month: type === 'month' ? value : month,
      day: type === 'day' ? value : day,
      year: type === 'year' ? value : year,
    })
  }

  const handleBlur = (type) => {
    setTouched((prev) => ({ ...prev, [type]: true }))
  }

  const showError = touched.month || touched.day || touched.year
  const allFieldsFilled = month && day && year

  const isError = showError && !allFieldsFilled

  return (
    <div className={classNames(styles.birth_container, { [styles.error]: isError })}>
      <div className={styles.container}>
        <CustomDropdown
          label='Month'
          options={months}
          selected={month}
          onSelect={(value) => handleChange('month', value)}
          onBlur={() => handleBlur('month')}
          hasError={isError}
        />

        <CustomDropdown
          label='Day'
          options={days}
          selected={day}
          onSelect={(value) => handleChange('day', value)}
          onBlur={() => handleBlur('day')}
          hasError={isError}
        />

        <YearInput
          label='Year'
          selected={year}
          onChange={(value) => handleChange('year', value)}
          onBlur={() => handleBlur('year')}
          hasError={isError}
        />
      </div>

      {isError && <p className={styles.error_text}>Enter your date of birth</p>}
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
