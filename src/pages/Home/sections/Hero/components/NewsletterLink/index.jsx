//import ArrowRightIcon from '@components/UiKit/Icons/ArrowRight/index.jsx'
import ArrowRightButton from '@components/UiKit/buttons/ArrowRight/index'
import styles from './newsletter.module.scss'

export default function NewsletterLink() {
  return (
    <div className={styles.container}>
      <dl className={styles.content}>
        <dt className={styles.header}>STAY IN THE LOOP</dt>
        <dd className={styles.text}>
          Subscribe to get our news, updates, <br />
          and event information
        </dd>
      </dl>
      <ArrowRightButton className={styles.icon} icon={styles.iconContainer} />
    </div>
  )
}
