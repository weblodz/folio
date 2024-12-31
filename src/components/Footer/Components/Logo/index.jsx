import LogoIcon from '@components/UiKit/Icons/Logo/index.jsx'
import LogoSubIcon from '@components/UiKit/Icons/LogoSub/index.jsx'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div className={styles.container}>
      <LogoIcon className={styles.logo_title} />
      <LogoSubIcon className={styles.logo_subtitle} />
    </div>
  )
}

export default Logo
