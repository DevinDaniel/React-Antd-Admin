/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-09 17:36:59
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 11:35:27
 * @FilePath: \react-admin\src\views\excel\exportExcel\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState,useEffect } from "react";
import {
  Collapse,
  Form,
  Input,
  Button,
  Radio,
  Table,
  Tag,
  message,
	Select
} from "antd";
import { FileOutlined, FileZipOutlined } from "@ant-design/icons";
import { excelList } from "@/api/excel";
const { Panel } = Collapse;


const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: 200,
    align: "center",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 200,
    align: "center",
  },
  {
    title: "Author",
    key: "author",
    dataIndex: "author",
    width: 100,
    align: "center",
    render: (author) => <Tag key={author}>{author}</Tag>,
  },
  {
    title: "Readings",
    dataIndex: "readings",
    key: "readings",
    width: 195,
    align: "center",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 195,
    align: "center",
  },
];
const ExportExcel = () => {
  const [list, setList] = useState([])
	const [filename, setFilename] = useState('file')
	const [selectedRows,setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [downloadLoading, setdownloadLoading] = useState(false)
  const [autoWidth,setAutoWidth] = useState(true)
  const [bookType, setBookType] = useState("xlsx")

  const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			setSelectedRows(selectedRows)
			setSelectedRowKeys(selectedRowKeys)
		},
		getCheckboxProps: (record) => ({
			name: record.name,
		}),
		selectedRowKeys
	};
  const formatJson =(filterVal, jsonData)=> {
    return jsonData.map((v) => filterVal.map((j) => v[j]));
  }
  const handleDownload = (type) => {
		if(type === 'selected' && selectedRowKeys.length === 0){
			message.error('至少选择一项进行导出')
			return 
		}
		setdownloadLoading(true)
		import('@/lib/Export2Excel').then((excel)=>{
			const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
      const filterVal = ["id", "title", "author", "readings", "date"];
      const listExcel = type === "all" ? list : selectedRows;
      const data = formatJson(filterVal, listExcel);
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename,
        autoWidth,
        bookType,
      });
		})
		setdownloadLoading(false)
		setSelectedRowKeys([])
	}
	const bookTypeChange = (e) => {
    setBookType(e)
	}
	const autoWidthChange = (e) => {
    setAutoWidth(e.target.value)
	}
  const filenameChange = (e) => {
    setFilename(e.target.value);
  };

  useEffect(()=>{
		excelList().then(res=>{
			setList(res.data.data.items)
		})
	},[])
  return (
    <div className="app-container">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="导出选项" key="1">
          <Form layout="inline">
            <Form.Item label="文件名">
              <Input
                placeholder="请输入文件名(默认excel-file)"
                prefix={<FileOutlined />}
                style={{ width: 250 }}
                onChange={filenameChange}
              />
            </Form.Item>
            <Form.Item label="单元格宽度是否自适应:">
              <Radio.Group  onChange={autoWidthChange} defaultValue={true}>
									<Radio value={true}>是</Radio>
                  <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
						<Form.Item label="文件类型:">
                <Select
                  defaultValue="xlsx"
                  style={{ width: 120 }}
                  onChange={bookTypeChange}
                >
                  <Select.Option value="xlsx">xlsx</Select.Option>
                  <Select.Option value="csv">csv</Select.Option>
                  <Select.Option value="txt">txt</Select.Option>
                </Select>
              </Form.Item>
            <Form.Item>
              <Button 
                onClick={()=>handleDownload('all')}
                type="primary" 
                icon={<FileZipOutlined />}>
                全部导出
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={()=>handleDownload('selected')}
                type="primary" 
                icon={<FileZipOutlined />}>
                导出已选择项
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <br/>
			<Table
				bordered
        columns={columns}
        dataSource={list}
				rowKey={(record)=> record.id}
				pagination={false}
				loading={downloadLoading}
				rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />
    </div>
  );
};

export default ExportExcel;
