import Content from '@pages/Home/sections/About/Components/Content/index.jsx'
import TitleAbout from '@pages/Home/sections/About/Components/Title/index.jsx'
import MoreLink from '@pages/Home/sections/About/Components/Link/index.jsx'
import useVisibilityObserver from '@hooks/useVisibilityObserver.js'
import styles from './about.module.scss'

function About() {
  useVisibilityObserver(`.${styles.linkContainer}`, styles.visible)

  return (
    <div className={styles.container}>
      <div className={styles.ContentContainer}>
        <TitleAbout />
        <Content />
        <div className={styles.linkContainer}>
          <MoreLink />
        </div>
      </div>
    </div>
  )
}

export default About
