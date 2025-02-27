import { useTranslation } from 'react-i18next'
import styles from './policytext.module.scss'

function PolicyText() {
  const { t } = useTranslation('nsAuth')

  return (
    <div className={styles.container}>
      {t('byCheckingHere')}
      <span className={styles.text_link}>
        {t('termsAndConditions')}
      </span>
      {t('and')}
      <span className={styles.text_link}>
        {t('privacyPolicy')}
      </span>
      {t('iAlsoAgree')}
    </div>
  )
}

export default PolicyText
