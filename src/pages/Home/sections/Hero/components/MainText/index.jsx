import FullMovieLink from '@pages/Home/sections/Hero/components/FullMovieLink'
import styles from './mainText.module.scss'

export default function MainText() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainText}>
        Mobility with <br /> an Emotional Connection
      </h1>
      <FullMovieLink />
    </div>
  )
}
