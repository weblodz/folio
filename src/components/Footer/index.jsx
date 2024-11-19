import Logo from './Components/Logo/index'
import Socials from './Components/Socials/index'
import Vlog from './Components/Vlog/index'
import Navigation from './Components/Navigation/index'
import Copyright from './Components/Copyright/index'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
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
