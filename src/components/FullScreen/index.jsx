/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-04 14:26:38
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 10:57:30
 * @FilePath: \react-admin\src\components\FullScreen\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState, useEffect} from 'react';
import {FullscreenOutlined,FullscreenExitOutlined} from '@ant-design/icons'
import screenfull from 'screenfull'
import './index.scss'
import { message,Tooltip } from 'antd';
const FullScreen = () => {
	const [isFullscreen, setIsFullscreen] = useState(false)
	const change = () => {
		setIsFullscreen(screenfull.isFullscreen)
	}
	const click = () => {
		if(!screenfull.isEnabled){
			message.warning('浏览器不支持全屏')
			return 
		}
		screenfull.toggle()
	}

	useEffect(()=>{
		screenfull.isEnabled && screenfull.on("change", change);
    return () => {
      screenfull.isEnabled && screenfull.off("change", change);
    };
	},[])

	const title = isFullscreen ? '取消全屏' : '全屏'
	return (
		<div className='fullscreen-container2'>
			<Tooltip placement="bottom" title={title}>
			{isFullscreen?<FullscreenExitOutlined  onClick={click}/> : <FullscreenOutlined onClick={click} /> }
      </Tooltip>
		</div>
	);
};

export default FullScreen;