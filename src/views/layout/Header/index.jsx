/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 13:51:55
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 11:39:39
 * @FilePath: \react-admin\src\views\layout\Header\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React,{useEffect} from "react";
import { Layout, Avatar, Dropdown, Divider, Space, Button, theme,Modal, message } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "./index.scss";
import Hamburger from "@/components/Hamburger";
import BreadCrumb from "@/components/BreadCrumb";
import FullScreen from "@/components/FullScreen";
import { useSelector,useDispatch } from "react-redux";
import { logout,getUserInfo } from '@/redux/user/slice'
import { useHistory } from 'react-router-dom'
const { Header } = Layout;
const { useToken } = theme;
const items = [
  {
    key: "1",
    label: (
      <a   href="#/dashboard">
        首页
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a  href="#/">
        项目地址
      </a>
    ),
  },
];

const LayoutHeader = () => {
  const { token } = useToken();
  const sidebarCollapsed = useSelector((s) => s.app.sidebarCollapsed);
  const avatar = useSelector(s => s.user.avatar)
  const userToken = useSelector(s=>s.user.token)
  const history = useHistory()
  const dispatch = useDispatch()
  const computedStyle = () => {
    let styles;
    if (sidebarCollapsed) {
      styles = {
        width: "calc(100% - 80px)",
      };
    } else {
      styles = {
        width: "calc(100% - 200px)",
      };
    }

    return styles;
  };

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };

  const handleLogout =() => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        dispatch(logout(userToken,history))
        message.success('退出系统成功!')
      },
    });
  }
  useEffect(()=>{
    dispatch(getUserInfo(userToken))
     // eslint-disable-next-line
  },[])
  useEffect(()=>{
    if(!userToken){
      history.push('/login')
    }
     // eslint-disable-next-line
  },[ userToken ])

  return (
    <Header className="fix-header" style={computedStyle()}>
      <div className="header-item-container">
        <Hamburger />
        <BreadCrumb />
      </div>
      <div className="header-item-container">
        <FullScreen />
        <div className="dropdown-wrap">
          <Dropdown
            menu={{ items }}
            placement="bottom"
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu, {
                  style: menuStyle,
                })}
                <Divider
                  style={{
                    margin: 0,
                  }}
                />
                <Space
                  style={{
                    padding: 8,
                  }}
                >
                  <Button type="primary" danger onClick={handleLogout}>
										注销
									</Button>
                </Space>
              </div>
            )}
          >
            <div className="header-avatar-container">
              <Avatar
                shape="square"
                size="medium"
                src={avatar}
              />
              <div style={{ position: "relative", paddingBottom: 60 }}>
                <CaretDownOutlined
                  style={{
                    color: "rgba(0,0,0,.3)",
                    position: "absolute",
                    bottom: 12,
                  }}
                />
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default LayoutHeader;
