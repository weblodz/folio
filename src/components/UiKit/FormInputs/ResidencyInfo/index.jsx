import { useState, useEffect, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './residencyInfo.module.scss'
import CountryDropdown from './components/CountryInput/index'
import CityDropdown from './components/CityInput/index'
import ZipCodeInput from './components/ZipCodeInput/index'

const ResidencyInfo = forwardRef(({ isValid = true, errorMessage, defaultValue = {}, ...rest }) => {
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
  const [setZipCode] = useState('')

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
      } catch (error) {
        console.error('Error fetching cities:', error)
      }

      setLoadingCities(false)
    }

    fetchCities()
  }, [country])

  const validateZipCode = async (city, zipCode) => {
    if (!zipCode || !city) return false

    try {
      const response = await fetch(`/validate-zip/${city}/${zipCode}`)
      const data = await response.json()

      return data.isValid
    } catch (error) {
      console.error('Zip code validation failed', error)

      return false
    }
  }

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry)
    setZip('')
    setCity('')
    setSearchTerm('')
    setIsZipValid(true)
    setZipNotFound(false)
    setIsCityDropdownOpen(false)
    setCityTouched(false)
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Residential Information</h2>

      <CountryDropdown
        country={country}
        setCountry={handleCountryChange}
        isCountryDropdownOpen={isCountryDropdownOpen}
        setIsCountryDropdownOpen={setIsCountryDropdownOpen}
        {...rest}
      />

      <div className={styles.input_container} tabIndex={0}>
        <ZipCodeInput
          country={country}
          setZip={setZip}
          zip={zip}
          isZipValid={isZipValid}
          setZipTouched={setZipTouched}
          setCity={setCity}
          setZipNotFound={setZipNotFound}
          setIsZipValid={setIsZipValid}
          {...rest}
        />
        {zipTouched && !zip && <span className={styles.error_message}>Enter your ZIP code</span>}
        {!isZipValid && <span className={styles.error_message}>Ensure your ZIP code is correct</span>}
        {zipNotFound && <span className={styles.error_message}>ZIP not found</span>}
      </div>

      <CityDropdown
        city={city}
        setCity={setCity}
        cities={cities}
        loadingCities={loadingCities}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isCityDropdownOpen={isCityDropdownOpen}
        setIsCityDropdownOpen={setIsCityDropdownOpen}
        cityTouched={cityTouched}
        zipCode={zip}
        setZipCode={setZipCode}
        validateZipCode={validateZipCode}
      />
      {cityTouched && !city && <span className={styles.error_message}>Select your city</span>}

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
