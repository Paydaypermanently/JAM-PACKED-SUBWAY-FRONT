import {useCallback} from 'react'
import styled from 'styled-components'

interface IProps {
  bokjobdo: {
    suc: boolean
    aver: string
    line: string[]
  }
}
function TrainCongestion({bokjobdo}: IProps) {
  //   console.log('bokJobDo', bokjobdo)
  const InvalidCongeston = useCallback(() => {
    return <h1 style={{color: '#143790', fontWeight: '600'}}>해당 역의 실시간 열차 혼잡도는 준비중입니다 :)</h1>
  }, [])
  return <Wrapper>{bokjobdo.suc === false ? <InvalidCongeston /> : <>열차</>}</Wrapper>
}

export default TrainCongestion

const Wrapper = styled.div``
