import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { IoChevronForward, IoChevronDown } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import styles from './menuList.module.scss'

export default function MenuList({ MENU_LINKS, activeSubMenu, toggleSubMenu }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)
  const { i18n } = useTranslation()

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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    toggleSubMenu(null)
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
                {link.name === 'Language' ? (
                  link.submenu.map((item) => (
                    <li key={item.langCode} className={styles.submenu_item}>
                      <button
                        className={`${styles.language_button} ${i18n.language === item.langCode ? styles.active : ''}`}
                        onClick={() => changeLanguage(item.langCode)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))
                ) : (
                  link.submenu.map((subItem) => (
                    <li
                      key={subItem.name}
                      className={`${styles.submenu_item} ${!subItem.image ? styles.border : ''}`}
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
                  ))
                )}
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
