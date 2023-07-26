<template>
  <div class="emp_list_box">
    <el-table :data="empList"   height="580px" :highlight-current-row=true :header-cell-style="{textAlign: 'center', color:'#000'}" :cell-style="{color:'#000'}">
      <el-table-column type="index" label="#" width="20"> </el-table-column>
      <el-table-column type="isSigned" label="#" width="20" v-if="false"> </el-table-column>
      <el-table-column prop="id" label="id" width="20" v-if="false"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="50"> </el-table-column>
      <el-table-column prop="userName" label="用户名" width="100"></el-table-column>
      <el-table-column prop="major" label="专业" width="100"> </el-table-column>
      <el-table-column  label="操作" >
         <template slot-scope="scope">
          <el-button size="small" type="info"  round>详情</el-button>
          <el-button size="small" type="success"  @click="btn_sign_click(scope.row.id,1)" :disabled="scope.row.isSigned" round>签到</el-button>
          <el-button size="small" type="primary" :disabled="scope.row.isSigned" round>事假</el-button>
          <el-button size="small" type="warning" :disabled="scope.row.isSigned" round>病假</el-button>
          <el-button size="small" type="info" :disabled="scope.row.isSigned" round>记录</el-button>
          <el-button size="small" type="warning" :disabled="scope.row.isSigned" round>迟到</el-button>
          <el-button size="small" type="danger" :disabled="scope.row.isSigned" round>旷课</el-button>
         </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["empList"],
  data() {
    return {};
  },
  methods:{
    btn_sign_click(empId,sign){
      this.$emit("record_emp_click",empId,sign)
    }
  }
};
</script>

<style>
.emp_list_box {
  background: #fff;
  width: 800px;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
}
.el-button+.el-button{
  margin-left:2px;
}
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td {
    
    background-color: #93cefb!important;
}

</style>