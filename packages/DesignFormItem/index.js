// src/index.js
// 导入组件，组件必须声明 name
import DesignFormItem from './src/DesignFormItem'

// 为组件提供 install 安装方法，供按需引入
DesignFormItem.install = function (Vue) {
    Vue.component(DesignFormItem.name, DesignFormItem)
}
// 默认导出组件
export default DesignFormItem