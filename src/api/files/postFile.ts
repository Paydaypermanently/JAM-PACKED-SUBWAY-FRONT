import request from '../../utils/request'

function postFile(data: IPostFileRequestData) {
  return request<IPostFileResponseBody>({url: '/files/upload', method: 'post', data})
}

export default postFile
