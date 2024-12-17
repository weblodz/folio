import NewsLetterIcon from '@components/UiKit/Icons/NewsLetter/index.jsx'
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
        <NewsLetterIcon />
      </span>
    </div>
  )
}
