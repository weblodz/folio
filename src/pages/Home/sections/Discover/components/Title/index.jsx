import useVisibilityObserver from '@hooks/useVisibilityObserver'
import { useTranslation } from 'react-i18next'
import styles from './title.module.scss'

function Title() {
  useVisibilityObserver(`.${styles.title}, .${styles.hashtag}`, styles.visible)
  const { t } = useTranslation('nsHome')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("discover")}</h2>
      <div className={styles.hashtag}>{t("voice")}</div>
    </div>
  )
}

export default Title
