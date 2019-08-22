<template>
  <div id="app">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="设计" name="design">
        <designer @save="saveHandler" @saveAs="saveAsHandler"></designer>
      </el-tab-pane>
      <el-tab-pane label="查看" name="view">
        <auto-form :formConfig="formData" submitName="保存" @save="saveAutoForm"></auto-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  name: "app",
  data: () => {
    return {
      activeName: "design",
      formData: {}
    };
  },
  methods: {
    saveHandler(data) {
      console.log("save");
      console.log(data);
      this.formData = data;
      MessageBox.alert("保存成功，可以点击查看预览当前表单", "温馨提示", {
        type: "info"
      });
    },
    saveAsHandler(data) {
      console.log("save as");
      console.log(data);
      this.formData = data;
      MessageBox.alert("保存成功，可以点击查看预览当前表单", "温馨提示", {
        type: "info"
      });
    },
    saveAutoForm(data) {
      let json = JSON.stringify(data);
      MessageBox.alert(json, "表单数据", { type: "info" });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
