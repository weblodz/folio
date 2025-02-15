import PropTypes from 'prop-types'
import styles from './ArrowRightButton.module.scss'

export default function ArrowRightButton({
  buttonClass = '',
  className = '',
  isLightTheme = false,
  size = '18',
  iconClass = '',
  onClick = () => {},
}) {
  const theme = isLightTheme
    ? 'var(--common-color-text-inverse-primary)'
    : 'var(--common-color-bg-inverse-primary)'

  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      style={{
        border: `solid 1px ${theme}`,
        borderRadius: '50%',
      }}
      onClick={onClick}
    >
      <span className={`${styles.icon} ${iconClass}`}>
        <svg
          className={`${styles.arrow} ${className}`}
          fill={theme}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.251 5.54696L11.9767 8.74044L12.7404 9.52344L17.3782 5.0001L12.7404 0.476762L11.9767 1.25976L15.251 4.45321L0.875039 4.45321L0.875038 5.54696L15.251 5.54696Z"
          />
        </svg>
      </span>
    </button>
  )
}

ArrowRightButton.propTypes = {
  buttonClass: PropTypes.string,
  className: PropTypes.string,
  isLightTheme: PropTypes.bool,
  size: PropTypes.string,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
}
