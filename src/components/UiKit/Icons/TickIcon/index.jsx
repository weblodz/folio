import T from 'prop-types'

function TickIcon({ size=13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        fill={"#fff"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M54.965 16.361 22.853 50.936 5.537 32.364l2.926-2.728 14.384 15.428L52.035 13.64z"
        }
      ></path>
    </svg>
  )
}

export default TickIcon

TickIcon.propTypes = {
  size: T.number,
}
