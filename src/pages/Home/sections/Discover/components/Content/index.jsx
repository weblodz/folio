import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useVisibilityObserver from '@hooks/useVisibilityObserver'
import styles from './content.module.scss'

function Content() {
  useVisibilityObserver(`.${styles.subtitle}, .${styles.description}, .${styles.link}`, styles.visible)
  const { t } = useTranslation(['nsDiscover', 'nsCommon'])

  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{t('futureVoice')}</h3>
      <p className={styles.description}>{t('futureVoice')}</p>
      <Link to="#" className={styles.link}>
        {t('readMore', { ns: 'nsCommon' })}
      </Link>
    </div>
  )
}

export default Content
