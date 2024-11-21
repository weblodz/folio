import styles from './hero.module.scss'
import NewsletterLink from '@pages/Home/components/HeroSection/components/newsletterLink/index.jsx'

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainText}>
            Mobility with <br /> an Emotional Connection
          </h1>
          <div className={styles.fullMovieContainer}>
            <a className={styles.fullMovieLink}>
              <span className={styles.fullMovieIcon}></span>
              <span className={styles.fullMovieText}>Play a full movie</span>
            </a>
          </div>
        </div>
        <NewsletterLink />
        <div className={styles.backgroundContainer}></div>
        <div className={styles.playButtonContainer}>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
