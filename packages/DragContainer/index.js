// src/index.js
// 导入组件，组件必须声明 name
import DragContainer from './src/DragContainer'

// 为组件提供 install 安装方法，供按需引入
DragContainer.install = function (Vue) {
    Vue.component(DragContainer.name, DragContainer)
}
// 默认导出组件
export default DragContainer