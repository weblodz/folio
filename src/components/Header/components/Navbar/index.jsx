import { useTranslation } from "react-i18next"
import styles from './navbar.module.scss'

function Navbar() {
  const { t } = useTranslation("nsCommon")

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("prototype")}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("discover")}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            {t("aboutUs")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
