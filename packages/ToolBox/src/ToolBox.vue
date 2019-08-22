<template>
  <div class="toolbox-contaner">
    <el-row>
      <el-col :span="12" v-for="tool in tools" :key="tool.componetName">
        <drag-warper :componetName="tool.componetName" :configItem="tool.config">
          <tool-item :header="tool.name">
            <component :is="tool.componetName" :disabled="true"></component>
          </tool-item>
        </drag-warper>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tools from "./../../toollist"

export default {
  name: "ToolBox",
  data: () => {
    return {
      tools: tools
    };
  }
};
</script>

<style scoped>
.toolbox-contaner {
  text-align: left;
}
</style>