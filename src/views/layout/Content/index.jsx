/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 14:14:00
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-09 12:31:19
 * @FilePath: \react-admin\src\views\layout\Content\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Layout } from "antd";
const { Content } = Layout;
const LayoutContent = (props) => {
  const location = useLocation();
  return (
    <Content style={{ height: "calc(100% - 100px)" }}>
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="fade"
            exit={false}
          >
            {props.children}
          </CSSTransition>
        </TransitionGroup>
      </Scrollbars>
    </Content>
  );
};

export default LayoutContent;
