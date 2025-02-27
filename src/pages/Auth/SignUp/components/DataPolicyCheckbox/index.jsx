import { forwardRef } from 'react'
import T from 'prop-types'
import styles from './datapolicycheckbox.module.scss'

const DataPolicyCheckbox = forwardRef(({ checked, onChange, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox_container} onClick={() => onChange(!checked)}>
        <span>
          <input type="checkbox" checked={checked} onClick={() => {console.log('input Clicked')}} ref={ref} {...rest} />
        </span>
        <span className={styles.unchecked_icon}>
          {checked ? (
            <span className={styles.checked_icon}>
              <svg width="13" height="13" viewBox="0 0 64 64" fill="none">
                <path
                  fill={"#fff"}
                  fillRule={"evenodd"}
                  clipRule={"evenodd"}
                  d={
                    "M54.965 16.361 22.853 50.936 5.537 32.364l2.926-2.728 14.384 15.428L52.035 13.64z"
                  }
                ></path>
              </svg>
            </span>
          ) : null}
        </span>
      </div>
      <div className={styles.text}>
        By checking here, I agree to AFEELA Account Terms and Conditions and Privacy Policy.
        I also agree that Sony Honda Mobility, its affiliates and service providers send me newsletters,
        marketing materials and other information.
      </div>
    </div>
  )
})

DataPolicyCheckbox.displayName = 'DataPolicyCheckbox'

export default DataPolicyCheckbox

DataPolicyCheckbox.propTypes = {
  checked: T.bool.isRequired,
  onChange: T.func.isRequired,
}
