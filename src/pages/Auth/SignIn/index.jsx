import DataPolicy from '@components/Auth/DataPolicy'
import SocialMedias from '@components/Auth/SocialMedias'
import { useNavigate } from 'react-router-dom'
import routes from '@routing/path'
import styles from './signin.module.scss'

function SignIn(){
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(routes.withoutAuth.signUp)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.auth_container}>
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
            <button className={styles.create_account_button} onClick={() => {
              handleNavigate()
            }}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
