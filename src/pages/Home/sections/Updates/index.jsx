import { Link } from 'react-router-dom'
import image from '@assets/image.webp'
import image1 from '@assets/image1.webp'
import image2 from '@assets/image2.webp'
import image3 from '@assets/image3.webp'
import image4 from '@assets/image4.webp'
import styles from './updates.module.scss'

function UpdatesSection() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {/* Header */}
        <h1 className={styles.name}>Latest Updates</h1>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Column with Image */}
          <img
            className={styles.image}
            src={image}
            alt="Qualcomm’s annual Holiday Marketplace"
          />

          {/* Right Column with Text */}
          <div className={styles.content}>
            <div className={styles.date}>12.20.2024</div>
            <div className={styles.description}>
              <p>The AFEELA prototype 2024 was</p>
              <p>featured at Qualcomm’s annual</p>
              <p>Holiday Marketplace.</p>
            </div>
            {/* Read more link */}
            <Link to="/read-more" className={styles.readMore}>
              Read more
            </Link>
          </div>
        </div>

        {/* Info Grid Section */}
        <div className={styles.infoGrid}>
          <div className={styles.gridColumn}>
            <div className={styles.gridItem}>
              <img src={image1} alt="Event 1" />
            </div>
            <div className={styles.gridItem}>
              <img src={image2} alt="Event 2" />
            </div>
          </div>

          <div className={styles.gridColumn}>
            <div className={styles.gridItem}>
              <img src={image3} alt="Event 3" />
            </div>
            <div className={styles.gridItem}>
              <img src={image4} alt="Event 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatesSection
