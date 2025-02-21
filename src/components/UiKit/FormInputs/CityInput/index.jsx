import { useState, useEffect, forwardRef } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import T from 'prop-types'
import styles from './cityInput.module.scss'

const CityInput = forwardRef(
  ({ defaultValue = '', defaultOpen = false, onChange, errorMessage = 'Select your city', ...rest }, ref) => {
    const [city, setCity] = useState(sessionStorage.getItem('selectedCity') || defaultValue)
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [cityTouched, setCityTouched] = useState(false)
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(defaultOpen)
    const [country, setCountry] = useState(sessionStorage.getItem('selectedCountry') || 'Poland')

    useEffect(() => {
      setCity(defaultValue)
    }, [defaultValue])

    useEffect(() => {
      const fetchCities = async () => {
        if (!country) return
        setLoading(true)
        try {
          const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country }),
          })
          const data = await response.json()

          setCities(data.data || [])
          setCity('')
        } catch (error) {
          console.error('Error fetching cities:', error)
        }
        setLoading(false)
      }

      fetchCities()
    }, [country])

    useEffect(() => {
      const handleStorageChange = () => {
        const storedCity = sessionStorage.getItem('selectedCity') || ''

        setCity(storedCity)
        setCountry(sessionStorage.getItem('selectedCountry') || 'Poland')
      }

      window.addEventListener('storage', handleStorageChange)

      return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    const handleCityChange = (e) => {
      const selectedCity = e.target.value

      setCity(selectedCity)
      sessionStorage.setItem('selectedCity', selectedCity)
      window.dispatchEvent(new Event('storage'))
      setCityTouched(true)
      if (onChange) onChange(selectedCity)
    }

    const handleCitySelect = (selectedCity) => {
      setCity(selectedCity)
      sessionStorage.setItem('selectedCity', selectedCity)
      window.dispatchEvent(new Event('storage'))
      setIsCityDropdownOpen(false)
      setCityTouched(false)
      if (onChange) onChange(selectedCity)
    }

    const filteredCities = cities.filter((cityName) => cityName.toLowerCase().includes(searchTerm.toLowerCase()))

    const handleInputClick = () => {
      setIsCityDropdownOpen(true)
    }

    const handleDocumentClick = (e) => {
      if (!e.target.closest(`.${styles.input_container}`)) {
        setIsCityDropdownOpen(false)
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleDocumentClick)

      return () => {
        document.removeEventListener('click', handleDocumentClick)
      }
    }, [])

    const shouldShowError = cityTouched && !city

    return (
      <div className={styles.input_container}>
        <div className={styles.select_wrapper} onClick={handleInputClick}>
          <input
            className={styles.text_input}
            type="text"
            value={city}
            onChange={handleCityChange}
            onBlur={() => setCityTouched(true)}
            ref={ref}
            {...rest}
          />
          {isCityDropdownOpen ? (
            <SlArrowUp className={styles.custom_arrow} />
          ) : (
            <SlArrowDown className={styles.custom_arrow} />
          )}
        </div>
        <label className={city ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>City</label>

        {shouldShowError && <span className={styles.error_message}>{errorMessage}</span>}

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
                <IoClose className={styles.clear_icon} onClick={() => setSearchTerm('')} />
              </div>
            </div>

            {loading ? (
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
  },
)

CityInput.displayName = 'CityInput'

CityInput.propTypes = {
  defaultValue: T.string,
  defaultOpen: T.bool,
  onChange: T.func,
  errorMessage: T.string,
}

export default CityInput
