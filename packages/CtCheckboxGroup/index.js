// src/index.js
// 导入组件，组件必须声明 name
import CtCheckboxGroup from './src/CtCheckboxGroup'

// 为组件提供 install 安装方法，供按需引入
CtCheckboxGroup.install = function (Vue) {
    Vue.component(CtCheckboxGroup.name, CtCheckboxGroup)
}
// 默认导出组件
export default CtCheckboxGroup