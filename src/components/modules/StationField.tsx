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
        endAdornment={<Image src={`/assets/images/search.png`} alt="arrow" width={20} height={20} />}
        onChange={form.handleChange}
      />
    </div>
  )
}

export default StationField
