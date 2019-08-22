<template>
  <component ref="instance" :is="component" v-model="innerValue" v-bind="extra"></component>
</template>

<script>
import Vue from "vue";
export default {
  name: "ComponetLoader",
  data: () => {
    return {
      innerValue: ""
    };
  },
  props: {
    component: { type: String, required: true }, //组件名称
    value: { required: true },
    extra: { type: Object, required: false }, //当前控件的扩展属性
    regex: { type: String, required: false }, //值的验证表达式
    required: { type: Boolean, required: false } //是否必填
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        this.innerValue = val.value;
      },
      deep: true,
      immediate: true
    },
    innerValue(val, oldVal) {
      this.$emit("input", val);
    }
  },
  methods: {
    check() {
      let returnValue = {
        pass: true,
        message: ""
      };
      if (this.regex) {
        let regex = new RegExp(this.regex, "ig");
        returnValue.pass = regex.test(this.innerValue);
        returnValue.message = "{0}的值不符合规则";
        return returnValue;
      }
      if (!this.required) return returnValue;
      returnValue.pass = false;
      returnValue.message = "{0}的值必填";
      if (this.innerValue === null) return returnValue;
      returnValue.pass = `${this.innerValue}`.length !== 0;
      return returnValue;
    }
  }
};
</script>