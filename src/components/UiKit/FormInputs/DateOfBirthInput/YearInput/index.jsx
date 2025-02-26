import { useState } from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './year_input.module.scss'

function YearInput({ label, selected, onChange, onBlur, error }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value

    if (/^\d{0,4}$/.test(value)) {
      onChange(value)
    }
  }

  const handleFocus = () => setIsFocused(true)

  const handleInputBlur = () => {
    setIsFocused(false)
    onBlur?.()
  }

  return (
    <div className={cls(styles.select_wrapper, { [styles.error_border]: error })}>
      <label
        className={cls(styles.floating_label, { [styles.floating]: selected || isFocused })}
      >
        {label}
      </label>
      <input
        type="text"
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
  onBlur: T.func,
  error: T.bool
}

export default YearInput
