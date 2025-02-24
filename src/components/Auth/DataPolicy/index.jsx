import { useTranslation } from 'react-i18next'
import styles from './datapolicy.module.scss'

function DataPolicy() {
  const { t } = useTranslation('nsDataPolicy')

  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {t('bySigningUp')}
        <span className={styles.text_link}>{t('termsAndConditions')}</span>
        {t('and')}
        <span className={styles.text_link}>{t('privacyPolicy')}</span>
        {t('youAlsoAgree')}
      </span>
    </div>
  )
}

export default DataPolicy
