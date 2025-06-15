import { useState } from 'react'
import T from 'prop-types'
import classNames from 'classnames'
import styles from './year_input.module.scss'

function YearInput({ label, selected, onChange, onBlur, hasError }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value

    if (/^\d{0,4}$/.test(value)) {
      onChange(value)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    onBlur(selected)
  }

  return (
    <div
      className={classNames(styles.select_wrapper, {
        [styles.focused_border]: isFocused && !hasError,
        [styles.error_border]: hasError && !isFocused,
        [styles.error_focus_border]: isFocused && hasError,
      })}
    >
      <label
        className={classNames(styles.floating_label, {
          [styles.floating]: selected || isFocused,
        })}
      >
        {label}
      </label>
      <input
        type='text'
        className={styles.input}
        value={selected}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleInputBlur}
      />
    </div>
  )
}

YearInput.propTypes = {
  label: T.string.isRequired,
  selected: T.string,
  onChange: T.func.isRequired,
  onBlur: T.func.isRequired,
  hasError: T.oneOfType([T.string, T.bool]),
}

export default YearInput
