import { useState, useEffect } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import styles from './countryInput.module.scss'

function CountryInput(){
  const [country, setCountry] = useState(sessionStorage.getItem('selectedCountry') || 'Poland')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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

    sessionStorage.setItem('selectedCity', '')
    window.dispatchEvent(new Event('storage'))
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className={styles.input_container} tabIndex={0}>
      <div className={styles.select_wrapper} onClick={toggleDropdown}>
        <select id="country" className={styles.text_input} value={country} onChange={handleCountryChange}>
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
}

export default CountryInput
