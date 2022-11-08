import {useCallback} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import minimumCongestionCart from '../../stores/MinimumCongestionCart'
import {useRecoilState} from 'recoil'

interface IProps {
  bokjobdo: {
    suc: boolean
    aver: string
    line: string[]
  }
}
function TrainCongestion({bokjobdo}: IProps) {
  const [minimumCart, setMinimumCart] = useRecoilState(minimumCongestionCart)
  const InvalidCongeston = useCallback(() => {
    return <h1 style={{color: '#143790', fontWeight: '600'}}>해당 역의 실시간 열차 혼잡도는 준비중입니다 :)</h1>
  }, [])

  //순서를 먼저 정하고 0.순서로 opacity 계산
  const getOpacity = useCallback(
    (cartCongestion: number, index: number) => {
      const newLine = bokjobdo.line.map((item: string) => {
        return Number(item)
      })
      newLine.sort((a, b) => a - b)

      const order = newLine.findIndex((item) => item === cartCongestion)
      if (order === 0) setMinimumCart(index + 1)
      if (Math.max.apply(null, newLine) === 0) return 0.1
      if (cartCongestion === Math.max.apply(null, newLine)) return 1
      return Number(`0.${order + 1}`)
    },
    [bokjobdo, setMinimumCart]
  )

  return (
    <Wrapper>
      {bokjobdo.suc === false ? (
        <InvalidCongeston />
      ) : (
        <Train>
          {bokjobdo.line.map((item: string, index: number) => {
            const opacity = getOpacity(Number(item), index)
            return (
              <div
                className="cart"
                key={index}
                style={{
                  opacity: `${opacity}`
                }}
              >
                {index + 1}
              </div>
            )
          })}
        </Train>
      )}
      <InfoImageWrapper>
        <Image src={`/assets/images/congestionInfo.png`} alt="arrow" width={105} height={25} />
      </InfoImageWrapper>
    </Wrapper>
  )
}

export default TrainCongestion

const Wrapper = styled.div`
  width: 90%;
`

const InfoImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const Train = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    height: 30px;
    width: 6vw;
    color: #ffffff;
    background: #273a6e;
  }
`
