import React, { useEffect } from "react";
import * as echarts from "echarts";
import { useSelector } from 'react-redux'
const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  radar: {
    radius: "66%",
    center: ["50%", "42%"],
    splitNumber: 8,
    splitArea: {
      areaStyle: {
        color: "rgba(127,95,132,.3)",
        opacity: 1,
        shadowBlur: 45,
        shadowColor: "rgba(0,0,0,.5)",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
      },
    },
    indicator: [
      { name: "Sales", max: 10000 },
      { name: "Administration", max: 20000 },
      { name: "Information Techology", max: 20000 },
      { name: "Customer Support", max: 20000 },
      { name: "Development", max: 20000 },
      { name: "Marketing", max: 20000 },
    ],
  },
  legend: {
    left: "center",
    bottom: "10",
    data: ["Allocated Budget", "Expected Spending", "Actual Spending"],
  },
  series: [
    {
      type: "radar",
      symbolSize: 0,
      areaStyle: {
        shadowBlur: 13,
        shadowColor: "rgba(0,0,0,.2)",
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        opacity: 1,
      },
      data: [
        {
          value: [5000, 7000, 12000, 11000, 15000, 14000],
          name: "Allocated Budget",
        },
        {
          value: [4000, 9000, 15000, 15000, 13000, 11000],
          name: "Expected Spending",
        },
        {
          value: [5500, 11000, 12000, 15000, 12000, 12000],
          name: "Actual Spending",
        },
      ],
      animationDuration: 3000,
    },
  ],
};


let myChart;
let chartDom;
const RaddarChart = () => {
  const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
	useEffect(() => {
    chartDom = document.getElementById("raddarchart");
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
      id="raddarchart"
      style={{
        width: "100%",
        height: 315,
        backgroundColor: "#fff",
      }}
    ></div>
  );
};

export default RaddarChart;
