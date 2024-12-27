import { Link } from 'react-router-dom'
import LogoIcon from '@components/UiKit/Icons/Logo/index.jsx'
import LogoSubIcon from '@components/UiKit/Icons/LogoSub/index.jsx'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div>
      <Link className={styles.logo_link} to="/">
        <span className={styles.img_wrapper}>
          <LogoIcon
            height={'16'}
            width={'94'}
            viewBox={'0 0 94 16'}
            fill={'var(--common-color-text-inverse-primary)'}
          />
        </span>
        <span className={styles.img_wrapper__sub}>
          <LogoSubIcon
            height={'17'}
            width={'181'}
            fill={'var(--common-color-text-inverse-primary)'}
            viewBox={'0 0 181 17'}
          />
        </span>
      </Link>
    </div>
  )
}

export default Logo
