/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 14:30:53
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 12:48:45
 * @FilePath: \react-admin\src\config\routeMap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-03 14:30:53
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-06 09:54:07
 * @FilePath: \react-admin\src\config\routeMap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import Dashboard from '@/views/dashboard'
// import Doc from '@/views/doc'
// import Guide from '@/views/guide'
// import Explanation from '@/views/permission'
// import AdminPage from '@/views/permission/adminPage'
// import EditorPage from '@/views/permission/editorPage'
// import GuestPage from '@/views/permission/guestPage'
// import RichTextEditor from '@/views/components-demo/richTextEditor'
// import Markdown from '@/views/components-demo/Markdown'
// import StackedAreaChart from '@/views/charts/StackedAreaChart'
// import BubbleChart from '@/views/charts/bubbleChart'
// import MixChart from '@/views/charts/mixChart'
// import Menu1_1 from '@/views/nested/menu1/menu1-1'
// import Menu1_2_1 from '@/views/nested/menu1/menu1-2/menu1-2-1'
// import TablePage from '@/views/table'
// import ExportExcel from '@/views/excel/exportExcel'
// import UploadExcel from '@/views/excel/uploadExcel'
// import Zip from '@/views/zip'
// import Clipboard from '@/views/clipboard'
// import User from '@/views/user'
// import About from '@/views/about'
// import NotFound from '@/views/error/404'
import Loadable from '@/utils/loadable'
const Dashboard = Loadable(() => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'));
const Doc = Loadable(() => import(/*webpackChunkName:'Doc'*/'@/views/doc'));
const Guide = Loadable(() => import(/*webpackChunkName:'Guide'*/'@/views/guide'));
const Explanation = Loadable(() => import(/*webpackChunkName:'Explanation'*/'@/views/permission'));
const AdminPage = Loadable(() => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'));
const GuestPage = Loadable(() => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'));
const EditorPage = Loadable(() => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'));
const RichTextEditor = Loadable(() => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'));
const Markdown = Loadable(() => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'));
const StackedAreaChart = Loadable(() => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/StackedAreaChart'));
const BubbleChart = Loadable(() => import(/*webpackChunkName:'LineChart'*/'@/views/charts/bubbleChart'));
const MixChart = Loadable(() => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'));
const Menu1_1 = Loadable(() => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'));
const Menu1_2_1 = Loadable(() => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'));
const TablePage = Loadable(() => import(/*webpackChunkName:'Table'*/'@/views/table'));
const ExportExcel = Loadable(() => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'));
const UploadExcel = Loadable(() => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'));
const Zip = Loadable(() => import(/*webpackChunkName:'Zip'*/'@/views/zip'));
const Clipboard = Loadable(() => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'));
const NotFound = Loadable(() => import(/*webpackChunkName:'Error404'*/'@/views/error/404'));
const User = Loadable(() => import(/*webpackChunkName:'User'*/'@/views/user'));
const About = Loadable(() => import(/*webpackChunkName:'About'*/'@/views/about'));

let routeMap = [
	{ path: "/dashboard", component: Dashboard, roles: ["admin", "editor", "guest"] },
	{ path: "/doc", component: Doc, roles: ["admin", "editor", "guest"] },
	{ path: "/guide", component: Guide, roles: ["admin", "editor"] },
	// 组件
	{ path: "/permission/explanation", component: Explanation, roles: ["admin"] },
	{ path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
	{ path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
	{ path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
	{ path: "/components/richTextEditor", component: RichTextEditor, roles: ["admin", "editor"] },
	{ path: "/components/Markdown", component: Markdown, roles: ["admin", "editor"] },
	{ path: "/charts/keyboard", component: StackedAreaChart, roles: ["admin", "editor"] },
	{ path: "/charts/line", component: BubbleChart, roles: ["admin", "editor"] },
	{ path: "/charts/mix-chart", component: MixChart, roles: ["admin", "editor"] },
	{ path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin", "editor"] },
	{ path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin", "editor", "guest"] },
	{ path: "/table", component: TablePage, roles: ["admin", "editor"] },
	{ path: "/excel/export", component: ExportExcel, roles: ["admin", "editor"] },
	{ path: "/excel/upload", component: UploadExcel, roles: ["admin", "editor"] },
	{ path: "/zip", component: Zip, roles: ["admin", "editor"] },
	{ path: "/clipboard", component: Clipboard, roles: ["admin", "editor"] },
	{ path: "/user", component: User, roles: ["admin"] },
	{ path: "/about", component: About, roles: ["admin", "editor", "guest"] },
	{ path: "/error/404", component: NotFound },
]

export default routeMap
