import useVisibilityObserver from '@hooks/useVisibilityObserver.js'
import styles from './content.module.scss'

function Content() {
  useVisibilityObserver(`.${styles.heading}, .${styles.description}`, styles.visible)

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>We are the future of mobility</h1>
        <p className={styles.description}>
          Our company is a forward-thinking electric vehicle manufacturer dedicated to revolutionizing urban and
          long-distance travel. With a commitment to sustainability, innovation, and cutting-edge technology, We design
          sleek, energy-efficient vehicles that prioritize both performance and environmental impact. Our vehicles
          feature advanced battery systems, rapid charging capabilities, and smart connectivity, offering drivers an
          unparalleled blend of efficiency and convenience.
        </p>
      </div>
    </>
  )
}

export default Content
