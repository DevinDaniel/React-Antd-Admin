/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-04 17:49:22
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 12:51:38
 * @FilePath: \react-admin\src\redux\tagsView\slice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	taglist: ['/dashboard']
}

export const tagsViewSlice = createSlice({
	name: 'tagsView',
	initialState,
	reducers: {
		addTag: (state, action) => {
			if (!state.taglist.includes(action.payload)) {
				state.taglist.push(action.payload)
			}
		},
		deleteTag: (state, action) => {
			state.taglist = state.taglist.filter((item) => item !== action.payload)
		},
		clearTag: (state) => {
			state.taglist =  ['/dashboard']
		}
	}
})