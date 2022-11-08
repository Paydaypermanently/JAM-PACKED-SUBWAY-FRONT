import styled from 'styled-components'

interface IProps {
  congestion: ITrainCongestion
}

function ArrivalInfo({congestion}: IProps) {
  return (
    <Wrapper>
      <div className="curStation">
        <span className="info">현재위치</span>
        <span className="station">서울대입구</span>
      </div>
      <div className="arrivalTime">2분 8초 뒤 도착</div>
    </Wrapper>
  )
}

export default ArrivalInfo

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 25px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .arrivalTime {
    font-weight: 500;
    margin-top: 30px;
    color: #c53715;
  }
  .curStation {
    width: 80%;
    margin-top: 25px;
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
