import T from 'prop-types'
import CustomDropdown from '@components/UiKit/FormInputs/DateOfBirthInput/CustomDropdown'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function MonthSelect({ selected, onSelect, onOpen, onClose }) {
  return (
    <CustomDropdown
      options={months}
      selected={selected}
      onSelect={onSelect}
      onOpen={onOpen}
      onClose={onClose}
    />
  )
}

MonthSelect.propTypes = {
  selected: T.string,
  onSelect: T.func.isRequired,
  onOpen: T.func,
  onClose: T.func
}

export default MonthSelect
