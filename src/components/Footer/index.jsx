import React from 'react'
import styles from './footer.module.scss'
import Logo from '../../components/Footer/Components/Logo/logo'
import Socials from '../../components/Footer/Components/Socials/socials'
import Vlog from '../../components/Footer/Components/Vlog/vlog'
import Navigation from '../../components/Footer/Components/Navigation/navigation'
import Copyright from './Components/Copyright/copyright'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footerContainer']}>
        <div className={styles['footerContent']}>
          <Vlog />
          <Socials />
        </div>
        <Navigation />
      </div>
      <Logo />
      <Copyright />
    </footer>
  )
}

export default Footer
