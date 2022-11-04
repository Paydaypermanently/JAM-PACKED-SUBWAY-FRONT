import styled from 'styled-components'

interface IProps {
  onSubmit: () => void
}
function SubmitButton({onSubmit}: IProps) {
  return <Wrapper onClick={() => onSubmit()}>실시간 혼잡도 검색</Wrapper>
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
