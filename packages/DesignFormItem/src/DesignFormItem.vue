<template>
  <div class="form-item">
    <el-row v-if="direction==='vertical'">
      <el-col :span="24" class="label-vertical">{{label}}</el-col>
    </el-row>
    <el-row>
      <el-col v-if="direction==='horizontal'" :span="6" class="label-horizontal">{{label}}</el-col>
      <el-col :span="direction==='horizontal'?18:24" class="control">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DesignFormItem",
  props: {
    direction: { type: String, required: true, default: "horizontal" },
    label: { type: String, required: true }
  }
};
</script>

<style scoped>
.label-vertical {
  text-align: left;
  padding-bottom: 10px;
}
.form-item {
  padding: 5px;
}
.control {
  text-align: left;
}
.label-horizontal {
  text-align: right;
  padding-right: 10px;
}
</style>