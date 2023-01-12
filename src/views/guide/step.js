/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-06 10:46:51
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 10:57:44
 * @FilePath: \react-admin\src\views\guide\step.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const steps = [
  {
    element: '.ant-btn-primary',
    popover: {
      title: '打开引导',
      description: '打开页面引导',
      position: 'bottom'
    }
  },
  {
    element: '.hamburger-container',
    popover: {
      title: 'Hamburger',
      description: '打开/收起左侧导航栏',
      position: 'bottom'
    }
  },
  {
    element: '.fullscreen-container2',
    popover: {
      title: 'fullscreen',
      description: '全屏展示',
      position: 'left'
    }
  },
  {
    element: '.settings-container',
    popover: {
      title: 'Settings',
      description: '系统设置',
      position: 'left'
    }
  },
  {
		element: '.dropdown-wrap',
		popover: {
      title: 'Avatar',
      description: '弹出层',
      position: 'left'
    }
	}
]

export default steps