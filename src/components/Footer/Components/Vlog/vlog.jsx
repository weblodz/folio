import styles from './vlog.module.scss'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Vlog() {
  return (
    <div className={styles['vlog']}>
      <h2 className={styles['vlogTitle']}>Stay in the loop</h2>
      <p className={styles['vlogText']}>Subscribe to get our news, updates, and event information.</p>
      <a href="#" className={styles.vlogLink}>
        <div className={styles.icon}>
          <IoIosArrowRoundForward />
        </div>
        <div className={styles.text}>SUBSCRIBE</div>
      </a>
    </div>
  )
}

export default Vlog
