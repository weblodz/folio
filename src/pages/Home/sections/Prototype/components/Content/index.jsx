import { useTranslation } from 'react-i18next'
import styles from './content.module.scss'

export default function Content() {
  const { t } = useTranslation('nsHome')

  return (
    <>
      <h2 className={styles.title}>{t('affelaTitle')}</h2>
      <p className={styles.description}>
        {t('mobilityIntro')} <br />
        {t('techOverview')}
        <br />
        {t('expandMobility')}
        <br />
        {t('futureVision')}
      </p>
    </>
  )
}
