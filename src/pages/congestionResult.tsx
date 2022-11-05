import {GetServerSidePropsContext} from 'next'
import {getExpressTrainCongestion, getRegularTrainCongestion} from '../api/subway'

function CongestionResult() {
  return <>결과</>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {query} = context
  const {line, speed, direction, station} = query

  const props: ITrainCongestion = {
    suc: true,
    data: {
      order: 0,
      updnLine: '',
      trainNumber: '',
      trainLineNm: '',
      stationNm: '',
      arrivaltime: '',
      msg1: '',
      msg2: '',
      subWayStatus: '',
      BokJobDo: {
        suc: true,
        aver: 0,
        line: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    }
  }

  try {
    // const response = await getProduct(id)
  } catch (e: any) {
    //  TODO GET /product error
  }

  return props
}

export default CongestionResult
