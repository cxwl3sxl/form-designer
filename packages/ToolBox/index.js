// src/index.js
// 导入组件，组件必须声明 name
import ToolBox from './src/ToolBox'

// 为组件提供 install 安装方法，供按需引入
ToolBox.install = function (Vue) {
    Vue.component(ToolBox.name, ToolBox)
}
// 默认导出组件
export default ToolBox