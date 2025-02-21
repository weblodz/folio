import { useState, useEffect, forwardRef } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import T from 'prop-types'
import styles from './countryInput.module.scss'

const CountryInput = forwardRef(({ defaultValue = 'Poland', onChange, ...rest }, ref) => {
  const [country, setCountry] = useState(defaultValue)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    setCountry(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    const handleStorageChange = () => {
      setCountry(sessionStorage.getItem('selectedCountry') || 'Poland')
    }

    window.addEventListener('storage', handleStorageChange)

    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value

    setCountry(selectedCountry)

    sessionStorage.setItem('selectedCountry', selectedCountry)
    sessionStorage.removeItem('selectedCity')
    sessionStorage.removeItem('enteredZip')

    window.dispatchEvent(new Event('storage'))

    if (onChange) onChange(selectedCountry)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className={styles.input_container} tabIndex={0}>
      <div className={styles.select_wrapper} onClick={toggleDropdown}>
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
      <label className={`${styles.label_text} ${styles.focused_label_text}`}>Country/Region</label>
    </div>
  )
})

CountryInput.displayName = 'CountryInput'

CountryInput.propTypes = {
  defaultValue: T.string,
  onChange: T.func,
}

export default CountryInput
