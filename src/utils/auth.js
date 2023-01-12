/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-10 16:15:45
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 09:33:38
 * @FilePath: \react-admin\src\utils\auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Cookies from 'js-cookie'

const TokenKey = 'ReactToken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
