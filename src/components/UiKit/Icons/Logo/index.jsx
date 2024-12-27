import T from 'prop-types'

export default function LogoIcon({ width, height, viewBox, fill, className }) {
  return (
    <svg
      className={className}
      role="img"
      aria-label="AFEELA"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.6205 0H28.6073V2.71062H22.8452V6.53661H27.8681V9.12186H22.8452V15.9957H19.6248V0H19.6205Z"></path>
      <path d="M34.4084 0H43.8707V2.71062H37.6331V6.53661H43.1532V9.12186H37.6331V13.2851H43.8707V15.9957H34.4084V0Z"></path>
      <path d="M50.1808 0H59.6431V2.71062H53.4055V6.53661H58.9256V9.12186H53.4055V13.2851H59.6431V15.9957H50.1808V0Z"></path>
      <path d="M65.9543 0H69.1746V13.2894H75.235L74.137 16H65.9543V0Z"></path>
      <path d="M3.38032 15.9957H0L6.36295 0H9.19428L15.648 15.9957H12.2461L11.079 12.8614H4.5215L3.37599 15.9957H3.38032ZM7.78078 3.55796L5.36874 10.2891H10.2188L7.78078 3.55796Z"></path>
      <path d="M81.1259 15.9957H77.7455L84.1085 0H86.9398L93.3935 15.9957H89.9916L88.8245 12.8614H82.267L81.1215 15.9957H81.1259ZM85.5263 3.55796L83.1143 10.2891H87.9643L85.5263 3.55796Z"></path>
    </svg>
  )
}

LogoIcon.propTypes = {
  className: T.string,
  fill: T.string.isRequired,
  width: T.string.isRequired,
  height: T.string.isRequired,
  viewBox: T.string.isRequired,
}
