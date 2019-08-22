// src/index.js
// 导入组件，组件必须声明 name
import AutoForm from './src/AutoForm'

// 为组件提供 install 安装方法，供按需引入
AutoForm.install = function (Vue) {
    Vue.component(AutoForm.name, AutoForm)
}
// 默认导出组件
export default AutoForm