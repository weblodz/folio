import { useTranslation } from "react-i18next"
import styles from './navbar.module.scss'

function Navbar() {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("navigation.prototype")}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("navigation.discover")}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("navigation.about Us")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
