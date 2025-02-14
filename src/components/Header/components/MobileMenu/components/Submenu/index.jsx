import PropTypes from 'prop-types'
import ArrowRightButton from '@components/UiKit/Buttons/ArrowRight'

import styles from './subMenu.module.scss'

export default function SubMenu({ activeSubMenu, MENU_LINKS }) {
  const selectedMenu = MENU_LINKS.find((link) => link.name === activeSubMenu)
  const items = selectedMenu?.submenu || []

  return (
    <div className={`${styles.submenu} ${styles.active}`}>
      {items.some((item) => item.image) ? (
        <div className={styles.item_submenu}>
          {items.map((item) => (
            <a key={item.name} href={item.url} className={styles.item} data-name={item.dataName || ''}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <span className={styles.text}>{item.name}</span>
              <div className={styles.arrow_container}>
                <ArrowRightButton className={styles.arrow} icon={styles.icon} size={'20'} />
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className={styles.textSubmenu}>
          {items.map((item) => (
            <a key={item.name} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

SubMenu.propTypes = { activeSubMenu: PropTypes.string.isRequired, MENU_LINKS: PropTypes.array.isRequired }
