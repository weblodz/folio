import LanguageIcon from '@components/UiKit/Icons/Language/index.jsx'
import styles from './language.module.scss'

function Language() {
  return (
    <div className={styles.icon}>
      <button className={styles.lang} type="button">
        <LanguageIcon />
      </button>
    </div>
  )
}

export default Language
