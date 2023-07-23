<template>
<div>
    <router-link :to="{name:'user_mgt'}">Go toUser</router-link>
    <router-link :to="{name:'emp_mgt'}">Go toEmp</router-link>
    <router-view></router-view>

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

</style>