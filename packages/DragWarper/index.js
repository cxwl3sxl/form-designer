// src/index.js
// 导入组件，组件必须声明 name
import DragWarper from './src/DragWarper'

// 为组件提供 install 安装方法，供按需引入
DragWarper.install = function (Vue) {
    Vue.component(DragWarper.name, DragWarper)
}
// 默认导出组件
export default DragWarper