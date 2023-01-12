/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 16:18:25
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 11:38:33
 * @FilePath: \react-admin\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
// import { message } from 'antd'
//创建一个axios示例
const service = axios.create({
  baseURL: '/', // api 的 base_url
  timeout: 5000, // request timeout
});

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // console.log('123213',res)
    // const {data,code} = res.data
    // if (code !== 20000) {
		// 	message.error(res.data.message, 5 * 1000)
    //   return Promise.reject(res.data.message)
    // }
		return res
}, err => {
  return Promise.reject(err)
})

/**
 * request核心函数
 * @param {*} option
 * @returns
 */
const request = (option) => {
  option.method = option.method || 'get'
  return service(option)
}

/* eslint-disable */ 
['get','post','put','delete','patch'].forEach((item) => {
  request[item] = (url, data, option) => {
    return request({
      url,
      data,
      method: item,
      ...option
    })
  }
})

export default service;