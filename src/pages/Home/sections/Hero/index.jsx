import { useState } from 'react'
import MainText from '@pages/Home/sections/Hero/components/MainText'
import NewsletterLink from '@pages/Home/sections/Hero/components/NewsletterLink'
import PlayButton from '@pages/Home/sections/Hero/components/PlayButton'
import VideoBG from '@components/VideoBG'
import styles from './hero.module.scss'

function HeroSection() {
  const [isBgPlaying, setBgPlaying] = useState(true)

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <MainText />
        <NewsletterLink />
        <VideoBG isBgPlaying={isBgPlaying} src={"video/top_topbanner_01_pc.mp4"}/>
        <PlayButton isBgPlaying={isBgPlaying} setBgPlaying={setBgPlaying} />
      </div>
    </div>
  )
}

export default HeroSection
