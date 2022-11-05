import React from 'react'
import SelectBox from '../elements/selectBox/selectBox'
import Image from 'next/image'
function SpeedField() {
  return (
    <div>
      {' '}
      <SelectBox
        options={['급행열차', '일반열차']}
        placeholder={'급행/일반'}
        name="speed"
        endAdornment={<Image src={`/assets/images/selectArrow.png`} alt="arrow" width={13} height={11} />}
      />
    </div>
  )
}

export default SpeedField
