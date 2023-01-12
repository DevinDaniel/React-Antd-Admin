/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 17:14:05
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 11:47:27
 * @FilePath: \react-admin\src\views\doc\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import TypingCard from "@/components/TypingCard";
const Doc = () => {
  const cardContent = `
	<h1 style="font-size:34px">react-antd-admin是一个基于react18和Ant Design5.x的后台管理系统</h1>
  <h2>项目简述：</h2>
  <ul>
    <li style="font-size:20px">1、本项目完全基于函数式组件+Hook编写;若想了解redux如何在类组件中调用，侧边栏menu菜单以类组件编写。</li>
    <li style="font-size:20px">2、store方面采用的是redux+react-redux+redux-thunk+@reduxjs/toolkit组合，优化模板代码，包含store异步调用api的RTK写法。</li>
    <li style="font-size:20px">3、echarts图标，表格表单，富文本编辑器，markdown，Excel，Zip等常用功能</li>
    <li style="font-size:20px">4、路由采用的是react-router-dom@5.x版本，涉及路由权限验证，二级子路由，路由懒加载等功能</li>
    <li style="font-size:20px">5、采用react-transition-group实现路由动画功能</li>
    <li style="font-size:20px">6、采用vanta实现登录页面3D酷炫效果</li>
    <li style="font-size:20px">7、本项目参考<a target="_blank" href="https://github.com/NLRX-WJC/react-antd-admin-template">react-antd-admin-template</a>,若同学工作技术栈为react16+类组件+常规react-redux模板写法(不含RTK)的可以访问该项目。(请注意antd版本写法有区别)</li>
  <ul>
`;
  return (
    <div className="app-container">
      <TypingCard title="项目简介" source={cardContent}/>
    </div>
  );
};

export default Doc;
