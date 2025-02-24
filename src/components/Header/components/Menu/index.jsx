import { useEffect } from 'react'
import PropTypes from 'prop-types'
import SOCIAL_LINKS from '@components/Footer/Components/Socials/socialLinks'
import MenuList from './components/MenuList'
import Newsletter from './components/Newsletter'
import styles from './menu.module.scss'

export default function Menu({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleResize = () => {
      if (window.innerWidth > 768) {
        onClose()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', handleResize)
    }
  }, [onClose])

  return (
    <div className={styles.container}>
      <MenuList />
      <Newsletter SOCIAL_LINKS={SOCIAL_LINKS} />
    </div>
  )
}

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
}
