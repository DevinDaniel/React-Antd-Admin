/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-05 17:39:52
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-05 17:57:36
 * @FilePath: \react-admin\src\components\TypingCard\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef, useEffect } from "react";
import { Card } from "antd";
import Typing from "@/utils/typing";
import { PropTypes } from "prop-types";
const TypingCard = (props) => {
  const { title, source } = props;

  const sourceEl = useRef();
  const outputEl = useRef();
  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 30,
    });
    typing.start();
  }, []);
  return (
    <Card title={title}>
      <div
        style={{ display: "none" }}
        ref={sourceEl}
        dangerouslySetInnerHTML={{ __html: source }}
      />
      <div ref={outputEl} />
    </Card>
  );
};

TypingCard.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
};

TypingCard.defaultProps = {
  title: "xxx",
  source: "xxx",
};

export default TypingCard;
