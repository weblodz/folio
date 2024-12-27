import T from 'prop-types'

export default function ArrowRightIcon({ styles, fill, width, height, viewBox }) {
  return (
    <svg
      className={styles.icon}
      fill={fill}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.251 5.54696L11.9767 8.74044L12.7404 9.52344L17.3782 5.0001L12.7404 0.476762L11.9767 1.25976L15.251 4.45321L0.875039 4.45321L0.875038 5.54696L15.251 5.54696Z"
      ></path>
    </svg>
  )
}

ArrowRightIcon.propTypes = {
  styles: T.object.isRequired,
  fill: T.string.isRequired,
  width: T.string.isRequired,
  height: T.string.isRequired,
  viewBox: T.string.isRequired,
}
