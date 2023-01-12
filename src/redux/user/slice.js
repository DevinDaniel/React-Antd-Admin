/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-10 16:17:58
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 12:52:57
 * @FilePath: \react-admin\src\redux\user\slice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getToken } from "@/utils/auth";
import { reqLogin, reqLogout } from "@/api/login";
import { reqUserInfo } from "@/api/user";
import { setToken, removeToken } from "@/utils/auth";
import { message } from 'antd'
import { tagsViewSlice } from '@/redux/tagsView/slice'
const initialState = {
	name: "",
	role: "",
	avatar: "",
	token: getToken() || '',
	loading: false,
	data: null,
	error: null
}

// 模拟登录退出异步错误处理 正常api在request相应拦截器中处理
const loginPromise = (username, password) => {
	return new Promise((resolve, reject) => {
		reqLogin({ username: username.trim(), password: password })
			.then((response) => {
				const { data } = response;
				if (data.status === 0) {
					resolve(data);
				} else {
					const msg = data.message;
					reject(msg);
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
};
const logoutPromise = (token) => {
	return new Promise((resolve, reject) => {
		reqLogout(token)
			.then((response) => {
				const { data } = response;
				if (data.status === 0) {
					resolve(data);
				} else {
					const msg = data.message;
					reject(msg);
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const getUserInfoPromise = (token) => {
	return new Promise((resolve, reject) => {
		reqUserInfo(token)
			.then((response) => {
				const { data } = response;
				if (data.status === 0) {
					resolve(data);
				} else {
					const msg = data.message;
					reject(msg);
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
};
// 登录
export const login = createAsyncThunk(
	"user/login",
	async ({ username, password }, thunkAPI) => {
		try {
			const { token } = await loginPromise(username, password)
			// 登录结束获取user信息
			thunkAPI.dispatch(getUserInfo(token))
			return token
		} catch (error) {
			thunkAPI.dispatch(userSlice.actions.setError(error))
		}
	}
)

// 退出 TODO
export const logout = createAsyncThunk(
	"user/logout",
	async ({token}, thunkAPI) => {
		thunkAPI.dispatch(tagsViewSlice.actions.clearTag())
		const res = await logoutPromise(token)
		return res
	}
)
export const getUserInfo = createAsyncThunk(
	"user/getUserInfo",
	async (token, thunkAPI) => {
		const {userInfo} = await getUserInfoPromise(token)
		return userInfo
	}
)
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserToken: (state, action) => {
			state.token = action.payload
		},
		setUserInfo: (state, action) => {
			const { name, role, avatar } = action.payload
			state.name = name
			state.role = role
			state.avatar = avatar
		},
		resetUser: (state) => {
			state.name = ''
			state.role = ''
			state.avatar = ''
			state.token = ''
		},
		setError: (state, action) => {
			message.error(action.payload)
			state.error = action.payload
		}
	},
	// 异步写法
	extraReducers: {
		// 登录
		[login.pending.type]: (state) => {
			state.loading = true
		},
		[login.fulfilled.type]: (state, action) => {
			state.loading = false;
			if (typeof action.payload !== 'undefined') {
				state.token = action.payload
				setToken(action.payload)
				message.success('登录成功')
			}
		},
		[login.rejected.type]: (state, action) => {
			state.loading = false;
		},
		// 获取用户信息
		[getUserInfo.pending.type]: (state) => {
			state.loading = true
		},
		[getUserInfo.fulfilled.type]: (state, action) => {
			state.loading = false;
			const {name, avatar,role} = action.payload
			state.name = name 
			state.avatar = avatar
			state.role = role
		},
		[getUserInfo.rejected.type]: (state, action) => {
			state.loading = false;
		},
		// 退出
		[logout.pending.type]: (state) => {
			state.loading = true
		},
		[logout.fulfilled.type]: (state, action) => {
			state.loading = false;
			state.token = ''
			removeToken()
		},
		[logout.rejected.type]: (state, action) => {
			state.loading = false;
		},
	}
})
