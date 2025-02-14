import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { IoChevronForward, IoChevronDown } from 'react-icons/io5'
import styles from './menuList.module.scss'

export default function MenuList({ MENU_LINKS, activeSubMenu, toggleSubMenu }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleToggleSubMenu = (name) => {
    toggleSubMenu(activeSubMenu === name ? null : name)
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {MENU_LINKS.map((link) => (
          <div key={link.name} className={styles.menu}>
            <li className={styles.item} data-name={link.name}>
              {link.submenu?.length ? (
                <button
                  className={`${styles.item_button} ${activeSubMenu === link.name ? styles.active : ''}`}
                  onClick={() => handleToggleSubMenu(link.name)}
                  data-name={link.dataName || ''}
                  aria-expanded={activeSubMenu === link.name}
                >
                  {link.name}
                  <span className={styles.arrow}>
                    {activeSubMenu === link.name ? <IoChevronDown /> : <IoChevronForward />}
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

            {isMobile && activeSubMenu === link.name && (
              <ul className={styles.submenu}>
                {link.submenu.map((subItem) => (
                  <li
                    key={subItem.name}
                    className={`${styles.submenu_item} ${!subItem.image ? styles.border : ''}`}
                    data-name={subItem.dataName}
                  >
                    <a href={subItem.url} className={styles.submenu_link}>
                      {subItem.image ? (
                        <div className={styles.image_container}>
                          <img src={subItem.image} alt={subItem.name} className={styles.image} />
                          <div className={styles.image_text}>{subItem.name}</div>
                        </div>
                      ) : (
                        <span className={styles.submenu_text}>{subItem.name}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
