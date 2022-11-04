import React from 'react'
import styled from 'styled-components'
import DirectionField from '../modules/DirectionField'
import StationField from '../modules/StationField'
import LineField from '../modules/LineField'

function SubwayForm() {
  return (
    <Wrapper>
      <FormTable>
        <tbody>
          <tr>
            <td>
              <LineField />
            </td>
          </tr>
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
`
const FormTable = styled.table`
  margin-top: 50px;
  margin-bottom: 50px;

  tbody {
    height: 100%;
  }
`
