/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-09 15:54:01
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-09 15:54:36
 * @FilePath: \react-admin\src\mock\excel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs'
const list = []
const count = 20

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    title: '@ctitle(5, 10)',
    author: '@cname',
    readings: '@integer(300, 5000)',
    date: '@datetime'
  }))
}

const excel = {
	excelList: (_) => {
    return {
      code: 20000,
      data: { items: list }
    }
  },
}
export default excel