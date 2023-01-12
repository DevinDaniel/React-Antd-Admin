/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-09 14:19:51
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 14:55:47
 * @FilePath: \react-admin\src\views\user\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-09 14:19:51
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 11:41:23
 * @FilePath: \react-admin\src\views\user\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import TypingCard from "@/components/TypingCard";
import { getUsers, deleteUser, editUser, addUser } from "@/api/user";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditUserForm from "./forms/edit-user-form";
import AddUserForm from "./forms/add-user-form";
const cardContent = `在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。`;



const User = () => {
  const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const columns = [
		{
			title: "用户ID",
			dataIndex: "id",
			key: "id",
			align: "center",
		},
		{
			title: "用户名称",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "用户角色",
			key: "role",
			dataIndex: "role",
			align: "center",
		},
		{
			title: "用户描述",
			dataIndex: "description",
			key: "description",
			align: "center",
		},
		{
			title: "操作",
			key: "action",
			width: 195,
			align: "center",
			render: (text, row) => (
				<span>
					<Button
						type="primary"
						shape="circle"
						icon={<EditOutlined />}
						title="编辑"
						onClick={()=>handleEditUser(row)}
					/>
					<Divider type="vertical" />
					<Button
						type="primary"
						shape="circle"
						danger
						icon={<DeleteOutlined />}
						title="删除"
						onClick={()=>handleDeleteUser(row)}
					/>
				</span>
			),
		},
	];
	const EditRef = useRef(null)
	const AddRef = useRef(null)
	const handleEditUser = (row) => {
		// 打开modal
		EditRef.current.showModal()
		setTimeout(()=>{
      EditRef.current.changeForm(row)
    },200)
	}

	const handleAddUser = () => {
		AddRef.current.showModal()
	}
	const handleAddUserOk = () => {
		AddRef.current.addRef.validateFields().then(res=>{
      addUser(res).then(()=>{
        message.success("添加成功!")
        getData()
				AddRef.current.changeForm({
					id: '',
					name: '',
					role: 'admin',
					description: '',
				})
        AddRef.current.close()
      }).catch(err=>{
				message.error("添加失败!")
				AddRef.current.changeForm({
					id: '',
					name: '',
					role: 'admin',
					description: '',
				})
				AddRef.current.close()
			})
    }).catch(err=>{
      message.error('表单验证失败:'+err.errorFields[0].errors)
    })
	}
	const handleEditUserOk =()=>{
		EditRef.current.formRef.validateFields().then(res=>{
      editUser(res).then(()=>{
        message.success("编辑成功!")
        getData()
        EditRef.current.close()
      })
    }).catch(err=>{
      message.error('表单验证失败:'+err.errorFields[0].errors)
    })
	}

	const handleDeleteUser = (row) => {
    const { id } = row
    if (id === "admin") {
      message.error("不能删除管理员用户！")
      return
    }
    deleteUser({id}).then(res => {
      message.success("删除成功")
      getData()
    })
  } 
  const getData = async () => {
		setLoading(true);
    const result = await getUsers();
    const { users, status } = result.data;
    if (status === 0) {
      setUsers(users);
			setLoading(false);
    }
  };
	const title = (
		<span>
			<Button type="primary" onClick={handleAddUser}>添加用户</Button>
		</span>
	);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app-container">
      <TypingCard title="用户管理" source={cardContent} />
      <br />
      <Card title={title}>
        <Table
          bordered
          rowKey="id"
          columns={columns}
          dataSource={users}
          pagination={false}
					loading={loading}
        ></Table>
      </Card>

			<EditUserForm  ref={EditRef}  onOk={handleEditUserOk}/>
			<AddUserForm ref={AddRef} onOk={handleAddUserOk} />
    </div>
  );
};

export default User;
