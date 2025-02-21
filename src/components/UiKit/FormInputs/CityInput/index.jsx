import { useState, useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import styles from './cityInput.module.scss'

function CityInput() {
  const [city, setCity] = useState(sessionStorage.getItem('selectedCity') || '')
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [cityTouched, setCityTouched] = useState(false)
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false)
  const country = sessionStorage.getItem('selectedCountry') || 'Poland'

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
      } catch (error) {
        console.error('Error fetching cities:', error)
      }
      setLoading(false)
    }

    fetchCities()
  }, [country])

  useEffect(() => {
    const handleStorageChange = () => {
      setCity(sessionStorage.getItem('selectedCity') || '')
    }

    window.addEventListener('storage', handleStorageChange)

    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleCityChange = (e) => {
    const selectedCity = e.target.value

    setCity(selectedCity)
    sessionStorage.setItem('selectedCity', selectedCity)
    window.dispatchEvent(new Event('storage'))
  }

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity)
    sessionStorage.setItem('selectedCity', selectedCity)
    window.dispatchEvent(new Event('storage'))
    setIsCityDropdownOpen(false)
    setCityTouched(true)
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

  return (
    <div className={styles.input_container}>
      <div className={styles.select_wrapper} onClick={handleInputClick}>
        <input
          className={styles.text_input}
          type="text"
          value={city}
          onChange={handleCityChange}
          onFocus={() => setCityTouched(true)}
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
}

export default CityInput
