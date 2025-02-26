import T from 'prop-types'
import CustomDropdown from '@components/UiKit/FormInputs/DateOfBirthInput/CustomDropdown'

const days = Array.from({ length: 31 }, (_, i) => i + 1)

function DaySelect({ selected, onSelect, onOpen, onClose }) {
  return (
    <CustomDropdown
      options={days}
      selected={selected}
      onSelect={onSelect}
      onOpen={onOpen}
      onClose={onClose}
    />
  )
}

DaySelect.propTypes = {
  selected: T.string.isRequired,
  onSelect: T.func.isRequired,
  onOpen: T.func,
  onClose: T.func
}

export default DaySelect
