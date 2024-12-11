import logoTitle from '@assets/logoTitle.svg'
import logoSubTitle from '@assets/logoSubTitle.svg'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logoTitle} className={styles.logoTitle} alt="Logo Title" />
      <img src={logoSubTitle} className={styles.logoSubTitle} alt="Logo Subtitle" />
    </div>
  )
}

export default Logo
