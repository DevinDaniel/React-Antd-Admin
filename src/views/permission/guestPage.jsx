/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-11 09:41:39
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-11 09:42:17
 * @FilePath: \react-admin\src\views\permission\guestPage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import TypingCard from '@/components/TypingCard'
const GuestPage = () => {
  const cardContent = `这个页面只有admin和guest角色才可以访问，editor角色看不到`
  return ( 
    <div className="app-container">
      <TypingCard title='guest页面' source={cardContent}/>
    </div>
  );
}
 
export default GuestPage;