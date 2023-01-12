/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 10:00:39
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 13:59:07
 * @FilePath: \react-admin\src\views\login\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min.js";
import { Form, Input, Button, message, Spin } from "antd";
import logo from '@/assets/images/logo.svg'
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import "./index.scss";
import { login } from '@/redux/user/slice'
const Login = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
	const loading = useSelector(s=> s.user.loading)
  const token = useSelector(s=> s.user.token)
  const myRef = useRef(null);
	const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  useEffect(()=>{
    if(token){
      history.push('/dashboard')
    }
     // eslint-disable-next-line
  },[token])

	const onFinish = (values) => {
		const { username, password } = values;
		dispatch(login({username,password}))
  };
  const onFinishFailed = () => {
		message.error('表单校验失败,请根据提示内容填写!')
  };
  return (
    <>
      <div style={{ height: "100vh", width: "100wh" }} ref={myRef}>
        <div className="login-container">
          <Form 
						 onFinish={onFinish}
						 onFinishFailed={onFinishFailed} 
						className="content">
            <div className="title">
							<img src={logo} alt="logo" className='login-logo' />
              <h2>用户登录</h2>
            </div>
            <Spin spinning={loading} tip="登录中...">
              <Form.Item 
								name="username"
								rules={[{ required: true, message: "请输入用户名!" }]}
							>
                <Input
                  prefix={
										<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input.Password 
										prefix={
										<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户密码" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </Form.Item>
              <Form.Item>
                <span>账号 : admin 密码 : 随便填</span>
                <br />
                <span>账号 : editor 密码 : 随便填</span>
                <br />
                <span>账号 : guest 密码 : 随便填</span>
              </Form.Item>
            </Spin>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
