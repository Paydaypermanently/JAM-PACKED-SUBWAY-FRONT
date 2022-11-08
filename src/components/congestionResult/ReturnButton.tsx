import Image from 'next/image'
import styled from 'styled-components'
import {useRouter} from 'next/router'

function ReturnButton() {
  const {push} = useRouter()
  return (
    <Wrapper>
      <button
        onClick={() => {
          push('/')
        }}
      >
        <Image src={`/assets/images/returnArrow.png`} alt="arrow" width={35} height={35} />
      </button>
    </Wrapper>
  )
}

export default ReturnButton

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
`
