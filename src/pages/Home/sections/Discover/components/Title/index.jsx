import { useEffect } from 'react'
import styles from './title.module.scss'

function Title() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove(styles.visible)
          }
        })
      },
      { threshold: 0.4 }
    )

    const elements = document.querySelectorAll(`
      .${styles.title},
      .${styles.hashtag}
    `)

    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Discover</h2>
      <div className={styles.hashtag}>#voice</div>
    </div>
  )
}

export default Title
