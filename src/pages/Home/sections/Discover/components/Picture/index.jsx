import image from '@assets/discover/discover.png'
import styles from './picture.module.scss'

function Picture() {
  return (
    <div className={styles.container}>
      <img src={image} alt="Discover" className={styles.image} />
    </div>
  )
}

export default Picture
