<template>
  <div class="dragable" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler">
    <div
      :class="`dragable-border ${errorCss}`"
      @drop="dropHandler"
      @dragover="dragoverHandler"
      @click.stop="choosed"
    >
      <design-form-item :label="label" :direction="direction">
        <!-- <div ref="containerBody"></div> -->
        <component :is="componetName" ref="instance"></component>
      </design-form-item>
    </div>
    <div :class="`right-btn-group ${removeBtnCss}`">
      <span @click="upHandler">
        <i class="fa fa-arrow-up i-btn-icon" title="向上"></i>
      </span>
      <span class="remove-btn" @click="deleteHandler">
        <i class="fa fa-trash i-btn-icon" title="移除"></i>
      </span>
      <span @click="downHandler">
        <i class="fa fa-arrow-down i-btn-icon" title="向下"></i>
      </span>
    </div>
  </div>
</template>

<script>
import dragHelper from "./../../DragHelper";
import Vue from "vue";

export default {
  name: "DragContainer",
  data: () => {
    return {
      errorCss: "",
      removeBtnCss: "hide",
      componetName: "",
      configItems: []
      //componetInstance: null //当前被包裹对象的实例
    };
  },
  computed: {
    label() {
      for (var i = 0; i < this.configItems.length; i++) {
        var item = this.configItems[i];
        if (item.field === "_label") return item.value;
      }
      return "表单名称";
    }
  },
  props: {
    id: { type: String, required: true },
    direction: { type: String, required: true, default: "horizontal" }
  },
  methods: {
    dropHandler(e) {
      //if (this.componetInstance !== null) {
      if (this.componetName.length !== 0) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "当前空间已经有另外一个组件，不能在添加其他组件！"
        });
        return;
      }
      let dragWarperId = e.dataTransfer.getData("CurrentDragWarper"); //获取当前拖拽的包裹对象编号
      let dragWarper = dragHelper.get(dragWarperId); //从中转中获取当前对应的拖拽对象
      dragHelper.remove(dragWarperId); //移除临时数据
      if (!dragWarper) {
        console.warn("无法获取当前被拖拽对象的信息！");
        return;
      }
      this.componetName = dragWarper.componetName; //获取当前被拖拽对象包裹的componet name
      let custConfigItems = dragWarper.getConfigItems();
      this.configItems = [
        {
          field: "_label",
          label: "表单名称",
          valueType: "string",
          required: true,
          value: "表单名称"
        },
        {
          field: "_dbName",
          label: "字段名称",
          valueType: "string",
          required: true,
          value: ""
        },
        {
          field: "_isRequired",
          label: "是否必填",
          valueType: "bool",
          required: true,
          value: false
        },
        {
          field: "_checkRegex",
          label: "正则验证",
          valueType: "string",
          required: false,
          value: ""
        }
      ].concat(custConfigItems); //获取当前被拖拽对象包裹的componet支持的配置项
      // let componetConstructor = Vue.component(this.componetName); //获取指定componet name的构造函数
      // this.componetInstance = new componetConstructor(); //创建被包裹对象的实例
      // this.componetInstance.$mount(this.$refs.containerBody); //挂载到当前拖拽容器的body中
      e.preventDefault();
    },
    dragoverHandler(e) {
      e.preventDefault();
    },
    mouseenterHandler(e) {
      this.removeBtnCss = "";
    },
    mouseleaveHandler(e) {
      this.removeBtnCss = "hide";
    },
    deleteHandler() {
      this.$emit("delete", this.id);
    },
    choosed(event) {
      this.errorCss = "";
      this.$emit("choosed", this);
    },
    setError() {
      this.errorCss = "highlight";
    },
    upHandler() {
      this.$emit("up", this);
      this.removeBtnCss = "hide";
    },
    downHandler() {
      this.$emit("down", this);
      this.removeBtnCss = "hide";
    },
    getConfigData() {
      if (this.configItems.length === 0) return "empty";
      let data = {
        label: "",
        dbName: "",
        component: this.componetName,
        extra: {}
      };
      for (var i = 0; i < this.configItems.length; i++) {
        let item = this.configItems[i];

        if (item.required) {
          if (item.valueType === "number" && !item.value) {
            if (item.value === 0 || item.value === "0") {
            } else {
              this.errorCss = "highlight";
              this.$message({
                showClose: true,
                type: "warning",
                message: `[${item.label}]值不能为空，当前值为：${item.value}`
              });
              return; //数字验证不通过
            }
          } else if (item.valueType === "string" && !item.value) {
            this.errorCss = "highlight";
            this.$message({
              showClose: true,
              type: "warning",
              message: `[${item.label}]值不能为空，当前值为：${item.value}`
            });
            return; //字符串验证不生效
          }
        }
        switch (item.field) {
          case "_label":
            data.label = item.value;
            break;
          case "_dbName":
            data.dbName = item.value;
            break;
          case "_checkRegex":
            data.regex = item.value;
            break;
          case "_isRequired":
            data.required = item.value;
            break;
          default:
            data.extra[item.field] = item.value;
            break;
        }
      }
      return data;
    }
  },
  watch: {
    configItems: {
      handler(val, oldVal) {
        if (!val instanceof Array) return;
        var componetInstance = this.$refs.instance;
        if (!componetInstance) return;
        val.forEach(ele => {
          componetInstance[ele.field] = ele.value;
          /** TODO: 此处可能会报错
          Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "items"
          的错误，但不影响使用，暂时不解决
          */
        });
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style scoped>
.dragable {
  min-height: 65px;
  margin-bottom: 4px;
  padding: 0 2px;
  position: relative;
}
.dragable-border {
  border: dashed 1px royalblue;
  min-height: 90px;
}
.remove-btn {
  width: 20px;
  height: 20px;
  color: red;
}
.hide {
  display: none;
}
.i-btn-icon {
  left: 4px;
  top: 4px;
}
.highlight {
  animation: red-shadow 1s infinite;
  animation-direction: alternate;
}
.right-btn-group {
  position: absolute;
  right: 5px;
  width: 18px;
  top: 2%;
  padding: 5px 0;
  background: #fff;
}

@keyframes red-shadow {
  from {
    box-shadow: red 0px 0px 0px;
  }
  to {
    box-shadow: red 0px 0px 5px;
  }
}
</style>