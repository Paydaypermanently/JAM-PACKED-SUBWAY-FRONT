import styled from 'styled-components'
import Image from 'next/image'

function Logo() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Image src={`/assets/images/logo.png`} alt="logo" width={150} height={35} />
      </LogoWrapper>
      <TextWrapper>
        <div className="name">복실 &nbsp;님</div>
        <div> 어디에서 타시나요?</div>
      </TextWrapper>
    </Wrapper>
  )
}

export default Logo

const Wrapper = styled.div``
const LogoWrapper = styled.div`
  width: fit-content;
`

const TextWrapper = styled.div`
  font-family: 'Noto Nastaliq Urdu';
  font-size: 25px;
  color: #ffffff;
  opacity: 1;

  & > .name {
    margin-bottom: 5px;
  }
`
