import TickIcon from '@components/UiKit/Icons/TickIcon'
import PolicyText from '@pages/Auth/SignUp/components/DataPolicyCheckbox/components/PolicyText'
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
      <PolicyText />
    </div>
  )
})

DataPolicyCheckbox.displayName = 'DataPolicyCheckbox'

export default DataPolicyCheckbox

DataPolicyCheckbox.propTypes = {
  checked: T.bool.isRequired,
  onChange: T.func.isRequired,
}
