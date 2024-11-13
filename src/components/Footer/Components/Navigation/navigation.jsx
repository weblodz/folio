import styles from './navigation.module.scss'

function Navigation() {
  return (
    <div className={styles['footerNavigations']}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Prototype</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Terms and Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>
        <li>
          <a href="#">Do Not Sell or Share My Personal Information</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
