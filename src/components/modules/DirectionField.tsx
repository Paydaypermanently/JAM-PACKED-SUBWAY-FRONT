import React from 'react'
import SelectBox from '../elements/selectBox/selectBox'
import Image from 'next/image'
function DirectionField() {
  return (
    <div>
      {' '}
      <SelectBox
        options={['상행', '하행']}
        placeholder={'상행/하행'}
        name="direction"
        endAdornment={<Image src={`/assets/images/selectArrow.png`} alt="arrow" width={13} height={11} />}
      />
    </div>
  )
}

export default DirectionField
