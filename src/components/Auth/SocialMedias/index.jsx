import GoogleLogIn from '@components/UiKit/Icons/GoogleLogIn/index.jsx'
import GithubLogIn from '@components/UiKit/Icons/GithubLogIn/index.jsx'
import styles from './socialmedias.module.scss'

function SocialMedias() {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <GoogleLogIn />
      </div>
      <div className={styles.icon_container}>
        <GithubLogIn />
      </div>
    </div>
  )
}

export default SocialMedias
