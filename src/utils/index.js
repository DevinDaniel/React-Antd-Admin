/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 13:36:03
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-05 09:39:16
 * @FilePath: \react-admin\src\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 查找打开菜单
export const getMenuItemOpenKeys = (menuList, path)=>{
  let openkeys = []
	menuList.forEach(menu => {
      if(menu.children && menu.children.length > 0){
        if(path === menu.key){
          openkeys.push(path)
        }
        menu.children.forEach(menu2 => {
          if(menu2.children && menu2.children.length > 0){
            if(path === menu2.key){
              openkeys.push(...[menu.key,menu2.key])
            }
            menu2.children.forEach(menu3 =>{
              if(menu3.children && menu3.children.length > 0){
                if(path=== menu3.key){
                  openkeys.push(...[menu.key,menu2.key,menu3.key])
                }
              }
            })
          }
        })
      }
    })
		return openkeys
}

// 根据某个属性值从MenuList查找拥有该属性值的menuItem
export const getMenuItemInMenuListByProperty = (menuList, key, value) =>{
  let stack = []
  stack = stack.concat(menuList)
  let res;
  while (stack.length) {
    let cur = stack.shift();
    if (cur.children && cur.children.length > 0) {
      stack = cur.children.concat(stack);
    }
    if (value === cur[key]) {
      res = cur;
    }
  }
  return res
}