import { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './zipCodeInput.module.scss'

function ZipCodeInput({
  country,
  setZip,
  zip,
  isZipValid,
  setZipTouched,
  setCity,
  setZipNotFound,
  setIsZipValid,
  ...rest
}) {
  const isValidZipFormat = (zipCode) => {
    if (!zipCode) return false

    if (country === 'United Kingdom') {
      return /^[A-Z0-9]{2,4} ?[A-Z0-9]{3}$/i.test(zipCode)
    } else if (country === 'Poland') {
      return /^[0-9]{2}-[0-9]{3}$/.test(zipCode)
    }

    return false
  }

  const fetchCityFromPostcode = async (postcode) => {
    if (!postcode) {
      setIsZipValid(true)
      setZipNotFound(false)
      setCity('')

      return
    }

    if (!isValidZipFormat(postcode)) {
      setIsZipValid(false)
      setZipNotFound(false)
      setCity('')

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
        } else {
          setZipNotFound(true)
          setCity('')

          return
        }
      } else if (country === 'Poland') {
        response = await fetch(`https://api.zippopotam.us/pl/${postcode}`)
        data = await response.json()
        if (data.places?.length > 0) {
          fetchedCity = data.places[0]['place name']
        } else {
          setZipNotFound(true)
          setCity('')

          return
        }
      }

      setCity(fetchedCity)
    } catch (error) {
      console.error('Error fetching city:', error)
      setZipNotFound(true)
      setCity('')
    }
  }

  useEffect(() => {
    setZip('')
    setCity('')
    setIsZipValid(true)
    setZipNotFound(false)
    setZipTouched(false)
  }, [country, setZip, setCity, setIsZipValid, setZipNotFound, setZipTouched])

  return (
    <div className={styles.input_container} tabIndex={0}>
      <input
        className={isZipValid ? styles.text_input : `${styles.text_input} ${styles.invalid_text_input}`}
        type="text"
        value={zip}
        onChange={(e) => {
          setZip(e.target.value)
          fetchCityFromPostcode(e.target.value)
        }}
        onBlur={() => setZipTouched(true)}
        {...rest}
      />
      <label className={zip ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>Zip Code</label>
    </div>
  )
}

ZipCodeInput.propTypes = {
  country: PropTypes.string.isRequired,
  setZip: PropTypes.func.isRequired,
  zip: PropTypes.string.isRequired,
  isZipValid: PropTypes.bool.isRequired,
  setZipTouched: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setZipNotFound: PropTypes.func.isRequired,
  setIsZipValid: PropTypes.func.isRequired,
}

export default ZipCodeInput
