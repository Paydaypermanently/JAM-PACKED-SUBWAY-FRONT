import request from '../../utils/request'

function postAuth(data: AuthPostRequestData) {
  return request<AuthPostResponseBody>({url: '/auth', method: 'POST', data: {remember: false, ...data}})
}

export default postAuth
