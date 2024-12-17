import styles from './prototypeicon.module.scss'

export default function PrototypeIcon() {
  return (
    <svg
      className={styles.icon}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5L17 5M17 5L12 1M17 5L12 9" stroke="currentColor" />
    </svg>
  )
}
