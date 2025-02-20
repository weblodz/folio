import { useState, useEffect, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { IoIosSearch} from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import styles from './residencyInfo.module.scss'

const ResidencyInfo = forwardRef(({ isValid = true, errorMessage, defaultValue = {}, ...rest }, ref) => {
  const [country, setCountry] = useState(defaultValue.country ?? 'Poland')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const [loadingCities, setLoadingCities] = useState(false)
  const [isZipValid, setIsZipValid] = useState(true)
  const [zipNotFound, setZipNotFound] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef(null)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false)
  const cityDropdownRef = useRef(null)
  const [zipTouched, setZipTouched] = useState(false)
  const [cityTouched, setCityTouched] = useState(false)

  // Fetch city list when country changes
  useEffect(() => {
    const fetchCities = async () => {
      if (!country) return

      setLoadingCities(true)
      setCities([])

      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ country }),
        })
        const data = await response.json()

        setCities(data.data || [])
      }

      catch (error) {
        console.error('Error fetching cities:', error)
      }

      setLoadingCities(false)
    }

    fetchCities()
  }, [country])

  const isValidZipFormat = (zipCode) => {
    if (country === 'United Kingdom') {
      return /^[A-Z0-9]{2,4} ?[A-Z0-9]{3}$/i.test(zipCode)
    } else if (country === 'Poland') {
      return /^[0-9]{2}-[0-9]{3}$/.test(zipCode)
    }

    return false
  }

  const fetchCityFromPostcode = async (postcode) => {
    if (!isValidZipFormat(postcode)) {

      setIsZipValid(false)

      setZipNotFound(false)

      return
    }

    setIsZipValid(true)
    setZipNotFound(false)

    try {
      let response, data
      let fetchedCity = ''

      if (country === 'United Kingdom') {
        response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`)
        data = await response.json()
        if (data.status === 200) {
          fetchedCity = data.result.admin_district
        }
        else {
          setZipNotFound(true)

          return
        }
      } else if (country === 'Poland') {
        response = await fetch(`https://api.zippopotam.us/pl/${postcode}`)
        data = await response.json()
        if (data.places?.length > 0) {
          fetchedCity = data.places[0]['place name']
        } else {
          setZipNotFound(true)

          return
        }
      }

      setCity(fetchedCity)
    } catch (error) {
      console.error('Error fetching city:', error)
      setZipNotFound(true)
    }
  }

  const handleCityDropdownClick = () => {
    setIsCityDropdownOpen((prev) => !prev)
  }

  const handleCountryDropdownClick = () => {
    setIsCountryDropdownOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false)
      }

      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const filteredCities = cities.filter((c) => c.toLowerCase().startsWith(searchTerm.toLowerCase()))

  const isRegisterDisabled = !zip || !city

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Residential Information</h2>

      <div className={styles.input_container} tabIndex={0}>
        <div className={styles.select_wrapper} onClick={handleCountryDropdownClick}>
          <select
            className={isValid ? styles.text_input : `${styles.text_input} ${styles.invalid_text_input}`}
            ref={ref}
            {...rest}
            value={country}
            onChange={(e) => {
              setCountry(e.target.value)
              setZip('')
              setCity('')
              setIsZipValid(true)
              setZipNotFound(false)
              setIsCountryDropdownOpen(false)
            }}
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

      <div className={styles.input_container} tabIndex={0}>
        <input
          className={isZipValid ? styles.text_input : `${styles.text_input} ${styles.invalid_text_input}`}
          type="text"
          ref={ref}
          {...rest}
          value={zip}
          onChange={(e) => {
            setZip(e.target.value)
            fetchCityFromPostcode(e.target.value)
          }}
          onBlur={() => setZipTouched(true)}
        />
        <label className={zip ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>
          Zip Code
        </label>
        {zipTouched && !zip && <span className={styles.error_message}>Enter your ZIP code</span>}
        {!isZipValid && <span className={styles.error_message}>Ensure your ZIP code is correct</span>}
        {zipNotFound && <span className={styles.error_message}>ZIP not found</span>}
      </div>

      <div className={styles.input_container} tabIndex={0} ref={cityDropdownRef}>
        <div className={styles.select_wrapper} onClick={handleCityDropdownClick}>
          <input
            className={isValid ? styles.text_input : `${styles.text_input} ${styles.invalid_text_input}`}
            type="text"
            value={city}
            readOnly
            onBlur={() => setCityTouched(true)}
          />
          {isCityDropdownOpen ? (
            <SlArrowUp className={styles.custom_arrow} />
          ) : (
            <SlArrowDown className={styles.custom_arrow} />
          )}
        </div>
        <label className={city ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>City</label>

        {cityTouched && !city && <span className={styles.error_message}>Select your city</span>}

        {isCityDropdownOpen && (
          <div className={styles.dropdown_menu}>
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
                {searchTerm && <IoClose className={styles.clear_icon} onClick={() => setSearchTerm('')} />}
              </div>
              <div className={styles.search_border}></div>
            </div>

            {loadingCities ? (
              <div className={styles.loading_text}>Loading cities...</div>
            ) : filteredCities.length > 0 ? (
              <div className={styles.city_list}>
                {filteredCities.map((cityName) => (
                  <div
                    key={cityName}
                    className={styles.city_item}
                    onClick={() => {
                      setCity(cityName)
                      setIsCityDropdownOpen(false)
                    }}
                  >
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

      <button className={styles.register_button} disabled={isRegisterDisabled}>
        Register
      </button>

      {!isValid && <span className={styles.error_message}>{errorMessage}</span>}
    </div>
  )
})

ResidencyInfo.displayName = 'ResidencyInfo'

ResidencyInfo.propTypes = {
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  defaultValue: PropTypes.shape({
    country: PropTypes.string,
  }),
}

export default ResidencyInfo
