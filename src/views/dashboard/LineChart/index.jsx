/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-05 14:11:14
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 16:23:27
 * @FilePath: \react-admin\src\views\dashboard\LineChart\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from "react";
import * as echarts from "echarts";
import { useSelector } from 'react-redux'
const getOption = (expectedData, actualData) => {
  return {
    backgroundColor: "#fff",
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 10,
      top: 30,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      padding: [5, 10],
    },
    yAxis: {
      axisTick: {
        show: false,
      },
    },
    legend: {
      data: ["expected", "actual"],
    },
    series: [
      {
        name: "expected",
        itemStyle: {
          color: "#FF005A",
          lineStyle: {
            color: "#FF005A",
            width: 2,
          },
        },

        smooth: true,
        type: "line",
        data: expectedData,
        animationDuration: 2800,
        animationEasing: "cubicInOut",
      },
      {
        name: "actual",
        smooth: true,
        type: "line",
        itemStyle: {
          color: "#3888fa",

          lineStyle: {
            color: "#3888fa",
            width: 2,
          },
          areaStyle: {
            color: "#f3f8ff",
          },
        },
        data: actualData,
        animationDuration: 2800,
        animationEasing: "quadraticOut",
      },
    ],
  };
};

let myChart;
let chartDom;
const LineChart = (props) => {
  const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
  //  Can't get DOM width or height.
  const { chartData } = props;
  useEffect(() => {
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, []);
  useEffect(() => {
    chartDom = document.getElementById("linechart");
    chartDom.removeAttribute("_echarts_instance_");
    setTimeout(() => {
      if (chartDom) {
        myChart = echarts.init(chartDom);
        const option = getOption(chartData.expectedData, chartData.actualData);
        getChart(option);
        myChart.resize();
      }
    }, 200);
    // window.onresize = function () {
    //   console.log('resize')
    //   myChart.resize();
    // };
    // 因为引用的父组件和子组件都使用了window.onresize以至于window.onresize 有时失效。
    // 解决方案：可以采用下面的方式
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }, [chartData]);
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
      id="linechart"
      style={{
        height: 350,
        backgroundColor: "#fff",
        marginBottom: 25,
        padding: 16,
      }}
    ></div>
  );
};

export default LineChart;
