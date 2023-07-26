<template>
  <div class="emp_list_box">
    <el-table :data="empList"   height="580px" highlight-current-row=true :header-cell-style="{textAlign: 'center', color:'#000'}" :cell-style="{color:'#000'}">
      <el-table-column type="index" label="#" width="20"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="50"> </el-table-column>
      <el-table-column prop="userName" label="用户名" width="100"></el-table-column>
      <el-table-column prop="major" label="专业" width="100"> </el-table-column>
      <el-table-column  label="操作" >
          <el-button size="small" type="info" round>详情</el-button>
          <el-button size="small" type="success" round>签到</el-button>
          <el-button size="small" type="primary" round>事假</el-button>
          <el-button size="small" type="warning" round>病假</el-button>
          <el-button size="small" type="info" round>记录</el-button>
          <el-button size="small" type="warning" round>迟到</el-button>
          <el-button size="small" type="danger" round>旷课</el-button>
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
};
</script>

<style>
.emp_list_box {
  background: #fff;
  width: 800px;
  height: 100%;
  padding: 10px;
}
.el-button+.el-button{
  margin-left:0px;
}
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td {
    
    background-color: #93cefb!important;
}

</style>