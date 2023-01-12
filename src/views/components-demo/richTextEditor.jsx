/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 09:25:25
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 09:34:45
 * @FilePath: \react-admin\src\views\components-demo\richTextEditor.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import TypingCard from "@/components/TypingCard";
import RichTextEditor from "@/components/RichTextEditor";
const richTextEditor = () => {
  const cardContent = `
	此页面用到的富文本编辑器是<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg</a>。
`;
  return <div className="app-container">
		<TypingCard title='新手引导' source={cardContent} />
		<br></br>
		<RichTextEditor />
	</div>;
};

export default richTextEditor;
