import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Modal, Form, Input, Select } from "antd";

const { TextArea } = Input;

const AddUserForm = forwardRef(({onOk},ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
    close,
    handleCancel,
		changeForm,
		addRef:addForm.current
  }));
  const [open, setOpen] = useState(false);
	const [id, setId] = useState('')
  const showModal = () => {
    setOpen(true);
  };
	const addForm = useRef(null)
  const handleCancel = () => {
    close();
  };
  const close = () => {
    setOpen(false);
  };
	const changeForm = (value)=>{
		addForm.current.setFieldsValue({
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
	const fields =[
		{
			name: ["role"],
			value: 'admin',
		},
    {
      name: ['description'],
      value: ''
    }
	]
  return (
    <>
      <Modal
        title="添加"
        open={open}
        onOk={onOk}
        onCancel={handleCancel}
				fields={fields}
      >
        <Form
          {...formItemLayout}
          ref={addForm}
					fields={fields}
        >
          <Form.Item 
						label="用户ID:" name="id"
						rules={[{ required: true, message: "请输入用户ID!" }]}>
            <Input  />
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

export default AddUserForm;