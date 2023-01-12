import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Modal, Form, Input, Select } from "antd";

const { TextArea } = Input;

const EditUserForm = forwardRef(({onOk},ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
    close,
    handleCancel,
		changeForm,
		formRef:editForm.current
  }));
  const [open, setOpen] = useState(false);
	const [id, setId] = useState('')
  const showModal = () => {
    setOpen(true);
  };
	const editForm = useRef(null)
  const handleCancel = () => {
    close();
  };
  const close = () => {
    setOpen(false);
  };
	const changeForm = (value)=>{
		editForm.current.setFieldsValue({
			id: value.id,
			name: value.name,
			role: value.role,
			description: value.description,
		})
		setId(value.id)
	}
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };
  return (
    <>
      <Modal
        title="编辑"
        open={open}
        onOk={onOk}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          ref={editForm}
        >
          <Form.Item label="用户ID:" name="id">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="用户名称:"
            name="name"
            rules={[{ required: true, message: "请输入用户名称!" }]}
          >
            <Input placeholder="请输入用户名称" />
          </Form.Item>
          <Form.Item label="用户角色:" name="role">
            <Select style={{ width: 120 }} disabled={id === "admin"} >
              <Select.Option value="admin">admin</Select.Option>
              <Select.Option value="editor">editor</Select.Option>
              <Select.Option value="guest">guest</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="用户描述:" name="description">
            <TextArea rows={4} placeholder="请输入用户描述" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});

export default EditUserForm;
