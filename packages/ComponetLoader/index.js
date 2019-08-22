// src/index.js
// 导入组件，组件必须声明 name
import ComponetLoader from './src/ComponetLoader'

// 为组件提供 install 安装方法，供按需引入
ComponetLoader.install = function (Vue) {
    Vue.component(ComponetLoader.name, ComponetLoader)
}
// 默认导出组件
export default ComponetLoader