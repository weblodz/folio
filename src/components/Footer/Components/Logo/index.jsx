import FooterLogoIcon from '@components/UiKit/Icons/FooterLogo/index.jsx'
import FooterSubTextIcon from '@components/UiKit/Icons/FooterSubText/index.jsx'
import styles from './logo.module.scss'

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <FooterLogoIcon />
      <FooterSubTextIcon />
    </div>
  )
}

export default Logo
