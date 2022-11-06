import styled from 'styled-components'

interface IProps {
  congestion: ITrainCongestion
}
function Congestion({congestion}: IProps) {
  return (
    <Wrapper>
      <Direction>dsdssdsd</Direction>
      <CurrentStationWrapper>
        <CurrentStation>
          <div className="title">현재역</div>
          <div className="line">2호선</div>
          <div className="station">신림</div>
        </CurrentStation>

        <CongesitonWrapper>
          <div className="title">타실 열차 정보</div>
          <div className="train_number">2388</div>
        </CongesitonWrapper>
      </CurrentStationWrapper>
    </Wrapper>
  )
}

export default Congestion

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
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
