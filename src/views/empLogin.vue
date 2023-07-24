<template>
  <div class="all">
    
      <div class="main">
        <LoginView whoLogin="emp" title="HELLO!" class="login_box"></LoginView>
        <div class="right"></div>
      </div>

  </div>
</template>

<script>
import Login_view from "@/components/login_view.vue";
export default {
  components: {
    LoginView: Login_view,
  },
};
</script>
  
<style scoped>
.all {
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/img/login_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.main{
  display: flex;
  height: 500px;
  width: 1000px;
  flex-direction: row;
  border-radius: 30px;
}

.login_box{
  border-radius: 30px 0px 0px 30px;
  height: 500px;
}
.right{
  background-image: url("../assets/img/login_right.jpg");
  width: 700px;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius:0px 30px 30px 0px;
}
</style>