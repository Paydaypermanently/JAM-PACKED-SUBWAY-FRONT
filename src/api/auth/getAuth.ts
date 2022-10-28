import request from '../../utils/request'

function getAuth() {
  return request({url: '/auth', method: 'GET'})
}

export default getAuth
