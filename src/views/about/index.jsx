/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-09 14:19:00
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 12:46:46
 * @FilePath: \react-admin\src\views\about\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import TypingCard from "@/components/TypingCard";
import wechat from "@/assets/images/weiChat.png";
import './index.scss'
const About = () => {
  const cardContent = `
		<div class="about-container">
			<p>大家好，我是冬瓜。</p>
			<p><span class="high-light">大南鲸</span>脚下喜欢逛风景逛小吃街的码农一枚，崇尚开源精神，乐于分享。</p>
			<p>花花公子一枚，<span class="high-light">把过Vue, 搞过Uni-App, 弄过React, 谈过小程序，玩过Node,  撩过golang</span> </p>
			<p>喜欢<span class="high-light">折腾和搞基，爱逛全球最大的同性交友网站GitHub</span>，追求新鲜技术。</p>
			<p>下边是我的微信，欢迎小伙伴们一起来深入<span class="high-light">交流学习</span>。</p>
			<p>如果你觉得这个项目对你有些许帮助的话，欢迎赞赏哈。</p>
			<p>您的赞赏，是我不断前进的动力！</p>
			<p><span class="high-light">求大佬们点个 star 啦，感谢感谢~~</span></p>
			<img src="${wechat}" alt="wechat" style="height:550px"/>
		</div>
  `;
  return (
    <div className="app-container">
      <TypingCard title="关于作者" source={cardContent} />
    </div>
  );
};

export default About;
