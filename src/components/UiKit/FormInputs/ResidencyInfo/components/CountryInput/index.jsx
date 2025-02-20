import PropTypes from 'prop-types'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import styles from './countryInput.module.scss'

function CountryInput({ country, setCountry, isCountryDropdownOpen, setIsCountryDropdownOpen, ...rest }) {
  const handleDropdownClick = () => {
    setIsCountryDropdownOpen((prev) => !prev)
  }

  return (
    <div className={styles.input_container} tabIndex={0}>
      <div className={styles.select_wrapper} onClick={handleDropdownClick}>
        <select
          className={styles.text_input}
          value={country}
          onChange={(e) => {
            setCountry(e.target.value)
          }}
          {...rest}
        >
          <option value="Poland">Poland</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        {isCountryDropdownOpen ? (
          <SlArrowUp className={styles.custom_arrow} />
        ) : (
          <SlArrowDown className={styles.custom_arrow} />
        )}
      </div>
      <label className={`${styles.label_text} ${styles.focused_label_text}`}>Country/Region</label>
    </div>
  )
}

CountryInput.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  isCountryDropdownOpen: PropTypes.bool.isRequired,
  setIsCountryDropdownOpen: PropTypes.func.isRequired,
}

export default CountryInput
