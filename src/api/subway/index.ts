import {AxiosPromise} from 'axios'
import request from '../../utils/request'

function getRegularTrainCongestion({
  line,
  stationName,
  way
}: IGetRegularTrainCongestionParams): AxiosPromise<ITrainCongestion> {
  return request({url: `/${line}/${stationName}/${way}`, method: 'get'})
}

function getExpressTrainCongestion({
  line,
  stationName,
  way,
  fest
}: IGetExpressTrainCongestionParams): AxiosPromise<ITrainCongestion> {
  return request({url: `/${line}/${stationName}/${way}/${fest}`, method: 'get'})
}

export {getExpressTrainCongestion, getRegularTrainCongestion}
