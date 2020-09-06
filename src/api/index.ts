import { request } from '@/utils/request'

export function queryHome() {
  return request({
    url: '/api/home'
  })
}
