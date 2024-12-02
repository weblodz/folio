import Logo from './Components/Logo'
import Socials from './Components/Socials'
import Vlog from './Components/Vlog'
import Navigation from './Components/Navigation'
import Copyright from './Components/Copyright'
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
