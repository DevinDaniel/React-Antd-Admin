/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-04 10:51:13
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 16:21:00
 * @FilePath: \react-admin\src\redux\store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appSlice } from './app/slice'
import { tagsViewSlice } from './tagsView/slice'
import { userSlice } from './user/slice'
const rootReducer = combineReducers({
	app: appSlice.reducer,
	tagsView: tagsViewSlice.reducer,
	user:userSlice.reducer
})


const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => {
		// 原因：因为redux存储时是将数据序列化后存储的，并且@reduxjs/toolkit里面会默认检查是否序列化
		return getDefaultMiddleware({
			serializableCheck: false
		})
	}
})


export default store