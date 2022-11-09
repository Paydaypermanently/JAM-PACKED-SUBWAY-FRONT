import {AxiosPromise} from 'axios'
import request from '../../utils/request'

const PATH = 'subway'
function getRegularTrainCongestion({
  line,
  stationName,
  way
}: IGetRegularTrainCongestionParams): AxiosPromise<ITrainCongestion> {
  const encodedStationName = encodeURIComponent(stationName)
  const encodedWay = encodeURIComponent(way)
  return request({url: `/${PATH}/${line}/${encodedStationName}/${encodedWay}`, method: 'get'})
}

function getExpressTrainCongestion({
  line,
  stationName,
  way,
  fest
}: IGetExpressTrainCongestionParams): AxiosPromise<ITrainCongestion> {
  const encodedStationName = encodeURIComponent(stationName)
  const encodedWay = encodeURIComponent(way)

  return request({url: `${PATH}/${line}/${encodedStationName}/${encodedWay}/${fest}`, method: 'get'})
}

export {getExpressTrainCongestion, getRegularTrainCongestion}
