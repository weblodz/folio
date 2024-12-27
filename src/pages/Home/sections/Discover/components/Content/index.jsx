import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './content.module.scss'

function Content() {
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
      .${styles.hashtag},
      .${styles.textContainer},
      .${styles.subtitle},
      .${styles.description},
      .${styles.link}
    `)

    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Discover</h2>
      <div className={styles.hashtag}>#voice</div>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>Future Voice vol.6 AFEELA: The Entertainment Destination</h3>
        <p className={styles.description}>Future Voice vol.6 AFEELA: The Entertainment Destination</p>
        <Link to="/stories" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Content
