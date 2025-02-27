import { useState } from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'
import { useTranslation } from 'react-i18next'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import MENU_LINKS from '@components/Header/components/menuLinks'
import styles from './menuList.module.scss'

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
              className={cls(styles.item, { [styles.separator]: link.separator })}
              data-name={link.name}
            >
              {link.submenu?.length ? (
                <button
                  className={cls(styles.item_button,{ [styles.active]: activeSubMenu === link.name })}
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
                    <li key={item.langCode} className={cls(styles.submenu_item, styles.border)}>
                      <button
                        className={cls(styles.language_button, { [styles.active]: i18n.language === item.langCode })}
                        onClick={() => changeLanguage(item.langCode)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))
                  : link.submenu.map((subItem) => (
                    <li
                      key={subItem.name}
                      className={cls(styles.submenu_item, { [styles.border]: !subItem.image })}
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
