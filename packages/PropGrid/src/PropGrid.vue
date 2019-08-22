<template>
  <div class="container" @click.stop="nothing">
    <el-row class="header">
      <el-col :span="24">属性编辑器</el-col>
    </el-row>
    <el-row class="body">
      <el-col :span="24">
        <el-form label-width="80">
          <el-form-item v-for="item in configItems" :key="item.field">
            <el-row>
              <el-col :span="6">{{item.label}}</el-col>
              <el-col :span="18" class="input-control">
                <el-input v-if="item.valueType==='string'" v-model="item.value" type="text"></el-input>
                <el-input-number v-if="item.valueType==='number'" v-model="item.value" type="text"></el-input-number>
                <el-switch v-if="item.valueType==='bool'" v-model="item.value"></el-switch>
                <template v-if="item.valueType==='array'">
                  <el-row>
                    <el-input v-model="item.value" type="textarea"></el-input>
                  </el-row>
                  <el-row class="notice">请采用英文逗号(",")分隔不同的选项</el-row>
                </template>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/*
configItems 元素类型 

{
          field: "btnName",
          label: "按钮名称",
          valueType: "string",
          required: true,
          value:""
        }

 */
export default {
  name: "PropGrid",
  props: {
    configItems: { type: Array, required: true }
  },
  methods: {
    nothing() {}
  }
};
</script>

<style scoped>
.container {
  padding: 5px;
  border-radius: 5px;
  border: solid 1px #eee;
}
.header {
  text-align: center;
  height: 37px;
  line-height: 37px;
  margin: -5px -5px 0 -5px;
  background: #f3f3f3;
  border-bottom: solid 1px #eee;
}
.body {
  padding-top: 10px;
}
.input-control {
  text-align: left;
}
.notice {
  height: 20px;
  line-height: 20px;
  font-style: italic;
}
</style>