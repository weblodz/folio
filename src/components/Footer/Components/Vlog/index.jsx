import { IoIosArrowRoundForward } from 'react-icons/io'
import styles from './vlog.module.scss'

function Vlog() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Stay in the loop</h2>
      <p className={styles.description}>Subscribe to get our news, updates, and event information.</p>
      <a href="#" className={styles.link}>
        <div className={styles.icon}>
          <IoIosArrowRoundForward />
        </div>
        <div className={styles.text}>SUBSCRIBE</div>
      </a>
    </div>
  )
}

export default Vlog
