import React, { useState, forwardRef, useImperativeHandle,useRef } from "react";
import { Modal, Form, Input, Rate, Select, DatePicker } from "antd";
import dayjs from "dayjs";
// jsx 函数式组件开头要大写
const EditForm = forwardRef(
  (
    {
      // 这里是一些props参数
			handleOk
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      showModal,
      handleOk,
      handleCancel,
			setIsModalOpen,
			setFields,
			changeForm: (newRow) => changeForm(newRow),
			formRef: editForm.current,
			close
    }));
    const [isModalOpen, setIsModalOpen] = useState(false);
		const editForm = useRef(null)
    const showModal = () => {
      setIsModalOpen(true);
    };
    // const handleOk = () => {
		// 	console.log(editForm.current)
    //   // setIsModalOpen(false);
    // };
    const handleCancel = () => {
      close()
    };
		const close = () => {
			setIsModalOpen(false);
		}
		const changeForm = (value)=>{
			editForm.current.setFieldsValue({
				id: value.id,
				title: value.title,
				star: value.star,
				readings: value.readings,
				status: value.status,
				date: dayjs(value.date, "YYYY-MM-DD HH:mm:ss")
			})
		}
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
		// const onFinish = (values) => {
		// 	console.log('Success:', values);
		// };
    const [fields, setFields] = useState([
      {
        name: ["id"],
        value: 0,
      },
      {
        name: ["title"],
        value: "标题",
      },
      {
        name: ["author"],
        value: "作者",
      },
      {
        name: ["readings"],
        value: "122",
      },
      {
        name: ["star"],
        value: 2,
      },
      {
        name: ["status"],
        value: "published",
      },
      {
        name: ["date"],
        value: dayjs("2015-01-01 12:16:50", "YYYY-MM-DD HH:mm:ss"),
      },
    ]);
    return (
      <>
        <Modal
          title="编辑"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
					okText="确认"
					cancelText="取消"
        >
          <Form
            fields={fields}
            {...formItemLayout}
						ref={editForm}
          >
            <Form.Item label="序号" name="id">
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="标题:"
              name="title"
              rules={[{ required: true, message: "请输入标题!" }]}
            >
              <Input placeholder="标题" />
            </Form.Item>
            <Form.Item label="作者:" name="author">
              <Input disabled />
            </Form.Item>
            <Form.Item label="阅读量:" name="readings">
              <Input disabled />
            </Form.Item>
            <Form.Item label="推荐指数:" name="star">
              <Rate count={3} />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Select style={{ width: 120 }}>
                <Select.Option value="published">published</Select.Option>
                <Select.Option value="draft">draft</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="时间:"
              name="date"
              rules={[{ required: true, message: "请选择时间!" }]}
            >
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
);

export default EditForm;
