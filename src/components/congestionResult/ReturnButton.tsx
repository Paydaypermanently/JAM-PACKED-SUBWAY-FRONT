import Image from 'next/image'
import styled from 'styled-components'

function ReturnButton() {
  return (
    <Wrapper>
      <button>
        <Image src={`/assets/images/selectArrow.png`} alt="arrow" width={13} height={11} />
      </button>
    </Wrapper>
  )
}

export default ReturnButton

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
`
