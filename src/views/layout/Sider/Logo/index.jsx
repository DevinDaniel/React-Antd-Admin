/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 10:19:21
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 09:24:54
 * @FilePath: \react-admin\src\views\layout\Sider\Logo\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import logo from '../../../../assets/images/logo.svg'
import { useSelector } from 'react-redux'
import './index.scss'
const Logo = () => {
	const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
	const name = useSelector(s=> s.user.name)
	return (
		<div className='sidebar-logo-container'>
			<img src={logo} alt="logi" className='siderbar-logo' />
			{!sidebarCollapsed ? <h1 className='sidebar-title'>{name}</h1>: <></>}
		</div>
	);
};

export default Logo;