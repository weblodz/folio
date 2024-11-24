import styles from './mainText.module.scss'
import { FullMovieLink } from '@pages/Home/components/HeroSection/components/mainText/components/fullMovieLink/index.jsx'
import PropTypes from 'prop-types'

export function MainText({ setModalPlayerShown }) {
  return (
    <div className={styles.Container}>
      <h1 className={styles.mainText}>
        Mobility with <br /> an Emotional Connection
      </h1>
      <FullMovieLink setModalPlayerShown={setModalPlayerShown} />
    </div>
  )
}

MainText.propTypes = {
  setModalPlayerShown: PropTypes.func.isRequired,
}
