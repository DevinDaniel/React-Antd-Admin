/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-11 09:41:45
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 09:46:06
 * @FilePath: \react-admin\src\views\permission\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import TypingCard from "@/components/TypingCard";
const Explanation = () => {
  const cardContent = `
    本项目中的菜单权限和路由权限都是基于用户所属角色来分配的，本项目中内置了三种角色，分别是：
    
    <ul>
      <li>管理员 admin:该角色拥有系统内所有菜单和路由的权限。</li>
      <li>编辑员 editor:该角色拥有系统内除用户管理页之外的所有菜单和路由的权限。</li>
      <li>游客 guest:该角色仅拥有Dashboard、作者博客、权限测试和关于作者三个页面的权限。</li>
    </ul>
    
    你可以通过<a href="#/user">用户管理</a>页面，动态的添加或删除用户，以及编辑某个已经存在的用户，例如修改其权限等操作。
  `;
  return (
    <div className="app-container">
      <TypingCard title="权限说明" source={cardContent} />
    </div>
  );
};

export default Explanation;