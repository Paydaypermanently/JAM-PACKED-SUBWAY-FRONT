import {instance} from './request'

function setSSRUserCookie(cookie?: string) {
  if (cookie) {
    // @ts-ignore
    instance.defaults.headers['cookie'] = `USER_KEY=${cookie}; path=*`
  } else {
    // @ts-ignore
    instance.defaults.headers['cookie'] = `USER_KEY=deleted; Max-Age=0 path=*`
  }
}

export default setSSRUserCookie
