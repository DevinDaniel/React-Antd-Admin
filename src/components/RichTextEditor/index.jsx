/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 09:31:18
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 09:50:31
 * @FilePath: \react-admin\src\components\RichTextEditor\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import draftToMarkdown from "draftjs-to-markdown";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.scss";
const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div>
      <Card bordered={false}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          localization={{ locale: "zh" }}
        />
      </Card>
      <br />
      <Row gutter={10}>
        <Col span={12}>
          <Card
            title="同步转换HTML"
            bordered={false}
            style={{ minHeight: 200 }}
          >
            {editorState &&
              draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="同步转换MarkDown"
            bordered={false}
            style={{ minHeight: 200 }}
          >
            {editorState &&
              draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RichTextEditor;
