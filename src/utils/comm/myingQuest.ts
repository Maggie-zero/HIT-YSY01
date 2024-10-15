import { service as request } from './request'


export function myingGet(url: string, params?: any) {
  let get_para = ''
  if (params) {
    get_para = '?'
    Object.keys(params).forEach(key => {
      get_para = get_para + key + '=' + params[key] + '&'
    })
  }
  return request({
    url: url + get_para,
    method: 'GET',
    timeout: 300000,
  })
};

export function myingPost(url: string, params?: object) {
  return request({
    url: url,
    data: params,
    method: 'POST',
  })
};

export function myingDelete(url: string) {
  return request({
    url: url,
    method: 'DELETE',
  })
};

export function myingPatch(url: string, params?: object) {
  return request({
    url: url,
    data: params,
    method: 'PATCH',
  })
};

export function myingPut(url: string, params?: object) {
  return request({
    url: url,
    data: params,
    method: 'PUT',
  })
};



