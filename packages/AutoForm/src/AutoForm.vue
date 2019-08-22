<template>
  <el-form :label-width="`${formConfig.labelWidth}`">
    <el-row>
      <el-col v-for="item in formItems" :key="item.field" :span="formConfig.columns===1?24:12">
        <el-row :class="`${formConfig.labelStyle} ${item.hasError}`">
          <el-col :span="formConfig.labelStyle==='horizontal'?6:24">
            <div class="label">
              <span class="required" v-if="item.required">*</span>
              {{item.label}}
            </div>
          </el-col>
          <el-col class="af-control" :span="formConfig.labelStyle==='horizontal'?18:24">
            <componet-loader
              :ref="item.field"
              :component="item.component"
              :extra="item.extra"
              :regex="item.regex"
              :required="item.required"
              v-model="item.value"
            ></componet-loader>
          </el-col>
          <el-col class="af-message-label" :span="formConfig.labelStyle==='horizontal'?6:24">
            <div>&nbsp;</div>
          </el-col>
          <el-col
            class="af-message"
            :span="formConfig.labelStyle==='horizontal'?18:24"
          >{{item.errorMsg}}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="submit-row">
        <el-button type="primary" @click="submitHandler">{{submitName}}</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "AutoForm",
  data: () => {
    return {
      formItems: []
    };
  },
  props: {
    formConfig: { type: Object, required: true },
    submitName: { type: String, required: false, default: "提交" }
  },
  methods: {
    submitHandler() {
      let data = {};
      let hasError = false;
      let $this = this;
      this.formItems.forEach(element => {
        var cls = $this.$refs[element.field];
        if (cls.length === 0) {
          console.warn(`无法找到名为[${element.field}]的控件！`);
          return;
        }
        let checkResult = cls[0].check();
        if (!checkResult.pass) {
          hasError = true;
          element.hasError = "has-error";
          element.errorMsg = checkResult.message.replace("{0}", element.label);
        } else {
          element.hasError = "";
          element.errorMsg = "";
        }
        data[element.field] = element.value;
      });
      if (hasError) {
        this.$alert("当前表单有错误，请解决之后在提交！", {
          title: "温馨提示",
          type: "warning"
        });
        return;
      }
      this.$emit("save", data);
    }
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        this.formItems = [];
        for (var i = 0; i < val.formConfig.formItems.length; i++) {
          var item = val.formConfig.formItems[i];
          this.formItems.push({
            field: item.dbName,
            component: item.component,
            label: item.label,
            value: null,
            extra: item.extra,
            regex: item.regex,
            required: item.required,
            hasError: "",
            errorMsg: ""
          });
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped>
.label {
  text-align: right;
  padding: 10px 10px;
}
.el-col-18,
.el-col-24 {
  text-align: left;
}
.el-col-24 {
  margin-bottom: 10px;
}
.el-col-24 > .label {
  text-align: left;
  padding-bottom: 0px;
  margin-bottom: -8px;
}
.submit-row {
  text-align: center;
  padding-top: 40px;
}
.el-rate {
  padding-top: 10px;
}
.required {
  color: red;
  font-weight: bold;
}
.has-error {
  border: solid 1px red;
  border-radius: 5px;
  box-shadow: 0px 0px 5px red;
}
.af-message {
  font-size: 12px;
  color: red;
  display: block;
}
.af-control {
  height: 39px;
  line-height: 39px;
}
.vertical > .af-control {
  padding: 0px 5px;
}
.vertical > .af-message-label {
  display: none;
}
.vertical > .af-message {
  padding-left: 5px;
}
.vertical > .af-control {
  margin-bottom: 0px;
}
.vertical > .af-message {
  margin-bottom: 0px;
}
.horizontal > .af-message {
  margin-bottom: 10px;
}
.af-control > .cbGroup {
  line-height: 39px;
  margin-bottom: -5px;
}
.af-control > .rbGroup {
  line-height: 39px;
  margin-bottom: -5px;
}
</style>