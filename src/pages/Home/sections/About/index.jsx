import Content from '@pages/Home/sections/About/Components/Content/index.jsx'
import TitleAbout from '@pages/Home/sections/About/Components/Title/index.jsx'
import styles from './about.module.scss'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.ContentContainer}>
        <TitleAbout />
        <Content />
      </div>
    </div>
  )
}

export default About
