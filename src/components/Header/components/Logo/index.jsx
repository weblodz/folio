import { Link } from 'react-router-dom'
import LogoIcon from '@components/UiKit/Icons/Logo/index.jsx'
import LogoSubIcon from '@components/UiKit/Icons/LogoSub/index.jsx'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div>
      <Link className={styles.logo_link} to="/">
        <span className={styles.img_wrapper}>
          <LogoIcon />
        </span>
        <span className={styles.img_wrapper__sub}>
          <LogoSubIcon />
        </span>
      </Link>
    </div>
  )
}

export default Logo
