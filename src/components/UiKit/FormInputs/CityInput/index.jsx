import { useState, useEffect, forwardRef, useRef } from 'react'
import T from 'prop-types'
import cls from 'classnames'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { useTranslation } from 'react-i18next'
import MOCK_REGIONS from '../ZipCodeInput/mockRegions'
import styles from './cityInput.module.scss'

const CityInput = forwardRef(
  ({ defaultValue = '', errorMessage = 'Select your city', country, city, setCity, ...rest }, ref) => {
    const [cities, setCities] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading] = useState(false)
    const [cityTouched, setCityTouched] = useState(false)
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const dropdownRef = useRef(null)
    const { t } = useTranslation('nsAuth')

    useEffect(() => {
      if (!city) {
        setCity(defaultValue)
      }
    }, [city, defaultValue, setCity])

    useEffect(() => {
      const citiesArray = []
      const countryData = MOCK_REGIONS[country]

      if (countryData) {
        for (let zip in countryData) {
          citiesArray.push(countryData[zip])
        }
      }

      setCities(citiesArray)
    }, [country])

    const handleBlur = () => {
      setCityTouched(true)
      setIsFocused(false)
    }

    const handleInputClick = () => {
      setIsCityDropdownOpen(!isCityDropdownOpen)
      setIsFocused(true)
    }

    const handleCitySelect = (selectedCity) => {
      setCity(selectedCity)
      setIsCityDropdownOpen(false)
      setCityTouched(true)
      setIsFocused(false)
    }

    const filteredCities = cities.filter((cityName) => cityName.toLowerCase().startsWith(searchTerm.toLowerCase()))

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsCityDropdownOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    const cityStyle = cls(styles.text_input, { [styles.invalid_text_input]: cityTouched && !city })
    const labelStyle = cls(styles.label_text, { [styles.focused_label_text]: isFocused || city })

    return (
      <div className={styles.input_container} ref={dropdownRef}>
        <div className={styles.select_wrapper} onClick={handleInputClick}>
          <input
            className={cityStyle}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onBlur={handleBlur}
            ref={ref}
            {...rest}
          />
          {isCityDropdownOpen ? (
            <SlArrowUp className={styles.custom_arrow} />
          ) : (
            <SlArrowDown className={styles.custom_arrow} />
          )}
        </div>
        <label className={labelStyle}>{t('city')}</label>

        {cityTouched && !city && <span className={styles.error_message}>{errorMessage}</span>}

        {isCityDropdownOpen && (
          <div className={styles.dropdown_menu}>
            <div className={styles.search_wrapper}>
              <IoIosSearch className={styles.search_icon} />
              <div className={styles.search_container}>
                <input
                  type="text"
                  className={styles.search_input}
                  placeholder={t('searchCity')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoClose className={styles.clear_icon} onClick={() => setSearchTerm('')} />
              </div>
            </div>

            {loading ? (
              <div className={styles.loading_text}>{t('loadingCities')}</div>
            ) : filteredCities.length > 0 ? (
              <div className={styles.city_list}>
                {filteredCities.map((cityName) => (
                  <div key={cityName} className={styles.city_item} onClick={() => handleCitySelect(cityName)}>
                    {cityName}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.no_results}>{t('citiesNotFound')}</div>
            )}
          </div>
        )}
      </div>
    )
  },
)

CityInput.displayName = 'CityInput'

CityInput.propTypes = {
  defaultValue: T.string,
  errorMessage: T.string,
  country: T.string.isRequired,
  city: T.string.isRequired,
  setCity: T.func.isRequired,
}

export default CityInput
