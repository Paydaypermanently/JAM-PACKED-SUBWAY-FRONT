import React, {useMemo} from 'react'
import SelectBox from '../elements/selectBox/selectBox'
import Image from 'next/image'

function LineField() {
  const lines = useMemo(() => {
    return ['1호선', '2호선', '3호선', '4호선', '5호선', '6호선', '7호선', '8호선', '9호선']
  }, [])
  return (
    <div>
      <SelectBox
        options={lines}
        placeholder={'호선'}
        name="line"
        endAdornment={<Image src={`/assets/images/selectArrow.png`} alt="arrow" width={13} height={11} />}
      />
    </div>
  )
}

export default LineField
