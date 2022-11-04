import React from 'react'
import SelectBox from '../elements/selectBox/selectBox'

function DirectionField() {
  return (
    <div>
      {' '}
      <SelectBox options={['상행', '하행']} placeholder={'상행/하행'} name="direction" endAdornment={'dd'} />
    </div>
  )
}

export default DirectionField
