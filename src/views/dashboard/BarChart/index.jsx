import React, { useEffect } from "react";
import * as echarts from "echarts";
import { useSelector } from 'react-redux'
const option = {
  xAxis: {
    boundaryGap: true,
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "black",
      fontSize: 10,
      fontWeight: 500,
    },
    type: "category",
    data: [
      "01月",
      "02月",
      "03月",
      "04月",
      "05月",
      "06月",
      "07月",
      "08月",
      "09月",
      "10月",
      "11月",
      // "12月",
    ],
  },
  yAxis: {
    type: "value",
    max: "1500",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
    axisLabel: {
      color: "black",
      fontSize: 11,
    },
  },
  tooltip: {
    trigger: "item",
    backgroundColor: "rgba(50,50,50,0.7)",
    borderColor: "#67C8FF",
    textStyle: {
      color: "#fff",
      width: 99,
      height: 53,
    },
    formatter:
      '<span style="margin-right: 100%">{b0}</span><br /> <span style="width:8px;height:8px;display:inline-block;border-radius:50%;border: 2px solid #5AF3B8;box-sizing: border-box; background-color: #fff; margin-right:6px"></span>数量: <span style="color:rgba(90,243,184,100%)">{c0}</span>',
    extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
  },
  series: [
    {
      data: [700, 950, 370, 250, 1240, 520, 712, 900, 1240, 240, 780],
      animationDuration: 3000,
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(240,248,245,0.9)",
      },
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(90,243,184,100%)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(90,243,184,0%)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
  grid: {
    // 让图表占满容器
    top: "20px",
    left: "40px",
    right: "20px",
    bottom: "20px",
  },
};
let myChart;
let chartDom;
const BarChart = () => {
  const sidebarCollapsed = useSelector(s => s.app.sidebarCollapsed)
  useEffect(() => {
    chartDom = document.getElementById("barchart");
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
      id="barchart"
      style={{
        width: "100%",
        height: 315,
        backgroundColor: "#fff",
      }}
    ></div>
  );
};

export default BarChart;
