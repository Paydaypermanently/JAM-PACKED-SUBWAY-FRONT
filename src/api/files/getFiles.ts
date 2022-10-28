import request from '../../utils/request'

function getFiles(params: IGetFileRequestParams) {
  return request<IGetFileResponseBody>({url: '/files/upload', method: 'get', params})
}

export default getFiles
