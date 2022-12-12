import request from '@/utils/request'

export function list(data) {
  return request({
    url: '/data/info',
    method: 'post',
    data
  })
}
