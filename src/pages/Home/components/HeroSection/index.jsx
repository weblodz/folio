import styles from './hero.module.scss'
import NewsletterLink from '@pages/Home/components/HeroSection/components/newsletterLink/index.jsx'
import MainText from '@pages/Home/components/HeroSection/components/mainText'
import PlayButton from '@pages/Home/components/HeroSection/components/playButton/index.jsx'
import { ModalPlayer } from '@pages/Home/components/HeroSection/components/modalPlayer/index.jsx'
import { useState } from 'react'
import { VideoBG } from '@pages/Home/components/HeroSection/components/videoBG/index.jsx'

function HeroSection() {
  const [isBgPlaying, setBgPlaying] = useState(true)
  const [isModalPlayerShown, setModalPlayerShown] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <MainText setModalPlayerShown={setModalPlayerShown} />
        <NewsletterLink />
        <VideoBG isBgPlaying={isBgPlaying} />
        <PlayButton isBgPlaying={isBgPlaying} setBgPlaying={setBgPlaying} />
        {isModalPlayerShown && <ModalPlayer setModalPlayerShown={setModalPlayerShown} />}
      </div>
    </div>
  )
}

export default HeroSection
