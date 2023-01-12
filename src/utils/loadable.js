/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-11 17:19:11
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 17:34:58
 * @FilePath: \react-admin\src\utils\loadable.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import {
	Spin
} from 'antd';
import Loadable from "react-loadable";
import './loadable.scss'
// 加载动画
const loadingComponent = () => {

	return <div className={
		'spin-loading'}>
		<h2 className="loading_title">加载中...</h2>
		<div><Spin size="large" /></div>
	</div>;
};
// 当不传加载动画时候使用默认的加载动画
const loadable =  (loader, loading = loadingComponent) => {
	return Loadable({
		loader,
		loading,
	});
};
export default loadable