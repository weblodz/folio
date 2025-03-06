import { useTranslation } from 'react-i18next'
import ArrowRightButton from '@components/UiKit/Buttons/ArrowRight'
import styles from './vlog.module.scss'

function Vlog() {
  const { t } = useTranslation('nsCommon')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("stayInLoop")}</h2>
      <p className={styles.description}>{t("subscribeNews")} {t("eventInfo")}</p>
      <a href="#" className={styles.link}>
        <ArrowRightButton className={styles.arrow} iconClass={styles.icon} size={'21'} isLightTheme={true} />
        <div className={styles.text}>{t("subscribe")}</div>
      </a>
    </div>
  )
}

export default Vlog
