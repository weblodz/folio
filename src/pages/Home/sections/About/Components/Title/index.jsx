import useVisibilityObserver from '@hooks/useVisibilityObserver.js'
import styles from "./title.module.scss"

function TitleAbout() {
  useVisibilityObserver(`.${styles.title}`, styles.visible)

  return (
    <h1 className={styles.title}>We are the future of mobility</h1>
  )
}

export default TitleAbout