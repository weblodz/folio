import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import styles from './cityInput.module.scss'

function CityInput({
  city,
  setCity,
  cities,
  loadingCities,
  searchTerm,
  setSearchTerm,
  isCityDropdownOpen,
  setIsCityDropdownOpen,
  zipCode,
  validateZipCode,
}){
  const [cityTouched, setCityTouched] = useState(false)
  const [zipError, setZipError] = useState(null)
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  const filteredCities = cities.filter((c) => c.toLowerCase().startsWith(searchTerm.toLowerCase()))

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsCityDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsCityDropdownOpen])

  const handleInputFocus = () => {}

  const handleInputBlur = () => {
    if (!city) {
      setCityTouched(true)
    }
  }

  const handleInputClick = () => {
    if (!isCityDropdownOpen) {
      setIsCityDropdownOpen(true)
    }
  }

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity)
    setIsCityDropdownOpen(false)
    setCityTouched(false)

    if (zipCode) {
      validateZipCode(selectedCity, zipCode)
        .then((isValid) => {
          setZipError(isValid ? null : 'Ensure your city is correct')
        })
        .catch(() => setZipError('Zip code validation failed'))
    }
  }

  return (
    <div className={styles.input_container} tabIndex={0}>
      <div className={styles.select_wrapper} ref={inputRef} onClick={handleInputClick}>
        <input
          className={styles.text_input}
          type="text"
          value={city}
          readOnly
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {isCityDropdownOpen ? (
          <SlArrowUp className={styles.custom_arrow} />
        ) : (
          <SlArrowDown className={styles.custom_arrow} />
        )}
      </div>
      <label className={city ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>City</label>

      {cityTouched && !city && <span className={styles.error_message}>Select your city</span>}
      {zipError && <span className={styles.error_message}>{zipError}</span>}

      {isCityDropdownOpen && (
        <div className={styles.dropdown_menu} ref={dropdownRef}>
          <div className={styles.search_wrapper}>
            <IoIosSearch className={styles.search_icon} />
            <div className={styles.search_container}>
              <input
                type="text"
                className={styles.search_input}
                placeholder="Search city"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {<IoClose className={styles.clear_icon} onClick={() => setSearchTerm('')} />}
            </div>
            <div className={styles.search_border}></div>
          </div>

          {loadingCities ? (
            <div className={styles.loading_text}>Loading cities...</div>
          ) : filteredCities.length > 0 ? (
            <div className={styles.city_list}>
              {filteredCities.map((cityName) => (
                <div key={cityName} className={styles.city_item} onClick={() => handleCitySelect(cityName)}>
                  {cityName}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.no_results}>No cities found</div>
          )}
        </div>
      )}
    </div>
  )
}

CityInput.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  loadingCities: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  isCityDropdownOpen: PropTypes.bool.isRequired,
  setIsCityDropdownOpen: PropTypes.func.isRequired,
  zipCode: PropTypes.string.isRequired,
  setZipCode: PropTypes.func.isRequired,
  validateZipCode: PropTypes.func.isRequired,
}

export default CityInput
