import { useUserStore } from '@/store';
import { ElNotification } from "element-plus";

//创建实例
const service = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  // baseURL: 'http://36.133.198.49:76/',
  baseURL: '/',
  // 自定义请求头
  headers: {
    // get: 'Content-Type: application/x-www-form-urlencoded;charset=utf-8',
    // post: 'Content-Type: application/json;charset=utf-8'
    // post: `Authorization = "Bearer " + useUserStore().token`
  },

  timeout: 10000,
})

//请求拦截
service.interceptors.request.use(
  config => {
    //业务逻辑
    //判断系统登陆状态
    if (useUserStore().token) {
      if (config && config.headers) { // 多一步判断
        config.headers['Authorization'] = "Bearer " + useUserStore().token;
      }
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
)

//响应拦截
service.interceptors.response.use(
  res => {
    //业务逻辑、判断code码
    // if (res?.data?.token){
    //   sessionStorage.setItem("token", res.data.token);
    // }
    // console.log(res)
    return res.data;
  },
  error => {
    // console.log(error)
    if (error.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      console.log(error.request);
    } else {
      // 发送请求时出了点问题
      // console.log('Error', error.message);
    }
    // console.log(error.config);

    ElNotification.error({
      title: "网络问题",
      message: showStatus(error.response.status),
      offset: 200,
      position: "top-left",
      duration: 2000,
    });

    // 200状态码以上的错误处理，API错误日志收集
    return Promise.reject(error);
  }
)

//返回码
const showStatus = (status: any) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '授权失效，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

export { service }