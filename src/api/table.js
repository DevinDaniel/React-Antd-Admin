/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 16:23:31
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 16:25:44
 * @FilePath: \react-admin\src\api\table.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
export function tableList(data) {
  return request({
    url: '/table/list',
    method: 'post',
    data
  })
}

export function deleteItem(data) {
  return request({
    url: '/table/delete',
    method: 'post',
    data
  })
}
export function editItem(data) {
  return request({
    url: '/table/edit',
    method: 'post',
    data
  })
}