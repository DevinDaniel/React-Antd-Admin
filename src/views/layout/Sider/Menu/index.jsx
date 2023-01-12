/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 10:13:17
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 17:50:29
 * @FilePath: \react-admin\src\views\layout\Sider\Menu\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import menuList from "@/config/menuConfig";
import { Menu } from "antd";
import "./index.scss";
import { Scrollbars } from "react-custom-scrollbars-2";
import { withRouter } from "react-router-dom";
import { getMenuItemOpenKeys } from "@/utils";
import { connect } from "react-redux";
import { tagsViewSlice } from "@/redux/tagsView/slice";

const mapStateToProps = (state) => ({
  role: state.user.role,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addTag: (menuItem) => {
      const action = tagsViewSlice.actions.addTag(menuItem);
      dispatch(action);
    },
  };
};

class SibarMenu extends Component {
  constructor(props) {
    super(props);
    // 定义组件内部数据
    this.state = {
      openkeys: [],
      path: this.props.location.pathname,
      filterMenu: [],
      // menuList:[]
      menu: [],
    };
  }
  // 子菜单展开
  childrenMenuOpen = (pathname) => {
    let pathnameArr = pathname.split("/");
    let path = "";
    for (let i = 1; i < pathnameArr.length - 1; i++) {
      path += "/" + pathnameArr[i];
    }
    return getMenuItemOpenKeys(this.state.menu, path);
  };
  // filterMenuItem用来根据配置信息筛选可以显示的菜单项
  filterMenuItem = (item) => {
    const { roles } = item;
    const { role } = this.props;
    // console.log('role',role)
    if (role === "admin" || !roles || roles.includes(role)) {
      return true;
    } else if (item.children) {
      // 如果当前用户有此item的某个子item的权限
      // console.log(item,'children',!!item.children.find((child) => roles.includes(child.role)))
      return !!item.children.find((child) => roles.includes(child.role));
    }
    return false;
  };
  // TODO优化
  filterNewMenu = (menuList) => {
    let newArr = [];
    menuList.forEach((item) => {
      if (this.filterMenuItem(item)) {
        if (!item.children) {
          newArr.push(item);
        } else if (item.children && item.children.length > 0) {
          // 二级
          let secondArr = {
            label: item.label,
            key: item.key,
            icon: item.icon,
            children: [],
          };
          item.children.forEach((item2) => {
            if (this.filterMenuItem(item2)) {
              if (!item2.children) {
                secondArr.children.push(item2);
              } else if (item2.children && item2.children.length > 0) {
                // 三级
                let thirdArr = {
                  label: item2.label,
                  key: item2.key,
                  icon: item2.icon,
                  children: [],
                };
                item2.children.forEach((item3) => {
                  if (this.filterMenuItem(item3)) {
                    thirdArr.children.push(item3);
                  }
                });
                if (thirdArr.children.length > 0) {
                  secondArr.children.push(thirdArr);
                }
              }
            }
          });
          if (secondArr.children.length > 0) {
            newArr.push(secondArr);
          }
        }
      }
    });
    return newArr;
  };
  componentDidMount() {
    const newMenuList = this.filterNewMenu(menuList);
    this.setState({
      menu: [...newMenuList],
    },()=>{
      let openkeys = this.childrenMenuOpen(this.props.location.pathname);
      this.setState({
        openkeys
      })
    });

    window.onhashchange = () => {
      // 当前选中菜单
      this.setState({
        path: this.props.location.pathname,
      });
      // 子菜单 关闭
      if (
        this.state.menu.findIndex(
          (item) => item.key === this.props.location.pathname
        ) !== -1
      ) {
        this.setState({
          openkeys: [],
        });
      } else {
        // 子菜单展开
        let openkeys = this.childrenMenuOpen(this.props.location.pathname);
        this.setState({
          openkeys,
        });
      }
    };
  }
  // 点击菜单
  hdMenuSelect = (e) => {
    if (this.state.menu.findIndex((item) => item.key === e.key) !== -1) {
      this.setState({
        openkeys: [],
      });
    }
    this.props.history.push(e.key);
    // let menuItem = getMenuItemInMenuListByProperty(menuList,'key',e.key)
    this.props.addTag(e.key);
  };

  // 子菜单展开
  hdOpenCHange = (keys) => {
    // let openkeys = getMenuItemOpenKeys(menuList, keys[keys.length - 1]);
    let openkeys = getMenuItemOpenKeys(this.state.menu, keys[keys.length - 1]);
    this.setState({
      openkeys,
    });
  };
  render() {
    const { location } = this.props;
    const { openkeys, path } = this.state;
    return (
      <div className="sidebar-menu-container">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <Menu
            theme="dark"
            defaultSelectedKeys={[location.path]}
            mode="inline"
            onSelect={this.hdMenuSelect}
            selectedKeys={[path]}
            // items={menuList}
            items={this.state.menu}
            // openKeys 表示当前所有展开着的数组
            openKeys={openkeys}
            onOpenChange={this.hdOpenCHange}
          />
        </Scrollbars>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SibarMenu));
