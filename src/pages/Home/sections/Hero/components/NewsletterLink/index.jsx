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
        <svg
          className={styles.icon}
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.251 5.54696L11.9767 8.74044L12.7404 9.52344L17.3782 5.0001L12.7404 0.476762L11.9767 1.25976L15.251 4.45321L0.875039 4.45321L0.875038 5.54696L15.251 5.54696Z"
          ></path>
        </svg>
      </span>
    </div>
  )
}
