import GoogleLogIn from '@components/UiKit/Icons/GoogleLogIn/index.jsx'
import GithubLogIn from '@components/UiKit/Icons/GithubLogIn/index.jsx'
import styles from './signin.module.scss'

function SignIn(){
    return (
      <div className={styles.container}>
        <div className={styles.content_container}>
          <div className={styles.input_container}>
            <span className={styles.title}>Sign in</span>
            <div className={styles.form_container}></div>
            <div className={styles.forgot_password_container}>
              <span className={styles.forgot_password}>
                Forgot your password?
              </span>
            </div>
            <div className={styles.social_medias}>
              <div className={styles.social_media_icon_container}>
                <GoogleLogIn />
              </div>
              <div className={styles.social_media_icon_container}>
                <GithubLogIn />
              </div>
            </div>
            <div className={styles.personal_data_policy}>
              <span className={styles.text}>
                By signing up with your social accounts, you agree to Sony Honda Mobility&amp;apos;s
                <span className={styles.text_link}>AFEELA Account Terms and Conditions</span>
                and
                <span className={styles.text_link}>Privacy Policy.</span>
                You also agree that Sony Honda Mobility, its affiliates and service providers
                send you newsletters, marketing materials and other information.
              </span>
            </div>
            <hr />
            <div className={styles.create_account_container}>
              <button className={styles.create_account_button}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SignIn
