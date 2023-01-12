# react-antd-admin是一个基于react18+Ant Design5.x的后台管理系统

## 项目简述：

- 本项目完全基于函数式组件+Hook编写;若想了解redux如何在类组件中调用，侧边栏menu菜单以类组件编写。
- store方面采用的是redux+react-redux+redux-thunk+@reduxjs/toolkit组合，优化模板代码，包含store异步调用api的RTK写法。
- echarts图标，表格表单，富文本编辑器，markdown，Excel，Zip等常用功能
- 路由采用的是react-router-dom@5.x版本，涉及路由权限验证，二级子路由，路由懒加载等功能
- 采用react-transition-group实现路由动画功能
- 采用vanta实现登录页面3D酷炫效果

- 本项目参考[react-antd-admin-template](https://github.com/NLRX-WJC/react-antd-admin-template),若同学工作技术栈为react16+类组件+常规react-redux模板写法可以访问该项目。(请注意antd版本写法有区别)

## 安装

```
# 克隆项目
git clone https://github.com/DevinDaniel/React-Antd-Admin

# 进入项目目录
cd React-Antd-Admin

# 安装依赖
npm install

# 切换淘宝源，解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm start
```

启动完成后会自动打开浏览器访问 [http://localhost:3000](http://localhost:3000/)
