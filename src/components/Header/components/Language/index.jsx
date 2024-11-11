import langIcon from '/src/assets/header/language.svg'
import styles from './language.module.scss'

function Language() {
  return (
    <div className={styles.icon}>
      <button className={styles.lang} type="button">
        <img src={langIcon} alt="language" />
      </button>
    </div>
  )
}

export default Language
