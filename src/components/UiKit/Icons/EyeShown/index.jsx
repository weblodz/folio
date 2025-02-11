import T from "prop-types"

function EyeShown({ className, size = '64', fill = 'var(--common-color-text-inverse-primary)' }) {
return (
  <svg
    className={className}
    fill={fill}
    width={size}
    height={size}
    viewBox={'0 0 ' + size + ' ' + size}
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={"M32 22.461c-5.198 0-9.304 4.33-9.304 9.539s4.106 9.538 9.304 9.538c5.197 0 9.304-4.33 9.304-9.538S37.197 22.46 32 22.46M26.695 32c0-3.119 2.434-5.539 5.305-5.539s5.304 2.42 5.304 5.539S34.87 37.538 32 37.538s-5.305-2.42-5.305-5.538"}></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={"M32 22.461c-5.198 0-9.304 4.33-9.304 9.539s4.106 9.538 9.304 9.538c5.197 0 9.304-4.33 9.304-9.538S37.197 22.46 32 22.46M26.695 32c0-3.119 2.434-5.539 5.305-5.539s5.304 2.42 5.304 5.539S34.87 37.538 32 37.538s-5.305-2.42-5.305-5.538"}></path>
  </svg>
)
}

export default EyeShown

EyeShown.propTypes = {
  className: T.string.isRequired,
  fill: T.string,
  size: T.string,
}
