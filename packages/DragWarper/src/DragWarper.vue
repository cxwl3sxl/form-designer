<template>
  <div draggable="true" @dragstart="dragstartHandler">
    <slot></slot>
  </div>
</template>

<script>
import dragHelper from "./../../DragHelper";
export default {
  name: "DragWarper",
  props: {
    componetName: { type: String, required: true }, //当前包裹对象的componet name
    configItem: { type: Array, required: true } //当前可拖拽控件绑定的可配置的项目
  },
  methods: {
    dragstartHandler(e) {
      let name = `_${Math.random()}`; //生成随机的拖拽控件编号
      dragHelper.set(name, this); //缓存当前被拖拽的包裹对象
      e.dataTransfer.setData("CurrentDragWarper", name); //专递给拖拽接收方，当前被拖拽的对象编号
    },
    getConfigItems() {
      //获取当前可拖拽组件支持的配置项目
      return this.configItem;
    }
  }
};
</script>