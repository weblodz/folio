import Content from './Components/Content/Content'
import Link from './Components/Link/Link'
import prototypeImage from '@assets/prototype/prototype.jpg'
import styles from './prototype.module.scss'

export default function PrototypeSection() {
  return (
    <div
      className={styles.prototypePage}
      style={{
        background: `url(${prototypeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.container}>
        <Content />
        <Link />
      </div>
    </div>
  )
}
