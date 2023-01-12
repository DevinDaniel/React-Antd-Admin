import React from 'react';
import { Button, Row, Col } from "antd";
import { CopyOutlined } from '@ant-design/icons'
import clip from "@/utils/clipboard"; 
import { useHistory } from 'react-router-dom'
const text = `
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
	请复制这段文字,
`


const Clipboard = () => {
	const history = useHistory()
	const handleCopy = (text, event) => {
		clip(text, event);
		history.push('/components/richTextEditor')
	};
	return (
		<div className="app-container">
			<h1>点击下方的Copy按钮，可将以下文字复制到剪贴板</h1>
			<br />
      <Row>
        <Col span={12}>{text}</Col>
      </Row>
      <br />
      <Row>
        <Col span={2}>
          <Button
            type="primary"
            icon={<CopyOutlined />}
						onClick={(e) => handleCopy(text,e)}
          >
            Copy and Test
          </Button>
        </Col>
      </Row>
		</div>
	);
};

export default Clipboard;