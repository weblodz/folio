import Content from './components/Content'
import Picture from './components/Picture'
import Title from './components/Title'
import styles from './discover.module.scss'

function DiscoverSection() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Title />
          </div>
          <div className={styles.content}>
            <Content />
          </div>
        </div>
        <div className={styles.picture}>
          <Picture />
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection
