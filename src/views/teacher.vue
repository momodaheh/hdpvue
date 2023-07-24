<template>
  <div class="content">
    <ul>
      <li
        v-for="(obj, index) of deptList"
        :key="index"
      >
        {{ obj.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      teacher: this.$route.query.teacher,
      deptList: [],
    };
  },
  mounted() {
    this.GetDeptList(this.teacher.id);
  },
  methods: {
    GetDeptList(id) {
      axios
        .post("http://localhost:8082/vue/queryUserDeptList", { id: id })
        .then(
          (response) => {
            this.deptList = response.data.data;
          },
          (error) => {}
        );
    },
  },
};
</script>

<style scoped>
</style>