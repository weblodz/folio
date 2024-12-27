import ArrowRightIcon from '@components/UiKit/Icons/ArrowRight/index.jsx'
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
      <span className={styles.iconContainer}>
        <ArrowRightIcon
          className={styles.icon}
          height={'10'}
          width={'18'}
          fill="--common-color-text-inverse-primary"
          viewBox={'0 0 18 10'}
        />
      </span>
    </div>
  )
}
