<template>
  <div class="all">
    <div>
      <LoginView whoLogin="admin" title="管理员登录"></LoginView>
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
</style>