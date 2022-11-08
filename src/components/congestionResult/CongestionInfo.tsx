import {useRouter} from 'next/router'
import styled from 'styled-components'
import TrainCongestion from '../../components/congestionResult/TrainCongestion'
import TrainState from './TrainState'
import MinimumCongestionCart from './MinimumCongestionCart'

interface IProps {
  congestion: ITrainCongestion
}
function CongestionInfo({congestion}: IProps) {
  const {query} = useRouter()
  // console.log(congestion)
  return (
    <Wrapper>
      <Direction>{congestion.data?.trainLineNm}</Direction>

      <CurrentStationWrapper>
        <CurrentStation>
          <div className="title">현재역</div>
          <div className="line">{query.line}</div>
          <div className="station">{query.station}</div>
        </CurrentStation>

        <CongesitonWrapper>
          <div className="title">타실 열차 정보</div>
          <div className="train_number">{congestion.data?.trainNumber}</div>
        </CongesitonWrapper>
      </CurrentStationWrapper>

      <TrainCongestionWrapper>
        <div className="info">해당 열차의 칸별 혼잡도 차이 정보 </div>
        {!!congestion?.data?.BokJobDo && <TrainCongestion bokjobdo={congestion?.data?.BokJobDo} />}
      </TrainCongestionWrapper>

      <TrainWholeCongestionWrapper>
        <div className="info">해당 열차의 전체 혼잡도 정보</div>
        <TrainState aver={Number(congestion.data?.BokJobDo.aver)} />
      </TrainWholeCongestionWrapper>
      <MinimumCartWrapper>
        <MinimumCongestionCart />
      </MinimumCartWrapper>
    </Wrapper>
  )
}

export default CongestionInfo

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 25px;
`

const Direction = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0;
  height: 40px;
  border-bottom: 1px solid lightgray;
  color: #4d4d4d;
  opacity: 1;
`

const CurrentStationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`

const CurrentStation = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;

  .title {
    font-weight: 500;
  }

  .line {
    color: #858585;
    font-weight: 330;
  }

  .station {
    color: #858585;
    font-weight: 330;
  }
`

const CongesitonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  border-top: 1px solid lightgray;

  .title {
    font-weight: 500;
    margin-top: 20px;
  }

  .train_number {
    color: #858585;
    font-weight: 330;
    margin-top: 5px;
  }
`

const TrainCongestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  .info {
    margin-bottom: 10px;
    font-weight: 440;
    font-size: 15px;
    font-family: 'Noto Sans Gothic';
    color: #c53715;
  }
`

const TrainWholeCongestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .info {
    margin-bottom: 10px;
    font-weight: 440;
    font-size: 15px;
    font-family: 'Noto Sans Gothic';
    color: #c53715;
  }
`
const MinimumCartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`
