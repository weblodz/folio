import { Link } from 'react-router-dom'
import useVisibilityObserver from '@hooks/useVisibilityObserver'
import styles from './content.module.scss'

function Content() {
  useVisibilityObserver(`.${styles.subtitle}, .${styles.description}, .${styles.link}`, styles.visible)

  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>Future Voice vol.6 AFEELA: The Entertainment Destination</h3>
      <p className={styles.description}>Future Voice vol.6 AFEELA: The Entertainment Destination</p>
      <Link to="#" className={styles.link}>
        Read more
      </Link>
    </div>
  )
}

export default Content
