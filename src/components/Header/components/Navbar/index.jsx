import styles from './navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Prototype
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Discover
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            About Us
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
