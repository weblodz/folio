import { useState, useEffect, forwardRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import T from 'prop-types'
import MOCK_REGIONS from './mockRegions'
import styles from './zipCodeInput.module.scss'

const ZipCodeInput = forwardRef(
  (
    {
      isValid = true,
      errorMessage,
      defaultValue = '',
      zipTouched: forcedZipTouched = false,
      country,
      setZip,
      setCity,
      ...rest
    },
    ref,
  ) => {
    const [zip, localSetZip] = useState(defaultValue)
    const [zipTouched, setZipTouched] = useState(forcedZipTouched)
    const [validity, setValidity] = useState(isValid)
    const [zipError, setZipError] = useState('')
    const { t } = useTranslation('nsAuth')

    const validateZip = useCallback(
      (zipCode) => {
        if (!zipCode) {
          setValidity(false)
          setZipError(t('enterZipCode'))

          return
        }

        let fetchedCity = ''

        if (MOCK_REGIONS[country][zipCode]) {
          fetchedCity = MOCK_REGIONS[country][zipCode]
        }

        const isValidZip = Boolean(fetchedCity)

        if (isValidZip) {
          setZipError('')
          setCity(fetchedCity)
        } else {
          setCity('')
          setZipError(errorMessage || t('ensureZipCodeCorrect'))
        }

        setValidity(isValidZip)
      },
      [country, setCity, t, errorMessage],
    )

    const handleZipChange = (e) => {
      const newZip = e.target.value

      localSetZip(newZip)
      setZip(newZip)
      validateZip(newZip)
    }

    useEffect(() => {
      if (zip) {
        validateZip(zip)
      }
    }, [country, zip, validateZip])

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
        {zipTouched && zip && !validity && (
          <span className={styles.error_message}>{zipError || t('ensureZipCodeCorrect')}</span>
        )}
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
  country: T.string.isRequired,
  setZip: T.func.isRequired,
  setCity: T.func.isRequired,
}

export default ZipCodeInput
