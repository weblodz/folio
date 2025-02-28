import { useState, useEffect, useRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import T from 'prop-types'
import styles from './zipCodeInput.module.scss'

const ZipCodeInput = forwardRef(
  (
    {
      isValid = true,
      errorMessage = 'Ensure your ZIP code is correct',
      defaultValue = '',
      zipTouched: forcedZipTouched = false,
      onChange,
      onCityChange,
      country,
      ...rest
    },
    ref,
  ) => {
    const [zip, setZip] = useState(defaultValue || '')
    const [zipTouched, setZipTouched] = useState(forcedZipTouched)
    const [validity, setValidity] = useState(isValid)
    const debounceTimeout = useRef(null)
    const previousCountry = useRef(country)
    const { t } = useTranslation('nsAuth')

    useEffect(() => {
      if (typeof defaultValue === 'string' && zip === '') {
        setZip(defaultValue)
      }
    }, [defaultValue, zip])

    useEffect(() => {
      if (previousCountry.current !== country) {
        setZip('')
        setValidity(true)
        previousCountry.current = country
        if (onCityChange) onCityChange('')
      }
    }, [country, onCityChange])

    const fetchCityFromZip = async (zipCode) => {
      if (!zipCode) {
        setValidity(true)

        return
      }

      let fetchedCity = ''
      let isValidZip = false

      try {
        let response, data

        if (country === 'United Kingdom') {
          response = await fetch(`https://api.postcodes.io/postcodes/${zipCode}`)
          data = await response.json()
          if (data.status === 200) {
            fetchedCity = data.result.admin_district
            isValidZip = true
          }
        } else if (country === 'Poland') {
          response = await fetch(`https://api.zippopotam.us/pl/${zipCode}`)
          data = await response.json()
          if (data.places?.length > 0) {
            fetchedCity = data.places[0]['place name']
            isValidZip = true
          }
        }
      } catch (error) {
        console.error('Error fetching city:', error)
      }

      setValidity(isValidZip)

      if (isValidZip && fetchedCity) {
        onCityChange(fetchedCity)
      } else {
        onCityChange('')
      }
    }

    const handleZipChange = (e) => {
      const newZip = e.target.value

      if (newZip.length > 10) return

      setZip(newZip)
      if (onChange) onChange(newZip)

      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
      }

      debounceTimeout.current = setTimeout(() => {
        if (
          (country === 'Poland' && /^\d{2}-\d{3}$/.test(newZip)) ||
          (country === 'United Kingdom' && newZip.length >= 5 && newZip.length <= 7)
        ) {
          fetchCityFromZip(newZip)
        } else {
          setValidity(false)
        }
      }, 500)
    }

    const zipStyle = cls(styles.text_input, { [styles.invalid_text_input]: zipTouched && (!zip || !validity) })
    const labelStyle = cls(styles.label_text, { [styles.focused_label_text]: zip })

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
        <label className={labelStyle}>{t('zipCode')}</label>

        {zipTouched && !zip && <span className={styles.error_message}>{t('enterZipCode')}</span>}
        {zipTouched && zip && !validity && <span className={styles.error_message}>{errorMessage}</span>}
      </div>
    )
  },
)

ZipCodeInput.displayName = 'ZipCodeInput'

ZipCodeInput.propTypes = {
  isValid: T.bool,
  errorMessage: T.string,
  defaultValue: T.string,
  zipTouched: T.bool,
  onChange: T.func.isRequired,
  onCityChange: T.func.isRequired,
  country: T.string.isRequired,
  city: T.string,
}

export default ZipCodeInput
