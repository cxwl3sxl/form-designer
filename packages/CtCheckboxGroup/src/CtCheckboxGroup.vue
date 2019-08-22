<template>
  <div class="cbGroup">
    <el-checkbox-group v-model="innerChoosed" :min="0" :max="99999">
      <el-checkbox
        v-for="item in innerItems"
        :label="item"
        :key="item"
        :disabled="disabled"
      >{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: "CtCheckboxGroup",
  data: () => {
    return {
      innerItems: ["选项一"],
      innerDisabled: false,
      innerChoosed: []
    };
  },
  props: {
    items: { type: String, required: false }, //可选的选项列表, 采用","分隔
    value: { type: String, required: false }, //当前选中的选项，采用","分隔
    disabled: { type: Boolean, required: false, default: false }
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        if (val.items) {
          let items = val.items.split(",");
          this.innerItems = [];
          items.forEach(element => {
            this.innerItems.push(element);
          });
        }
      },
      immediate: true,
      deep: true
    },
    innerChoosed: {
      handler(val, oldVal) {
        this.$emit("input", val.join(","));
      }
    }
  }
};
</script>