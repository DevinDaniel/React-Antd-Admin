/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-10 11:08:36
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 11:08:39
 * @FilePath: \react-admin\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export function reqUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data
  })
}

export function getUsers() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}

export function deleteUser(data) {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}

export function editUser(data) {
  return request({
    url: '/user/edit',
    method: 'post',
    data
  })
}

export function reqValidatUserID(data) {
  return request({
    url: '/user/validatUserID',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}