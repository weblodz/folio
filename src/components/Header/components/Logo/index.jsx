import { Link } from 'react-router-dom'
import logo from '/src/assets/header/logo.svg'
import subText from '/src/assets/header/subText.svg'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="Logo" />
        <img src={subText} alt="Sub Logo" />
      </Link>
    </div>
  )
}

export default Logo
