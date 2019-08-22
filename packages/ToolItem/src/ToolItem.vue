<template>
  <div class="container">
    <div class="header">{{header}}</div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolItem",
  props: {
    header: { type: String, required: true, default: "工具名称" }
  }
};
</script>

<style scoped>
.container {
  margin: 5px 5px 0px 5px;
  border: 1px #8096a5 dashed;
  border-radius: 5px;
}
.header {
  text-align: center;
  padding: 5px;
}
.body {
  padding: 10px 2px;
  text-align: center;
  height: 40px;
  vertical-align: middle;
  line-height: 40px;
}
.container > .body > .el-input-number {
  width: auto;
}
</style>