import MovieIcon from '@pages/Home/components/HeroSection/components/mainText/components/fullMovieLink/icon.jsx'
import styles from './fullMovieLink.module.scss'

export function FullMovieLink() {
  return (
    <div className={styles.linkContainer}>
      <a className={styles.fullMovieLink}>
        <span className={styles.linkIconContainer}>
          <MovieIcon />
        </span>
        <span className={styles.linkText}>PLAY A FULL MOVIE</span>
      </a>
    </div>
  )
}
