import React from 'react'
import Input from '../elements/inputs/Input'
import Image from 'next/image'
import {FormikContextType, useFormikContext} from 'formik'

function StationField() {
  const form: FormikContextType<any> = useFormikContext()

  return (
    <div>
      <Input
        name="station"
        placeholder="역"
        endAdornment={<Image src={`/assets/images/selectArrow.png`} alt="arrow" width={13} height={11} />}
        onChange={form.handleChange}
      />
    </div>
  )
}

export default StationField
