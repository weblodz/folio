import PropTypes from 'prop-types'
import SOCIAL_LINKS from '@components/Footer/Components/Socials/socialLinks.jsx'
import { IoChevronForward } from 'react-icons/io5'
import { GrClose } from 'react-icons/gr'
import MENU_LINKS from './menuLinks'
import styles from './mobileMenu.module.scss'

export default function MobileMenu({ onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button className={styles.close} onClick={onClose}>
          <GrClose />
        </button>

        <nav className={styles.nav}>
          <ul>
            {MENU_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.url}>
                  {link.name}
                  {link.icon && (
                    <span className={styles.arrow}>
                      <IoChevronForward />
                    </span>
                  )}{' '}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <p className={styles.title}>Stay in the loop</p>
          <p className={styles.description}>Subscribe to get our news, updates, and event information.</p>

          <a href="/subscribe" className={styles.subscribe}>
            Subscribe to newsletter
          </a>

          <div className={styles.socials}>
            <ul className={styles.list}>
              {SOCIAL_LINKS.map((item) => (
                <li key={item.name} className={styles.item}>
                  <a href={item.url} target="_blank" aria-label={`${item.name} link`} className={styles.link}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
}