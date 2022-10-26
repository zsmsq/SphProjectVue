/**
 * 对 Axios 进行统一的配置，进行二次封装
 */

import axios from 'axios'

// 导入进度条库
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建实例
const mockRequest = axios.create({
  baseURL: 'http://www.baidu.com', // 请求基准路径
  timeout: 5000 // 超时时间
})

// 添加请求拦截器
mockRequest.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    // 开启、展示进度条
    NProgress.start()

    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
mockRequest.interceptors.response.use(
  (response) => {
    // 关闭、隐藏进度条
    NProgress.done()

    // response.data 真正返回服务器响应的数据
    return response.data
  },
  (error) => {
    // 1. 服务器状态码如果不是以 2 开头就会出现错误，例如：4xx、5xx
    // 2. 请求超时
    // console.log('2222')
    // return Promise.reject(error)

    console.log(error)

    // 如果返回的不是 Promise，例如：字符串，就会执行成功 .then
    // return '123'

    // 如果返回的是成功的 Promise，就会执行成功 .then
    // return Promise.resolve('456')

    // 如果返回的是失败的 Promise，就会执行成功 .catch
    // 通过 Promise.reject 抛出错误，可以，但是需要自己处理异常
    // return Promise.reject(error)

    console.dir(error)
    alert(error.message)

    // new Promise()，不指定 resolve 和 reject，就不会抛出异常，Promise 处于 pending 等待状态
    return new Promise(() => {})
  }
)

export default mockRequest
