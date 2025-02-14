import { useState } from 'react'
import PropTypes from 'prop-types'
import { GrClose } from 'react-icons/gr'
import Logo from '@components/UiKit/Icons/Logo'
import LogoSub from '@components/UiKit/Icons/LogoSub'
import SOCIAL_LINKS from '@components/Footer/Components/Socials/socialLinks'
import MENU_LINKS from './components/menuLinks'
import Newsletter from './components/Newsletter'
import MenuList from './components/MenuList'
import Submenu from './components/Submenu'
import styles from './mobileMenu.module.scss'

export default function MobileMenu({ onClose }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.menu_wrapper}>
        <div className={styles.menu}>
          <div className={styles.header}>
            <Logo className={styles.logo} />
            <LogoSub className={styles.logo_sub} />
            <button
              className={styles.close}
              onClick={() => {
                setActiveSubMenu(null)
                onClose()
              }}
              aria-label="Close menu"
            >
              <GrClose />
            </button>
          </div>
          <MenuList MENU_LINKS={MENU_LINKS} activeSubMenu={activeSubMenu} toggleSubMenu={setActiveSubMenu} />
          <Newsletter SOCIAL_LINKS={SOCIAL_LINKS} />
          {activeSubMenu && <Submenu activeSubMenu={activeSubMenu} MENU_LINKS={MENU_LINKS} />}
        </div>
      </div>
    </div>
  )
}

MobileMenu.propTypes = { onClose: PropTypes.func.isRequired }
