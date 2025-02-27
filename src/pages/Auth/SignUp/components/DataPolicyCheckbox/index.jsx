import TickIcon from '@components/UiKit/Icons/TickIcon'
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
        <span className={styles.icon_container}>
          {checked ? (
            <span className={styles.checked_icon_background}>
              <TickIcon />
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
