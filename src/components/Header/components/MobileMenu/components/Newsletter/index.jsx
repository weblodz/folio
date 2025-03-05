import PropTypes from 'prop-types'
import styles from './newsletter.module.scss'

export default function Newsletter({ SOCIAL_LINKS }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Stay in the loop</p>
      <p className={styles.description}>Subscribe to get our news, updates, and event information.</p>
      <a href="/subscribe" className={styles.subscribe}>
        Subscribe to newsletter
      </a>
      <div className={styles.socials}>
        <ul className={styles.list}>
          {SOCIAL_LINKS.map((item) => (
            <li key={item.name} className={styles.item}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} link`} className={styles.link}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Newsletter.propTypes = {
  SOCIAL_LINKS: PropTypes.array.isRequired,
}
