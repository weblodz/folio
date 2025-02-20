import styles from './datapolicy.module.scss'

function DataPolicy() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        By signing up with your social accounts, you agree to Sony Honda Mobility&amp;apos;s
        <span className={styles.text_link}>AFEELA Account Terms and Conditions</span>
        and
        <span className={styles.text_link}>Privacy Policy.</span>
        You also agree that Sony Honda Mobility, its affiliates and service providers
        send you newsletters, marketing materials and other information.
      </span>
    </div>
  )
}

export default DataPolicy
