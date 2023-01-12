/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 09:43:31
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-09 12:19:55
 * @FilePath: \react-admin\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';
import { Provider } from 'react-redux'
import store from '@/redux/store'
// npm i default-passive-events -S -D
import 'default-passive-events';
import 'antd/dist/reset.css';
import './mock'
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
);
