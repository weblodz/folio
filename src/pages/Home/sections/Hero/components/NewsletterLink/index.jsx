import { useTranslation } from 'react-i18next'
import ArrowRightButton from '@components/UiKit/Buttons/ArrowRight'
import styles from './newsletter.module.scss'

export default function NewsletterLink() {
  const { t } = useTranslation('nsCommon')

  return (
    <div className={styles.container}>
      <dl className={styles.content}>
        <dt className={styles.header}>{t('stayInLoop')}</dt>
        <dd className={styles.text}>
          {t('subscribeNews')} <br />
          {t('eventInfo')}
        </dd>
      </dl>
      <ArrowRightButton className={styles.arrow} iconClass={styles.icon} isLightTheme={true}/>
    </div>
  )
}
