import { useState, useEffect } from 'react'
import styles from './zipCodeInput.module.scss'

function ZipCodeInput(){
  const [zip, setZip] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [zipTouched, setZipTouched] = useState(false)
  const [setZipNotFound] = useState(false)
  const country = sessionStorage.getItem('selectedCountry') || 'Poland'

  useEffect(() => {
    setZip('')
    setIsValid(true)
    setZipTouched(false)
    setZipNotFound(false)
  }, [country, setZipNotFound])

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
      setIsValid(true)
      setZipNotFound(false)

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
      setIsValid(true)
      setZipNotFound(false)
    } else {
      setIsValid(false)
      setZipNotFound(true)
    }
  }

  const handleZipChange = (e) => {
    const newZip = e.target.value

    setZip(newZip)
    sessionStorage.setItem('enteredZip', newZip)
    fetchCityFromZip(newZip)
  }

  return (
    <div className={styles.input_container}>
      <input
        className={isValid ? styles.text_input : `${styles.text_input} ${styles.invalid_text_input}`}
        type="text"
        value={zip}
        placeholder="Enter ZIP Code"
        onChange={handleZipChange}
        onBlur={() => setZipTouched(true)}
      />
      <label className={zip ? `${styles.label_text} ${styles.focused_label_text}` : styles.label_text}>Zip Code</label>

      {zipTouched && !zip && <span className={styles.error_message}>Enter your ZIP code</span>}

      {zipTouched && zip && !isValid && <span className={styles.error_message}>Ensure your ZIP code is correct</span>}
    </div>
  )
}

export default ZipCodeInput
