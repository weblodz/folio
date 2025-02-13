import T from 'prop-types'
import LoadingIcon from '@components/UiKit/Icons/LoadingIcon/index.jsx'
import styles from './formbuttom.module.scss'

function FormButton({ text, isActive, onClick, isLoading }) {
  const buttonStyle = isActive && !isLoading
    ? styles.active_button
    : styles.inactive_buttondcd

  return (
    <button className={buttonStyle}
      onClick={() => {onClick()}} disabled={!isActive}>
      {!isLoading ? text : <LoadingIcon size={"25"}/> }
    </button>
  )
}

export default FormButton

FormButton.propTypes = {
  text: T.string.isRequired,
  isActive: T.bool.isRequired,
  onClick: T.func.isRequired,
  isLoading: T.bool.isRequired,
}
