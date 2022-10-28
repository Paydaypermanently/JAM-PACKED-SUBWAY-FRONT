import request from '../../utils/request'

function deleteAuth() {
  return request({url: '/auth', method: 'DELETE'})
}

export default deleteAuth
