import styles from '../Logo/logo.module.scss'
import logo from '/src/assets/header/logo.svg'
import subLogo from '/src/assets/header/subText.svg'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo" />
      <img src={subLogo} alt="Sub Logo" />
    </div>
  )
}

export default Logo
