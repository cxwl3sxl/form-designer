// 导入组件
import Designer from './Designer'
import ToolBox from './ToolBox'
import DragWarper from './DragWarper'
import DragContainer from './DragContainer'
import PropGrid from './PropGrid'
import ToolItem from './ToolItem'
import DesignFormItem from './DesignFormItem'
import AutoForm from './AutoForm'
import ComponetLoader from './ComponetLoader'
import CtCheckboxGroup from './CtCheckboxGroup'
import CtRadioGroup from './CtRadioGroup'

// 存储组件列表
const components = [
    Designer,
    ToolBox,
    DragContainer,
    PropGrid,
    ToolItem,
    DesignFormItem,
    AutoForm,
    ComponetLoader,
    CtCheckboxGroup,
    CtRadioGroup,
    DragWarper
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: "1.0",
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    Designer,
    ToolBox,
    DragContainer,
    PropGrid,
    ToolItem,
    DesignFormItem,
    AutoForm,
    ComponetLoader,
    CtCheckboxGroup,
    CtRadioGroup,
    DragWarper
}