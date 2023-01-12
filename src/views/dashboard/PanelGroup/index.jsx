/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-05 13:34:18
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-05 16:09:21
 * @FilePath: \react-admin\src\views\dashboard\PanelGroup\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "./index.scss";
import {
  MessageOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import CountUp from "react-countup";
const chartList = [
  {
    type: "New Visits",
    icon: <UserOutlined style={{ fontSize: 55, color: "#40c9c6" }} />,
    num: 102400,
  },
  {
    type: "Messages",
    icon: <MessageOutlined style={{ fontSize: 55, color: "#36a3f7" }} />,
    num: 81212,
  },
  {
    type: "Purchases",
    icon: <PayCircleOutlined style={{ fontSize: 55, color: "#f4516c" }} />,
    num: 9280,
  },
  {
    type: "Shoppings",
    icon: <ShoppingCartOutlined style={{ fontSize: 55, color: "#f6ab40" }} />,
    num: 13600,
  },
];
const PanelGroup = (props) => {
  const { handleSetLineChartData } = props;
  return (
    <div className="panel-group-container">
      <Row gutter={40} className="panel-group">
        {chartList.map((chart, i) => (
          <Col
          onClick={()=>handleSetLineChartData(chart.type)} 
            key={i} lg={6} sm={12} xs={12} className="card-panel-col">
            <div className="card-panel">
              <div className="card-panel-icon-wrapper">
								{chart.icon}
              </div>
              <div className="card-panel-description">
                <p className="card-panel-text">{chart.type}</p>
								<CountUp start={0} end={chart.num} className="card-panel-num" ></CountUp>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PanelGroup;
