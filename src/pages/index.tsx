import Logo from '../components/main/Logo'
import SubwayForm from '../components/main/SubwayForm'
import styled from 'styled-components'

function Main() {
  return (
    <Wrapper>
      <Logo />
      <SubwayForm />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div``
