import React from 'react'
import SelectBox from '../elements/selectBox/selectBox'

function LineField() {
  return (
    <div>
      <SelectBox options={['1호선', '2호선']} placeholder={'호선'} name="line" endAdornment={'dd'} />
    </div>
  )
}

export default LineField
