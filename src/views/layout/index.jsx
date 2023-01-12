/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 09:51:02
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-03 17:23:53
 * @FilePath: \react-admin\src\views\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useEffect} from 'react';
import { Layout } from 'antd';
import Sider from './Sider'
import Header from './Header'
import TagsView from './TagsView';
import Content from './Content'
const Main = (props) => {
	useEffect(()=>{
		
	},[])
	return (
		<Layout style={{minHeight: '100vh'}}>
			<Sider />
			<Layout>
				<Header />
				<TagsView />
				<Content children={props.children} />
			</Layout>
		</Layout>
	);
};

export default Main;