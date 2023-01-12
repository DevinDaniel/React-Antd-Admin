/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 16:09:34
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 09:22:01
 * @FilePath: \react-admin\src\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";
import loginAPI from "./login";
import remoteSearchAPI from "./remoteSearch";
import excelAPI from "./excel";
import tableAPI from "./table";

// 登录与用户相关
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);
Mock.mock(/\/userInfo/, "post", loginAPI.userInfo);
Mock.mock(/\/user\/list/, "get", loginAPI.getUsers);
Mock.mock(/\/user\/delete/, "post", loginAPI.deleteUser);
Mock.mock(/\/user\/edit/, "post", loginAPI.editUser);
Mock.mock(/\/user\/validatUserID/, "post", loginAPI.ValidatUserID);
Mock.mock(/\/user\/add/, "post", loginAPI.addUser);

// dashboard
Mock.mock(/\/transaction\/list/, "get", remoteSearchAPI.transactionList);

// table
Mock.mock(/\/table\/list/, "post", tableAPI.tableList);
Mock.mock(/\/table\/delete/, "post", tableAPI.deleteItem);
Mock.mock(/\/table\/edit/, "post", tableAPI.editItem);

// excel
Mock.mock(/\/excel\/list/, "get", excelAPI.excelList);

export default Mock;