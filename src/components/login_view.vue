<template>
  <div class="login_all">
    <h1>{{ title }}</h1>
    <hr/>
    <div class="login_box">
      
      <div class="item">
        <input
          type="text" v-model="userName"
          placeholder="请输入账号"/>
      </div>
      <div class="item">
        <input
          type="password" v-model="password"
          placeholder="请输入密码" />
      </div>
      <div class="item">
        <button type="button" class="btn_styles" v-on:click="getClickAction">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["whoLogin", "title"],
  data() {
    return {
      userName: "",
      password: "",
      dept:"",
      deptList:[]
    };
  },
  computed: {
    getClickAction() {
      if (this.whoLogin === "admin") {
        return this.adminLogin;
      } else if (this.whoLogin === "emp") {
        return this.empLogin;
      }
      // 如果whoLogin没有匹配的值，可以返回一个默认方法或留空
      return null;
    },
  },
  methods: {
     adminLogin() {
      let u = this.userName;
      let p = this.password;
       this.request
        .post("/vue/adminlogin", { userName: u, password: p })
        .then(
          (response) => {
            if (response.data.code === 0) {
              if (response.data.data.category === 1) {
                this.$router.push("/main");
              } else if (response.data.data.category === 2) {
                this.$router.push({
                  path:'/teacher',
                  query:{
                    user:response.data.data,
                  }
                });
              } else {}
            } else {
              alert("用户名密码错误！！！");
              this.userName = "";
              this.password = "";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },

    empLogin() {
      let u = this.userName;
      let p = this.password;
      this.request
        .post("/vue/login", { userName: u, password: p })
        .then(
          (response) => {
            if (response.data.code === 0) {
              this.$router.push("/emp");
            } else {
              alert("用户名密码错误！！！");
              this.userName = "";
              this.password = "";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    
  },
};
</script>

<style scoped>

.login_all{
  display: flex;
  width: 300px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

}
.login_all h1{
  
  color:#8e509a
}
.login_all hr{
  width: 280px;
  color: #f2f2f2;
  margin-top: 20px;
}
.login_box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 200px;
}
.item {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.item input {
  height: 30px;
  width: 80%;
}
.item button {
  width: 75%;
  height: 30px;
  border-radius: 5px;
  background-color: #fd4956;
}
</style>