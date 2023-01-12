/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-11 13:29:07
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 11:37:14
 * @FilePath: \react-admin\src\views\error\404\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Button } from "antd";
import errImg from "@/assets/images/404.png";
import "./index.scss";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  const goHome = () => history.replace("/");
  return (
    <div className="app-container bg-color">
      <div className="not-found">
        <div>
           <img src={errImg} alt="404" />
        </div>
        <div>
        <h1>404</h1>
          <h2>抱歉，你访问的页面不存在</h2>
          <div>
            <Button type="primary" onClick={goHome}>
              回到首页
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
