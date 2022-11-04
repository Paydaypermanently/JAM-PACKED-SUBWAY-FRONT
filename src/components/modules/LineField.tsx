import React from 'react'
import SelectBox from '../elements/selectBox/selectBox'
import Image from 'next/image'

function LineField() {
  return (
    <div>
      <SelectBox
        options={['1호선', '2호선']}
        placeholder={'호선'}
        name="line"
        endAdornment={<Image src={`/assets/images/selectArrow.png`} alt="arrow" width={13} height={11} />}
      />
    </div>
  )
}

export default LineField
