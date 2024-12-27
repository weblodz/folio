import Content from './components/Content'
import Picture from './components/Picture'
import styles from './discover.module.scss'

function DiscoverSection() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Content />
          <Picture />
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection
