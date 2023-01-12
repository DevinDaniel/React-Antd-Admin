/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-05 16:13:08
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 13:55:35
 * @FilePath: \react-admin\src\views\dashboard\PieChart\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{ useEffect }  from 'react';
import * as echarts from "echarts";
import { useSelector } from 'react-redux'
const option = {
	tooltip: {
		trigger: "item",
		formatter: "{a} <br/>{b} : {c} ({d}%)",
	},
	legend: {
		left: "center",
		bottom: "10",
		data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
	},
	calculable: true,
	series: [
		{
			name: "WEEKLY WRITE ARTICLES",
			type: "pie",
			roseType: "radius",
			radius: [15, 95],
			center: ["50%", "38%"],
			data: [
				{ value: 320, name: "Industries" },
				{ value: 240, name: "Technology" },
				{ value: 149, name: "Forex" },
				{ value: 100, name: "Gold" },
				{ value: 59, name: "Forecasts" },
			],
			animationEasing: "cubicInOut",
			animationDuration: 3000
		},
	],
}
let myChart;
let chartDom;
const PieChart = () => {
	const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
	useEffect(() => {
    chartDom = document.getElementById("piechart");
    chartDom.removeAttribute("_echarts_instance_");
    setTimeout(() => {
			if (chartDom) {
				myChart = echarts.init(chartDom);
				getChart(option);
			}
		}, 200);
    window.addEventListener('resize', () => {
      myChart.resize();
    })
    return () => {
			if(myChart){
        myChart.dispose()
      }
		};
  }, []);
	useEffect(()=>{
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },[sidebarCollapsed])
  const getChart = (option) => {
    if (chartDom) {
      option && myChart.setOption(option);
    }
  };
  return (
    <div
      id="piechart"
      style={{
        width: "100%",
        height: 315,
        backgroundColor: "#fff",
      }}
    ></div>
  );
};

export default PieChart;