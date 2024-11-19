import LINKS from './links'
import styles from './navigation.module.scss'

function Navigation() {
  return (
    <div className={styles.container}>
      <ul className={styles.linkContainer}>
        {LINKS.map((item) => (
          <li key={item.name} className={styles.item}>
            <a className={styles.link} href={item.path}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
