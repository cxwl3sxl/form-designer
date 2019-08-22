// src/index.js
// 导入组件，组件必须声明 name
import Designer from './src/Designer'

// 为组件提供 install 安装方法，供按需引入
Designer.install = function (Vue) {
    Vue.component(Designer.name, Designer)
}
// 默认导出组件
export default Designer