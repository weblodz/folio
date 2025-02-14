import PropTypes from 'prop-types'
import { IoChevronForward } from 'react-icons/io5'
import styles from './menuList.module.scss'

export default function MenuList({ MENU_LINKS, activeSubMenu, toggleSubMenu }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {MENU_LINKS.map((link) => (
          <li key={link.name} className={styles.item}>
            {link.submenu?.length ? (
              <button
                className={`${styles.item} ${activeSubMenu === link.name ? styles.active : ''}`}
                onClick={() => toggleSubMenu(link.name)}
                data-name={link.dataName || ''}
                aria-expanded={activeSubMenu === link.name}
              >
                {link.name}
                <span className={styles.arrow}>
                  <IoChevronForward />
                </span>
              </button>
            ) : (
              <a
                href={link.url}
                onClick={() => toggleSubMenu(null)}
                className={styles.link}
                data-name={link.dataName || ''}
              >
                {link.name}
                {link.icon && (
                  <span className={styles.arrow}>
                    <IoChevronForward />
                  </span>
                )}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

MenuList.propTypes = {
  MENU_LINKS: PropTypes.array.isRequired,
  activeSubMenu: PropTypes.string,
  toggleSubMenu: PropTypes.func.isRequired,
}
