import {atom} from 'recoil'

const MinimumCongestionCart = atom<number>({
  key: 'minimumCongestionCart',
  default: 0
})

export default MinimumCongestionCart
