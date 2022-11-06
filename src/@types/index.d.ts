interface ISubwayForm {
  line: string
  station: string
  direction: string
  speed?: string
}

interface IGetRegularTrainCongestionParams {
  line: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | string
  stationName: string
  way: '상행' | '하행' | string
}

interface IGetExpressTrainCongestionParams {
  line: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | string
  stationName: string
  way: '상행' | '하행' | string
  fest: 0 | 1 | number
}

interface ITrainCongestion {
  suc: boolean | null
  data: {
    order?: number
    updnLine?: string
    trainNumber?: string
    trainLineNm?: string
    stationNm?: string
    arrivaltime?: string
    msg1?: string
    msg2?: string
    subWayStatus?: string
    BokJobDo: {
      suc: boolean
      aver: string
      line: string[]
    }
  } | null
}
