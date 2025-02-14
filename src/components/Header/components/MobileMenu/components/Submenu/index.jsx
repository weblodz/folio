import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import styles from './subMenu.module.scss'

export default function SubMenu({ activeSubMenu, MENU_LINKS }) {
  const selectedMenu = MENU_LINKS.find((link) => link.name === activeSubMenu)
  const items = selectedMenu?.submenu || []
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={`${styles.submenu} ${styles.active}`}>
      {items.some((item) => item.image) ? (
        <div className={styles.item_submenu}>
          {items.map((item) => (
            <a key={item.name} href={item.url} className={styles.item} data-name={item.dataName || ''}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <span className={styles.text}>{item.name}</span>
            </a>
          ))}
        </div>
      ) : (
        <div className={styles.text_submenu}>
          {selectedMenu.name === 'Language' ? (
            items.map((item) => (
              <button
                key={item.langCode}
                className={`${styles.language_button} ${i18n.language === item.langCode ? styles.active : ''}`}
                onClick={() => changeLanguage(item.langCode)}
              >
                {item.name}
              </button>
            ))
          ) : (
            items.map((item) => (
              <a key={item.name} href={item.url}>
                {item.name}
              </a>
            ))
          )}
        </div>
      )}
    </div>
  )
}

SubMenu.propTypes = {
  activeSubMenu: PropTypes.string.isRequired,
  MENU_LINKS: PropTypes.array.isRequired,
}
