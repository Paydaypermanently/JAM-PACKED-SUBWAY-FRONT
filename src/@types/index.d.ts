interface ISubwayForm {
  line: string
  station: string
  direction: string
  speed?: string
}

interface IGetRegularTrainCongestionParams {
  line: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine'
  stationName: string
  way: '상행' | '하행'
}

interface IGetExpressTrainCongestionParams {
  line: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine'
  stationName: string
  way: '상행' | '하행'
  fest: 0 | 1
}

interface ITrainCongestion {
  suc: boolean
  data: {
    order?: number
    updnLine?: string
    trainNmuber?: string
    trainLineNm?: string
    stationNm?: string
    arrivaltime?: string
    msg1?: string
    msg2?: string
    subWayStatus?: string
    BokJobDo: {
      suc: boolean
      aver: number
      line: number[]
    }
  }
}
