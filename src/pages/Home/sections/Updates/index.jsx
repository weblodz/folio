import image from '@assets/image.webp'
import styles from './updates.module.scss'

function UpdatesSection() {
  return <div className={styles.container}>
    <div className={styles.section}>
      <div className={styles.name}>
        <h1>Latest Updates</h1>
        <img className={styles.image} src={image} alt="Qualcomm’s annual Holiday Marketplace"></img>
      </div>
    </div>
  </div>
}

export default UpdatesSection
