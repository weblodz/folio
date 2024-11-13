import { Link } from 'react-router-dom'
import logo from '/src/assets/header/logo.svg'
import subText from '/src/assets/header/subText.svg'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div>
      <Link className={styles.logo_link} to="/">
        <span className={styles.img_wrapper}>
          <img src={logo} alt="Logo" />
        </span>
        <span className={styles.img_wrapper__sub}>
          <img src={subText} alt="Sub Logo" />
        </span>
      </Link>
    </div>
  )
}

export default Logo
