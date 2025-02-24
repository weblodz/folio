import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import MENU_LINKS from '@components/Header/components/menuLinks'
import styles from './menu.module.scss'

function MenuList({ onClose }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const { i18n } = useTranslation()

  const handleToggleSubMenu = (name) => {
    setActiveSubMenu(activeSubMenu === name ? null : name)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setActiveSubMenu(null)
  }

  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        {MENU_LINKS.map((link) => (
          <div key={link.name} className={styles.container}>
            <li
              className={`${styles.item} ${link.separator ? styles.separator : ''}`}
              data-name={link.name}
            >
              {link.submenu?.length ? (
                <button
                  className={`${styles.item_button} ${activeSubMenu === link.name ? styles.active : ''
                    }`}
                  onClick={() => handleToggleSubMenu(link.name)}
                  aria-expanded={activeSubMenu === link.name}
                >
                  {link.name}
                  <span className={styles.arrow}>
                    {activeSubMenu === link.name ? <IoChevronUp /> : <IoChevronDown />}
                  </span>
                </button>
              ) : (
                <a href={link.url} onClick={onClose} className={styles.link}>
                  {link.name}
                </a>
              )}
            </li>

            {activeSubMenu === link.name && (
              <ul className={styles.submenu}>
                {link.name === 'Language'
                  ? link.submenu.map((item) => (
                    <li key={item.langCode} className={`${styles.submenu_item} ${styles.border}`}>
                      <button
                        className={`${styles.language_button} ${i18n.language === item.langCode ? styles.active : ''
                          }`}
                        onClick={() => changeLanguage(item.langCode)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))
                  : link.submenu.map((subItem) => (
                    <li
                      key={subItem.name}
                      className={`${styles.submenu_item} ${!subItem.image ? styles.border : ''}`}
                      data-name={subItem.name}
                    >
                      <a href={subItem.url} className={styles.submenu_link}>
                        {subItem.image ? (
                          <div className={styles.image_container}>
                            <img
                              src={subItem.image}
                              alt={subItem.name}
                              className={styles.image}
                            />
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
    </div>
  )
}

MenuList.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default MenuList
