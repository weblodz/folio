import styles from './logo.module.scss'
import logoTitle from "../../../../assets/logoTitle.svg"
import logoSubTitle from "../../../../assets/logoSubTitle.svg"

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logoTitle} alt="Logo Title" />
      <img src={logoSubTitle} alt="Logo Subtitle" />
    </div>
  )
}

export default Logo
