/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 09:52:50
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 10:14:47
 * @FilePath: \react-admin\src\views\components-demo\Markdown.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Card } from "antd";
import TypingCard from "@/components/TypingCard";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const Markdown = () => {
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  // Finish!
  function handleEditorChange({ html, text }) {
    // console.log("handleEditorChange", html, text);
  }

  const cardContent = `
	此页面用到的Markdown编辑器是<a href="https://github.com/HarryChen0506/react-markdown-editor-lite" target="_blank">react-markdown-editor-lite</a>。
	`;
  return (
    <div className="app-container">
      <TypingCard title="新手引导" source={cardContent} />
      <br />
      <Card bordered={false}>
        <MdEditor
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </Card>
    </div>
  );
};

export default Markdown;
