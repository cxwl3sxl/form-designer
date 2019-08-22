// src/index.js
// 导入组件，组件必须声明 name
import CtRadioGroup from './src/CtRadioGroup'

// 为组件提供 install 安装方法，供按需引入
CtRadioGroup.install = function (Vue) {
    Vue.component(CtRadioGroup.name, CtRadioGroup)
}
// 默认导出组件
export default CtRadioGroup