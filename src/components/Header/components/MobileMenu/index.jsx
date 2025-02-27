import PropTypes from 'prop-types'
import SOCIAL_LINKS from '@components/Footer/Components/Socials/socialLinks'
import MenuList from './components/MenuList'
import Newsletter from './components/Newsletter'
import styles from './mobileMenu.module.scss'

export default function MobileMenu({ onClose }) {
  return (
    <div className={styles.container}>
      <MenuList onClose={onClose} />
      <Newsletter SOCIAL_LINKS={SOCIAL_LINKS} />
    </div>
  )
}

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
}
