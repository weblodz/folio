import { useState, useEffect } from 'react'
import CustomDropdown from '@components/UiKit/FormInputs/DateOfBirthInput/CustomDropdown'
import YearInput from '@components/UiKit/FormInputs/DateOfBirthInput/YearInput'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './date_of_birth_input.module.scss'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function DateOfBirthInput({
  onChange,
  selectedMonth: propMonth = '',
  selectedDay: propDay = '',
  selectedYear: propYear = '',
  showErrors = false,
}) {
  const [selectedMonth, setSelectedMonth] = useState(propMonth)
  const [selectedDay, setSelectedDay] = useState(propDay)
  const [selectedYear, setSelectedYear] = useState(propYear)

  const [monthError, setMonthError] = useState(false)
  const [dayError, setDayError] = useState(false)
  const [yearError, setYearError] = useState(false)

  useEffect(() => {
    setSelectedMonth(propMonth)
    setSelectedDay(propDay)
    setSelectedYear(propYear)
    if (showErrors) {
      validateAllFields(propMonth, propDay, propYear)
    }
  }, [propMonth, propDay, propYear, showErrors])

  const hasError = monthError || dayError || yearError

  const handleChange = (type, value) => {
    const newMonth = type === 'month' ? value : selectedMonth
    const newDay = type === 'day' ? value : selectedDay
    const newYear = type === 'year' ? value : selectedYear

    if (type === 'month') setSelectedMonth(value)
    if (type === 'day') setSelectedDay(value)
    if (type === 'year') setSelectedYear(value)

    validateAllFields(newMonth, newDay, newYear)

    onChange({ month: newMonth, day: newDay, year: newYear })
  }

  const validateAllFields = (month, day, year) => {
    const isValid = month && day && year

    setMonthError(!isValid)
    setDayError(!isValid)
    setYearError(!isValid)
  }

  const handleBlur = () => {
    validateAllFields(selectedMonth, selectedDay, selectedYear)
  }

  const containerClass = classNames(styles.birth_container, {
    [styles.error]: hasError,
  })

  return (
    <div className={containerClass}>
      <div className={styles.container}>
        <CustomDropdown
          label='Month'
          options={months}
          selected={selectedMonth}
          onSelect={(value) => handleChange('month', value)}
          onBlur={handleBlur}
          hasError={monthError}
        />

        <CustomDropdown
          label='Day'
          options={days}
          selected={selectedDay}
          onSelect={(value) => handleChange('day', value)}
          onBlur={handleBlur}
          hasError={dayError}
        />

        <YearInput
          label='Year'
          selected={selectedYear}
          onChange={(value) => handleChange('year', value)}
          onBlur={handleBlur}
          hasError={yearError}
        />
      </div>

      {hasError && <p className={styles.error_text}>Enter your date of birth</p>}
    </div>
  )
}

DateOfBirthInput.propTypes = {
  onChange: PropTypes.func,
  selectedMonth: PropTypes.string,
  selectedDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedYear: PropTypes.string,
  showErrors: PropTypes.bool,
}

DateOfBirthInput.defaultProps = {
  onChange: () => {},
  showErrors: false,
}
