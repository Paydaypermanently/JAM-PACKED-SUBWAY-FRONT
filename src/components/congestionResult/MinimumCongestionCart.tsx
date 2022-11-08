import styled from 'styled-components'
import {useRecoilState} from 'recoil'
import minimumCongestionCart from '../../stores/MinimumCongestionCart'
function MinimumCongestionCart() {
  const [minimumCart, setMinimumCart] = useRecoilState(minimumCongestionCart)
  return (
    <Wrapper>
      복실이 추천 PICK! <span className="cart"> {minimumCart} 번째 칸</span>
    </Wrapper>
  )
}

export default MinimumCongestionCart

const Wrapper = styled.div`
  font-weight: 500;
  .cart {
    color: #858585;
    font-weight: 450;
  }
`
