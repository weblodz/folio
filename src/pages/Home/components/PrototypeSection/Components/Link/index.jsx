import { Link } from 'react-router-dom'
import styles from './link.module.scss'

export default function PrototypeLink() {
  return (
    <div className={styles.pageLink}>
      <Link to="/prototype">
        <div className={styles.pageLinkContainer}>
          <span data-type="icon">
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L17 5M17 5L12 1M17 5L12 9" stroke="currentColor" />
            </svg>
          </span>
          <p className={styles.pageLinkText}>EXPLORE PROTOTYPE</p>
        </div>
      </Link>
    </div>
  )
}
