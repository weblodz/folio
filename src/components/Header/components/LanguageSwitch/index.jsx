import langIcon from '/src/assets/header/language.svg'
import styles from '../LanguageSwitch/languageSwitch.module.scss'

function Language() {
  return (
    <div className={styles.lang}>
      <img src={langIcon} alt="language" />
    </div>
  )
}

export default Language
