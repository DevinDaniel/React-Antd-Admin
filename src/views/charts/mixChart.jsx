/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 11:12:03
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 13:57:43
 * @FilePath: \react-admin\src\views\charts\mixChart.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useEffect} from "react";
import * as echarts from "echarts";
import { useSelector } from 'react-redux'
const xData = (function () {
  const data = [];
  for (let i = 1; i < 13; i++) {
    data.push(i + "month");
  }
  return data;
})();
const option = {
  backgroundColor: "#344b58",
  title: {
    text: "statistics",
    x: "20",
    top: "20",
    textStyle: {
      color: "#fff",
      fontSize: "22",
    },
    subtextStyle: {
      color: "#90979c",
      fontSize: "16",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      textStyle: {
        color: "#fff",
      },
    },
  },
  grid: {
    left: "5%",
    right: "5%",
    borderWidth: 0,
    top: 150,
    bottom: 95,
    textStyle: {
      color: "#fff",
    },
  },
  legend: {
    x: "5%",
    top: "10%",
    textStyle: {
      color: "#90979c",
    },
    data: ["female", "male", "average"],
  },
  calculable: true,
  xAxis: [
    {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#90979c",
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      axisLabel: {
        interval: 0,
      },
      data: xData,
    },
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#90979c",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
      },
      splitArea: {
        show: false,
      },
    },
  ],
  dataZoom: [
    {
      show: true,
      height: 30,
      xAxisIndex: [0],
      bottom: 30,
      start: 10,
      end: 80,
      handleIcon:
        "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
      handleSize: "110%",
      handleStyle: {
        color: "#d3dee5",
      },
      textStyle: {
        color: "#fff",
      },
      borderColor: "#90979c",
    },
    {
      type: "inside",
      show: true,
      height: 15,
      start: 1,
      end: 35,
    },
  ],
  series: [
    {
      name: "female",
      type: "bar",
      stack: "total",
      barMaxWidth: 35,
      barGap: "10%",
      itemStyle: {
        normal: {
          color: "rgba(255,144,128,1)",
          label: {
            show: true,
            textStyle: {
              color: "#fff",
            },
            position: "insideTop",
            formatter(p) {
              return p.value > 0 ? p.value : "";
            },
          },
        },
      },
      data: [
        709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078,
      ],
    },

    {
      name: "male",
      type: "bar",
      stack: "total",
      itemStyle: {
        normal: {
          color: "rgba(0,191,183,1)",
          barBorderRadius: 0,
          label: {
            show: true,
            position: "top",
            formatter(p) {
              return p.value > 0 ? p.value : "";
            },
          },
        },
      },
      data: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220],
    },
    {
      name: "average",
      type: "line",
      stack: "total",
      symbolSize: 10,
      symbol: "circle",
      itemStyle: {
        normal: {
          color: "rgba(252,230,48,1)",
          barBorderRadius: 0,
          label: {
            show: true,
            position: "top",
            formatter(p) {
              return p.value > 0 ? p.value : "";
            },
          },
        },
      },
      data: [
        1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865, 4298,
      ],
    },
  ],
};

let myChart;
let chartDom;
const MixChart = () => {
  const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
	useEffect(() => {
    chartDom = document.getElementById("mixchart");
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
        id="mixchart"
      ></div>
    </div>
  );
};

export default MixChart;
