import styles from '../Logo/logo.module.scss'
import logo from '/src/assets/header/logo.svg'
import subText from '/src/assets/header/subText.svg'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo" />
      <img src={subText} alt="Sub Logo" />
    </div>
  )
}

export default Logo
