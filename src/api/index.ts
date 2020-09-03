import { request } from '@/utils/request'

export function fetchHome() {
  return request({
    url: '/api/home'
  })
}
