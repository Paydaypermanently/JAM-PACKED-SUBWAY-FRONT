import styled from 'styled-components'

function SubmitButton() {
  return (
    <Wrapper>
      <button type="submit">실시간 혼잡도 검색</button>
    </Wrapper>
  )
}

export default SubmitButton

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 60px;
  background: #e7a13f 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4d4d4d;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
