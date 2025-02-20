import DataPolicy from '@components/Auth/DataPolicy/index.jsx'
import SocialMedias from '@components/Auth/SocialMedias/index.jsx'
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
          <SocialMedias />
          <DataPolicy />
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
