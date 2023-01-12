/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 15:46:04
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 15:47:20
 * @FilePath: \react-admin\src\mock\table.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";
let List = [];
const count = 100;

for (let i = 0; i < count; i++) {
	List.push(
		Mock.mock({
			id: i,
			title: "@ctitle(5, 10)",
			author: "@cname",
			readings: "@integer(300, 5000)",
			"star|1-3": "★",
			"status|1": ["published", "draft"],
			date: "@datetime",
		})
	);
}

const table = {
	tableList: (config) => {
		const { pageNumber, pageSize, title, status, star } = JSON.parse(
			config.body
		);
		let start = (pageNumber - 1) * pageSize;
		let end = pageNumber * pageSize;
		let mockList = List.filter((item) => {
			if (star && item.star.length !== star) return false;
			if (status && item.status !== status) return false;
			if (title && item.title.indexOf(title) < 0) return false;
			return true;
		});
		let pageList = mockList.slice(start, end);
		return {
			code: 20000,
			data: {
				total: mockList.length,
				items: pageList,
			},
		};
	},
	deleteItem: (config) => {
		const { id } = JSON.parse(config.body);
		const item = List.filter((item) => item.id === id);
		const index = List.indexOf(item[0]);
		List.splice(index, 1);
		return {
			code: 20000,
		};
	},
	editItem: (config) => {
		const data = JSON.parse(config.body);
		const { id } = data;
		const item = List.filter((item) => item.id === id);
		const index = List.indexOf(item[0]);
		List.splice(index, 1, data);
		return {
			code: 20000,
		};
	},
};
export default table
