/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 14:07:02
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-05 12:01:51
 * @FilePath: \react-admin\src\views\layout\TagsView\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState,useEffect} from 'react';
import './index.scss'
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector, useDispatch } from 'react-redux'
import { useLocation,useHistory} from 'react-router-dom'
import { Tag } from 'antd'
import { getMenuItemInMenuListByProperty } from '@/utils'
import menuList from '@/config/menuConfig';
import { tagsViewSlice } from '@/redux/tagsView/slice'
const TagsView = () => {
	const tagslist = useSelector(s => s.tagsView.taglist)
	const [tagList,setTagList] = useState([])
	const location = useLocation()
	const history = useHistory()
	const dispatch = useDispatch()
	useEffect(()=>{
		let newTagsArr = []
		tagslist.forEach(tag => {
			let menuItem = getMenuItemInMenuListByProperty(menuList,'key',tag)
			if(menuItem !== '/dashboard'){
				newTagsArr.push(menuItem)
			}

		})
		setTagList(newTagsArr)
	}, [tagslist])

	const handleClick = (path) => {
		if(location.pathname !== path){
			history.push(path)
		}
	}
	const handleClose = (tag) => {
		const length = tagList.length
		// 如果关闭是当前页,跳转到最后一个tag
		if(location.pathname === tag.key){
			// 删除最后的tag
			if(tagList[length-1].key === tag.key){
				history.push(tagList[length-2].key)
			}else{
				// 删除中间的tag
				history.push(tagList[length-1].key)
			}
		}
		// 先跳转路由,再修改redux中的taglist
		dispatch(tagsViewSlice.actions.deleteTag(tag.key))
	}
	return (
		<div className='tagsView-container'>
			<Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          hideTracksWhenNotNeeded={true}
					renderView={(props) => (
            <div {...props} className="scrollbar-container" />
          )}
          renderTrackVertical={(props) => (
            <div {...props} className="scrollbar-track-vertical" />
          )}
        >
				 <ul className='tags-wrap'>
						{tagList.map((tag) =>(
							<li key={tag.key}>
								<Tag
								 	onClose={() => handleClose(tag)}
									closable={tag.key !== '/dashboard'}
									color={location.pathname === tag.key ? "processing" : "warning"}
									onClick={()=>handleClick(tag.key)}
									>
									{tag.label}
								</Tag>
							</li>
						))}
				 </ul>
			</Scrollbars>
		</div>
	);
};

export default TagsView;