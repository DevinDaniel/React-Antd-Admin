/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 09:54:39
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 13:49:10
 * @FilePath: \react-admin\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Layout from '../views/layout'
import Login from '../views/login'
import routeMap from '../config/routeMap'
import { useSelector } from 'react-redux'
import NotFound from '@/views/error/404'
const Router = () => {
	const role = useSelector(s=> s.user.role)
	const handleFilter = (route) => {
    // 过滤没有权限的页面
    return role === "admin" || !route.roles || route.roles.includes(role);
  };
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route
					path="/"
					component={() => {
						return (
							// Layout为父路由了
							<Layout>
								<Switch>
									<Redirect exact from="/" to="/dashboard" />
									{routeMap.map(route => {
										return (
											handleFilter(route) &&
											<Route key={route.path} path={route.path} component={route.component}></Route>
										)
									})}
									<Route component={NotFound}></Route>
								</Switch>
							</Layout>
						)
					}}
				/>
			</Switch>
		</HashRouter>
	)
}

export default Router