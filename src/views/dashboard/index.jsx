/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 14:29:48
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 09:29:24
 * @FilePath: \react-admin\src\views\dashboard\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useState} from "react";
import "./index.scss";
import PanelGroup from "./PanelGroup";
import LineChart from "./LineChart";
import { Row, Col } from "antd";
import RaddarChart from "./RaddarChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import TransactionTable from "./TransactionTable";
import BoxCard from "./BoxCard";
const lineChartDefaultData = {
  "New Visits": {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  Messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  Purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  Shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};


const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState(
    lineChartDefaultData["New Visits"]
  );

  const handleSetLineChartData = (type) => setLineChartData(lineChartDefaultData[type]);
  return (
    <div className="app-container">
      <PanelGroup handleSetLineChartData={handleSetLineChartData}/>
      <LineChart 
        chartData={lineChartData}
      />
      <Row gutter={32}>
        <Col xs={24} sm={24} lg={8}>
          <div className="chart-wrapper">
            <RaddarChart />
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="chart-wrapper">
            <PieChart />
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="chart-wrapper">
            <BarChart />
          </div>
        </Col>
      </Row>

      <Row gutter={8}>
      <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{ paddingRight: "8px", marginBottom: "30px" }}
        >
          <TransactionTable />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{ marginBottom: "30px" }}
        >
          <BoxCard />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
