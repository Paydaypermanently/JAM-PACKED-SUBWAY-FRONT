import axios, {AxiosRequestConfig} from 'axios'
import getJson from './getJson'

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 3000
})

instance.interceptors.response.use((response) => response, errorHandler)

if (process.env.NODE_ENV !== 'production') {
  instance.interceptors.request.use((config) => {
    const {url, method, params, data} = config

    // eslint-disable-next-line no-console
    console.log(`[Request]: ${getJson({url, method, params, data})}`)

    return config
  })

  instance.interceptors.response.use((response) => {
    // eslint-disable-next-line no-console
    console.log(`[Response Data]: ${getJson(response.data)}`)

    return response
  })
}

function errorHandler(e: any) {
  if (!e.response) throw {status: undefined, data: {message: e.message}}

  // eslint-disable-next-line no-console
  console.log(`[Error Data]: ${getJson(e.response.data)}`)

  throw e.response
}

export default async function <T>(args: AxiosRequestConfig): Promise<T> {
  const {data} = await instance(args)
  return data
}
