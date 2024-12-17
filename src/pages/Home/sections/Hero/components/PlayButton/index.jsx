import T from 'prop-types'
import PlayIcon from './Icon.jsx'
import styles from './playButton.module.scss'

export default function PlayButton({ isBgPlaying, setBgPlaying }) {
  function handleClick() {
    setBgPlaying(!isBgPlaying)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <button
          className={styles.button}
          onClick={() => {
            handleClick()
          }}
        >
          <PlayIcon isBgPlaying={isBgPlaying} />
        </button>
        <button className={styles.buttonOff}></button>
      </div>
    </div>
  )
}

PlayButton.propTypes = {
  isBgPlaying: T.bool.isRequired,
  setBgPlaying: T.func.isRequired,
}
