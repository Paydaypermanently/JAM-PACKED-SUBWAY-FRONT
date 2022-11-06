import {GetServerSidePropsContext} from 'next'
import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {getExpressTrainCongestion, getRegularTrainCongestion} from '../api/subway'

function CongestionResult(props: ITrainCongestion) {
  return <>결과</>
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
