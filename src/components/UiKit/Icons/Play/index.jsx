import T from 'prop-types'

export default function PlayIcon({ isBgPlaying, width, height, fill, viewBox, className }) {
  let icon = null

  if (isBgPlaying) {
    icon = (
      <g>
        <path d="M4.5 3C4.5 2.86193 4.61193 2.75 4.75 2.75H5.625C5.76307 2.75 5.875 2.86193 5.875 3V13C5.875 13.1381 5.76307 13.25 5.625 13.25H4.75C4.61193 13.25 4.5 13.1381 4.5 13V3Z"></path>
        <path d="M10.125 3C10.125 2.86193 10.2369 2.75 10.375 2.75H11.25C11.3881 2.75 11.5 2.86193 11.5 3V13C11.5 13.1381 11.3881 13.25 11.25 13.25H10.375C10.2369 13.25 10.125 13.1381 10.125 13V3Z"></path>
      </g>
    )
  } else {
    icon = (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8734 3.03295C4.70674 2.93835 4.5 3.05873 4.5 3.25037V12.8917C4.5 13.0833 4.70674 13.2037 4.8734 13.1091L13.3669 8.28844C13.5357 8.19263 13.5357 7.9494 13.3669 7.85359L4.8734 3.03295ZM11.9773 8.07101L5.375 11.8183V4.32375L11.9773 8.07101Z"
      ></path>
    )
  }

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  )
}

PlayIcon.propTypes = {
  className: T.string.isRequired,
  isBgPlaying: T.bool.isRequired,
  fill: T.string.isRequired,
  width: T.string.isRequired,
  height: T.string.isRequired,
  viewBox: T.string.isRequired,
}
