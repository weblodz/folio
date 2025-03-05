import { useState, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import cls from 'classnames'
import T from 'prop-types'
import styles from './countryInput.module.scss'

const CountryInput = forwardRef(({ country, setCountry, ...rest }, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { t } = useTranslation('nsAuth')

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className={styles.input_container}>
      <div className={styles.select_wrapper} onClick={toggleDropdown}>
        <select
          id="country"
          className={styles.text_input}
          value={country}
          onChange={handleCountryChange}
          ref={ref}
          {...rest}
        >
          <option value="Poland">{t('PL')}</option>
          <option value="United Kingdom">{t('UK')}</option>
        </select>
        {isDropdownOpen ? (
          <SlArrowUp className={styles.custom_arrow} />
        ) : (
          <SlArrowDown className={styles.custom_arrow} />
        )}
      </div>
      <label className={cls(styles.label_text, styles.focused_label_text)}>{t('countryLabel')}</label>
    </div>
  )
})

CountryInput.displayName = 'CountryInput'

CountryInput.propTypes = {
  country: T.string.isRequired,
  setCountry: T.func.isRequired,
}

export default CountryInput
