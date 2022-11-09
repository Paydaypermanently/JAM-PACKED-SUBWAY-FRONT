import {useCallback} from 'react'
import styled from 'styled-components'

interface IProps {
  aver: number
}

function inRange(x: number, min: number, max: number) {
  return (x - min) * (x - max) <= 0
}

function TrainState({aver}: IProps) {
  const state = useCallback((aver: number) => {
    //0~33 매우쾌적: 좌석에 앉아서 가실 수 있습니다.
    //34~58 쾌적: 좌석에 자리는 없지만 혼잡도가 낮습니다.
    //59~99 혼잡: 좌석에 자리가 없으며 혼잡한 상태입니다.
    //100~149 매우혼잡: 좌석에 자리가 없으며 접촉이 있을만큼 매우 혼잡합니다.
    //150~230 극심한 혼잡: 발 디딜 틈조차 없을 만큼 혼잡한 상태입니다.

    if (inRange(aver, 0, 33))
      return (
        <div className="state" style={{color: '#D6d650'}}>
          매우쾌적: 좌석에 앉아서 가실 수 있습니다.
        </div>
      )
    else if (inRange(aver, 34, 58))
      return (
        <div className="state" style={{color: 'green'}}>
          쾌적: 좌석에 자리는 없지만 혼잡도가 낮습니다.
        </div>
      )
    else if (inRange(aver, 59, 99))
      return (
        <div className="state" style={{color: '#B70508'}}>
          혼잡: 좌석에 자리가 없으며 혼잡한 상태입니다.
        </div>
      )
    else if (inRange(aver, 100, 149))
      return (
        <div className="state" style={{color: '#C9151a'}}>
          매우혼잡: 접촉이 있을만큼 매우 혼잡합니다.
        </div>
      )
    else if (inRange(aver, 150, 230))
      return (
        <div className="state" style={{color: '#F90004'}}>
          발 디딜 틈조차 없을 만큼 혼잡한 상태입니다.
        </div>
      )
  }, [])

  return <Wrapper>{state(aver)}</Wrapper>
}

export default TrainState

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  .state {
    font-weight: 520;
    font-size: 4vw;
    font-family: 'Droid Sans Mono';
  }
`
