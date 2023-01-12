/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-04 10:52:45
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-04 11:56:07
 * @FilePath: \react-admin\src\redux\app\slice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	sidebarCollapsed: false,
  settingPanelVisible: false,
}

export const appSlice = createSlice({
	name: 'app',
  initialState,
  reducers: {
		toggleSidebar:(state)=>{
			state.sidebarCollapsed = !state.sidebarCollapsed
		}
	}
})