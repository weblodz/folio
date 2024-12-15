import logoTitle from '@assets/logoTitle.svg'
import logoSubTitle from '@assets/logoSubTitle.svg'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div className={styles.container}>
      <img src={logoTitle} className={styles.logo_title} alt="Logo Title" />
      <img src={logoSubTitle} className={styles.logo_subtitle} alt="Logo Subtitle" />
    </div>
  )
}

export default Logo
