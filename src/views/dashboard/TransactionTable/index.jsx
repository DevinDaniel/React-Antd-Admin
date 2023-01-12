/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-05 17:29:01
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 09:25:35
 * @FilePath: \react-admin\src\views\dashboard\TransactionTable\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { transactionList } from "@/api/remoteSearch";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Order_No",
    dataIndex: "order_no",
    key: "order_no",
    width: 200,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 195,
    render: text => (`$${text}`),
  },
  {
    title: "Status",
    key: "tag",
    dataIndex: "tag",
    width: 100,
    render: (tag) => (
      <Tag color={tag === "pending" ? "magenta" : "green"} key={tag}>
        {tag}
      </Tag>
    ),
  },
];
const TransactionTable = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    transactionList().then((res) => {
      const list = res.data.data.items.slice(0, 13);
      setList(list);
    });
  }, []);
  return (
    <Table columns={columns} dataSource={list} pagination={false} />
  );
};

export default TransactionTable;
