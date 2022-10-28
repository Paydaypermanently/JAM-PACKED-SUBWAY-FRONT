import {v1} from 'uuid'

function generateRecoilKey(key: string) {
  return `${key}/${v1()}`
}

export default generateRecoilKey
