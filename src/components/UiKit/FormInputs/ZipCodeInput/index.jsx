import { useState, useEffect, forwardRef } from 'react'
import T from 'prop-types'
import styles from './zipCodeInput.module.scss'

const ZipCodeInput = forwardRef(
  ({ isValid, errorMessage = 'Ensure your ZIP code is correct', defaultValue = '', ...rest }, ref) => {
    const [zip, setZip] = useState(defaultValue)
    const [zipTouched, setZipTouched] = useState(false)
    const [validity, setValidity] = useState(isValid)
    const country = sessionStorage.getItem('selectedCountry') || 'Poland'

    useEffect(() => {
      if (zip === '') {
        setZip(defaultValue)
      }
    }, [defaultValue, zip])

    useEffect(() => {
      sessionStorage.removeItem('enteredZip')
    }, [])

    useEffect(() => {
      const handleStorageChange = () => {
        setZip(sessionStorage.getItem('enteredZip') || '')
      }

      window.addEventListener('storage', handleStorageChange)

      return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    const fetchCityFromZip = async (zipCode) => {
      if (!zipCode) {
        setValidity(true)

        return
      }

      let fetchedCity = ''

      try {
        let response, data

        if (country === 'United Kingdom') {
          response = await fetch(`https://api.postcodes.io/postcodes/${zipCode}`)
          data = await response.json()
          if (data.status === 200) fetchedCity = data.result.admin_district
        } else if (country === 'Poland') {
          response = await fetch(`https://api.zippopotam.us/pl/${zipCode}`)
          data = await response.json()
          if (data.places?.length > 0) fetchedCity = data.places[0]['place name']
        }
      } catch (error) {
        console.error('Error fetching city:', error)
      }

      if (fetchedCity) {
        sessionStorage.setItem('selectedCity', fetchedCity)
        window.dispatchEvent(new Event('storage'))
      } else {
        setValidity(false)
      }
    }

    const handleZipChange = (e) => {
      const newZip = e.target.value

      setZip(newZip)
      sessionStorage.setItem('enteredZip', newZip)

      fetchCityFromZip(newZip)
    }

    const zipStyle = validity ? `${styles.text_input}` : `${styles.text_input} ${styles.invalid_text_input}`

    const labelStyle = zip ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text

    return (
      <div className={styles.input_container}>
        <input
          className={zipStyle}
          type="text"
          value={zip}
          onChange={handleZipChange}
          onBlur={() => setZipTouched(true)}
          ref={ref}
          {...rest}
        />
        <label className={labelStyle}>Zip Code</label>

        {zipTouched && !zip && <span className={styles.error_message}>Enter your ZIP code</span>}
        {zipTouched && zip && !validity && <span className={styles.error_message}>{errorMessage}</span>}
      </div>
    )
  },
)

ZipCodeInput.displayName = 'ZipCodeInput'

ZipCodeInput.propTypes = {
  isValid: T.bool.isRequired,
  errorMessage: T.string.isRequired,
  defaultValue: T.string,
}

export default ZipCodeInput
