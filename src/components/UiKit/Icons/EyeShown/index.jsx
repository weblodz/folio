import T from "prop-types"

function EyeShown({ className, size = '64', isLight = true }) {
  const color = isLight ? 'var(--common-color-bg-primary)' : 'var(--common-color-bg-inverse-primary)'

return (
  <svg
    className={className}
    fill={color}
    width={size}
    height={size}
    viewBox={'0 0 59 59'}
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={"M32 22.461c-5.198 0-9.304 4.33-9.304 9.539s4.106 9.538 9.304 9.538c5.197 0 9.304-4.33 9.304-9.538S37.197 22.46 32 22.46M26.695 32c0-3.119 2.434-5.539 5.305-5.539s5.304 2.42 5.304 5.539S34.87 37.538 32 37.538s-5.305-2.42-5.305-5.538"}></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={"M32 16c-6.924 0-13.071 3.446-17.493 6.865-4.455 3.443-7.408 7.052-7.985 7.779A2.18 2.18 0 0 0 6.046 32c0 .547.204 1.014.476 1.356.577.727 3.53 4.336 7.985 7.78C18.929 44.554 25.076 48 32 48s13.07-3.446 17.493-6.864c4.455-3.444 7.408-7.053 7.985-7.78A2.18 2.18 0 0 0 57.953 32a2.18 2.18 0 0 0-.475-1.356c-.577-.727-3.53-4.336-7.985-7.78C45.07 19.447 38.923 16 32 16M16.953 37.97A46.6 46.6 0 0 1 10.606 32a46.6 46.6 0 0 1 6.347-5.97C21.085 22.834 26.368 20 32 20s10.915 2.835 15.046 6.03A46.6 46.6 0 0 1 53.394 32a46.6 46.6 0 0 1-6.348 5.97C42.915 41.166 37.632 44 32 44s-10.915-2.835-15.047-6.03"}></path>
  </svg>
)
}

export default EyeShown

EyeShown.propTypes = {
  className: T.string,
  isLight: T.bool,
  size: T.string,
}
