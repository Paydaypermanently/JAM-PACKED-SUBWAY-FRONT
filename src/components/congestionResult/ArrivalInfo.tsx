import styled from 'styled-components'

interface IProps {
  congestion: ITrainCongestion
}

function ArrivalInfo({congestion}: IProps) {
  return (
    <Wrapper>
      <div className="title">열차 도착 정보</div>
      <div className="curStation">
        <span className="info">현재위치</span>
        <span className="station">{congestion.data?.msg2}</span>
      </div>
      <div className="arrivalTime">{congestion.data?.msg1} </div>
    </Wrapper>
  )
}

export default ArrivalInfo

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid lightgray;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 25px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  .title {
    margin-top: 20px;
    font-weight: 500;
  }

  .arrivalTime {
    font-weight: 500;
    margin-top: 20px;
    color: #c53715;
  }
  .curStation {
    width: 80%;
    margin-top: 10px;
    height: 40px;
    border-bottom: 1px solid lightgray;
    align-items: center;
    display: flex;
    justify-content: space-between;

    & > .info {
      font-weight: 500;
    }

    & > .station {
      color: #858585;
      font-weight: 345;
    }
  }
`
