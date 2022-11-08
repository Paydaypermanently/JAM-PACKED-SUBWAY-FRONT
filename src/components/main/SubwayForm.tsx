import React from 'react'
import styled from 'styled-components'
import DirectionField from '../modules/DirectionField'
import StationField from '../modules/StationField'
import LineField from '../modules/LineField'
import SpeedField from '../modules/SpeedField'
import {FormikContextType, useFormikContext} from 'formik'

function SubwayForm() {
  const form: FormikContextType<any> = useFormikContext()

  return (
    <Wrapper>
      <FormTable>
        <tbody>
          <tr>
            <td>
              <LineField />
            </td>
          </tr>

          {(form.getFieldProps('line').value === '1호선' || form.getFieldProps('line').value === '9호선') && (
            <tr>
              <td>
                <SpeedField />
              </td>
            </tr>
          )}

          <tr>
            <td>
              <DirectionField />
            </td>
          </tr>
          <tr>
            <td>
              <StationField />
            </td>
          </tr>
          <tr>
            <td>
              <div className="station_example">ex) 강남</div>
            </td>
          </tr>
        </tbody>
      </FormTable>
    </Wrapper>
  )
}

export default SubwayForm

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;

  .station_example {
    bottom: 15px;
    position: relative;
    font-size: 15px;
    color: #858585;
    font-weight: 380;
  }
`
const FormTable = styled.table`
  margin-top: 50px;
  margin-bottom: 50px;

  tbody {
    height: 100%;
  }
`
