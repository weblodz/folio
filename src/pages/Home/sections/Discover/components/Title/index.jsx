import useVisibilityObserver from '@hooks/useVisibilityObserver'
import styles from './title.module.scss'

function Title() {
  useVisibilityObserver(`.${styles.title}, .${styles.hashtag}`, styles.visible)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Discover</h2>
      <div className={styles.hashtag}>#voice</div>
    </div>
  )
}

export default Title
