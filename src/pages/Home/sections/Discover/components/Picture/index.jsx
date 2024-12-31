import { Link } from 'react-router-dom'
import useVisibilityObserver from '@hooks/useVisibilityObserver'
import image from '@assets/discover/discover.png'
import styles from './picture.module.scss'

function Picture() {
  useVisibilityObserver(`.${styles.container}`, styles.visible)

  return (
    <div className={styles.container}>
      <Link to="#">
        <img src={image} alt="Discover" className={styles.image} />
      </Link>
    </div>
  )
}

export default Picture
