import LogoIcon from '@components/UiKit/Icons/Logo/index.jsx'
import LogoSubIcon from '@components/UiKit/Icons/LogoSub/index.jsx'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div className={styles.container}>
      <LogoIcon
        className={styles.logo_title}
        width={'294'}
        height={'36'}
        viewBox={'0 0 94 16'}
        fill={'var(--common-color-text-inverse-primary)'}
      />
      <LogoSubIcon
        className={styles.logo_subtitle}
        height={'17'}
        width={'175'}
        fill={'var(--common-color-text-inverse-primary)'}
        viewBox={'0 0 181 17'}
      />
    </div>
  )
}

export default Logo
