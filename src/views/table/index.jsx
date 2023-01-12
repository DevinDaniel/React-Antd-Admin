/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 14:34:00
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 14:36:52
 * @FilePath: \react-admin\src\views\table\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 14:34:00
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 18:00:04
 * @FilePath: \react-admin\src\views\table\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, useRef } from "react";
import { Collapse } from "antd";
import { Button, Form, Input, Select, Divider, Table, Tag,Pagination,message } from "antd";
import { SearchOutlined,EditOutlined,DeleteOutlined } from "@ant-design/icons";
import { tableList,deleteItem,editItem } from "@/api/table";
import EditForm from "./forms/editForm";
const { Panel } = Collapse;
const { Option } = Select;
const { Column } = Table;


const TablePage = () => {
  const [listQuery, setListQuery] = useState({
    pageNumber: 1,
    pageSize: 10,
    title: "",
    star: "",
    status: "",
  });
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  // const [currentRowsData, setCurrentRowsData] = useState({
  //   id: 0,
  //   author: "",
  //   date: "",
  //   readings: 0,
  //   star: "★★",
  //   status: "published",
  //   title: ""
  // })
  const EditRef = useRef()
  const onFinish = (values) => {
    setListQuery({
      ...listQuery,
      star: values.star,
      title: values.title,
      status: values.status,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const changePage = (pageNumber, pageSize) =>{
    setListQuery({
      ...listQuery,
      pageNumber
    })
  }
  const fetchData = () => {
    setLoading(true);
    tableList(listQuery).then((res) => {
      setLoading(false);
      const list = res.data.data.items;
      const total = res.data.data.total;
      setList(list);
      setTotal(total);
    });
  };

  const handleDelete = (row) => {
    deleteItem({id:row.id}).then(res => {
      message.success("删除成功")
      fetchData();
    })
  }

  const handleOk = () => {
    EditRef.current.formRef.validateFields().then(res=>{
      res.date = res.date.format('YYYY-MM-DD HH:mm:ss')
      res.star = "".padStart(res.star, '★')
      editItem(res).then(()=>{
        message.success("编辑成功!")
        fetchData()
        EditRef.current.close()
      })
    }).catch(err=>{
      message.error('表单验证失败:'+err.errorFields[0].errors)
    })
  }

  const handleEdit = (row) => {
    // 开启model 并修改当前表单数据
    let newRow = {
      ...row,
      star: row.star.split('').length
    }
    EditRef.current.showModal()
    setTimeout(()=>{
      EditRef.current.changeForm(newRow)
    },200)
    // 修改当前行数据
    // setCurrentRowsData(row)
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  },[listQuery])
  const rowkey = (row) => {
    return row.id
  }
  return (
    <div className="app-container">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="筛选" key="1">
          <Form
            name="basic"
            layout="inline"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="标题" name="title">
              <Input />
            </Form.Item>

            <Form.Item label="类型" name="status">
              <Select style={{ width: 120 }} allowClear>
                <Option value="published">published</Option>
                <Option value="draft">draft</Option>
              </Select>
            </Form.Item>
            <Form.Item label="推荐指数:" name="star">
              <Select style={{ width: 120 }} allowClear>
                <Option value={1}>★</Option>
                <Option value={2}>★★</Option>
                <Option value={3}>★★★</Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
              >
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <br />

      <Table 
        bordered 
        pagination={false} 
        dataSource={list}
        loading={loading}
        rowKey={rowkey}
        >
        <Column
          title="序号"
          dataIndex="id"
          key="id"
          width={200}
          align="center"
          sorter={(a, b) => a.id - b.id}
        />
        <Column
          title="标题"
          dataIndex="title"
          key="title"
          width={200}
          align="center"
        />
        <Column
          title="作者"
          dataIndex="author"
          key="author"
          width={100}
          align="center"
        />
        <Column
          title="阅读量"
          dataIndex="readings"
          key="readings"
          width={195}
          align="center"
        />
        <Column
          title="推荐指数"
          dataIndex="star"
          key="star"
          width={195}
          align="center"
        />
        <Column
          title="状态"
          dataIndex="status"
          key="status"
          width={195}
          align="center"
          render={(status) => {
            let color =
              status === "published"
                ? "green"
                : status === "deleted"
                ? "red"
                : "";
            return (
              <Tag color={color} key={status}>
                {status}
              </Tag>
            );
          }}
        />
        <Column
          title="时间"
          dataIndex="date"
          key="date"
          width={195}
          align="center"
        />
        <Column
          title="操作"
          key="action"
          width={195}
          align="center"
          render={(text, row) => (
            <span>
              <Button 
                type="primary" 
                shape="circle" 
                icon={<EditOutlined />}  
                title="编辑"
                onClick={()=>handleEdit(row)}
                />
              <Divider type="vertical" />
              <Button onClick={()=>handleDelete(row)}  type="primary" danger shape="circle" title="删除" icon={<DeleteOutlined />} />
            </span>
          )}
        />
      </Table>

      <br/>
      <Pagination
        total={total}
        pageSizeOptions={["10"]}
        defaultCurrent={1}
        current={listQuery.pageNumber}
        showTotal={(total) => `共${total}条数据`}
        showSizeChanger
        showQuickJumper
        hideOnSinglePage={true}
        onChange={changePage}
      >
      </Pagination>

      <EditForm 
        ref={EditRef} 
        handleOk={handleOk}
        />
    </div>
  );
};

export default TablePage;
