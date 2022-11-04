import React from 'react'
import Input from '../elements/inputs/Input'
function StationField() {
  return (
    <div>
      <Input name="station" placeholder="역" endAdornment={'dd'} />
    </div>
  )
}

export default StationField
