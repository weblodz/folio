import Content from '@pages/Home/sections/About/Components/Content'
import TitleAbout from '@pages/Home/sections/About/Components/Title'
import MoreLink from '@pages/Home/sections/About/Components/Link'
import VideoBG from '@components/VideoBG'
import useVisibilityObserver from '@hooks/useVisibilityObserver.js'
import styles from './about.module.scss'

function About() {
  useVisibilityObserver(`.${styles.linkContainer}`, styles.visible)
  const bigVideoLink = "video/top_corporate_bg_pc.mp4"
  const smallVideoLink = "video/top_corporate_bg_sp.mp4"

  return (
    <div className={styles.container}>
      <div className={styles.ContentContainer}>
        <TitleAbout />
        <Content />
        <div className={styles.linkContainer}>
          <MoreLink />
        </div>
        <div className={styles.smallVideoContainer}>
          <VideoBG isBgPlaying={true} src={bigVideoLink} />
        </div>
        <div className={styles.bigVideoContainer}>
          <VideoBG isBgPlaying={true} src={smallVideoLink} />
        </div>
      </div>
    </div>
  )
}

export default About
