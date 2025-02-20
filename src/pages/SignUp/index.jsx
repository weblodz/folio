import GoogleLogIn from '@components/UiKit/Icons/GoogleLogo/index.jsx'
import GithubLogIn from '@components/UiKit/Icons/GithubLogo/index.jsx'
import styles from './signup.module.scss'
import SocialMedias from '@components/Auth/SocialMedias/index.jsx'
import DataPolicy from '@components/Auth/DataPolicy/index.jsx'

function SignUp(){
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.title_container}>
          Create an account
        </div>
        <div className={styles.main_content_container}>
          <div className={styles.description}>
            <span className={styles.description_title}>Register your sign in information</span>
            Only residents of Europe can register
          </div>
          <div className={styles.input_container}>
            <div className={styles.form_container}></div>
            <div className={styles.social_medias_container}>
              <div className={styles.social_medias_title}>
                Alternatively, sign in with your social accounts.
              </div>
              <SocialMedias />
            </div>
            <DataPolicy />
            <hr />
            <button className={styles.sign_in_button}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
