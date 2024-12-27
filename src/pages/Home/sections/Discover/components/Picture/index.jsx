import { useEffect } from 'react'
import image from '@assets/discover/discover.png'
import styles from './picture.module.scss'

function Picture() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          } else {
            entry.target.classList.remove(styles.visible)
          }
        })
      },
      { threshold: 0.4 },
    )

    const element = document.querySelector(`.${styles.container}`)

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div className={styles.container}>
      <img src={image} alt="Discover" className={styles.image} />
    </div>
  )
}

export default Picture
