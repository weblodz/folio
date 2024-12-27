import T from 'prop-types'

export default function ArrowRightIcon({ className, fill = 'var(--common-color-text-inverse-primary)', size = '18' }) {
  return (
    <svg
      className={className}
      fill={fill}
      width={size}
      height={size / 2}
      viewBox={'0 0 ' + size + ' ' + size / 2}
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
  className: T.string,
  fill: T.string,
  size: T.string,
}
