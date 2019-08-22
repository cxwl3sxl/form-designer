// src/index.js
// 导入组件，组件必须声明 name
import PropGrid from './src/PropGrid'

// 为组件提供 install 安装方法，供按需引入
PropGrid.install = function (Vue) {
    Vue.component(PropGrid.name, PropGrid)
}
// 默认导出组件
export default PropGrid