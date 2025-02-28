import { useState, useEffect, forwardRef } from 'react'
import cls from 'classnames'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import T from 'prop-types'
import styles from './countryInput.module.scss'

const CountryInput = forwardRef(({ defaultValue = 'Poland', selectedCountry, onChange, ...rest }, ref) => {
  const [country, setCountry] = useState(selectedCountry || defaultValue)
  const [isDropdownOpen] = useState(false)

  useEffect(() => {
    setCountry(selectedCountry || defaultValue)
  }, [selectedCountry, defaultValue])

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value

    setCountry(selectedCountry)

    if (onChange) {
      onChange(selectedCountry)
    }
  }

  return (
    <div className={styles.input_container}>
      <div className={styles.select_wrapper}>
        <select
          id="country"
          className={styles.text_input}
          value={country}
          onChange={handleCountryChange}
          ref={ref}
          {...rest}
        >
          <option value="Poland">Poland</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        {isDropdownOpen ? (
          <SlArrowUp className={styles.custom_arrow} />
        ) : (
          <SlArrowDown className={styles.custom_arrow} />
        )}
      </div>
      <label className={cls(styles.label_text, styles.focused_label_text)}>Country/Region</label>
    </div>
  )
})

CountryInput.displayName = 'CountryInput'

CountryInput.propTypes = {
  defaultValue: T.string,
  selectedCountry: T.string,
  onChange: T.func,
}

export default CountryInput
