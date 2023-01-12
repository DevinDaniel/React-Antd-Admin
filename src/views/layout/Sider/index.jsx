/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 10:07:44
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-04 11:15:38
 * @FilePath: \react-admin\src\views\layout\Sider\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import Logo from './Logo'
import { useSelector } from 'react-redux'
const { Sider } = Layout;

const LayoutSider = () => {
	const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
	return (
		<Sider
			trigger={null}
			collapsed={sidebarCollapsed}
		>
			<Logo />
			<Menu />
		</Sider>
	);
};

export default LayoutSider;