import { useTranslation } from 'react-i18next'
import styles from './content.module.scss'

export default function Content() {
  const { t } = useTranslation('nsPrototype')

  return (
    <>
      <h2 className={styles.title}>{t('affelaTitle')}</h2>
      <p className={styles.description}>
        {t('line1')} <br />
        {t('line2')}
        <br />
        {t('line3')}
        <br />
        {t('line4')}
      </p>
    </>
  )
}
