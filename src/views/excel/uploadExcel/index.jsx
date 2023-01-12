/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-09 17:37:04
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-10 10:55:14
 * @FilePath: \react-admin\src\views\excel\uploadExcel\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEU
 */
import React,{useState} from 'react';
import UploadExcelComponent from '@/components/UploadExcel';
import { Table } from "antd";
const UploadExcel = () => {
	const [tableData, setTableData] = useState([])
	const [tableHeader, setTableHeader] = useState([])

	const handleSuccess = ({ results, header }) => {
		// console.log('results',results,'header',header)
    setTableData(results)
		setTableHeader(header)
  };
	const remove = () => {
		setTableData([])
		setTableHeader([])
	}
	return (
		<div className="app-container"> 
			<UploadExcelComponent uploadSuccess={handleSuccess} remove={remove} />
			<br />
        <Table
          bordered
          columns={tableHeader.map((item) => ({
            title: item,
            dataIndex: item,
            key: item,
            width: 195,
            align: "center",
          }))}
					rowKey={(record)=> record.__rowNum__}
          dataSource={tableData}
        />
		</div>
	);
};

export default UploadExcel;