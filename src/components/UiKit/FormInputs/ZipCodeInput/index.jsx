import { useState, useEffect, forwardRef } from 'react'
import T from 'prop-types'
import styles from './zipCodeInput.module.scss'

const ZipCodeInput = forwardRef(
  (
    {
      isValid,
      errorMessage = 'Ensure your ZIP code is correct',
      defaultValue = '',
      zipTouched: forcedZipTouched = false,
      ...rest
    },
    ref,
  ) => {
    const [zip, setZip] = useState(defaultValue)
    const [zipTouched, setZipTouched] = useState(forcedZipTouched)
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
      let isValidZip = false

      try {
        let response, data

        response = await fetch(
          `http://api.geonames.org/postalCodeLookupJSON?postalcode=${zipCode}&country=${country === 'United Kingdom' ? 'GB' : 'PL'}&username=affela`,
        )

        data = await response.json()
        if (data.postalcodes && data.postalcodes.length > 0) {
          fetchedCity = data.postalcodes[0].placeName
          isValidZip = true
        }
      } catch (error) {
        console.error('Error fetching city:', error)
      }

      if (fetchedCity) {
        sessionStorage.setItem('selectedCity', fetchedCity)
        window.dispatchEvent(new Event('storage'))
      }

      setValidity(isValidZip)
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
  zipTouched: T.bool,
}

export default ZipCodeInput
