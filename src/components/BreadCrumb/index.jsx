/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-04 11:44:07
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-04 15:34:21
 * @FilePath: \react-admin\src\components\BreadCrumb\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "./index.scss";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import menuList from "@/config/menuConfig";

const getPath = (menuList, pathname) => {
  let temppath = [];
  try {
    const getNodePath = (node) => {
      temppath.push(node);
      // 找到符合条件的节点，通过throw终止掉地柜
      if (node.key === pathname) {
        throw new Error("GOT IT");
      }
      if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i]);
        }
        //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
        temppath.pop();
      } else {
        //找到叶子节点时，删除路径当中的该叶子节点
        temppath.pop();
      }
    };
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i]);
    }
  } catch (e) {
    return temppath;
  }
};

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  let path = getPath(menuList, pathname);
	const first = path && path[0];
	if (first && first.label.trim() !== "首页") {
    path = [{ label: "首页", key: "/dashboard" }].concat(path);
  }
  return (
    <div className="breadcrum-container">
      <Breadcrumb>
        {path &&
          path.map((item,index) => {
            return item.label === "首页" ? (
							<Breadcrumb.Item className={index===(path.length-1)? 'breadcrum-current': ''} key={item.key}>
								<a href={`#${item.key}`}>{item.label}</a>
							</Breadcrumb.Item>
            ) : (
							<Breadcrumb.Item className={index===(path.length-1)? 'breadcrum-current': ''} key={item.key}>{item.label}</Breadcrumb.Item>
            );
          })}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
