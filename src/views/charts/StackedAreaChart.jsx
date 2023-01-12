/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 11:09:51
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 13:58:09
 * @FilePath: \react-admin\src\views\charts\keyboard.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from "react";
import * as echarts from "echarts";
import { useSelector } from 'react-redux'
const option = {
  title: {
    text: "Stacked Area Chart",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};
let myChart;
let chartDom;
const StackedAreaChart = () => {
  const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
  useEffect(() => {
    chartDom = document.getElementById("stackedareachart");
    chartDom.removeAttribute("_echarts_instance_");

    // 父级元素还没有layout的时候，图表就开始生成，这个时候宽度和高度就不受默认布局的影响，而是会找到一个已经布局的大的父级元素作为父级，等真正的父级layout完毕，就超出了图表本身的父级容器
    setTimeout(() => {
      if (chartDom) {
        myChart = echarts.init(chartDom);
        getChart(option);
      }
    }, 200);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
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
      style={{ width: "100%", height: "calc(100vh - 100px)" }}
      className="app-container"
    >
      <div
        style={{ width: "100%", height: "100%" }}
        id="stackedareachart"
      ></div>
    </div>
  );
};

export default StackedAreaChart;
