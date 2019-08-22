<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="toolbox">
          <el-row>
            <el-col :span="24">
              <div class="header">工具箱</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <ToolBox />
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="workspace">
          <el-row class="workspace-header">
            <el-col :span="12">
              <div class="toolbar">
                <el-button-group>
                  <el-button size="mini" title="新建" @click="newHandler">
                    <i class="fa fa-plus-square"></i>
                  </el-button>
                  <el-button size="mini" title="保存" @click="saveHandler('save')">
                    <i class="fa fa-save"></i>
                  </el-button>
                  <el-button size="mini" title="另存为" @click="saveHandler('saveAs')">
                    <i class="fa fa-share-square"></i>
                  </el-button>
                  <el-button icon="el-icon-delete" size="mini" title="清空工作区" @click="clearHandler"></el-button>
                  <el-button size="mini" title="预览" @click="preViewhandler">
                    <i class="fa fa-stethoscope"></i>
                  </el-button>
                </el-button-group>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="toolbar right-align">
                <el-radio-group v-model="direction" size="mini">
                  <el-radio-button title="字段名称和输入框竖向排列" label="vertical">
                    <i class="fa fa-hand-o-down"></i>
                  </el-radio-button>
                  <el-radio-button title="字段名称和输入框横向排列" label="horizontal">
                    <i class="fa fa-hand-o-right"></i>
                  </el-radio-button>
                </el-radio-group>
                <span class="clearance"></span>
                <el-radio-group v-model="columnWidth" size="mini">
                  <el-radio-button title="一列布局" :label="24">
                    <i class="fa fa-align-justify"></i>
                  </el-radio-button>
                  <el-radio-button title="两列布局" :label="12">
                    <i class="fa fa-columns"></i>
                  </el-radio-button>
                </el-radio-group>
                <span class="clearance"></span>
                <el-button
                  size="mini"
                  icon="el-icon-s-unfold"
                  title="添加行"
                  @click="addNewItemHandler"
                ></el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="workspace-body">
              <el-form label-width="80">
                <el-row>
                  <el-col v-for="item in formItems" :key="item.id" :span="columnWidth">
                    <drag-container
                      :ref="`fi_${item.id}`"
                      :id="item.id"
                      :direction="direction"
                      @delete="deleteHandler"
                      @choosed="choosedHandler"
                      @up="upHandler"
                      @down="downHandler"
                    ></drag-container>
                  </el-col>
                </el-row>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <prop-grid :configItems="currentConfigItems"></prop-grid>
      </el-col>
    </el-row>
    <el-dialog title="预览表单" :visible.sync="preViewDialogVisible" :width="'80%'">
      <auto-form :formConfig="formData" submitName="保存" @save="saveAutoForm"></auto-form>
    </el-dialog>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  name: "Designer",
  data: () => {
    return {
      direction: "horizontal", //vertical,
      columnWidth: 24,
      formItems: [],
      formItemCount: 0,
      currentConfigItems: [], //设计器对应需要配置的属性清单,
      currentDragContainer: null,
      isSaved: true,
      preViewDialogVisible: false,
      formData: {}
    };
  },
  methods: {
    deleteHandler(id) {
      //删除指定id的表单容器
      let newArray = [];
      for (let i = 0; i < this.formItems.length; i++) {
        let item = this.formItems[i];
        if (item.id === id) continue;
        newArray.push(item);
      }
      this.formItems = newArray;
    },
    //指定的表单容器被选中
    choosedHandler(dragContainer) {
      if (dragContainer === null) {
        this.currentDragContainer = null;
        this.currentConfigItems = [];
      } else {
        this.currentDragContainer = dragContainer;
        this.currentConfigItems = dragContainer.configItems || []; //获取当前选中容器对应的配置项目
      }
    },
    findId(id) {
      for (var i = 0; i < this.formItems.length; i++) {
        if (this.formItems[i].id === id) return i;
      }
      return -1;
    },
    upHandler(dragContainer) {
      var currentIndex = this.findId(dragContainer.id);
      if (currentIndex <= 0) return;
      this.formItems.splice(currentIndex - 1, 0, this.formItems[currentIndex]);
      this.formItems.splice(currentIndex + 1, 1);
    },
    downHandler(dragContainer) {
      var currentIndex = this.findId(dragContainer.id);
      if (currentIndex >= this.formItems.length) return;
      this.formItems.splice(currentIndex + 2, 0, this.formItems[currentIndex]);
      this.formItems.splice(currentIndex, 1);
    },
    //添加新行
    addNewItemHandler() {
      this.isSaved = false;
      this.formItems.push({ id: `_${this.formItemCount}` });
      this.formItemCount += 1;
    },
    reset() {
      this.formItems = [];
      this.formItemCount = 0;
      this.currentConfigItems = [];
      this.currentDragContainer = null;
    },
    newHandler() {
      if (this.isSaved) {
        this.reset();
      } else {
        MessageBox.confirm("当前操作尚未保存，确定要新建表单么？", "温馨提示", {
          type: "warning"
        }).then(this.reset);
      }
    },
    buildForm() {
      this.formData = {
        columns: this.columnWidth === 12 ? 2 : 1,
        labelStyle: this.direction,
        labelWidth: 80,
        formItems: []
      };
      let dbNameCheck = {};
      for (var i = 0; i < this.formItems.length; i++) {
        let comp = this.$refs[`fi_${this.formItems[i].id}`][0];
        var cfg = comp.getConfigData();
        if (!cfg) {
          return false;
        }
        if (cfg === "empty") continue;
        if (dbNameCheck[cfg.dbName]) {
          this.$message({
            showClose: true,
            type: "warning",
            message: `${cfg.dbName}字段出现了多次！请解决后在执行该操作！`
          });
          comp.setError();
          return false;
        } else {
          dbNameCheck[cfg.dbName] = "1";
        }
        this.formData.formItems.push(cfg);
      }
      return true;
    },
    saveHandler(saveType) {
      if (!this.buildForm()) return;
      this.$emit(saveType, this.formData);
    },
    clearHandler() {
      if (this.formItems.length === 0) {
        this.reset();
      }
      MessageBox.confirm("确定要清空工作区么？", "温馨提示", {
        type: "warning"
      }).then(this.reset);
    },
    preViewhandler() {
      if (!this.buildForm()) return;
      this.preViewDialogVisible = true;
    },
    saveAutoForm(data) {
      let json = JSON.stringify(data);
      MessageBox.alert(json, "表单数据", { type: "info" });
    }
  },
  mounted() {
    document.addEventListener("click", () => this.choosedHandler(null));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbox {
  border: solid 1px #eee;
  padding: 5px;
  border-radius: 5px;
}
.workspace {
  border: solid 1px #eee;
  margin: 0 5px;
  border-radius: 5px;
}
.props {
  border: solid 1px #eee;
  padding: 5px;
  border-radius: 5px;
}
.header {
  text-align: center;
  height: 37px;
  line-height: 37px;
  margin: -5px -5px 0 -5px;
  border-bottom: solid 1px #eee;
  background: #f3f3f3;
}
.workspace-header {
  background: #f3f3f3;
}
.toolbar {
  padding: 5px;
  text-align: left;
}
.right-align {
  text-align: right;
}
.workspace-body {
  padding: 5px;
}
.clearance {
  display: inline-block;
  width: 10px;
}
body {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
}
</style>
