import styles from './hero.module.scss'
import NewsletterLink from '@pages/Home/components/HeroSection/components/newsletterLink/index.jsx'
import MainText from '@pages/Home/components/HeroSection/components/mainText'
import PlayButton from '@pages/Home/components/HeroSection/components/playButton/index.jsx'
import { useState } from 'react'

function HeroSection() {
  const [isBgPlaying, setBgPlaying] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <MainText />
        <NewsletterLink />
        <div className={styles.backgroundContainer}></div>
        <PlayButton isBgPlaying={isBgPlaying} setBgPlaying={setBgPlaying} />
      </div>
    </div>
  )
}

export default HeroSection
