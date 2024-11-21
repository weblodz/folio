import styles from './hero.module.scss'
import NewsletterLink from '@pages/Home/components/HeroSection/components/newsletterLink/index.jsx'
import MainText from '@pages/Home/components/HeroSection/components/mainText'

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <MainText />
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
