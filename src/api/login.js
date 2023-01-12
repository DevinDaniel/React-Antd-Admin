/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-10 16:58:27
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 16:58:30
 * @FilePath: \react-admin\src\api\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export function reqLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function reqLogout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}