import useVisibilityObserver from '@hooks/useVisibilityObserver.js'
import styles from './content.module.scss'

function Content() {
  useVisibilityObserver(`.${styles.content}, .${styles.linkContainer}`, styles.visible)

  return (
    <>
      <p className={styles.content}>
        Our company is a forward-thinking electric vehicle manufacturer dedicated to revolutionizing urban and
        long-distance travel. With a commitment to sustainability, innovation, and cutting-edge technology, We design
        sleek, energy-efficient vehicles that prioritize both performance and environmental impact. Our vehicles
        feature advanced battery systems, rapid charging capabilities, and smart connectivity, offering drivers an
        unparalleled blend of efficiency and convenience.
      </p>
    </>
  )
}

export default Content
