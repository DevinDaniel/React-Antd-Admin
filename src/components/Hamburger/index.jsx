import React from 'react';
import './index.scss'
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons'
import { useSelector,useDispatch } from 'react-redux'
import { appSlice } from '@/redux/app/slice'
const Hamburger = () => {
	const dispatch = useDispatch()
	const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
	
	const toggle = () => {
		dispatch(appSlice.actions.toggleSidebar())
	}
	return (
		<div className='hamburger-container'>
			
			{sidebarCollapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />}
		</div>
	);
};

export default Hamburger;