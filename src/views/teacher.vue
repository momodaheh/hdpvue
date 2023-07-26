<template>
  <div class="all">
    <div class="top">
      <h2>班主任管理平台</h2>
      <select @change="dept_change_handler($event)">
        <option v-for="obj in deptList" :key="obj.id" :value="obj.id">
          {{ obj.title }}
        </option>
      </select>
    </div>
    <div class="middle">
      <div class="left">
      <div class="user_infor">
        <h3>我的信息</h3>
        <div class="user_infor_box">
          <div class="user_infor_item">
            <label>用户名:</label><label>{{ this.user.userName }}</label>
          </div>
          <div class="user_infor_item">
            <label>姓名:</label><label>{{ this.user.name }}</label>
          </div>
          <div class="user_infor_item">
            <label>性别:</label><label>{{ this.user.sex }}</label>
          </div>
          <div class="user_infor_item">
            <label>电话号码:</label><label>{{ this.user.phone }}</label>
          </div>
        </div>
      </div>
      <div class="sementer_list">
        <h3>阶段</h3>
        <div class="sementer_list_box">
          <ul>
            <li v-for="obj in sementerList" :key="obj.id" :class="{'sementeractive':teacher.id===obj.teacher}" @click="getTeacher(obj.teacher)">{{ obj.name }}</li>
          </ul>
        </div>
      </div>
      <div class="teacher_infor">
        <h3>教师信息</h3>
        <div class="teacher_infor_box">
          <div class="user_infor_item">
            <label>姓名:</label><label>{{ this.teacher.name }}</label>
          </div>
          <div class="user_infor_item">
            <label>性别:</label><label>{{ this.teacher.sex }}</label>
          </div>
          <div class="user_infor_item">
            <label>专业:</label><label>{{ this.teacher.major }}</label>
          </div>
          <div class="user_infor_item">
            <label>电话号码:</label><label>{{ this.teacher.phone }}</label>
          </div>
          <div class="user_infor_item">
            <label>QQ:</label><label>{{ this.teacher.qq }}</label>
          </div>
          <div class="user_infor_item">
            <label>微信:</label><label>{{ this.teacher.weChat}}</label>
          </div>
          <div class="user_infor_item">
            <label>邮箱:</label><label>{{ this.teacher.email }}</label>
          </div>
          <div class="user_infor_item">
            <label>住址:</label><label>{{ this.teacher.address}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <h3>学生列表</h3>
      <EmpList :empList="empList" class="emp"></EmpList>
    </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import EmpList from "../components/teacher/emp-list.vue"
export default {
  components: {
    EmpList:EmpList,
  },
  data() {
    return {
      user: this.$route.query.user,
      deptList: [],
      sementerList: [],
      dept: 0,
      teacher:[],
      empList:[]
    };
  },
  mounted() {
    this.GetDeptList(this.user.id);
  },
  methods: {
    GetDeptList(id) {
      axios
        .post("http://localhost:8082/vue/queryUserDeptList", { id: id })
        .then(
          (response) => {
            this.deptList = response.data.data;
            this.dept = response.data.data[0].id;
            this.GetSementerList(this.dept);
            this.getEmpList(this.dept);
          },
          (error) => {}
        );
    },

    GetSementerList(dept) {
      axios
        .get("http://localhost:8082/vue/getsementerListBydept", {
          params: { dept: dept },
        })
        .then(
          (response) => {
            this.sementerList = response.data.data;
          },
          (error) => {}
        );
    },

    dept_change_handler(event) {
      this.GetSementerList(event.target.value);
    },

    getTeacher(id){
      axios
        .get("http://localhost:8082/vue/getteacher", {
          params: { id: id },
        })
        .then(
          (response) => {
            this.teacher = response.data.data;
          },
          (error) => {}
        );
    },

    getEmpList(dept){
      axios
        .get("http://localhost:8082/vue/getEmpList", {
          params: { dept: dept },
        })
        .then(
          (response) => {
            this.empList = response.data.data;
          },
          (error) => {}
        );
    }
  },
};
</script>

<style scoped>
.all {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  background-color: #ecf6ed;
  position: absolute;
  
}
.top {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #6be8ee, #7ece41);
  color: #fff;
  display: flex;
  align-items: center;
}
.top h2 {
  margin-left: 30px;
}
.top select {
  font-size: 20px;
  margin-left: 30px;
}
.middle{
  display: flex;
  flex-direction: row;
}
.left{
  width: 230px;
  height: 100%;
}
.user_infor {
  
  margin-left: 5px;
}
.user_infor_box {
  width: 220px;
  height: 140px;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  background-color: #fff;
  border-radius: 10%;
}
.user_infor_item {
  display: flex;
  margin: 2px;
  
}
.user_infor_item label{
  flex-wrap: wrap;
}
.user_infor_item label:first-child{
  
  text-align:right;
  width: 70px;
}
.sementer_list{
  margin-left: 5px;
}
.sementer_list_box {
  width: 220px;
  height: 150px;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.sementer_list_box li {
  list-style: none;
  width: 150px;
  height: 25px;
  margin: 10px;
  background-color: #7ece41;
  text-align: center;
  border-radius: 10px;
}
.sementer_list_box li.sementeractive{
  background-color: #07670f;
}
.teacher_infor{
  margin-left:5px;
}
.teacher_infor_box{
  width: 220px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding-top:10px;
  background-color: #fff;
  border-radius: 10%;
}
.center{
  margin-left:10px;
  height: 580px;
}

</style>