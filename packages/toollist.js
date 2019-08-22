//该文件用于注册所有的工具
const tools = [
    {
        name: "普通输入框",
        componetName: "ElInput",
        config: []
    },
    {
        name: "数字输入框",
        componetName: "ElInputNumber",
        config: [{
            field: "max",
            label: "最大值",
            valueType: "number",
            required: true,
            value: "999"
        },
        {
            field: "min",
            label: "最小值",
            valueType: "number",
            required: true,
            value: "0"
        }]
    },
    {
        name: "评分组件",
        componetName: "ElRate",
        config: []
    },
    {
        name: "多选组件",
        componetName: "CtCheckboxGroup",
        config: [{
            field: "items",
            label: "选项列表",
            valueType: "array",
            required: true,
            value: ""
        }]
    },
    {
        name: "单选组件",
        componetName: "CtRadioGroup",
        config: [{
            field: "items",
            label: "选项列表",
            valueType: "array",
            required: true,
            value: ""
        }]
    },
    {
        name: "开关组件",
        componetName: "ElSwitch",
        config: []
    }
];
export default tools;