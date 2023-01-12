/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-12 09:26:20
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 10:54:55
 * @FilePath: \react-admin\src\views\dashboard\BoxCard\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Card, Progress } from "antd";
import "./index.scss";
import PanThumb from "@/components/PanThumb";
import Mallki from '@/components//Mallki'
import { useSelector } from 'react-redux'
const BoxCard = () => {
  const avatar = useSelector(s=> s.user.avatar)
  const name = useSelector(s=>s.user.name)
  return (
    <div className="box-card-component">
      <Card
        cover={
          <img
            alt="example"
            src="https://devin-my.oss-cn-hangzhou.aliyuncs.com/forMe/images/1426060892371343760.jpg"
            style={{ height: "480px" }}
          />
        }
      >
        <div style={{ position: "relative" }}>
          <PanThumb image={avatar} className="panThumb" />
          <Mallki className="mallki-text" text={name} />
          <div style={{ paddingTop: "35px" }} className="progress-item">
            <span>Vue</span>
            <Progress percent={100} />
          </div>
          <div className="progress-item">
            <span>React</span>
            <Progress percent={75} />
          </div>
          <div className="progress-item">
            <span>Uni-App</span>
            <Progress percent={100} />
          </div>
          <div className="progress-item">
            <span>微信小程序:原生开发</span>
            <Progress percent={85} />
          </div>
					<div className="progress-item">
            <span>H5</span>
            <Progress percent={90} />
          </div>
					<div className="progress-item">
            <span>uni-app: nvue移动端APP</span>
            <Progress percent={85} />
          </div>
					<div className="progress-item">
            <span>egg</span>
            <Progress percent={70} />
          </div>
					<div className="progress-item">
            <span>koa</span>
            <Progress percent={85} />
          </div>
					<div className="progress-item">
            <span>nginx</span>
            <Progress percent={80} />
          </div>
					<div className="progress-item">
            <span>webpack,vue-cli</span>
            <Progress percent={75} />
          </div>
					<div className="progress-item">
            <span>golang-gin</span>
            <Progress percent={65} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BoxCard;
