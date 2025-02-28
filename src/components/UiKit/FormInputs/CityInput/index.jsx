import { useState, useEffect, forwardRef, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import T from 'prop-types'
import styles from './cityInput.module.scss'

const CityInput = forwardRef(
  (
    {
      defaultValue = '',
      defaultOpen = false,
      cityTouched: forcedCityTouched = false,
      onChange,
      zip,
      country,
      ...rest
    },
    ref,
  ) => {
    const containerRef = useRef(null)
    const [city, setCity] = useState(defaultValue)
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [cityTouched, setCityTouched] = useState(forcedCityTouched)
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(defaultOpen)
    const { t } = useTranslation('nsAuth')

    useEffect(() => {
      setCity(defaultValue)
    }, [country, defaultValue])

    useEffect(() => {
      if (zip) {
        setCity(zip)
      }
    }, [zip])

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
          setCities([])
        }
        setLoading(false)
      }

      fetchCities()
    }, [country])

    const handleCityChange = (e) => {
      const selectedCity = e.target.value

      setCity(selectedCity)
      setCityTouched(true)
      if (onChange) onChange(selectedCity)
    }

    const handleCitySelect = (selectedCity) => {
      setCity(selectedCity)
      setIsCityDropdownOpen(false)
      setCityTouched(true)
      if (onChange) onChange(selectedCity)
    }

    const filteredCities = cities.filter((cityName) => cityName.toLowerCase().startsWith(searchTerm.toLowerCase()))

    const handleInputClick = () => {
      setIsCityDropdownOpen(true)
    }

    const handleDocumentClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
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
    const cityInputStyle = cls(styles.text_input, { [styles.invalid_text_input]: shouldShowError })
    const labelStyle = cls(styles.label_text, { [styles.focused_label_text]: city })

    return (
      <div className={styles.input_container} ref={containerRef}>
        <div className={styles.select_wrapper} onClick={handleInputClick}>
          <input
            className={cityInputStyle}
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
        <label className={labelStyle}>{t('city')}</label>

        {shouldShowError && <span className={styles.error_message}>{t('selectCity')}</span>}

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
  defaultOpen: T.bool,
  onChange: T.func,
  errorMessage: T.string,
  cityTouched: T.bool,
  zip: T.string,
  country: T.string.isRequired,
}

export default CityInput
