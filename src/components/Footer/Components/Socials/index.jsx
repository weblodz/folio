import SOCIAL_LINKS from './socialLinks.jsx'
import styles from './socials.module.scss'

function Socials() {
  return (
    <div className={styles.iconLinks}>
      <ul className={styles.linkContainer}>
        {SOCIAL_LINKS.map((item) => (
          <li key={item.name} className={styles.item}>
            <a
              href={item.url}
              target="_blank"
              aria-label={`${item.name} link`}
              className={styles.link}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
