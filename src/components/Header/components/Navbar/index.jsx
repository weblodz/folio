import styles from '../Navbar/navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.linksContainer}>
        <a className={styles.link} href="#">
          Prototype
        </a>
        <a className={styles.link} href="#">
          Discover
        </a>
        <a className={styles.link} href="#">
          About Us
        </a>
      </div>
    </div>
  )
}

export default Navbar
