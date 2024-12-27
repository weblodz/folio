import styles from './content.module.scss'

function Content() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Discover</h2>
      <div className={styles.hashtag}>#voice</div>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>Future Voice vol.6 AFEELA: The Entertainment Destination</h3>
        <p className={styles.description}>Future Voice vol.6 AFEELA: The Entertainment Destination</p>
        <a href="/read-more" className={styles.link}>
          Read more
        </a>
      </div>
    </div>
  )
}

export default Content
