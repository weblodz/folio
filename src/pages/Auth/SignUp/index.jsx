import SocialMedias from '@components/Auth/SocialMedias'
import DataPolicy from '@components/Auth/DataPolicy'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import routes from '@routing/path'
import styles from './signup.module.scss'

function SignUp(){
  const navigate = useNavigate()
  const { t } = useTranslation('nsAuth')

  const handleNavigate = () => {
    navigate(routes.withoutAuth.signIn)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.title_container}>
          {t('createAccount')}
        </div>
        <div className={styles.main_content_container}>
          <div className={styles.description}>
            <span className={styles.description_title}>{t('registerYourInformation')}</span>
            {t('whoCanRegister')}
          </div>
          <div className={styles.auth_container}>
            <div className={styles.form_container}></div>
            <div className={styles.social_medias_container}>
              <div className={styles.social_medias_title}>
                {t('alternativeSignIn')}
              </div>
              <SocialMedias />
            </div>
            <DataPolicy />
            <hr />
            <button className={styles.sign_in_button} onClick={handleNavigate}>
              {t('signIn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
