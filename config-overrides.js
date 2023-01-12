/*
 * @Author: devin lxd@jsszkd.com
 * @Date: 2023-01-04 10:37:56
 * @LastEditors: devin lxd@jsszkd.com
 * @LastEditTime: 2023-01-04 10:38:04
 * @FilePath: \react-admin\config-overrides.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");
 
module.exports = override(
  //增加路径别名的处理 
  addWebpackAlias({  
    '@': path.resolve('./src')  
  })
);