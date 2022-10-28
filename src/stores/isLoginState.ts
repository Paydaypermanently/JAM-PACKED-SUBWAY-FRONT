import {atom} from 'recoil'
import generateRecoilKey from '../utils/generateRecoilKey'

const isLoginState = atom({
  key: generateRecoilKey('isLoginState'),
  default: false
})

export default isLoginState
