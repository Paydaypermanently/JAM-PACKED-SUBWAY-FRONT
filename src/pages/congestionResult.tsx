import {GetServerSidePropsContext} from 'next'
import {useCallback, useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {getExpressTrainCongestion, getRegularTrainCongestion} from '../api/subway'
import ReturnButton from '../components/congestionResult/ReturnButton'
import Congestion from '../components/congestionResult/Congestion'
import ArrivalInfo from '../components/congestionResult/ArrivalInfo'

function CongestionResult(props: ITrainCongestion) {
  useEffect(() => {
    if (props.suc === false) toast.error('열차 정보가 없습니다.')
  }, [props])

  const InvalidTrain = useCallback(() => {
    return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <h1 style={{position: 'absolute', top: '50%', color: 'white', width: 'fit-content'}}>열차 정보가 없습니다!</h1>
      </div>
    )
  }, [])
  return (
    <>
      {props.suc === false ? (
        <>
          <ToastContainer position={'top-center'} />
          <InvalidTrain />
        </>
      ) : (
        <>
          <ReturnButton />
          <Congestion congestion={props} />
          <ArrivalInfo congestion={props} />
        </>
      )}
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {query} = context
  const {line, speed, direction, station} = query

  const lineObj = {
    '1호선': 'one',
    '2호선': 'two',
    '3호선': 'three',
    '4호선': 'four',
    '5호선': 'five',
    '6호선': 'six',
    '7호선': 'seven',
    '8호선': 'eight',
    '9호선': 'nine'
  }

  const props: ITrainCongestion = {
    suc: null,
    data: null
  }

  try {
    if (line === '1호선' || line === '9호선') {
      const response = await getExpressTrainCongestion({
        line: lineObj[line],
        stationName: String(station),
        way: String(direction),
        fest: Number(speed)
      })

      //@ts-ignore
      props.suc = props.data = response.suc
      //@ts-ignore
      props.data = !!response.suc && response.data
    } else if (
      line === '2호선' ||
      line === '3호선' ||
      line === '4호선' ||
      line === '5호선' ||
      line === '6호선' ||
      line === '7호선' ||
      line === '8호선'
    ) {
      const response = await getRegularTrainCongestion({
        line: lineObj[line],
        stationName: String(station),
        way: String(direction)
      })
      //@ts-ignore
      props.suc = response.suc
      //@ts-ignore
      props.data = !!response.suc && response.data
    }
  } catch (e: any) {
    //todo 예외처리
  }

  return {props}
}

export default CongestionResult
