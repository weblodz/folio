import GoogleLogo from '@components/UiKit/Icons/GoogleLogo'
import GithubLogo from '@components/UiKit/Icons/GithubLogo'
import styles from './socialmedias.module.scss'

function SocialMedias() {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <GoogleLogo />
      </div>
      <div className={styles.icon_container}>
        <GithubLogo />
      </div>
    </div>
  )
}

export default SocialMedias
